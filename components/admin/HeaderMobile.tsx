"use client";
// React and Next.js
import { motion, useCycle } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// UI Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Icon
import { Icon } from "@iconify/react";

// Constants and Utilities
import { SIDE_NAVIGATION_ITEMS } from "@/constants";
import { useAuthModal } from "@/hooks/use-auth-modal";
import { useUserStore } from "@/hooks/userStore";
import { SideNavigation } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ui/mode-toggle";

function HeaderMobile() {
  // Ref for the container element
  const containerRef = useRef(null);

  // Calculate the height using a custom hook (useDimensions)
  const { height } = useDimensions(containerRef);

  // Toggle state for opening and closing
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`fixed inset-0 z-50 w-full md:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-primary/80 dark:bg-background/90"
        variants={ContainerCircularDropdown}
      />
      <NavigationContainer />
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
}

export default HeaderMobile;

function NavigationContainer() {
  // Access user data using custom hook
  const { user } = useUserStore();
  const { onOpen } = useAuthModal();

  return (
    <motion.ul
      variants={variants}
      className="absolute grid w-full gap-3 px-10 py-16"
    >
      <Accordion type="single" collapsible className="w-full space-y-4">
        {SIDE_NAVIGATION_ITEMS.map((item, idx) => (
          <NavigationItem key={idx} item={item} />
        ))}
      </Accordion>

      {/* Theme Change */}
      <motion.li variants={MenuItemVariants}>
        {!user && (
          <Button
            variant={"ghost"}
            className="w-full space-x-2 hover:bg-transparent"
            onClick={onOpen}
          >
            <Icon icon="uil:signin" rotate={2} width="24" height="24" />
            <span className="font-semibold text-xl flex">SignIn</span>
          </Button>
        )}
      </motion.li>
      <motion.li variants={MenuItemVariants}>
        <ModeToggle />
      </motion.li>
    </motion.ul>
  );
}
type NavigationItemProps = {
  item: SideNavigation;
};
function NavigationItem({ item }: NavigationItemProps) {
  const { user } = useUserStore();
  const pathname = usePathname();

  if (item?.userRole && item?.userRole !== user?.role) return null;
  switch (item.submenu) {
    case true:
      return (
        <motion.li variants={MenuItemVariants}>
          <AccordionItem
            value={item.title}
            className="my-2
        "
          >
            <AccordionTrigger
              className={cn(
                "p-2 rounded-lg hover:bg-background transition-colors duration-300",
                pathname.includes(item.path!) ? "bg-background/50" : ""
              )}
            >
              <div className="w-full flex space-x-4 items-center">
                {item.element}
                <span className="font-semibold text-xl">{item.title}</span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="ml-10 space-y-2 my-2 list-none">
              {item.subMenuItems?.map((subItem, index) => (
                <li key={index}>
                  <Link
                    href={subItem.path!}
                    className={`${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                </li>
              ))}
            </AccordionContent>
          </AccordionItem>
        </motion.li>
      );
    default:
      switch (item.type) {
        case "link":
          return (
            <motion.li variants={MenuItemVariants}>
              <Link
                href={item.path!}
                className={cn(
                  "flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-background transition-colors duration-300",
                  item.path === pathname ? "bg-background/50" : ""
                )}
              >
                {item.element}
                <span className="font-semibold text-xl flex">{item.title}</span>
              </Link>
            </motion.li>
          );
        default:
          return (
            <motion.li variants={MenuItemVariants}>{item.element}</motion.li>
          );
      }
  }
}

const MenuToggle = ({ toggle }: { toggle: any }) => {
  const { theme } = useTheme();
  const stroke = theme === "light" ? "black" : "white";
  return (
    <button
      onClick={toggle}
      className="pointer-events-auto absolute right-4 top-5 z-30"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          stroke={stroke}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          stroke={stroke}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          stroke={stroke}
        />
      </svg>
    </button>
  );
};

/* ******************************** ANIMATION ******************************* */
const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);
  return dimensions.current;
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    strokeLinecap="round"
    {...props}
  />
);

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const ContainerCircularDropdown = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};
