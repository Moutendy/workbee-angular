import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SupplyComponent } from './supply/supply.component';
import { InventoryalertComponent } from './inventoryalert/inventoryalert.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {
    path: 'inventaire', component: InventoryComponent,
  },
  {
    path: 'alter-rupture', component: InventoryalertComponent,
  }
  ,
  {
    path: 'approvisionnement', component: SupplyComponent,
  }
  ,
];

@NgModule({
  declarations: [SupplyComponent, InventoryalertComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ReserveModule { }
