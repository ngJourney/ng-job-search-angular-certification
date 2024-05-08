import { Component, Input, OnInit, inject } from '@angular/core';
import { JobService } from '../../services/job.service';
import { IBaseJob } from '../../interfaces/IBaseJob';
import { CommonModule } from '@angular/common';
import { FavoriteJobsService } from '../../services/favorite-jobs.service';
import { RouterModule } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css',
})
export class JobComponent implements OnInit {
  protected readonly job = inject(JobService);
  protected readonly favoriteJobsService = inject(FavoriteJobsService);
  @Input() allJobs: IBaseJob[] = [];
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
          return EMPTY;
        })
      )
      .subscribe((response) => {
        if (favorites.length) {
          this.allJobs = response;
          response.forEach((obj) => {
            if (favorites.findIndex((value) => obj.id === value.id) !== -1) {
              obj.favorite = true;
            }
          });
        } else {
          this.allJobs = response;
        }
      });
  }

  removeClassAndFavorite(job: IBaseJob) {
    job.favorite = false;

    this.favoriteJobsService.removeFavorite(job);
  }
}
