"use client";
import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-zinc-800 text-white body-font">
      <div className="container mx-auto flex flex-wrap p-1 items-center">
        <div className="flex justify-between items-center w-full">
          {/* Hamburger Icon */}
          <button
            className="text-white focus:outline-none md:hidden"
            onClick={toggleDropdown}
          >
            {dropdownOpen ? (
              <span className="text-2xl" onClick={toggleDropdown}>
                &#10006;
              </span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/jeetbuzzlogo.png" alt="logo" width={131} height={36} />
          </Link>
          {/* Navigation Links */}
          <nav className={`md:flex md:items-center md:justify-end ${dropdownOpen ? "block" : "hidden"} w-full md:w-auto`}>
            <Link
              href="/"
              className="text-white text-sm hover-effect md:mx-3 my-1 md:my-0"
            >
              Home
            </Link>
            <Link
              href="/predictions"
              className="text-white text-sm hover-effect md:mx-3 my-1 md:my-0"
            >
              Predictions
            </Link>
            <Link
              href="/videos"
              className="text-white text-sm hover-effect md:mx-3 my-1 md:my-0"
            >
              Videos
            </Link>
            <Link
              href="/matchhighlights"
              className="text-white text-sm hover-effect md:mx-3 my-1 md:my-0"
            >
              Match Highlights
            </Link>
            <Link
              href="/livescore"
              className="text-white text-sm hover-effect md:mx-3 my-1 md:my-0"
            >
              Live Score
            </Link>
            <Link
              href="/livestream"
              className="text-white text-sm hover-effect md:mx-3 my-1 md:my-0"
            >
              Live Stream
            </Link>
            <Link
              href="/blog"
              className="text-white text-sm hover-effect md:mx-3 my-1 md:my-0"
            >
              Blog
            </Link>
          </nav>
          {/* Theme Switch and Additional Buttons */}
          <div className="flex justify-end items-center w-full md:w-auto">
            <ThemeSwitch />
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-sm mt-4 md:mt-0 md:ml-3">
              Search
            </button>
            {/* Add your language picker here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
