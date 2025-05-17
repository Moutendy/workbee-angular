import { Injectable, signal } from '@angular/core';
interface MenuItem {
  title: string;
  icon?: string;
  link?: string;

}


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  getMenuItems(): MenuItem[] {
    return [
      { title: 'Agents', icon: 'pi pi-fw pi-home', link: '/home/agent' },
      { title: 'Delivery', icon: 'pi pi-fw pi-calendar', link: '/home/delivery' },
      { title: 'Factures', icon: 'pi pi-fw pi-cog', link: '/home/factures' },


    ];
  }
}
