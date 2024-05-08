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

  getAllJobs(): Observable<BaseJob[]> {
    return this.http.get('/jobs') as Observable<BaseJob[]>;
  }

  getDetailedJob(id: string | number): Observable<DetailedJob> {
    return this.http.get(`/jobs/${id}`) as Observable<DetailedJob>;
  }
}
