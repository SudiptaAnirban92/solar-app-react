import React, { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { TbMenuDeep } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full h-[124px] flex py-6 justify-between items-center">
      <img src={logo} alt="logo" className="w-[148px] h-[63px]" />
      {/* Menu */}
      <ul className="list-none hidden lg:flex justify-end items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-primary uppercase text-lg cursor-pointer hover:underline underline-offset-8 hover:text-tertiary ${
              index === navLinks.length - 1 ? `mr-0` : `mr-6 xl:mr-14`
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile menu icon */}
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="flex lg:hidden flex-1 justify-end items-center text-primary active:text-tertiary"
      >
        {toggle ? <AiOutlineClose size={40} /> : <TbMenuDeep size={40} />}
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 absolute top-24 right-0 mx-4 my-2 min-w-[140px] rounded-xl lg:hidden bg-red-gradient sidebar z-10`}
      >
        <ul className="list-none flex flex-col justify-end items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`text-primary active:text-secondary uppercase text-lg cursor-pointer ${
                index === navLinks.length - 1 ? `mb-0` : `mb-4`
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
