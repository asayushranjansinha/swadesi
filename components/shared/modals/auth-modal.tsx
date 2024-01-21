"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuthModal } from "@/hooks/use-auth-modal";
import { Modal } from "../../ui/modal";
import SignInForm from "../forms/sign-in-form";
import SignUpForm from "../forms/sign-up-form";

function AuthModal() {
  const { isOpen, onClose } = useAuthModal();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="signin">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <SignUpForm onClose={onClose} />
        </TabsContent>
        <TabsContent value="signin">
          <SignInForm onClose={onClose} />
        </TabsContent>
      </Tabs>
    </Modal>
  );
}

export default AuthModal;
