import { Icon } from '@iconify/react';
import { SideNavItem } from './lib/types';


export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Admin',
    path: '/admin',
    icon: <Icon icon="lucide:user-check" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Dashboard', path: '/admin' },
      { title: 'Analytics', path: '/admin/analytics' },
    ],
  },
  {
    title: 'Products',
    path: '/products',
    icon: <Icon icon="lucide:store" width="24" height="24" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];