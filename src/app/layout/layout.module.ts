import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideComponent } from './side/side.component';
const routes: Routes = [
  { path: 'home', component: BaseComponent, children: [
  { path: 'dashbaord',  loadChildren: ()=>import('../dashbaord/dashbaord.module').then(p=>p.DashbaordModule)},
  { path: 'order',  loadChildren: ()=>import('../order/order.module').then(p=>p.OrderModule)},
  { path: 'static',  loadChildren: ()=>import('../statistic/statistic.module').then(p=>p.StatisticModule)},
  { path: 'delivery',  loadChildren: ()=>import('../delivery/delivery.module').then(p=>p.DeliveryModule)},
  { path: 'stock',  loadChildren: ()=>import('../reserve/reserve.module').then(p=>p.ReserveModule)},
  ],

},
{ path: '',   redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  declarations: [SideComponent,BaseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class LayoutModule { }
