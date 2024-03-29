import React from "react";
import BlogSection from "@/components/Blogs66";
import Scores from "@/components/SideScore";
import WideAds from "@/components/WideAds";
import { videosSingle, videosAll } from "@/constants";

const Page = () => {
  const pageTitle = "Videos"; // Set the title dynamically based on the page

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container flex flex-col  mx-auto mt-12">
        <div className="flex xl:flex-row md:flex-col flex-col  xl:gap-x-12 p-6">
          <BlogSection singleData={videosSingle} allData={videosAll} title={pageTitle} />
          <Scores />
        </div>
        <div className="w-full items-center p6">
          <WideAds />
        </div>
      </div>
    </main>
  );
};

export default Page;
