"use client";
import { ProductItem } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import IconWrapper from "../shared/IconWrapper";

interface ProductDetailsProps {
  product: ProductItem;
}

const FeaturedProduct: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const { name, description, images, sizes, price, category } = product;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full flex flex-col-reverse lg:flex-row gap-2 items-center justify-center">
          <ul className="w-fit flex lg:flex-col gap-2 items-center justify-center">
            {images.map((img, idx) => (
              <li
                key={idx}
                className="aspect-square w-10 relative cursor-pointer"
                onClick={() => setSelectedImage(idx)}
              >
                <Image
                  src={img}
                  alt={name}
                  fill
                  quality={40}
                  priority
                  className="rounded-md border-2"
                />
              </li>
            ))}
          </ul>
          <div className="h-60 w-full max-w-2xl sm:h-80 relative shadow-md hover:scale-110 z-10 transition-transform duration-300 ease-in-out">
            <Image
              src={images[selectedImage]}
              alt={name}
              fill
              quality={90}
              className="rounded-md"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex gap-2 flex-wrap items-center justify-between mt-4">
          <span
            className={cn(
              "flex h-10 w-fit items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm font-bold text-red-700"
            )}
          >
            {category}
          </span>

          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sizes" />
            </SelectTrigger>
            <SelectContent>
              {sizes?.map((size) => (
                <SelectItem value={size} key={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <p className="text-xl font-bold text-primary flex items-center">
            Today's Price
            <span className="text-2xl font-bold text-green-500 ml-1">
              {`₹${price}`}
            </span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button className="flex space-x-2 items-center">
          <span className="text-lg font-bold">Add to Cart</span>
          <IconWrapper icon={"iconoir:add-to-cart"} height="24" width="24" />
        </Button>
      </CardFooter>
    </Card>
  );
};
export default FeaturedProduct;
