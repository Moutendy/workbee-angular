import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';
import { PerformenceComponent } from './performence/performence.component';
import { ManagementComponent } from './management/management.component';
const routes: Routes = [
  {
    path: 'management', component: ManagementComponent,
  },
  {
    path: 'performence', component: PerformenceComponent,
  }
  ,
  {
    path: 'planning', component: PlanningComponent,
  }
  ,
];


@NgModule({
  declarations: [PlanningComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class DeliveryModule { }
