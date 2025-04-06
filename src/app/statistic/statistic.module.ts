import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { QualityperformanceComponent } from './qualityperformance/qualityperformance.component';
import { DealsComponent } from './deals/deals.component';
import { BusyperiodComponent } from './busyperiod/busyperiod.component';

const routes: Routes = [
  {
    path: 'busy-period', component: BusyperiodComponent,
  },
  {
    path: 'deals', component: DealsComponent,
  }
  ,
  {
    path: 'quality-performance', component: QualityperformanceComponent,
  }
  ,
];

@NgModule({
  declarations: [QualityperformanceComponent,DealsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class StatisticModule { }
