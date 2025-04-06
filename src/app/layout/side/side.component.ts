import { Component, inject } from '@angular/core';
import { MenuService } from '../../service/menuservice/menu.service';


@Component({
  selector: 'app-side',

  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {
   menuService = inject(MenuService);
  collapsedStates: {[key: string]: boolean} = {};
  menuItems = this.menuService.getMenuItems();
  toggleCollapse(menuId: string): void {
    this.collapsedStates[menuId] = !this.collapsedStates[menuId];
  }


  isCollapsed(menuId: string): boolean {
    return this.collapsedStates[menuId] ?? true;
  }
}
