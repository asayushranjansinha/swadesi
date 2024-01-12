import withTitle from "@/components/marketing/SectionWithHeadingHOC";
import FeaturedProduct from "@/components/marketing/FeaturedProduct";
import HeroCarousel from "@/components/marketing/HeroCarousel";
import ProductList from "@/components/marketing/ProductList";
import { FeaturedProductList, dealOfTheDayProduct } from "@/data";

export default function LandingPage() {
  return (
    <div className="w-full h-full">
      <HeroCarousel />
      <ProductListWithTitle
        products={FeaturedProductList}
        title="Featured Essentials"
      />
      <DealOfTheDayComponent
        product={dealOfTheDayProduct}
        title="Deal of the Day"
      />
    </div>
  );
}

const ProductListWithTitle = withTitle(ProductList, "Featured Essentials");

const DealOfTheDayComponent = withTitle(FeaturedProduct, "Deal of the Day!");
