import { Routes } from '@angular/router';
import { JobComponent } from './components/job/job.component';
import { DetailedJobComponent } from './components/detailed-job/detailed-job.component';

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
  { path: '**', redirectTo: '/jobs' },
];
