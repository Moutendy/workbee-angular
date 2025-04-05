import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home',  loadChildren: ()=>import('./layout/layout.module').then(p=>p.LayoutModule)},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
