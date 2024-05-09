import { Component, Input, OnInit, inject } from '@angular/core';
import { JobService } from '../../services/job.service';
import { BaseJob } from '../../interfaces/BaseJob';
import { CommonModule } from '@angular/common';
import { FavoriteJobsService } from '../../services/favorite-jobs.service';
import { RouterModule, Router } from '@angular/router';
import { EMPTY, catchError, map } from 'rxjs';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css',
})
export class JobComponent implements OnInit {
  protected readonly favoriteJobsService = inject(FavoriteJobsService);
  protected readonly job = inject(JobService);
  private readonly router = inject(Router);

  @Input() allJobs: BaseJob[] = [];
  @Input() showStar: boolean = true;

  ngOnInit(): void {
    const favorites = this.favoriteJobsService.getFavorites();

    if (this.allJobs.length > 0) {
      return;
    }

    this.job
      .getAllJobs()
      .pipe(
        catchError(() => {
          this.router.navigate(['error']);

          return EMPTY;
        }),
        map((response) => {
          response.forEach((obj) => {
            if (favorites.findIndex((value) => obj.id === value.id) !== -1) {
              obj.favorite = true;
            }
          });

          return response;
        })
      )
      .subscribe((response) => {
        this.allJobs = response;
      });
  }

  removeClassAndFavorite(job: BaseJob) {
    job.favorite = false;

    this.favoriteJobsService.removeFavorite(job);
  }
}
