import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FeaturedProductItem } from "@/lib/types";

interface FeaturedProductListProps {
  products: FeaturedProductItem[];
}
export default function ProductList(props: FeaturedProductListProps) {
  return (
    <ul className="w-full min-h-full grid gap-2 grid-cols-1 md:grid-cols-3">
      {props.products.map((product, index) => (
        <li key={index} className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="h-full w-full flex flex-col xl:flex-row items-center justify-between p-4">
              <Image
                src={product.imageUrl}
                alt="Product"
                width={200}
                height={130}
                quality={80}
                className="rounded-md"
              />
              <div className="flex flex-col space-y-2 mt-1 items-center">
                <p className="text-xl text-primary flex items-center">
                  Today's Price
                  <span className="text-2xl font-bold text-green-500 ml-1">
                    {`₹${product.currentPrice}`}
                  </span>
                </p>
                <p className="text-md text-muted-foreground flex items-center">
                  Selling Price
                  <span className="line-through ml-1">{`₹${product.orgPrice}`}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}
