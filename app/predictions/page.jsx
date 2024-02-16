import React from "react";
import BlogSection from "@/components/predictions/PredBlogs";
import Scores from "@/components/SideScore";
const page = () => {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container flex flex-col items-center mx-auto mt-12">
        <div className="flex xl:flex-row md:flex-col flex-col items-center xl:gap-x-12 p-10 bg-fuchsia-700">
          <BlogSection />
          <Scores />
        </div>
      </div>
    </main>
  );
};

export default page;
