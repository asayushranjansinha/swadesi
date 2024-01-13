"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { bannerImages } from "@/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroCarousel() {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery(`(max-width: 1025px)`);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className="w-full max-h-[40vh]">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {bannerImages.map((image) => (
            <CarouselItem key={image.id}>
              <div className="p-1">
                <Card className="h-[180px] md:h-[32vh] relative overflow-hidden">
                  {isMounted && (
                    <Image
                      src={!isMobile ? image.imageLarge : image.imageMobile}
                      alt="Hero"
                      fill
                      objectPosition="center"
                      objectFit="cover"
                    />
                  )}
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
