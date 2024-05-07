import { Injectable, signal } from '@angular/core';
import { IBaseJob } from '../interfaces/IBaseJob';

@Injectable({
  providedIn: 'root',
})
export class FavoriteJobsService {
  private readonly localKey = 'favoriteJobs';
  protected favorites = signal<IBaseJob[]>([]);

  getFavorites(): IBaseJob[] {
    const favorites = localStorage.getItem(this.localKey);

    if (favorites) {
      return JSON.parse(favorites);
    }

    return [];
  }

  setFavorite(job: IBaseJob) {
    if (!this.hasFavorite(job)) {
      const favorites = this.getFavorites();

      job.favorite = true;
      favorites.push(job);

      localStorage.setItem(this.localKey, JSON.stringify(favorites));

      this.favorites.set(favorites);
    }
  }

  removeFavorite(job: IBaseJob) {
    if (this.hasFavorite(job)) {
      const favorites = this.getFavorites();
      const filtered = favorites.filter((value) => value.id !== job.id);

      localStorage.setItem(this.localKey, JSON.stringify(filtered));
      this.favorites.set(favorites);
    }
  }

  hasFavorite(job: IBaseJob) {
    const favorites = this.getFavorites();

    return favorites.find((value) => value.id === job.id) != undefined;
  }
}