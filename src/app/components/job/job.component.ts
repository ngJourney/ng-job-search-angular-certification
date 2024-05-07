import { Component, Input, inject } from '@angular/core';
import { JobService } from '../../services/job.service';
import { IBaseJob } from '../../interfaces/IBaseJob';
import { CommonModule } from '@angular/common';
import { FavoriteJobsService } from '../../services/favorite-jobs.service';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css',
})
export class JobComponent {
  protected readonly job = inject(JobService);
  protected readonly favoriteJobsService = inject(FavoriteJobsService);
  @Input() allJobs: IBaseJob[] = [];
  @Input() showStar: boolean = true;

  constructor() {
    const favorites = this.favoriteJobsService.getFavorites();

    this.job.getAllJobs().subscribe((response) => {
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
