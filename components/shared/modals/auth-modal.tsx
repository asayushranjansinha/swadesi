"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Modal } from "../../ui/modal";
import { useAuthModal } from "@/hooks/use-auth-modal";
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
