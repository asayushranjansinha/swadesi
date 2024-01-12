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

const signInSchema = z
  .object({
    username: z.string().min(3, {
      message: "Username must be at least 3 characters.",
    }),
    password: z.string().min(8, {
      message: "password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "confirm password must be at least 8 characters.",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

type FormValues = z.infer<typeof signInSchema>;

interface SignInFormProps {
  onClose: () => void;
}
const SignInForm = ({ onClose }: SignInFormProps) => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="confirm password"
                  type="password"
                  {...field}
                />
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
  );
};
export default SignInForm;
