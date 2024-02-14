import React from 'react';

const Cards01 = ({ title, datePublished, publishedDuration, imagePath }) => {
  return (
    <div className="mb-6 lg:mb-0">
      <div
        className="relative mb-3 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img
          src={imagePath}
          className="w-full"
          alt={title}
        />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
        </a>
      </div>
      <p className="mb-6 text-neutral-500 dark:text-neutral-200 text-start">
        <small>{datePublished} -</small>
        <small className="text-green-700"> {publishedDuration}</small>
      </p>
      <h3 className="mb-3 text-lg font-bold text-start">
        {title}
      </h3>
    </div>
  );
};

export default Cards01;
