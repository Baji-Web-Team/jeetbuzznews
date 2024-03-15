import React from "react";
import Cards from "@/components/cards01";
import { cardData } from "@/constants";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import WideAds from "@/components/WideAds";

const Predictions = () => {
  return (
    <section className="container mt-12 mx-auto px-6">
      <div className="mb-32 text-center">
        <div className="w-full relative flex flex-col items-start justify-start gap-[12px] mb-6">
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <h2 className="relative leading-[32px] font-semibold text-3xl">
              Predictions
            </h2>
            <Link href="/predictions">
              <div className="flex flex-row items-center justify-start gap-[8px] text-[12px]">
                <button className="relative leading-[32px]">View all</button>
                <FaArrowRightLong  className="text-heading1 text-xl dark:text-neutral-200"/>
              </div>
            </Link>
          </div>
        </div>

        <div className="border-b-[3px] mb-6 border-linebreak " />

        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          {/* Map through the cardData array and render Cards component for each item */}
          {cardData.map((data) => (
            <Cards
              key={data.id} // Provide a unique key for each card
              title={data.title}
              datePublished={data.datePublished}
              publishedDuration={data.publishedDuration}
              imagePath={data.imagePath}
            />
          ))}
        </div>
        <WideAds />
      </div>
    </section>
  );
};

export default Predictions;
