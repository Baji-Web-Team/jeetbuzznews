import React from "react";
import Cards02 from "@/components/cards02";

const BlogSection = ({ singleData, allData, title }) => {
  return (
    <div className="lg:basis-2/3 flex flex-col top-0 shrink-0">
      <div className="w-full relative flex flex-col items-start justify-start gap-[12px] mb-6">
        <h2 className="relative leading-[32px] font-semibold text-3xl">
          {title}
        </h2>
      </div>
      <div className="border-b-[3px] mb-6 border-linebreak " />
      <div className="w-full flex">
        {singleData.map((data, index) => (
          <Cards02 key={index} data={data} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
        {allData.map((data, index) => (
          <Cards02 key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
