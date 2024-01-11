import { Icon } from "@iconify/react";
import { SideNavigation } from "./lib/types";
import { ModeToggle } from "./components/ui/mode-toggle";

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
    userRole: "admin",
    subMenuItems: [
      { type: "link", title: "Dashboard", path: "/admin", userRole: "admin" },
      {
        type: "link",
        title: "Analytics",
        path: "/admin/analytics",
        userRole: "admin",
      },
      {
        type: "link",
        title: "Products",
        path: "/admin/products",
        userRole: "admin",
      },
    ],
  },
  {
    type: "link",
    title: "Settings",
    path: "/settings",
    element: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      {
        type: "link",
        title: "Account",
        path: "/settings/account",
        userRole: "admin",
      },
      {
        type: "link",
        title: "Privacy",
        path: "/settings/privacy",
        userRole: "admin",
      },
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
