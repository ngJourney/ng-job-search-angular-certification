import { Component, inject } from '@angular/core';
import { JobComponent } from '../job/job.component';
import { FavoriteJobsService } from '../../services/favorite-jobs.service';

@Component({
  selector: 'app-favorite-job',
  standalone: true,
  imports: [JobComponent],
  templateUrl: './favorite-job.component.html',
  styleUrl: './favorite-job.component.css',
})
export class FavoriteJobComponent {
  protected readonly favoriteJobsService = inject(FavoriteJobsService);
}
