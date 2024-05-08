import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedJobComponent } from './detailed-job.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DetailedJobComponent', () => {
  let component: DetailedJobComponent;
  let fixture: ComponentFixture<DetailedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedJobComponent, HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                id: '1234',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
