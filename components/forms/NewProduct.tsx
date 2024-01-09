"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Dropzone from "react-dropzone";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

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
import { cn } from "@/lib/utils";

const validationSchema = z.object({
  name: z.string().min(1, { message: "Product Name is required" }),
  description: z.string().min(1, {
    message: "Product Description is required",
  }),
  images: z.array(z.any()),
});

type FormValues = z.infer<typeof validationSchema>;

export default function Home() {
  const form = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      description: "",
      images: [],
    },
  });

  const { fields, append } = useFieldArray({
    name: "images",
    control: form.control,
  });

  const onDropAccepted = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((acceptedFile: File) => {
      append({
        file: acceptedFile,
      });
    });
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        action=""
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 max-w-md space-y-5"
      >
        <div className="relative name">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Product Name"
                    type="text"
                    className="mt-3"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 capitalize" />
              </FormItem>
            )}
          />
        </div>
        <div className="relative email">
          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Product Description"
                    type="text"
                    className="mt-3"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 capitalize" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="images"
          render={() => (
            <Dropzone
              accept={{
                "image/*": [".jpg", ".jpeg", ".png"],
              }}
              onDropAccepted={onDropAccepted}
              multiple={true}
              maxSize={5000000}
            >
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps({
                    className: cn(
                      "p-3 mb-4 flex flex-col items-center justify-center w-full rounded-md cursor-pointer border"
                    ),
                  })}
                >
                  <div className="flex items-center gap-x-3 mt-2 mb-2">
                    <label
                      htmlFor="Products"
                      className={`text-sm cursor-pointer focus:outline-none focus:underline ${
                        form.formState.errors.images && "text-red-500"
                      }`}
                      tabIndex={0}
                    >
                      Add your Product Images
                      <input {...getInputProps()} />
                    </label>
                  </div>
                </div>
              )}
            </Dropzone>
          )}
        />
        <Button type="submit" className="w-full">
          Save Product
        </Button>
      </form>
    </Form>
  );
}
