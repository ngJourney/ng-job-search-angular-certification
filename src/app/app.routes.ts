import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'jobs',
    loadComponent: () =>
      import('./components/job/job.component').then(
        (module) => module.JobComponent
      ),
  },
  {
    path: 'jobs/:id',
    loadComponent: () =>
      import('./components/detailed-job/detailed-job.component').then(
        (module) => module.DetailedJobComponent
      ),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./components/favorite-job/favorite-job.component').then(
        (module) => module.FavoriteJobComponent
      ),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./components/error/error.component').then(
        (module) => module.ErrorComponent
      ),
  },
  { path: '**', redirectTo: '/jobs' },
];
