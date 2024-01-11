"use client";
// External Libraries
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

// UI Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Modal } from "../../ui/modal";

// Custom Hooks
import { useSignin } from "@/hooks/use-signin";

const signInSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string(),
});

type FormValues = z.infer<typeof signInSchema>;

function SignInModal() {
  const { isOpen, onClose } = useSignin();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    onClose();
    toast({
      title: "Sign in Succesful",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };
  return (
    <Modal
      title="Sign In"
      description="Welcome back to Swadesi"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="font-bold text-lg">
            Submit
          </Button>
        </form>
      </Form>
    </Modal>
  );
}

export default SignInModal;
