import Button from "./Button";

import { IoCartOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section>
      <div>
        <div>
          <h1>Enjoy your coffee before your activity</h1>
          <p className="my-10">
            Boost your productivity and build your <br /> mood with a glass of
            coffee in the morning
          </p>
          <div className="flex">
            <Button className="bg-black text-white" icon={<IoCartOutline />}>
              Order now
            </Button>
            <Button
              className="text-md font-bold text-orange-300"
              href="#ourProducts"
            >
              More menu
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
