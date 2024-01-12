"use client";
import Image from "next/image";

import { useAuthModal } from "@/hooks/use-auth-modal";
import Navigation from "./Navigation";
import { ModeToggle } from "../ui/mode-toggle";

function Header() {
  const { onOpen } = useAuthModal();
  return (
    <header className="fixed inset-x-0 top-0 border-b bg-background z-30">
      {/* header container */}
      <div className="w-full container mx-auto py-2 px-4 flex items-center justify-between space-x-4">
        <Logo />

        {/* authmodal trigger */}
        {/* <Button
          variant={"ghost"}
          className="w-full space-x-2 hover:bg-transparent"
          onClick={onOpen}
        >
          <Icon icon="uil:signin" rotate={2} width="24" height="24" />
          <span className="font-semibold text-xl flex">SignIn</span>
        </Button> */}

        <Navigation />
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;

function Logo() {
  return <Image src={"/logo.png"} width={100} height={40} alt="Company Logo" />;
}
