import { Component, inject } from '@angular/core';
import { JobService } from '../../services/job.service';
import { DetailedJob } from '../../interfaces/DetailedJob';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EMPTY, catchError, map } from 'rxjs';
import { FavoriteJobsService } from '../../services/favorite-jobs.service';

@Component({
  selector: 'app-detailed-job',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './detailed-job.component.html',
  styleUrl: './detailed-job.component.css',
})
export class DetailedJobComponent {
  protected readonly activatedRoute = inject(ActivatedRoute);
  protected detailedJob: DetailedJob = {} as DetailedJob;
  protected readonly job = inject(JobService);
  private readonly favoriteJobsService = inject(FavoriteJobsService);
  private readonly router = inject(Router);

  constructor() {
    this.job
      .getDetailedJob(this.activatedRoute.snapshot.params['id'])
      .pipe(
        catchError(() => {
          this.router.navigate(['error']);

          return EMPTY;
        }),
        map((value) => {
          return {
            ...value,
            favorite: this.favoriteJobsService.hasFavorite(value),
          };
        })
      )
      .subscribe((value) => {
        this.detailedJob = value;
      });
  }
}
