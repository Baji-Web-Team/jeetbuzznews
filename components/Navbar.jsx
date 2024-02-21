"use client"
import { useState } from 'react';
import ThemeSwitch from '@/components/ThemeSwitch';
import Link from 'next/link';
import Image from 'next/image';

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
        <section className="container mx-auto flex px-2 items-center relative">
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

          {/* Logo */}
          <Link href="/">
            <Image src="/jeetbuzzlogo.png" alt="logo" width={131} height={36} />
          </Link>

          {/* ThemeSwitch, Language, and Search */}
          <div className="ml-auto flex items-center">
            <ThemeSwitch />
            <div className="relative inline-block text-white">
              <button className="text-xl focus:outline-none">🌐</button>
              {/* Dropdown for Language */}
              <div className="absolute hidden text-xs mt-2 bg-zinc-800 border border-gray-700 rounded-md">
                {/* Language options go here */}
                <div className="p-2">Bengali</div>
                {/* Add more language options as needed */}
              </div>
            </div>
            {/* Search Icon (Replace with actual functionality) */}
            <button className="text-white text-xl mx-2 focus:outline-none">
              🔍
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            className={`absolute left-0 top-full md:relative md:flex md:pl-4 md:border-l md:border-gray-700 flex-col md:flex-row items-start justify-center text-base gap-7 mt-4 md:mt-0 ${
              dropdownOpen ? 'block' : 'hidden md:flex'
            }`}
          >
            {/* Container for mobile menu links */}
            <div className="container bg-gray-800 p-4 rounded-md">
              <Link href="/" className="text-white text-xs hover-effect">
                Home
              </Link>
              <Link
                href="/predictions"
                className="text-white text-xs hover-effect"
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
              <Link
                href="/livescore"
                className="text-white text-xs hover-effect"
              >
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
            </div>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Navbar;
