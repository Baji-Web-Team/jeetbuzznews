import React from "react";
import { scoreCard } from "@/constants";
import HeaderScore from "@/components/HeaderScore";
const ScoreCard = () => {
  return (
    <div className="w-full dark:bg-[#121212] bg-scorebg">
      <div className="container p-8 mx-auto ">
        <div className="grid gap-6 lg:grid-cols-5 xl:gap-x-4">
          {scoreCard.map((data) => (
            <HeaderScore data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
