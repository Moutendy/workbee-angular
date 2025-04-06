import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusyperiodComponent } from './busyperiod.component';

describe('BusyperiodComponent', () => {
  let component: BusyperiodComponent;
  let fixture: ComponentFixture<BusyperiodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusyperiodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusyperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
