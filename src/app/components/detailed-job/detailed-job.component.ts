import { Component, inject } from '@angular/core';
import { JobService } from '../../services/job.service';
import { IDetailedJob } from '../../interfaces/IDetailedJob';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-job',
  standalone: true,
  imports: [RouterModule],
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
      .subscribe((value) => {
        this.detailedJob = value;
      });
  }
}
