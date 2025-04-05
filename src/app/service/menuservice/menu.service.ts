import { Injectable, signal } from '@angular/core';
import { MenuItem } from '../../model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  menuItems = signal<MenuItem[]>([
    {
      type: 'title',
      label: 'Home'
    },
    {
      type: 'link',
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      type: 'title',
      label: 'Pages'
    },
    {
      type: 'submenu',
      label: 'Authentication',
      icon: 'auth',
      open: false,
      subItems: [
        { label: 'Login', route: '/auth/login' },
        { label: 'Register', route: '/auth/register' },
        { label: 'Confirm Mail', route: '/auth/confirm-mail' },
        { label: 'Recover password', route: '/auth/recover-password' }
      ]
    },
    {
      type: 'submenu',
      label: 'Users',
      icon: 'users',
      open: false,
      subItems: [
        { label: 'User Profile', route: '/users/profile' },
        { label: 'Add User', route: '/users/add' },
        { label: 'User List', route: '/users/list' }
      ]
    },
    {
      type: 'link',
      label: 'Error Page',
      icon: 'error',
      route: '/error'
    }

  ]);
}
