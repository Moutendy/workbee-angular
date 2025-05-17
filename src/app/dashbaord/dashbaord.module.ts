import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DeliveryComponent } from './delivery/delivery.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  }
  ,
  {
    path: 'delivery', component: DeliveryComponent,
  }
];

@NgModule({
  declarations: [HomeComponent, DeliveryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashbaordModule { }
