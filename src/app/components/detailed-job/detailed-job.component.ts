import { Component, inject } from '@angular/core';
import { JobService } from '../../services/job.service';
import { IDetailedJob } from '../../interfaces/IDetailedJob';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-detailed-job',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './detailed-job.component.html',
  styleUrl: './detailed-job.component.css',
})
export class DetailedJobComponent {
  protected readonly job = inject(JobService);
  protected readonly activatedRoute = inject(ActivatedRoute);
  protected detailedJob: IDetailedJob = {} as IDetailedJob;

  constructor() {
    this.job
      .getDetailedJob(this.activatedRoute.snapshot.params['id'])
      .pipe(
        catchError(() => {
          window.location.reload;
          return EMPTY;
        })
      )
      .subscribe((value) => {
        this.detailedJob = value;
      });
  }
}
