"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import ThemeSwitch from "./ThemeSwitch";
import { menuLinkVariants, menuLinkArrowVariants } from "@/utils/variants";
import Image from "next/image";

const FlipNavWrapper = () => {
  return (
    <div className="bg-zinc-800 items-center justify-center xl:px-40 lg:px-20 md:px-10">
        <FlipNav />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-zinc-800 p-2 flex items-center justify-between relative z-50">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  return <Image src="/jeetbuzzlogo.png" alt="logo" width={173} height={80} />;
};

const NavLink = ({ text, path }) => {
  return (
    <Link href={path} passHref>
      <motion.div
        as="a"
        className="hidden lg:block h-[30px] overflow-hidden font-medium"
      >
        <motion.div whileHover={{ y: -30 }}>
          <span className="flex items-center h-[30px] text-gray-500">
            {text}
          </span>
          <span className="flex items-center h-[30px] text-orange1">
            {text}
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      <NavLink text="Home" path="/" />
      <NavLink text="Predictions" path="/predictions" />
      <NavLink text="Videos" path="/videos" />
      <NavLink text="Match Highlights" path="/matchhighlights" />
      <NavLink text="Live Score" path="/livescore" />
      <NavLink text="Live Stream" path="/livestream" />
      <NavLink text="Blog" path="/blog" />
    </div>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2text-gray-200 dark:text-gray-200 bg-clip-text text-transparent font-medium rounded-md whitespace-nowrap"
      >
        <ThemeSwitch />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 text-gray-200 dark:text-gray-200 font-medium rounded-md whitespace-nowrap"
      >
        Search
      </motion.button>
    </div>
  );
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white dark:bg-zinc-800 shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Home" path="/" />
      <MenuLink text="Predictions" path="/predictions" />
      <MenuLink text="Videos" path="/videos" />
      <MenuLink text="Match Highlights" path="/matchhighlights" />
      <MenuLink text="Live Score" path="/livescore" />
      <MenuLink text="Live Stream" path="/livestream" />
      <MenuLink text="Blog" path="/blog" />
    </motion.div>
  );
};

const MenuLink = ({ text, path }) => {
  return (
    <Link href={path} passHref>
      <motion.div
        as="a"
        variants={menuLinkVariants}
        className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
      >
        <motion.span variants={menuLinkArrowVariants}>
          <FiArrowRight className="h-[30px] text-gray-950 dark:text-gray-200" />
        </motion.span>
        <motion.div whileHover={{ y: -30 }}>
          <span className="flex items-center h-[30px] text-gray-500 dark:text-gray-200">
            {text}
          </span>
          <span className="flex items-center h-[30px] text-orange1">
            {text}
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default FlipNavWrapper;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};
