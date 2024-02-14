import React from "react";
import Cards from '@/components/cards01';
import { cardData } from '@/constants';

const Predictions = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-6 text-start text-3xl font-bold text-[heading1] dark:text-neutral-200">Predictions</h2>
        <div className="border-b-[3px] mb-6 border-linebreak "/>

        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          {/* Map through the cardData array and render Cards component for each item */}
          {cardData.map((data) => (
            <Cards
              key={data.id}  // Provide a unique key for each card
              title={data.title}
              datePublished={data.datePublished}
              publishedDuration={data.publishedDuration}
              imagePath={data.imagePath}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Predictions;
