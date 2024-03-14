import React from "react";
import MostRuns from "@/components/mostruns/MostRuns"
import TeamStandings from "./standings/Standings";

const SideScore = () => {
  return (
    <aside className="basis-1/3 flex flex-col">
      <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
        <div className="bg-[#20201f] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
          <div className="bg-orange1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
            <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-base leading-8 font-semibold relative">
              Standings
            </div>
          </div>
          <div className="p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
            <TeamStandings />
          </div>

        </div>
        <div className="bg-[#ffffff] rounded flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden shadow-md">
          <div className="bg-[#20201f] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
            <div className="bg-orange1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
              <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-base leading-8 font-semibold relative">
                Most Runs
              </div>
            </div>

            <MostRuns />
          </div>
        </div>
        <img
          className="self-stretch shrink-0 h-[300px] relative object-cover"
          src="/ads/ads01.png"
        />
        <img
          className="self-stretch shrink-0 h-[300px] relative object-cover"
          src="/ads/ads02.png"
        />
      </div>
    </aside>
  );
};

export default SideScore;
