import Hero from "./homesectioncomponents/Hero";
import LatestBlogs from "./homesectioncomponents/LatestBlogs";
import MatchHiglights from "./homesectioncomponents/MatchHiglights";
import Predictions from "./homesectioncomponents/Predictions";
import Videos from "./homesectioncomponents/Videos";

export default function Home() {
  return (
    <main className="container flex  md:flex-col">
      <h1>test update</h1>
      <Hero />
      <Predictions />
      <Videos />
      <MatchHiglights />
      <LatestBlogs />
    </main>
  )
}
