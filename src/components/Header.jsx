import { useState } from "react";

import { navigation } from "../constants";
import logo from "../assets/logo.svg";

import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen((isOpen) => !isOpen);
  };

  return (
    <header className="py-5">
      <div className="flex items-center justify-between ">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>

        <nav className="hidden list-none gap-5 lg:flex">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                className="transition-colors hover:text-orange-300"
                href={item.url}
              >
                {item.title}
              </a>
            </li>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <form className="hidden sm:block">
              <input
                type="text"
                className="h-10 rounded-full px-16 text-sm shadow-lg focus:outline-none focus:ring focus:ring-amber-700 focus:ring-opacity-50"
                placeholder="Cappuccino"
              />
              <button type="submit">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl " />
              </button>
            </form>
          </div>
          <button className="relative z-10 hidden md:block">
            <IoCartOutline className="text-3xl" />
            <div className="absolute right-0 top-0 h-3 w-3 rounded-full border border-white bg-orange-300"></div>
          </button>
          <button onClick={toggleMenu}>
            <RxHamburgerMenu className="block text-2xl md:hidden" />
          </button>
        </div>
      </div>

      {isNavOpen && (
        <div
          className={`absolute inset-0 z-50 block h-full w-full bg-[#F6EBDA] md:hidden`}
        >
          <button className="absolute right-4 top-4" onClick={toggleMenu}>
            <IoMdClose className="block text-3xl md:hidden" />
          </button>
          <nav className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 list-none flex-col gap-4 text-center text-3xl uppercase">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  className="transition-colors hover:text-orange-300"
                  href={item.url}
                >
                  {item.title}
                </a>
              </li>
            ))}
            <div className="flex items-center justify-center space-x-6">
              <div className="relative">
                <form className="block sm:hidden">
                  <input
                    type="text"
                    className="h-10 rounded-full px-16 text-sm focus:outline-none focus:ring focus:ring-amber-700 focus:ring-opacity-50"
                    placeholder="Cappuccino"
                  />
                  <button type="submit">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl " />
                  </button>
                </form>
              </div>
              <button className="relative z-10 block md:hidden">
                <IoCartOutline className="text-3xl" />
                <div className="absolute right-0 top-0 h-3 w-3 rounded-full border border-white bg-orange-300"></div>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
