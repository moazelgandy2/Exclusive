import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import heroBG from "../../assets/images/hero-bg.jpg";

export default function Header() {
  return (
    <section className="w-full relative">
      <Carousel className="overflow-hidden">
        <CarouselContent>
          <CarouselItem>
            <img
              alt="Hero"
              className="mx-auto lg:h-[400px] h-[500px] aspect-[2/1] rounded-b-xl object-cover"
              src={heroBG}
              width="100%"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className=" absolute container space-y-10 xl:space-y-16 top-1/2 transform -translate-y-1/2">
        <div>
          <h1 className="lg:leading-tighter bg-gradient-to-r from-[#FFBFCA] via-green-600 to-[#E8D7F9] bg-clip-text text-center text-transparent text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Exclusive, The E-commerce <br /> platform you wish
          </h1>
        </div>
      </div>
    </section>
  );
}
