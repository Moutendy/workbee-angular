import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { FollowComponent } from './follow/follow.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DeliveryComponent } from './delivery/delivery.component';


const routes: Routes = [
  {
    path: 'follow', component: FollowComponent,
  },
  {
    path: 'delivery', component: DeliveryComponent,
  }
  ,
  {
    path: 'progress', component: ProgressComponent,
  }
  ,
];

@NgModule({
  declarations: [ProgressComponent,DeliveryComponent,FollowComponent],
  imports: [
    CommonModule
    ,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class OrderModule { }
