import React from "react";
import BlogSection from "@/components/Blogs66";
import Scores from "@/components/SideScore";
import WideAds from "@/components/WideAds";
import { blogsSingle, blogsAll } from "@/constants";

const Page = () => {
  const pageTitle = "Blogs"; 

  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="container flex flex-col  mx-auto mt-12">
        <div className="flex xl:flex-row md:flex-col flex-col xl:gap-x-12 p-6">
          <BlogSection singleData={blogsSingle} allData={blogsAll} title={pageTitle} />
          <Scores />
        </div>
        <div className="w-full items-center p6">
          <WideAds />
        </div>
      </section>
    </main>
  );
};

export default Page;
