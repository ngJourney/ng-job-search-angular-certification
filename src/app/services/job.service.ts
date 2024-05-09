import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseJob } from '../interfaces/BaseJob';
import { DetailedJob } from '../interfaces/DetailedJob';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private http = inject(HttpClient);

  getAllJobs() {
    return this.http.get<BaseJob[]>('/jobs');
  }

  getDetailedJob(id: string | number) {
    return this.http.get<DetailedJob>(`/jobs/${id}`);
  }
}
