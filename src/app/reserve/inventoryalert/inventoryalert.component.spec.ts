import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryalertComponent } from './inventoryalert.component';

describe('InventoryalertComponent', () => {
  let component: InventoryalertComponent;
  let fixture: ComponentFixture<InventoryalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryalertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
