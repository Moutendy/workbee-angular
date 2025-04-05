export interface MenuTitle {
  type: 'title';
  label: string;
}

export interface MenuLink {
  type: 'link';
  label: string;
  icon: string;
  route: string;
}

export interface SubItem {
  label: string;
  route: string;
}

export interface MenuSubmenu {
  type: 'submenu';
  label: string;
  icon: string;
  subItems: SubItem[];
  open?: boolean; // pour gérer ouverture/fermeture du sous-menu
}

export type MenuItem = MenuTitle | MenuLink | MenuSubmenu;
