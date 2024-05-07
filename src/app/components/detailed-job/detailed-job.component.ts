import { Component, inject } from '@angular/core';
import { JobService } from '../../services/job.service';
import { IDetailedJob } from '../../interfaces/IDetailedJob';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detailed-job',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detailed-job.component.html',
  styleUrl: './detailed-job.component.css',
})
export class DetailedJobComponent {
  protected readonly job = inject(JobService);
  protected detailedJob: IDetailedJob = {} as IDetailedJob;

  constructor() {
    this.job.getDetailedJob(75278).subscribe((value) => console.log(value));
  }
}
