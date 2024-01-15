import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="text-white bg-zinc-800 body-font items-center">
      <section className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
        <Link href="/">
          <Image
            src="/jeetbuzzlogo.png"
            alt="logo"
            width={131}
            height={36}
          />
        </Link>
        <nav className="md:mr-auto  md:ml-4  md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center justify-center text-base gap-7">
            <Link href="/" className="text-white text-xs hover-effect">Home</Link>
            <Link href="/predictions" className="text-white text-xs hover-effect">Predictions</Link>
            <Link href="/videos" className="text-white text-xs h-12 hover-effect">Videos</Link>
            <Link href="/matchhighlights" className="text-white text-xs hover-effect">Match Highlights</Link>
            <Link href="/livescore" className="text-white text-xs hover-effect">Live Score</Link>
            <Link href="/livestream" className="text-white text-xs hover-effect">Live Stream</Link>
            <Link href="/blog" className="text-white text-xs hover-effect">Blog</Link>
        </nav>
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0">
          Click Me
        </button>
      </section>
    </header>
  );
};

export default Navbar;
