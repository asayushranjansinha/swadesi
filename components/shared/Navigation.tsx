"use client";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import IconWrapper from "./IconWrapper";
import { useUserStore } from "@/hooks/userStore";

function Navigation() {
  const { user } = useUserStore();
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/support" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "flex items-center gap-2",
                navigationMenuTriggerStyle()
              )}
            >
              Support
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {user && user.role === "admin" && (
          <NavigationMenuItem>
            <NavigationMenuTrigger>Admin</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-60 min-w-fit h-full p-6 border-2">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/admin"
                      className="flex w-full gap-1 items-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <IconWrapper
                        icon="ic:round-dashboard"
                        height="24"
                        width="24"
                      />
                      DashBoard
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="w-full">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/admin/analytics"
                      className="flex w-full gap-1 items-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <IconWrapper
                        icon="ic:baseline-analytics"
                        height="24"
                        width="24"
                      />
                      Analytics
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="w-full">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/admin/products"
                      className="flex w-full gap-1 items-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <IconWrapper
                        icon="gridicons:product-virtual"
                        height="24"
                        width="24"
                      />
                      Products
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-60 min-w-fit h-full p-6 border-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/account" //todo:dynamic user
                    className="flex w-full gap-1 items-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <IconWrapper
                      icon="ic:baseline-account-box"
                      height="24"
                      width="24"
                    />
                    Account
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/account" //todo:dynamic user
                    className="flex w-full gap-1 items-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <IconWrapper
                      icon="ic:baseline-settings"
                      height="24"
                      width="24"
                    />
                    Settings
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;
