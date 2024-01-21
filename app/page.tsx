import withTitle from "@/components/marketing/SectionWithHeadingHOC";
import FeaturedProduct from "@/components/marketing/FeaturedProduct";
import HeroCarousel from "@/components/marketing/HeroCarousel";
import ProductList from "@/components/marketing/ProductList";

// Data
import { FeaturedEssentials } from "@/data";

export default function LandingPage() {
  return (
    <div className="w-full h-full">
      <HeroCarousel />
      
      <ProductListWithTitle
        products={FeaturedEssentials}
        title="Featured Essentials"
      />
      {/* <DealOfTheDayComponent
        product={dealOfTheDayProduct}
        title="Deal of the Day"
      /> */}
    </div>
  );
}

const ProductListWithTitle = withTitle(ProductList, "Featured Essentials");

const DealOfTheDayComponent = withTitle(FeaturedProduct, "Deal of the Day!");
