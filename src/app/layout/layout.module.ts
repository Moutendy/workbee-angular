import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideComponent } from './side/side.component';
const routes: Routes = [
  { path: '', component: BaseComponent, children: [
    { path: '', redirectTo: '', pathMatch: 'full' },

  ],
}
,
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
