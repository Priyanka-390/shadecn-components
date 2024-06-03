"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Corouselp() {
  return (
    <div className="pt-16">
      <h2 className="text-black text-5xl py-4 text-center font-bold">
        My_COROUSEl
      </h2>
      <Carousel className="w-full mx-auto max-w-[200px]">
        <CarouselContent className="flex justify-center pb-4 items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div>
                  <div className="flex aspect-square border-black border-[2px] items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
