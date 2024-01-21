"use client"; // todo:remove if not needed
import { Product } from "@/lib/types";
import { formatQuantityAndPrice, truncateString } from "@/lib/utils";
import Image from "next/image";
import IconWrapper from "../shared/IconWrapper";

interface ProductListProps {
  products: Product[];
}
function ProductList({ products }: ProductListProps) {
  console.log(products);
  return (
    <ul className="w-full grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {products.map((product) => (
        <li
          key={product.id}
          className="col-span-1 border shadow-lg h-[14.5rem] md:h-[20rem] lg:h-[22rem] flex md:flex-col gap-1 justify-between items-center relative group rounded-lg  "
        >
          {/* Product Image */}
          <div className="h-full w-1/3 md:w-full md:h-1/2 relative">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              loading="lazy"
              quality={70}
              className="rounded-sm"
            />
          </div>

          {/* Product Body */}
          <div className="h-full md:h-2/3 min-h-fit flex flex-col items-center justify-center w-2/3 md:w-full p-2 space-y-2">
            {/* name */}
            <h2 className="w-full text-center text-sm">
              {truncateString(product.name, 70)}
            </h2>

            {/* category and quantity inline */}
            <div className="flex items-center">
              <h5 className="inline-block border w-fit mx-2 p-1 ml-0 rounded-sm text-red-700 text-xs font-semibold bg-secondary">
                {product.category}
              </h5>
              <h5 className="inline border w-fit mx-2 p-1 ml-0 rounded-sm text-xs font-semibold bg-secondary font-mono">
                {product.netQuantity}
                <span>{product.quantityUnit}</span>
              </h5>
            </div>

            {/* price */}
            <h3 className="text-xl font-bold">
              {`₹${product.price}`}
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                {`(${formatQuantityAndPrice(
                  product.netQuantity!,
                  product.price,
                  product.quantityUnit!
                )})`}
              </span>
            </h3>

            {/* tags */}
            <p className="w-full flex flex-wrap gap-0 gap-y-1 justify-center">
              {product.features?.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="inline-block border w-fit mx-2 p-1 ml-0 rounded-sm text-xs font-semibold bg-secondary"
                >
                  {feature}
                </span>
              ))}
            </p>
            {/* action */}
          </div>

          {/* Layer with opacity transition */}
          <div className="md:flex items-center justify-center hidden absolute inset-0 bg-secondary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <IconWrapper
              icon="ph:plus-fill"
              height="40"
              width="40"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
