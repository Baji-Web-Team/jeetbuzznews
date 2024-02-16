import Hero from "./_components/Hero";
import LatestBlogs from "./_components/LatestBlogs";
import MatchHiglights from "./_components/MatchHiglights";
import Predictions from "./_components/Predictions";
import Videos from "./_components/Videos";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Hero />
      <Predictions />
      <Videos />
      <MatchHiglights />
      <LatestBlogs />
    </main>
  );
}
