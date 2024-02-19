import React from "react";
import BlogSection from "@/components/Blogs66";
import Scores from "@/components/SideScore33";
import WideAds from "@/components/WideAds";
import { blogsAll, blogsSingle } from "@/constants";

const Page = () => {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container flex flex-col items-center mx-auto mt-12">
        <div className="flex xl:flex-row md:flex-col flex-col items-center xl:gap-x-12 p-6">
          <div>
          <BlogSection title="Blogs" data={blogsSingle} />
          <BlogSection title="Blogs" data={blogsAll} />
          </div>
          <Scores />
        </div>
        <div className="w-full items-center p-6">
          <WideAds />
        </div>
      </div>
    </main>
  );
};

export default Page;
