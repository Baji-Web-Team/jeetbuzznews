"use client"
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8 sm:py-12">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo with Link */}
        <Link href="/">
          <Image src="/jeetbuzzlogo.png" alt="logo" width={131} height={36} />
        </Link>
        
        {/* Links */}
        <nav className="mt-4 flex flex-col sm:flex-row gap-4 text-center sm:text-left">
          <Link href="/" className="text-white text-xs hover-effect mb-2 sm:mb-0">
            Home
          </Link>
          <Link href="/predictions" className="text-white text-xs hover-effect mb-2 sm:mb-0">
            Predictions
          </Link>
          <Link href="/videos" className="text-white text-xs h-12 hover-effect mb-2 sm:mb-0">
            Videos
          </Link>
          <Link
            href="/matchhighlights"
            className="text-white text-xs hover-effect mb-2 sm:mb-0"
          >
            Match Highlights
          </Link>
          <Link href="/livescore" className="text-white text-xs hover-effect mb-2 sm:mb-0">
            Live Score
          </Link>
          <Link href="/livestream" className="text-white text-xs hover-effect mb-2 sm:mb-0">
            Live Stream
          </Link>
          <Link href="/blog" className="text-white text-xs hover-effect mb-2 sm:mb-0">
            Blog
          </Link>
        </nav>

        {/* Subscribe input field */}
        <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-stretch">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full sm:w-[448px] bg-gray-700 text-white px-4 py-2 rounded-l-md mb-2 sm:mb-0"
          />
          <button className="w-full sm:w-auto bg-orange-400 text-white px-8 py-2 rounded-r-md focus:outline-none">
            Subscribe
          </button>
        </div>

        {/* Horizontal Bar */}
        <div className="mt-8 w-full border-t border-gray-600"></div>

        {/* Social Media Links */}
        <div className="mt-8 flex gap-4">
        <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <Image src="/facebook.svg" alt="logo" width={24} height={24} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <Image src="instagram.svg" alt="logo" width={24} height={24} />
          </Link>
          <Link
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <Image src="/twitter.svg" alt="logo" width={24} height={24} />
          </Link>
          <Link
            href="http://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <Image src="/pinterest.svg" alt="logo" width={24} height={24} />
          </Link>
          <Link
            href="http://telegram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <Image src="/telegram.svg" alt="logo" width={24} height={24} />
          </Link>
          <Link
            href="http://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <Image src="/youtube.svg" alt="logo" width={24} height={24} />
          </Link>
        </div>

        {/* Copyright, Privacy, Terms */}
        <div className="mt-8 text-sm text-center">
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <p>&copy; 2023 JeetBuzz News</p>
            <Link href="/privacy">Privacy & Policy</Link>
            <Link href="/terms">Terms & Condition</Link>
          </div>
        </div>
      </div>
      {/* Script tag for external widget.js file */}
      
    </footer>
    
  )
};

export default Footer;

