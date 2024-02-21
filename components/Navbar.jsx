"use client"
import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <>
      <header className="text-white bg-zinc-800 body-font items-center">
        <section className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
           {/* Hamburger Icon */}
           <button
            className="text-white focus:outline-none md:hidden"
            onClick={toggleDropdown}
          >
            {dropdownOpen ? (
              <span className="text-2xl" onClick={closeDropdown}>
                &#10006;
              </span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>


          <Link href="/">
            <Image src="/jeetbuzzlogo.png" alt="logo" width={131} height={36} />
          </Link>
          <nav className="md:mr-auto  md:ml-4  md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center justify-center text-base gap-7">
            <Link href="/" className="text-white text-xs hover-effect data-te-nav-item-ref data-te-nav-item-ref">
              Home
            </Link>
            <Link
              href="/predictions"
              className="text-white text-xs hover-effect data-te-nav-item-ref"
            >
              Predictions
            </Link>
            <Link
              href="/videos"
              className="text-white text-xs h-12 hover-effect"
            >
              Videos
            </Link>
            <Link
              href="/matchhighlights"
              className="text-white text-xs hover-effect"
            >
              Match Highlights
            </Link>
            <Link href="/livescore" className="text-white text-xs hover-effect">
              Live Score
            </Link>
            <Link
              href="/livestream"
              className="text-white text-xs hover-effect"
            >
              Live Stream
            </Link>
            <Link href="/blog" className="text-white text-xs hover-effect">
              Blog
            </Link>
          </nav>
          {/* Correctly use the ThemeSwitch component */}
          <ThemeSwitch />
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0">
            Click Me
          </button>
        </section>
      </header>
    </>
  );
};

export default Navbar;
