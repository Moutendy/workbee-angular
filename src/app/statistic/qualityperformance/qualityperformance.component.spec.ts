import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityperformanceComponent } from './qualityperformance.component';

describe('QualityperformanceComponent', () => {
  let component: QualityperformanceComponent;
  let fixture: ComponentFixture<QualityperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityperformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
