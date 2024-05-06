import { Component, inject } from '@angular/core';
import { JobService } from '../../services/job.service';
import { IBaseJob } from '../../interfaces/IBaseJob';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css',
})
export class JobComponent {
  protected readonly job = inject(JobService);
  protected allJobs: IBaseJob[] = [];

  constructor() {
    this.job.getAllJobs().subscribe((response) => (this.allJobs = response));
    this.job.getDetailedJob(75278).subscribe((value) => console.log(value));
  }
}
