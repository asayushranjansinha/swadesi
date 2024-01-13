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
    id: "cart",
    heading: "Cart",
    icon: "icomoon-free:cart",
    type: "link",
    path: "/cart",
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
    id: "account",
    heading: "My Account",
    type: "menu",
    icon: "ic:baseline-account-box",
    path: "/account",
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
        heading: "Manage Account",
        type: "link",
        path: "/account", //todo:dynamic
        icon: "ic:baseline-account-box",
      },
    ],
  },
];

export const bannerImages = [
  {
    id: 1,
    imageLarge: "./banner1.svg",
    imageMobile: "./mobile-banner1.svg",
  },
  {
    id: 2,
    imageLarge: "./banner2.svg",
    imageMobile: "./mobile-banner2.svg",
  },
  {
    id: 3,
    imageLarge: "./banner3.svg",
    imageMobile: "./mobile-banner3.svg",
  },
  {
    id: 4,
    imageLarge: "./banner4.svg",
    imageMobile: "./mobile-banner4.svg",
  },
];
