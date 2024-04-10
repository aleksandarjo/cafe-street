import { useRef } from "react";

import Button from "./Button";

import mug from "../assets/mug.svg";
import beansTop from "../assets/coffeeBeansTop.svg";
import beansBottom from "../assets/coffeeBeansBottom.svg";

import { IoCartOutline } from "react-icons/io5";
import { HiMiniStar } from "react-icons/hi2";
import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <section
      className="pb-32 pt-12 lg:pb-[450px] lg:pt-[100px]"
      ref={parallaxRef}
    >
      <img
        className="absolute -top-7 right-0 -z-10 block max-lg:hidden"
        src={beansTop}
        alt="coffee beans"
      />
      <img
        className="absolute -bottom-[20%] left-0 -z-10 block max-lg:hidden"
        src={beansBottom}
        alt="coffee beans"
      />
      <div className="container relative mx-auto">
        <div className="flex flex-col items-center justify-between max-lg:gap-20 lg:flex-row">
          <div>
            <h1 className="h1 text-center lg:text-left">
              Enjoy your <span className="text-primary">coffee</span> <br />{" "}
              before your activity
            </h1>
            <p className="txt my-10 text-center lg:text-left">
              Boost your productivity and build your <br /> mood with a glass of
              coffee in the morning
            </p>
            <div className="flex gap-8 max-lg:justify-center">
              <Button className="bg-black text-white" icon={<IoCartOutline />}>
                Order now
              </Button>
              <Button
                className="text-md px-2 font-bold text-primary "
                href="#ourProducts"
              >
                More menu
              </Button>
            </div>
          </div>
          <div className="relative max-w-[526px]">
            <img src={mug} alt="coffee mug" />

            <ScrollParallax isAbsolutelyPositioned>
              <div className="absolute -left-6 top-10 rounded-full bg-white px-10 py-2 shadow-2xl ring-[6px] ring-white/50 drop-shadow-2xl">
                <p className="font-bold">Cappuccino</p>
              </div>
            </ScrollParallax>

            <ScrollParallax isAbsolutelyPositioned>
              <div className="absolute -right-4 top-[30%] -translate-y-1/2 rounded-full bg-white px-8 py-3 shadow-2xl ring-[6px] ring-white/50 drop-shadow-2xl">
                <p className="flex items-center justify-center gap-2 font-bold">
                  4.8
                  <span className="text-yellow-400">
                    <HiMiniStar />
                  </span>
                </p>
              </div>
            </ScrollParallax>

            <ScrollParallax isAbsolutelyPositioned>
              <div className="absolute bottom-10 -rotate-1 rounded-full bg-white px-10 py-3 shadow-xl ring-[6px] ring-white/50 drop-shadow-2xl">
                <p className="font-bold">18K</p>
              </div>
            </ScrollParallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
