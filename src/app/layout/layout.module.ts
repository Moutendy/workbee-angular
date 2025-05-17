import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideComponent } from './side/side.component';
import { FactureComponent } from '../facture/facture.component';
const routes: Routes = [
  { path: 'home', component: BaseComponent, children: [
  { path: 'agent',  loadChildren: ()=>import('../dashbaord/dashbaord.module').then(p=>p.DashbaordModule)},
{ path: 'facture',   component: FactureComponent, },

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
