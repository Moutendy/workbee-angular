import { Component, inject } from '@angular/core';
import { MenuService } from '../../service/menuservice/menu.service';
import { MenuItem } from '../../model/menu';

@Component({
  selector: 'app-side',

  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {
  menuService = inject(MenuService);
  get menuItems() {
    return this.menuService.menuItems();
  }

  get categories() {
    const categories = new Set(this.menuItems.map(item => item.label));
    return Array.from(categories).filter(c => c);
  }
  itemsByCategory(label: string) {
    return this.menuItems.filter(item => item.label === label);
  }
  toggleSubmenu(item: MenuItem): void {
    if (item.type === 'submenu') {
      item.open = !item.open;
    }
  }

}
