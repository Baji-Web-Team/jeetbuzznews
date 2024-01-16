import Hero from "./homesectioncomponents/Hero";
import LatestBlogs from "./homesectioncomponents/LatestBlogs";
import MatchHiglights from "./homesectioncomponents/MatchHiglights";
import Predictions from "./homesectioncomponents/Predictions";
import Videos from "./homesectioncomponents/Videos";

export default function Home() {
  return (
    <main className="container flex  md:flex-col">
      <Hero />
      <Predictions />
      <Videos />
      <MatchHiglights />
      <LatestBlogs />
    </main>
  )
}
