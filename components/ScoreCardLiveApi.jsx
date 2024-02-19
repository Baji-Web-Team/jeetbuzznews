"use client"
import React, { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import HeaderScore from "@/components/HeaderScore";

const ScoreCard = () => {
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    const apiUrl = "https://rest.entitysport.com/v2/matches/49689/live?token=568b09ee5227b045055e39889fd42b35";

    // Fetch data when the component mounts
    fetchData(apiUrl).then((data) => {
      if (data) {
        setScoreData(data.response);
      }
    });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="w-full dark:bg-[#121212] bg-scorebg">
      <div className="container p-8 mx-auto ">
        <div className="grid gap-6 lg:grid-cols-5 xl:gap-x-4">
          {/* Check if data is available before rendering */}
          {scoreData && <HeaderScore data={scoreData} />}
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;