import React from "react";
import BlogSection from "@/components/dyna66";
import Scores from "@/components/SideScore";
import WideAds from "@/components/WideAds";

const Page = ({ params }) => {
  const pageTitle = "Blogs"; // Set the title dynamically based on the page

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container flex flex-col items-center mx-auto mt-12">
        <div className="flex xl:flex-row md:flex-col flex-col items-center xl:gap-x-12 p-6">
          {/* Pass params to BlogSection component */}
          <BlogSection params={params} />
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
