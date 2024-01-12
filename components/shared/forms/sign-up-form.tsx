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

const signUpSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(8, {
    message: "password must be at least 8 characters.",
  }),
});

type FormValues = z.infer<typeof signUpSchema>;

interface SignInFormProps {
  onClose: () => void;
}
const SignUpForm = ({ onClose }: SignInFormProps) => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
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
      title: "Sign up Succesful",
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

        <Button type="submit" className="font-bold text-lg">
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default SignUpForm;
