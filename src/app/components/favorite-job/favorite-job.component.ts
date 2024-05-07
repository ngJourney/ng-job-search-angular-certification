import { Component, inject, signal } from '@angular/core';
import { JobComponent } from '../job/job.component';
import { FavoriteJobsService } from '../../services/favorite-jobs.service';
import { IBaseJob } from '../../interfaces/IBaseJob';

@Component({
  selector: 'app-favorite-job',
  standalone: true,
  imports: [JobComponent],
  templateUrl: './favorite-job.component.html',
  styleUrl: './favorite-job.component.css',
})
export class FavoriteJobComponent {
  protected readonly favoriteJobsService = inject(FavoriteJobsService);
  protected favorites = signal<IBaseJob[]>([]);

  constructor() {
    this.favorites.set(this.favoriteJobsService.getFavorites());
  }
}
