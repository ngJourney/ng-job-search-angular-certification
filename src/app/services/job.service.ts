import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBaseJob } from '../interfaces/IBaseJob';
import { IDetailedJob } from '../interfaces/IDetailedJob';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private http = inject(HttpClient);

  getAllJobs(): Observable<IBaseJob[]> {
    return this.http.get('/jobs') as Observable<IBaseJob[]>;
  }

  getDetailedJob(id: string | number): Observable<IDetailedJob> {
    return this.http.get(`/jobs/${id}`) as Observable<IDetailedJob>;
  }
}
