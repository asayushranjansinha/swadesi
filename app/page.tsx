import withTitle from "@/components/marketing/FeaturedProductHOC";
import { HeroCarousel } from "@/components/marketing/HeroCarousel";
import { Interface } from "readline";

export default function Home() {
  const featuredProducts = [
    "Product A",
    "Product B",
    "Product C",
    "Product D",
    "Product E",
    "Product F",
  ];
  const productDetails = {
    name: "Sample Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://example.com/sample-image.jpg",
    size: "Large",
    price: 29.99,
  };
  
  return (
    <div className="w-full h-full">
      <HeroCarousel />
      <ProductListWithTitle
        products={featuredProducts}
        title="Featured Essentials"
      />
      <ProductDetailsWithTitle
        productDetails={productDetails}
        title="Product Details"
      />
    </div>
  );
}

interface ProductListProps {
  products: string[];
}

function ProductList(props: ProductListProps) {
  return (
    <ul className="w-full min-h-full grid gap-2 grid-cols-1 md:grid-cols-3">
      {props.products.map((product, index) => (
        <li
          key={index}
          className="col-span-1 h-60 border-2 rounded-md flex items-center justify-center"
        >
          {product}
        </li>
      ))}
    </ul>
  );
}

const ProductListWithTitle = withTitle(ProductList, "Featured Products");

const productDetails = {
  name: "Product X",
  description: "Description for Product X",
};

// Interface for DealOfTheDay properties
interface ProductDetailsProps {
  productDetails: {
    name: string;
    description: string;
    image: string;
    size: string;
    price: number;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productDetails }) => {
  const { name, description, image, size, price } = productDetails;

  return (
    <div className="bg-white border rounded-md p-6 shadow-md">
      <div className="mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-gray-700">{size}</span>
        <span className="text-red-600 font-bold">${price.toFixed(2)}</span>
      </div>
      <div className="mt-4">
        <span className="text-red-600 font-bold">Deal of the Day!</span>
      </div>
    </div>
  );
};
const ProductDetailsWithTitle = withTitle(ProductDetails, "Product Details");
