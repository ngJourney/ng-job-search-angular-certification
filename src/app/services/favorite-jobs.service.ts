import { Injectable } from '@angular/core';
import { BaseJob } from '../interfaces/BaseJob';

@Injectable({
  providedIn: 'root',
})
export class FavoriteJobsService {
  private readonly localKey = 'favoriteJobs';

  getFavorites(): BaseJob[] {
    const favorites = localStorage.getItem(this.localKey);

    if (favorites) {
      return JSON.parse(favorites);
    }

    return [];
  }

  setFavorite(job: BaseJob) {
    if (!this.hasFavorite(job)) {
      const favorites = this.getFavorites();

      job.favorite = true;
      favorites.push(job);

      localStorage.setItem(this.localKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(job: BaseJob) {
    if (this.hasFavorite(job)) {
      const favorites = this.getFavorites();
      const filtered = favorites.filter((value) => value.id !== job.id);

      localStorage.setItem(this.localKey, JSON.stringify(filtered));
    }
  }

  hasFavorite(job: BaseJob) {
    const favorites = this.getFavorites();

    return favorites.find((value) => value.id === job.id) != undefined;
  }
}
