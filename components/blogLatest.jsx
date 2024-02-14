import React from "react";

const BlogLatest = ({ title, datePublished, publishedDuration }) => {
  return (
    <div className="flex-1 w-full relative flex flex-col items-start justify-start gap-[12px] text-left text-base text-neutral font-poppins">
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          {/* <h3 className="self-stretch relative leading-[22px] font-semibold">
            {title}
          </h3>
          <div className="relative text-3xs leading-[12px]">
            <span>{`${datePublished} - `}</span>
            <span className="font-medium text-forestgreen">
              {publishedDuration}
            </span>
          </div> */}
          <h3 className="mb-3 text-lg font-bold text-start text-heading1 dark:text-neutral-200">
            {title}
          </h3>
          <p className="mb-3 text-heading2 dark:text-neutral-200 text-start">
            <small>{datePublished} -</small>
            <small className="text-green1"> {publishedDuration}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogLatest;
