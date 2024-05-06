import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobComponent } from './job.component';
import { HttpClientModule } from '@angular/common/http';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobComponent, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
