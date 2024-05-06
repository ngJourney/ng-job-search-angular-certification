import { Component, inject } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css',
})
export class JobComponent {
  protected readonly job = inject(JobService);

  constructor() {
    this.job.getAllJobs().subscribe((value) => console.log(value));
    this.job.getDetailedJob(75278).subscribe((value) => console.log(value));
  }
}
