import { Navigation } from "./lib/types";


export const NavigationRoutes: Navigation[] = [
  {
    id: "home",
    heading: "Home",
    icon: "lucide:home",
    type: "link",
    path: "/",
  },
  {
    id: "help",
    heading: "Help",
    icon: "lucide:help-circle",
    type: "link",
    path: "/help",
  },
  {
    id: "admin",
    heading: "Admin",
    icon: "lucide:user-check",
    type: "menu",
    path: "/admin",
    access: "admin",
    submenu: true,
    submenuItems: [
      {
        id: "dashboard",
        heading: "Dashboard",
        type: "link",
        path: "/admin",
        icon: "ic:round-dashboard",
      },
      {
        id: "analytics",
        heading: "Analytics",
        type: "link",
        path: "/admin/analytics",
        icon: "ic:baseline-analytics",
      },
      {
        id: "products",
        heading: "Products",
        type: "link",
        path: "/admin/products",
        icon: "gridicons:product-virtual",
      },
    ],
  },
  {
    id: "settings",
    heading: "Settings",
    type: "menu",
    icon: "lucide:settings",
    path: "/settings",
    access: "admin",
    submenu: true,
    submenuItems: [
      {
        id: "settings",
        heading: "Settings",
        type: "link",
        path: "/settings",
        icon: "ic:baseline-settings",
      },
      {
        id: "account",
        heading: "Account",
        type: "link",
        path: "/account", //todo:dynamic
        icon: "ic:baseline-account-box",
      },
    ],
  },
];
