import { IBottomNavbarItem } from "./interfaces";

export const DEFAULT_BOTTOM_NAVIGATION_ITEMS: IBottomNavbarItem[] = [
  {
    name: 'Home',
    iconName: 'home',
    id: 'home'
  },
  {
    name: 'Credit Report',
    iconName: 'credit_score',
    id: 'credit-report'
  },
  {
    name: 'Disputes',
    iconName: 'description',
    id: 'disputes'
  },
  {
    name: 'Settings',
    iconName: 'portrait',
    id: 'settings'
  },
];
