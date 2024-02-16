import React from "react";

const BlogLatest = ({ data }) => {
  return (
    <div className="flex-1 w-full relative flex flex-col items-start justify-start gap-[12px] text-left text-base text-neutral font-poppins">
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
         
          <h3 className="mb-3 text-lg font-bold text-start text-heading1 dark:text-neutral-200">
            {data.title}
          </h3>
          <p className="mb-3 text-heading2 dark:text-neutral-200 text-start">
            <small>{data.datePublished} -</small>
            <small className="text-green1"> {data.publishedDuration}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogLatest;
