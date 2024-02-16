import React from 'react';

const Cards02 = ({ data }) => {
  return (
    <div className="mb-6 lg:mb-0">
      <div
        className="relative mb-3 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img
          src={data?.imagePath}
          className="w-full"
          alt={data?.title}
        />
        
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
        </a>
      </div>
      <h3 className="mb-3 text-lg font-bold text-start text-heading1 dark:text-neutral-200">
        {data?.title}
      </h3>
      <p className="mb-3 text-heading2 dark:text-neutral-200 text-start">
        <small>{data?.datePublished} -</small>
        <small className="text-green1"> {data?.publishedDuration}</small>
      </p>
    </div>
  );
};

export default Cards02;
