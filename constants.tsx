import { Icon } from "@iconify/react";
import { SideNavigation } from "./lib/types";

export const SIDE_NAVIGATION_ITEMS: SideNavigation[] = [
  {
    type: "link",
    title: "Home",
    path: "/",
    element: <Icon icon="lucide:home" width="24" height="24" />,
    submenu: false,
  },
  {
    type: "link",
    title: "Admin",
    path: "/admin",
    element: <Icon icon="lucide:user-check" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { type: "link", title: "Dashboard", path: "/admin" },
      { type: "link", title: "Analytics", path: "/admin/analytics" },
      { type: "link", title: "Products", path: "/admin/products" },
    ],
  },
  {
    type: "link",
    title: "Settings",
    path: "/settings",
    element: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { type: "link", title: "Account", path: "/settings/account" },
      { type: "link", title: "Privacy", path: "/settings/privacy" },
    ],
  },
  {
    type: "link",
    title: "Help",
    path: "/help",
    submenu: false,
    element: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];

