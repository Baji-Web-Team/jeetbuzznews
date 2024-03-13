import React from "react";
import MostRuns from "@/components/mostruns/MostRuns"

const SideScore = () => {
  return (
    <div className="basis-1/3 flex flex-col">
      <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
        <div className="bg-[#20201f] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
          <div className="bg-orange1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
            <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-base leading-8 font-semibold relative">
              Standings
            </div>
          </div>
          <div className="p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
            <div className="rounded border-solid border-[#ffffff] border p-2.5 flex flex-row items-center justify-between self-stretch shrink-0 h-11 relative overflow-hidden">
              <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                Select League
              </div>
              <svg
                className="shrink-0 w-4 h-4 relative overflow-visible"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_2_2147"
                  // style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2_2147)">
                  <path
                    d="M8.00002 10.0001L4.66669 6.66675H11.3334L8.00002 10.0001Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
              <div className="bg-neutral1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-sm leading-8 font-semibold relative">
                  #
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  1
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  2
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  3
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  4
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  5
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  5
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
              <div className="bg-neutral1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-sm leading-8 font-semibold relative">
                  Team
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-xs leading-8 font-medium relative">
                  HEA
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-xs leading-8 font-medium relative">
                  SIX
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-xs leading-8 font-medium relative">
                  PS
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-xs leading-8 font-medium relative">
                  STR
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-xs leading-8 font-medium relative">
                  MR
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-xs leading-8 font-medium relative">
                  HUR
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-0 items-center justify-start flex-1 relative">
              <div className="bg-neutral1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
            </div>
            <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
              <div className="bg-neutral1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-sm leading-8 font-semibold relative">
                  P
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  3
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  2
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  2
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  2
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  2
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  2
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
              <div className="bg-neutral1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-sm leading-8 font-semibold relative">
                  W
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  2
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  2
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  1
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  1
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  0
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  0
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
              <div className="bg-neutral1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-sm leading-8 font-semibold relative">
                  L
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  0
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  0
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  0
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  0
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  1
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  1
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
              <div className="bg-neutral1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-sm leading-8 font-semibold relative">
                  Pts
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-xs leading-8 font-semibold relative">
                  5
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-xs leading-8 font-semibold relative">
                  4
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-xs leading-8 font-semibold relative">
                  3
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-xs leading-8 font-semibold relative">
                  3
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-xs leading-8 font-semibold relative">
                  1
                </div>
              </div>
              <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-xs leading-8 font-semibold relative">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] rounded flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden shadow-md">
          <div className="bg-[#20201f] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
            <div className="bg-orange1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
              <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-base leading-8 font-semibold relative">
                Most Runs
              </div>
            </div>
            {/* <div className="p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
              <div className="rounded border-solid border-[#ffffff] border p-2.5 flex flex-row items-center justify-between self-stretch shrink-0 h-11 relative overflow-hidden">
                <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                  Select League
                </div>
                <svg
                  className="shrink-0 w-4 h-4 relative overflow-visible"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_2_2256"
                    // style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <rect width="16" height="16" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2_2256)">
                    <path
                      d="M8.00002 10.0001L4.66669 6.66675H11.3334L8.00002 10.0001Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative">
              <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
                <div className="bg-neutral1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-sm leading-8 font-semibold relative">
                    #
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                    1
                  </div>
                </div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                    2
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                    3
                  </div>
                </div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                    4
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                    5
                  </div>
                </div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs leading-8 font-normal relative">
                    5
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
                <div className="bg-neutral1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-sm leading-8 font-semibold relative">
                    Team
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="shrink-0 w-8 h-8 relative overflow-hidden">
                    <svg
                      className="h-[auto] absolute left-[0.09px] top-[2.4px] overflow-visible"
                      width="33"
                      height="28"
                      viewBox="0 0 33 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0928 23.8603C20.0928 23.8603 20.0767 24.8043 19.6622 25.2793C19.3742 27.3188 17.3261 28.1039 15.6472 27.2443C14.8181 26.8198 13.9694 25.7981 13.8386 24.2601C12.1841 24.8641 11.3213 26.9077 11.1839 27.2691C10.9605 27.8565 10.7451 27.5837 10.4316 27.2468C8.99449 25.7022 8.69843 24.3592 8.71492 23.0995C7.56598 23.6002 6.42822 24.2588 5.39566 25.124C5.0146 25.4433 4.56885 25.0071 4.87981 24.6192C4.91864 24.5707 6.89832 22.1288 11.7297 20.9191C6.72077 21.3601 3.54832 23.4358 3.49279 23.4765C3.00439 23.8354 2.62832 23.2309 3.06109 22.8939C5.74758 20.9421 9.03417 19.9805 12.2909 19.6714C8.11237 19.6623 4.05524 21.5923 3.92268 21.6558C3.88407 21.6746 3.84949 21.6867 3.81598 21.6942C2.09141 22.2801 0.593216 21.4826 0.593216 19.4963L0.593216 6.98038C0.593216 5.3257 1.84981 3.64431 3.40162 3.05027C4.35694 2.61506 5.578 2.16208 7.06588 1.69442C7.85683 1.40889 8.65098 1.44655 9.28556 1.75772C9.4013 1.4141 9.72683 1.08048 10.0556 1.00612C12.0597 0.553037 14.1886 0.398356 16.3718 0.398356C18.5439 0.398356 21.0572 0.662399 22.5463 0.982399C23.0163 1.08336 23.3148 1.40867 23.4286 1.76601C24.0624 1.45697 24.8544 1.42038 25.6434 1.70506C27.1312 2.1724 28.352 2.59187 29.3075 3.02633C30.856 3.61889 32.116 5.28867 32.116 6.94687V18.9533C32.116 19.8581 31.5433 21.0455 30.6301 21.5443C31.0246 21.809 31.4248 22.0974 31.8296 22.4117C32.2275 22.7206 31.8093 23.285 31.3979 22.9943C31.3952 22.9924 29.1011 21.3765 26.0108 20.5679C28.1148 21.3483 30.3978 22.5994 32.2607 24.4617C32.6163 24.8172 32.1559 25.319 31.7709 24.9957C31.7709 24.9957 30.532 23.9554 28.557 22.9232C27.4746 22.3575 26.1789 21.7982 24.7508 21.4123C26.5912 22.2522 28.7502 23.6035 30.7994 25.7772C31.1449 26.1438 30.6439 26.6369 30.2826 26.2858C30.2826 26.2858 29.5924 25.6154 28.386 24.7674C27.2576 23.9741 25.6835 23.0297 23.8046 22.3305C23.6824 23.5647 23.366 25.0453 22.6632 26.0664C22.4799 26.3328 22.1996 26.3179 22.0457 26.0335C21.5917 25.1948 20.9469 24.336 20.0928 23.8598"
                        fill="white"
                      />
                      <path
                        d="M16.297 20.6422C8.62725 19.6897 3.39598 23.095 3.27364 23.1868C8.77704 19.1885 16.1715 19.9905 16.1715 19.9905C10.8578 17.8851 3.76087 21.3308 3.76087 21.3308C5.22385 20.5251 6.5647 19.9447 7.78279 19.5368C8.49747 17.8639 9.55906 16.8354 9.55906 16.8354C9.55906 16.8354 8.65842 16.7696 6.83183 18.2539C7.5663 15.1095 10.0017 13.2987 10.0017 13.2987C10.0017 13.2987 8.72683 12.6977 8.50002 11.9652C7.35832 12.154 7.14364 11.3478 7.08502 11.1441C7.12938 11.2385 7.29066 11.4017 7.87555 11.4017C8.8264 11.4017 9.21459 10.8133 10.3941 10.8133C11.2114 10.8133 11.9104 10.9694 12.5075 11.2263C13.1025 10.9456 14.7252 10.3147 16.2794 10.9081C18.5198 9.98081 19.6369 11.3467 19.6369 11.3467C19.6369 11.3467 20.5126 10.7881 21.4886 10.8635C22.4647 10.9389 22.9225 11.3969 23.7578 11.3969C24.2906 11.3969 24.5237 11.025 24.5237 11.025C24.5237 11.025 24.37 12.1028 23.5875 12.0842C23.4542 12.4212 23.0852 13.1001 22.1227 13.7914C24.4575 15.5927 24.5078 18.0027 24.5078 18.0027C24.5078 18.0027 23.8737 17.1523 23.0735 16.9359C23.9507 17.8128 24.0697 18.8479 24.0835 19.2709C26.0479 19.5477 28.7023 20.4427 31.6068 22.6981C31.6068 22.6981 26.4982 19.0881 21.1594 19.8652C23.5406 19.9404 28.5284 21.2437 32.0041 24.7181C32.0041 24.7181 26.9494 20.4668 20.9338 20.542C22.7134 20.8928 26.8075 22.0716 30.5352 26.026C30.5352 26.026 27.7115 23.2775 23.4787 21.8291C23.4787 21.8291 23.3818 24.3821 22.3643 25.8608C21.1223 23.5663 19.6718 23.2977 19.6718 23.2977C19.6718 23.2977 19.9403 24.3722 19.3226 25.1243C19.148 26.0913 18.463 27.1926 17.0006 27.1538C14.223 27.08 14.1624 23.819 14.1624 23.819C13.5601 23.8908 12.0003 24.3529 10.827 27.1287C9.19161 25.5152 8.96917 23.7912 9.11353 22.5412C7.75757 23.0755 6.38991 23.8171 5.16247 24.8456C5.16247 24.8456 8.25108 20.993 16.2965 20.6422"
                        fill="white"
                      />
                      <path
                        d="M6.47897 18.172C6.9096 16.3282 7.97748 14.6295 9.36769 13.3614C8.95333 13.1048 8.52673 12.7824 8.27875 12.3541C7.46301 12.394 6.94748 11.9765 6.73673 11.2449C6.61056 10.7011 6.83609 10.6162 7.41333 10.9903C7.47024 11.0154 7.61301 11.0395 7.87577 11.0395C8.48131 11.0395 8.97758 10.7489 9.57205 10.5761L9.57205 4.03877C9.57205 2.83706 8.5979 2.22345 7.3962 2.66802C5.93024 3.12824 4.73035 3.57217 3.79673 3.99983C2.59503 4.44441 1.62088 5.77898 1.62088 6.98068L1.62088 19.4966C1.62088 20.6983 2.59503 21.3121 3.79673 20.8674C5.57492 19.9921 6.7895 19.4504 7.44014 19.2423C7.4712 19.2308 7.50216 19.2188 7.5328 19.2061C7.83141 18.5488 8.17811 17.995 8.48407 17.5678C7.66216 18.0028 6.95471 18.6223 6.23769 19.2049C6.35003 18.724 6.33822 18.6072 6.47897 18.1722V18.172ZM5.59439 6.59026C5.89003 6.48813 6.1296 6.73004 6.1296 7.13058L6.1296 15.7707C6.1296 16.1712 5.89003 16.5787 5.59439 16.6809C5.29875 16.783 5.05907 16.5411 5.05907 16.1406L5.05907 7.50047C5.05907 7.09994 5.29875 6.69239 5.59439 6.59026ZM18.3018 1.48856L18.3018 10.2675C17.6369 10.1611 16.9315 10.2686 16.273 10.5212C15.7953 10.3587 15.3169 10.2978 14.8635 10.3004V8.66579C14.4761 8.68313 14.091 8.70728 13.7084 8.73781V10.4355C13.2031 10.5478 12.781 10.7087 12.5002 10.8321C11.8911 10.5925 11.1924 10.4514 10.3942 10.4514C10.3522 10.4514 10.3109 10.4524 10.2702 10.4543V1.9993C11.3878 1.7876 12.5359 1.6327 13.7084 1.53887V5.2459C14.091 5.21526 14.4761 5.19121 14.8635 5.17377V1.46685C15.3624 1.44451 15.8652 1.43313 16.3715 1.43313C17.0211 1.43313 17.6649 1.45175 18.3018 1.48856ZM22.4385 1.99292L22.4385 10.6963C21.4874 10.4021 20.7049 10.3996 19.6971 10.9011L19.6561 10.8671C19.4502 10.6997 19.2301 10.5682 19.0002 10.469L19.0002 1.53611C20.1728 1.62866 21.3208 1.78239 22.4385 1.99292ZM24.8973 19.0525C25.0441 16.4753 23.785 14.7533 22.7029 13.8005C23.325 13.319 23.6572 12.7796 23.8321 12.4259C24.5203 12.2713 24.8158 11.5461 24.8427 11.17C24.9002 10.364 24.4191 10.6189 24.2651 10.8074C24.1565 10.9405 23.9249 11.0346 23.7579 11.0346C23.5316 11.0346 23.3383 10.9954 23.1369 10.9338L23.1369 4.04941C23.1369 2.8477 24.1111 2.23398 25.3127 2.67866C26.7788 3.13877 27.9785 3.54813 28.9122 3.97579C30.1139 4.42047 31.088 5.74526 31.088 6.94696V18.9533C31.088 20.0726 29.9977 21.103 29.1191 20.6277C27.5615 19.7849 26.1306 19.3057 24.8973 19.0522V19.0525ZM27.1146 6.55643C26.819 6.4543 26.5793 6.69622 26.5793 7.09675V15.6222C26.5793 16.0227 26.819 16.4093 27.1146 16.4856C27.4102 16.5619 27.6498 16.299 27.6498 15.8984V7.46664C27.6498 7.06611 27.4102 6.65856 27.1146 6.55643Z"
                        fill="#00694E"
                      />
                      <path
                        d="M17.8285 11.1824C17.5018 11.1874 17.2574 11.2782 17.1361 11.3307C19.2399 12.7461 19.2192 15.4678 19.2192 15.4678C19.2192 15.4678 18.4993 12.1938 16.2302 11.5193C14.8073 11.0963 13.9023 11.557 13.5413 11.8112C15.4223 13.2621 15.8483 15.744 15.8483 15.744C15.8483 15.744 14.2479 10.9144 10.0014 11.498C9.72737 11.5357 9.42915 11.6669 9.10295 11.7808C9.68837 11.8451 10.5726 12.0691 11.2946 12.7911C9.24575 14.0059 8.76354 15.7476 8.65946 16.2964C8.63861 16.4066 8.63303 16.4688 8.63303 16.4688C8.63303 16.4688 8.76447 16.3933 9.00969 16.2964C9.50309 16.1011 10.457 15.818 11.7275 15.8852C11.4849 16.0168 11.2599 16.1546 11.0511 16.2964L11.909 16.2968L12.5519 16.2964C12.2752 15.9335 12.1199 15.6437 12.1199 15.6437C12.1199 15.6437 12.4594 16.0846 13.693 16.2964H13.6974C13.696 16.2962 13.6944 16.296 13.693 16.2957L16.5348 16.2961L19.3766 16.2957C19.3049 16.057 19.2521 15.8813 19.2521 15.8813C21.0625 15.4396 21.4884 14.9595 21.4884 14.9595C21.4884 14.9595 21.3446 15.7766 21.023 16.2964L22.1374 16.2959C21.9593 16.0591 21.7528 15.829 21.5136 15.6185C22.045 15.6845 22.7264 16.0516 23.1319 16.2964L23.3871 16.296C23.1225 15.7089 22.2889 14.112 20.754 13.3245C21.498 12.5052 22.3918 12.1348 22.9894 11.9696C22.4279 11.7904 21.8829 11.4088 21.3127 11.3723C20.3114 11.3082 19.4107 11.8507 19.4107 11.8507C18.8049 11.311 18.2487 11.1759 17.8286 11.1823L17.8285 11.1824ZM23.1319 16.2965C23.3443 16.4247 23.4811 16.5192 23.4811 16.5192C23.4811 16.5192 23.4503 16.4365 23.387 16.2965H23.1319ZM21.023 16.2965C20.9645 16.3912 20.8999 16.4761 20.8294 16.5443C20.4429 16.9177 19.9286 16.8862 19.9286 16.8862L20.074 17.5247C20.793 17.6126 21.5692 18.0125 21.9968 19.1845C22.2231 19.1738 22.4752 19.17 22.7507 19.177C22.6875 18.8696 22.6022 18.5598 22.4896 18.2548C22.9071 18.3301 23.1894 18.7127 23.1894 18.7127C23.1894 18.7127 22.9897 17.4288 22.1376 16.2965H21.023L21.023 16.2965ZM16.5348 16.2961L13.6974 16.2965C14.2525 16.3911 14.9881 16.4392 15.9548 16.3799L16.3662 17.8478C16.3662 17.8478 17.3994 17.5098 17.8506 18.7129C18.3158 18.5821 19.2243 18.4206 19.8621 18.5814C19.9185 17.6039 19.1476 17.3595 19.1476 17.3595C19.3998 17.3467 19.5957 17.4124 19.7477 17.5219C19.6868 17.3257 19.5024 16.7143 19.3767 16.2965L16.5347 16.2962L16.5348 16.2961ZM12.5519 16.2965C12.552 16.2967 12.5521 16.2968 12.5523 16.297L11.909 16.2968L11.0511 16.2972C9.6427 17.2584 8.97291 18.4311 8.65453 19.3411C11.2232 18.65 13.2016 18.6964 14.5635 18.9308C15.0179 18.4725 15.4675 18.1875 15.8692 18.0058C15.8645 18.0058 15.7074 17.5454 15.7074 17.5454C15.7074 17.5454 15.2525 17.8372 14.4645 17.6865C13.6341 17.5276 12.9608 16.8326 12.5523 16.2965H12.5519V16.2965ZM17.9783 16.4218C18.4741 16.418 18.939 16.5867 19.1595 16.7862C18.2987 16.7667 17.4685 16.8092 16.6116 17.0922C16.9559 16.6019 17.4825 16.4256 17.9783 16.4218V16.4218ZM20.0511 17.8791C20.2695 18.2812 20.2757 18.7692 20.2757 18.7692C20.1281 19.1843 19.9331 19.4999 19.7403 19.7348L20.6096 19.7347C20.6195 19.6579 20.6271 19.5814 20.6326 19.5054L20.6492 19.361C20.6492 19.361 20.8975 19.2916 21.3508 19.2373C21.2173 18.809 20.8831 18.1719 20.0511 17.8791L20.0511 17.8791ZM16.7356 18.2154C16.5547 18.2132 16.3389 18.2795 16.0835 18.4497C15.3503 18.9385 15.2816 19.0832 15.2816 19.0832C16.2787 19.3375 16.7863 19.6567 16.7863 19.6567C16.7811 19.6827 16.7762 19.7089 16.7719 19.7348L18.0228 19.7346C17.8565 19.5473 17.6977 19.3432 17.5498 19.1264C17.5075 18.8445 17.2784 18.2218 16.7356 18.2154L16.7356 18.2154ZM18.023 19.7348L16.7719 19.7352C16.6847 20.2518 16.7394 20.7518 16.9133 21.1647C16.2158 21.1715 15.5285 21.2034 14.8542 21.2591C14.9179 21.7075 15.2898 21.8319 15.2898 21.8319C16.5075 21.1729 18.6103 20.856 18.6103 20.856L18.6793 20.3496C18.453 20.1778 18.2327 19.9703 18.0245 19.7361L18.023 19.7348ZM20.6096 19.7348C20.5779 19.9789 20.5221 20.2267 20.4326 20.4725C20.3195 20.7831 20.3582 20.8345 20.1726 21.0721C20.536 21.108 20.8645 21.1627 21.2189 21.2131C21.1609 21.2866 20.9541 21.5445 20.8545 21.6157L19.0027 20.9315V20.3477C19.0027 20.3477 19.3676 20.1909 19.7403 19.7355L20.6096 19.7348V19.7348ZM14.3301 21.3074C13.5425 21.3876 12.7737 21.5001 12.0279 21.6428C11.9141 21.6674 11.7994 21.6931 11.6838 21.7203C11.5349 22.3533 11.6417 22.842 11.7868 23.1732L12.2065 23.1729C12.3181 22.7562 12.5719 22.1917 13.1462 21.9074C13.1247 22.5514 13.3525 22.9398 13.6166 23.1732H13.6168H14.205C14.205 23.1734 14.205 23.1736 14.2049 23.1739H14.2052C14.2273 23.043 14.2707 22.8788 14.3541 22.6981C14.363 22.863 14.3754 23.0214 14.3912 23.1732C14.6792 25.9328 16.0865 26.6067 17.2168 26.5206C18.4066 26.4301 18.8269 25.3689 18.8269 25.3689C18.8269 25.3689 18.5601 25.1021 17.6091 25.1021C17.05 25.1021 16.8746 25.3689 16.6079 25.4694C16.3412 25.5699 15.9991 25.4944 15.6318 25.1272C15.2359 24.7313 15.0843 23.8187 14.995 23.1732C14.9554 22.8874 14.9281 22.6541 14.8973 22.5414C14.8137 22.2359 14.4498 21.5345 14.33 21.3074L14.3301 21.3074ZM14.2049 23.1739L13.6168 23.1732C13.8158 23.3491 14.0357 23.4368 14.1851 23.4797C14.1851 23.4797 14.1734 23.3613 14.2049 23.1739L14.2049 23.1739ZM21.7823 21.3225C22.1606 21.3868 22.5227 21.5353 22.8891 21.6154C22.8299 22.3055 22.7061 22.8332 22.7061 22.8332C22.7061 22.8332 22.4393 22.0234 22.0219 21.8824C22.1695 22.4161 22.1543 22.8436 22.0729 23.1733H22.0727C21.9239 23.7755 21.5541 24.0508 21.5541 24.0508C21.5541 24.0508 21.5703 23.635 21.4732 23.1733L21.8729 23.1731L21.4733 23.1729C21.3992 22.8204 21.2591 22.4412 20.9955 22.1994C21.4975 21.9087 21.6817 21.6154 21.7824 21.3225L21.7823 21.3225ZM21.8729 23.1731L22.0727 23.1732C22.0727 23.1732 22.0727 23.1731 22.0727 23.1731H21.8729ZM10.7887 21.9535C10.577 22.0137 10.3633 22.0783 10.1486 22.1478C10.3031 22.6926 10.5619 23.0503 10.5619 23.0503C10.5619 23.0503 10.5411 22.5021 10.7887 21.9535V21.9535ZM12.2084 23.1739L11.7887 23.1743C11.9355 23.5098 12.1218 23.6842 12.1218 23.6842C12.1218 23.6842 12.1303 23.4652 12.2084 23.1739L12.2084 23.1739Z"
                        fill="#E4BB85"
                      />
                      <path
                        d="M19.9694 16.0102L20.3617 15.8594C20.3617 15.8594 20.3869 16.4788 19.9694 16.619C20.0196 16.363 19.9694 16.0102 19.9694 16.0102ZM15.0483 16.7601L14.5651 16.6943C14.5651 16.6943 14.6811 17.2781 15.3402 17.4442C15.1489 17.1273 15.0483 16.7601 15.0483 16.7601ZM20.1452 21.7405L18.7768 21.1317C17.0522 21.3988 16.3666 21.8061 16.3666 21.8061C16.3666 21.8061 16.1213 22.3778 16.9015 22.8572C16.9015 22.8572 16.8911 21.9254 17.2211 21.6166L17.5689 21.8421L17.8602 21.438L18.208 21.6541L18.4806 21.3252L18.8378 21.5789L19.1479 21.4286C19.1479 21.4286 19.7589 21.7482 19.5427 22.5847C20.1443 22.2651 20.1452 21.7405 20.1452 21.7405ZM18.3439 24.3921C19.1035 24.0249 19.054 22.9231 19.054 22.9231C19.7119 24.333 18.8271 24.9352 18.8271 24.9352C18.8271 24.9352 18.168 24.7341 17.5843 24.7592C17.0006 24.7844 16.4825 25.1265 16.4825 25.1265C16.4825 25.1265 15.4634 24.8969 16.0838 22.8854C16.0838 22.8854 16.0993 24.2137 16.8247 24.5177L17.0257 24.1505L17.2422 24.4423L17.4838 24.05L17.7495 24.3669L18.0675 23.9998L18.3439 24.3921Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="shrink-0 w-8 h-8 relative overflow-hidden">
                    <svg
                      className="h-[auto] absolute left-[-0.49px] top-[0.48px] overflow-visible"
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.838 1.2526C24.6068 -0.220041 28.0575 0.871557 28.1065 0.887909L28.3157 0.957774L29.7937 3.74202C32.0711 4.46149 32.7633 5.92422 32.962 7.44295C33.074 8.29918 32.9268 9.0241 32.7524 9.53398C32.6637 9.79263 32.5681 9.99678 32.4942 10.1365C32.4169 10.2837 31.9487 10.964 31.9487 10.964L31.7148 10.6964C31.7034 10.6831 31.4626 10.408 31.4363 10.3848C31.3957 10.3486 31.3244 10.2916 31.2183 10.2287C31.0082 10.1033 30.6529 9.94872 30.1143 9.89074C29.5856 9.83425 29.1278 9.8288 28.7413 9.87637L26.07 19.4461C26.2023 19.4921 26.9173 19.789 27.0353 19.8251C27.4242 19.945 28.3459 20.1358 28.3459 20.1358C28.3459 20.1358 25.9293 22.4216 21.7274 21.1506L21.7195 31.301L11.3243 31.301C8.58563 31.301 6.86176 29.2997 6.86176 26.7072V22.5217H4.76578V21.1536H0.0911819C0.0911819 21.1536 0.451414 19.8786 0.661013 19.3093C0.865656 18.7538 1.1694 18.0269 1.53607 17.4943C2.03208 16.7748 2.66087 16.1178 3.20097 15.7184C3.20048 14.1392 3.22575 7.82003 3.22971 6.13432C3.07016 6.0258 2.90268 5.89994 2.74659 5.75922C2.24712 5.30831 1.60991 4.33662 1.41616 4.00414C1.29328 3.79305 1.02422 3.17665 0.808673 2.67371C0.582227 2.146 0.01091 0.769483 0.01091 0.769483H13.3886C15.32 0.769483 17.1098 1.79419 17.6995 3.63648C18.685 2.24113 19.456 1.7927 20.838 1.2526Z"
                        fill="#FE5000"
                      />
                      <path
                        d="M24.8925 1.04332C23.7964 1.06353 22.4788 1.2414 21.0694 1.75871C19.0442 2.5015 18.1791 3.70859 17.261 5.35267V4.99653C17.261 2.74396 15.4855 1.41494 13.3875 1.41494H0.973722C0.973722 1.41494 1.77648 3.34749 1.97171 3.68344C2.16099 4.00899 2.75699 4.905 3.17717 5.28456C3.39569 5.48127 3.65222 5.65241 3.87322 5.7847C3.87421 6.63055 3.83544 15.7499 3.84535 16.0643C3.35083 16.3487 2.62534 17.0491 2.06542 17.8612C1.428 18.7856 0.940262 20.5124 0.940262 20.5124H7.50432V26.7086C7.50432 28.9849 8.97763 30.6602 11.3243 30.6602H21.0775L21.0852 20.3165C21.2552 20.4012 21.4121 20.4689 21.5529 20.517C25.0011 21.6894 27.1041 20.3443 27.1041 20.3443C27.1041 20.3443 26.5302 20.2197 26.1735 20.1028C25.8578 19.9992 25.3806 19.7923 25.3806 19.7923L28.3033 9.39385C28.8286 9.27543 29.4586 9.2675 30.1731 9.3443C31.4134 9.47759 31.8981 10.0682 31.8981 10.0682C31.8981 10.0682 32.6122 9.0227 32.4145 7.51636C32.2316 6.12054 31.6221 4.82692 29.4151 4.20655L27.9314 1.41285C27.9314 1.41285 26.7187 1.00907 24.8918 1.04277L24.8925 1.04332ZM6.06252 21.1509L5.93787 21.8857H6.12756L6.18872 21.4629H6.19106L6.35907 21.8857H6.43495L6.61147 21.4629H6.61381L6.66723 21.8857H6.85769L6.74697 21.1509H6.55728L6.39934 21.5435L6.24992 21.1509H6.06255H6.06252ZM5.406 21.1517V21.3128H5.56394V21.8857H5.7544V21.3128H5.91157V21.1517H5.40599H5.406Z"
                        fill="#4F2C1D"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28.6055 5.06808C28.6055 5.06808 28.6526 5.54921 28.0233 6.1572C27.2949 6.86131 25.8639 7.65461 25.8639 7.65461C25.8639 7.65461 27.9673 7.27506 29.6917 7.58524C30.9656 7.81466 31.3813 8.55396 31.3813 8.55396C31.3813 8.55396 31.7346 7.48119 30.9329 6.51644C30.1817 5.61165 28.6055 5.06808 28.6055 5.06808Z"
                        fill="#CDA077"
                      />
                      <path
                        d="M3.15171 2.80627C3.15171 2.80627 3.60825 3.79807 4.11022 4.25097C4.50018 4.60277 5.26459 4.94388 5.26459 4.94388V16.9831C5.26459 16.9831 4.4646 17.351 4.18066 17.6334C3.49587 18.3142 3.24154 19.1207 3.24154 19.1207H8.89743V26.7091C8.89743 28.2922 9.82026 29.2687 11.3246 29.2687H19.6856V20.526H12.1468C12.1468 20.526 13.5672 21.7712 14.6638 22.2122C15.6404 22.6052 17.3108 22.7426 17.3108 22.7426V27.1316H11.984C11.43 27.1316 11.2709 26.8937 11.2709 26.1282V19.1206H13.256C14.2322 19.1206 14.6813 18.9625 15.1823 18.5136C15.6838 18.0126 15.8683 17.485 15.8683 16.5083V15.0915H17.179C17.179 15.0915 17.4165 16.194 17.7342 16.8312C18.2297 17.8222 19.5737 18.9967 19.5737 18.9967L19.59 12.9547H15.8682V12.7449C15.8682 11.6895 15.6048 11.1346 14.8927 10.6599C15.5785 10.2115 15.8682 9.68448 15.8682 8.81338V4.99644C15.8682 3.67741 14.8927 2.80615 13.3884 2.80615H3.15164L3.15171 2.80627ZM7.63901 4.94392H12.4648C13.2566 4.94392 13.4938 5.15547 13.4938 5.84126V8.65482C13.4938 9.41988 13.3097 9.6048 12.5709 9.6048H7.63925V4.94388L7.63901 4.94392ZM26.2771 5.4007C26.0005 5.39935 25.6572 5.40403 25.3907 5.42779C24.912 5.4709 24.1736 5.62058 24.1736 5.62058L25.8289 6.30965L26.7634 5.40921C26.7634 5.40921 26.5538 5.40206 26.2771 5.4007ZM7.63901 11.7424H12.3859C13.3096 11.7424 13.4939 11.9007 13.4939 12.745V12.9548H11.2711C9.87275 12.9548 8.89727 13.9574 8.89727 15.3557V16.6657V16.9831H7.63917V11.7422L7.63901 11.7424ZM12.2472 15.0917H13.4937V16.0858C13.4937 16.772 13.2564 16.9831 12.4121 16.9831H11.2709V16.6657V15.989C11.2709 15.2765 11.4821 15.0917 12.2472 15.0917V15.0917Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M25.0273 2.22641C23.7643 2.22091 22.387 2.47539 20.8968 3.15859C19.9459 3.59412 19.7501 3.95528 19.7501 3.95528C19.7501 3.95481 21.2409 3.67411 23.5911 3.83218C26.6944 4.04079 28.1037 4.82731 28.5525 5.0686L27.1765 2.48115C26.5019 2.32695 25.7852 2.22975 25.0272 2.22642L25.0273 2.22641ZM24.0796 5.64928C22.4137 5.84054 19.1131 6.84919 17.2611 8.67959V8.81353C17.2611 9.49534 17.1263 10.1201 16.7958 10.6756C16.9548 10.9555 17.0654 11.2514 17.1388 11.562H19.2493C19.4356 11.065 19.6515 10.5508 19.8764 10.1406C21.0295 8.03717 22.7706 6.50352 24.0799 5.64931L24.0796 5.64928ZM27.1046 9.5862C27.1046 9.5862 24.714 9.83179 21.9204 11.1424C21.6236 11.2816 21.3471 11.4233 21.092 11.562V11.5644L21.0873 17.8589C22.8612 19.0892 24.2772 19.4832 24.2772 19.4832L27.1051 9.5862H27.1046Z"
                        fill="#FE5000"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="shrink-0 w-8 h-8 relative overflow-hidden">
                    <svg
                      className="h-[auto] absolute left-[1.41px] top-[1.8px] overflow-visible"
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.5155 27.4702H15.5119C14.4094 27.4702 13.3915 27.8368 12.5701 28.4559C12.6651 28.7726 13.0255 29.1907 13.7436 29.2068C14.4736 29.2233 15.1018 29.0775 15.5119 29.0746H15.5155C15.9256 29.0775 16.554 29.2233 17.2839 29.2068C18.002 29.1907 18.3625 28.7726 18.4573 28.4559C17.6359 27.8368 16.6181 27.4702 15.5155 27.4702Z"
                        fill="#0064A2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.0633 13.6958C20.172 15.1295 18.9163 16.649 17.2733 15.9766C18.8288 16.0981 19.9461 14.5208 21.7532 13.2763C23.4072 12.1371 24.4139 11.9509 25.6916 12.2646C24.9463 12.1764 23.4209 12.6667 22.0633 13.6958ZM8.96419 13.6958C7.60662 12.6667 6.08125 12.1764 5.3359 12.2646C6.6136 11.9509 7.62032 12.1371 9.27434 13.2763C11.0813 14.5208 12.1988 16.0981 13.7541 15.9766C12.1111 16.649 10.8555 15.1295 8.96419 13.6958ZM27.0223 11.1464C28.2296 10.4363 30.0539 8.84626 30.1177 6.06418C30.1979 2.57567 27.4139 0.731573 24.883 0.799157C25.3379 1.02546 26.3855 1.75544 26.6782 3.16716C27.0286 4.85701 26.211 6.58053 24.3759 7.12133C23.7565 7.30386 23.1772 7.33829 22.4381 7.31077C22.8952 7.80562 23.221 8.74488 23.3335 9.74776C22.8609 8.5854 21.9969 7.34277 21.3258 7.24178C20.683 7.16319 20.2875 7.11877 19.4708 7.08754C17.6073 7.01637 16.0823 7.05132 15.5137 7.65919C14.9452 7.05132 13.4203 7.01637 11.5566 7.08754C10.7401 7.11877 10.3445 7.16319 9.70173 7.24178C9.03062 7.34277 8.16662 8.5854 7.69405 9.74776C7.80656 8.74488 8.13232 7.80562 8.58941 7.31077C7.85034 7.33829 7.27088 7.30386 6.65162 7.12133C4.81635 6.58053 3.99894 4.85701 4.34928 3.16716C4.64189 1.75544 5.68957 1.02546 6.14448 0.799157C3.61354 0.731573 0.829536 2.57567 0.909664 6.06418C0.973536 8.84626 2.79792 10.4363 4.00522 11.1464C3.55632 11.2187 1.9137 11.676 1.11638 11.0041C1.61277 13.1874 4.00778 15.1052 6.36541 15.1463C6.19466 15.5806 5.85968 17.8513 6.35133 19.2459C6.8431 20.6403 10.1195 21.4873 10.8138 23.4577C11.3895 23.1208 12.0839 22.9385 12.5468 22.8552C12.4389 21.2849 12.0518 19.7274 11.4436 18.4313C11.3008 18.1272 11.1472 17.8398 10.9839 17.5678C10.9351 17.5707 10.8864 17.5737 10.837 17.5737C9.4456 17.5737 8.31779 16.4313 8.31779 15.0221C8.31779 14.8505 8.33443 14.6829 8.36643 14.5208C11.5472 16.0749 12.8585 20.0095 12.9852 23.2223C12.3781 23.2629 10.8701 23.6341 10.378 24.3977C9.88579 25.1614 10.3402 26.3321 10.7026 26.9327C11.1346 27.6488 11.8153 28.141 12.2162 28.141C12.232 28.141 12.2557 28.1393 12.2777 28.137C12.8679 27.684 13.5538 27.353 14.2988 27.1783C14.1866 26.917 13.9845 26.5169 13.7047 26.2224C12.9903 25.4351 12.0225 25.5212 11.7839 26.3823C11.6101 26.1359 11.463 25.1733 11.9247 24.8442C12.4234 24.4888 13.7909 24.7451 14.6205 27.113C14.9106 27.0639 15.208 27.037 15.5119 27.037L15.5137 27.0331L15.5155 27.037C15.8194 27.037 16.117 27.0639 16.407 27.113C17.2366 24.7451 18.604 24.4888 19.1028 24.8442C19.5645 25.1733 19.4174 26.1359 19.2436 26.3823C19.0049 25.5212 18.0371 25.4351 17.3228 26.2224C17.0429 26.5169 16.8408 26.917 16.7287 27.1783C17.4738 27.353 18.1596 27.684 18.7498 28.137C18.7718 28.1393 18.7955 28.141 18.8112 28.141C19.2123 28.141 19.8928 27.6488 20.325 26.9327C20.6873 26.3321 21.1417 25.1614 20.6496 24.3977C20.1574 23.6341 18.6494 23.2629 18.0423 23.2223C18.1691 20.0095 19.4803 16.0749 22.6611 14.5208C22.693 14.6829 22.7097 14.8505 22.7097 15.0221C22.7097 16.4313 21.5819 17.5737 20.1906 17.5737C20.1412 17.5737 20.0924 17.5707 20.0436 17.5678C19.8802 17.8398 19.7266 18.1272 19.584 18.4313C18.9756 19.7274 18.5885 21.2849 18.4807 22.8552C18.9436 22.9385 19.638 23.1208 20.2136 23.4577C20.908 21.4873 24.1844 20.6403 24.6761 19.2459C25.1678 17.8513 24.8327 15.5806 24.6621 15.1463C27.0197 15.1052 29.4147 13.1874 29.911 11.0041C29.1138 11.676 27.4711 11.2187 27.0223 11.1464Z"
                        fill="#0064A2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="shrink-0 w-8 h-8 relative overflow-hidden">
                    <svg
                      className="h-[auto] absolute left-[0.1px] top-[5.1px] overflow-visible"
                      width="33"
                      height="22"
                      viewBox="0 0 33 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.4675 0.734034C9.89401 0.710608 6.50167 1.6243 4.16487 3.80584C4.15263 3.66062 4.0492 2.6698 4.0492 2.6698L3.07712 3.89403L2.90139 4.11409C2.0817 5.14848 1.19744 6.42524 0.850463 8.05379C0.759261 8.47826 0.712554 8.89048 0.712554 9.30372C0.712554 10.0778 0.877162 10.8597 1.2175 11.7399C0.932731 11.6832 0.595734 11.6184 0.595734 11.6184L1.05063 12.4941C2.442 15.1738 4.88776 17.1051 8.16992 18.2032C9.48453 18.6434 10.2264 18.7003 10.6457 18.7439C8.11649 17.8201 6.40374 15.9971 5.32376 14.2814C5.54286 14.3272 5.76197 14.3718 5.76197 14.3718L5.44083 13.5532C5.17389 12.8751 5.04599 11.9838 5.04599 11.2655C5.04599 10.898 5.07713 10.5752 5.14498 10.3495C5.47975 9.23807 8.22803 8.01497 9.86523 8.225C9.71731 8.24177 9.36029 8.31213 9.36029 8.31213C9.36029 8.31213 10.7784 8.37357 11.974 8.66957C13.1696 8.96558 14.6233 9.39452 15.8957 9.95752C16.4607 10.2077 18.1446 11.0567 19.3914 11.9067L19.179 11.5404C19.179 11.5404 19.2769 11.5616 19.5471 11.7448C19.9642 12.0263 20.3902 12.5624 20.4236 12.6641C20.4269 12.7333 20.3735 12.7534 20.0688 12.8193C19.6673 12.9065 19.2446 12.9791 19.2446 12.9791C19.2446 12.9791 19.6495 13.3901 20.2712 13.5979C20.8918 13.8057 21.3011 13.8235 21.6915 13.7811C22.0319 14.2927 22.658 14.8567 23.8092 15.1595C25.5332 15.6119 26.9902 15.2142 28.0301 14.7819C28.2492 15.25 28.3671 15.6923 28.3671 16.061C28.3671 16.1816 28.3549 16.2944 28.3293 16.3983C28.237 16.7781 27.533 17.3813 27.0692 17.56C26.6054 17.7399 26.4797 17.7834 26.3329 17.8348C26.5042 17.98 26.939 18.1934 27.1348 18.2649C27.3984 18.3609 27.7176 18.4201 27.89 18.4503C28.6841 18.5877 29.4882 18.5185 30.1889 18.2906C31.0877 17.9979 31.7516 17.4271 32.1075 16.6396C32.38 16.0364 32.4857 15.4467 32.4857 14.8948C32.4857 13.4706 31.7816 12.2955 31.4113 11.7761C31.6137 11.5739 31.7271 11.3114 31.7371 11.0121C31.7371 10.9976 31.7382 10.9841 31.7382 10.9696C31.7382 10.1576 30.9819 9.24823 30.2166 8.68528C30.0042 7.77604 29.4626 6.87459 28.5128 5.86703C28.0645 5.39006 27.5207 4.9265 26.9467 4.43723C26.4218 3.98931 24.6923 2.78631 24.2296 2.14286C24.2296 2.14286 24.5488 2.85776 24.6445 3.0722C23.4845 2.28023 21.5781 1.33414 20.3992 0.867238L18.7965 0.231656C18.7965 0.231656 19.1913 0.742132 19.5049 1.14649C18.1803 0.72314 16.6865 0.409256 16.1227 0.333304L16.1405 0.336546C14.9571 0.162286 13.1197 0.0673417 12.547 0.107555C12.6893 0.202507 13.0575 0.45272 13.4679 0.730857"
                        fill="white"
                      />
                      <path
                        d="M30.4514 10.4773C30.19 9.96347 29.8341 9.8797 29.8341 9.8797L29.8185 10.4818C29.8185 10.4818 29.6806 9.96236 29.605 9.70768C29.3425 8.82973 28.5695 7.65016 27.672 6.8168C27.7332 6.94414 27.7754 7.06924 27.7721 7.17424C27.2872 6.57775 25.8991 5.44396 25.8991 5.44396L26.0704 5.96896C26.0704 5.96896 25.9792 5.84832 25.8791 5.7288C24.9604 4.63296 22.419 3.3049 21.6471 2.90382L21.9853 3.45452C21.9252 3.42096 21.8407 3.37629 21.7317 3.32159L22.0742 3.9069L20.2825 3.06016L21.2478 3.08813C20.9753 2.96079 20.6495 2.8167 20.288 2.66701C19.4005 2.35425 18.4362 2.10403 17.2762 1.8851C17.0704 1.84603 16.8602 1.81247 16.6489 1.78345C16.8379 1.90632 17.1683 2.35983 17.3218 2.50281C13.538 1.97111 10.4226 2.23026 7.98277 3.1585C6.37115 3.9069 4.88972 5.07198 3.54056 6.73741L3.50052 6.50731C3.49825 6.50974 3.49719 6.51137 3.49497 6.5138L3.36373 5.76427C2.82319 6.47693 2.16034 7.64759 1.95009 8.46637C1.94781 8.47285 1.93229 8.53559 1.93118 8.54232C1.74544 9.2695 1.72765 9.90954 1.83887 10.5306C1.99235 11.1997 2.29154 11.8576 2.69197 12.596L2.60967 12.5792C2.65082 12.6585 2.6942 12.7378 2.73757 12.8194L2.32272 12.7358C3.02119 13.8271 4.11787 15.0414 5.32796 15.8925C4.54385 15.0491 3.97106 14.2124 3.63071 13.2653L3.67519 13.2742C3.64294 13.1971 3.61291 13.12 3.58511 13.0419L4.16235 13.1603C4.11715 12.99 4.08155 12.8279 4.0504 12.6658C3.77905 11.4742 3.85355 10.2502 4.19051 9.39102C4.46525 8.68581 5.57413 7.11327 7.43264 6.62691L7.1557 7.04914C7.27582 7.01453 7.39928 6.98438 7.52829 6.95755L7.09008 7.53841C8.61825 6.90059 10.7804 6.68502 13.4075 7.45913L13.145 7.49488C13.224 7.52617 13.3007 7.55745 13.373 7.59318L12.9237 7.70488C13.72 7.89812 14.7143 8.18296 15.1603 8.33823C15.6341 8.50355 16.2136 8.7761 16.7841 9.07099C16.6407 8.96711 16.5561 8.90567 16.5561 8.90567C17.3925 9.16483 17.9531 9.71105 18.5526 10.0283L18.4492 9.83948C19.31 10.3131 20.0864 10.5834 20.4056 10.9174C20.4078 10.9206 20.41 10.9231 20.4134 10.9263C21.0396 11.4524 21.3632 11.8848 21.4622 12.0266C21.49 12.3047 21.5412 12.5449 21.6346 12.7661C21.3721 11.5608 21.6458 11.2078 21.7414 10.9923C21.7681 10.932 21.807 10.8761 21.8493 10.827C22.2452 10.2159 23.1428 9.87411 23.9113 9.8998C24.7088 9.92777 25.4795 10.1489 26.2526 10.6113C26.1091 10.4483 26.1013 10.2249 26.1503 10.0607C26.157 10.0372 26.1658 10.0149 26.1747 9.99362C26.1836 9.94563 26.1958 9.89979 26.2148 9.85734C26.2581 9.75904 26.346 9.69538 26.4372 9.65517C26.3827 9.47086 26.1892 9.08102 25.7276 9.02964C25.4318 8.99721 25.2905 9.10672 25.285 9.11229C25.2894 9.10662 25.3806 8.94809 25.5352 8.88107C25.3795 8.79059 24.9802 8.87864 24.9702 8.88188C24.988 8.8754 25.3561 8.52667 25.9223 8.70427C26.0357 8.74002 26.1347 8.79586 26.2259 8.84613C26.1469 8.7322 26.0969 8.66406 26.0947 8.66294C26.1614 8.66537 26.5885 8.78917 26.8187 9.27954C26.871 9.389 27.0022 9.67496 27.0745 9.82911C27.2046 10.105 27.456 10.4937 27.7163 10.7607C28.14 11.1964 28.606 11.3483 29.1343 11.3449C29.6749 11.3417 29.874 10.9819 29.8762 10.9674C29.8739 10.9807 29.8895 11.231 29.7294 11.4198C29.8484 11.355 29.9974 11.1997 30.0375 11.0914C30.0909 10.9439 30.0541 10.6546 30.0008 10.5943C30.0286 10.6256 30.3722 10.9294 30.3011 11.2366C30.2888 11.2924 30.2699 11.3583 30.2254 11.4265C30.2755 11.4611 30.3355 11.5035 30.4023 11.5493L30.3088 11.4153L30.6136 11.5907C30.7281 11.4589 30.7003 10.9607 30.4501 10.4669"
                        fill="#EFAB00"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.9173 2.31567C17.0653 2.41174 17.31 2.73365 17.4645 2.90456C15.8296 2.67447 14.3182 2.59179 12.9333 2.64766C15.5437 2.63955 20.2674 3.997 22.1883 5.31505C23.7832 6.40973 23.5196 6.6653 21.8101 5.89901C18.0087 4.19223 14.93 4.0975 14.93 4.0975L12.8244 5.37983C12.8244 5.37983 16.3591 5.84452 18.8036 7.15811C20.9079 8.28852 20.1874 8.34885 18.0998 7.5982C14.9678 6.47113 11.5866 6.27119 10.0295 6.47449C11.4142 6.52475 13.8433 6.84399 14.792 7.16346C14.5517 7.23714 13.9378 7.50974 13.6442 7.57899C14.1702 7.54438 20.0325 9.35058 21.6374 11.4661C21.643 11.3991 21.6546 11.3276 21.669 11.2517C21.8603 10.3793 22.9803 9.8724 23.9113 9.90367C24.7087 9.9305 25.4792 10.1514 26.2521 10.615C26.1076 10.4519 26.1009 10.2274 26.1498 10.0632C26.1932 9.91797 26.2875 9.80962 26.342 9.79958C26.372 9.7571 26.4067 9.72158 26.4457 9.69369C26.4079 9.53172 26.221 9.08737 25.7272 9.03375C25.4302 9.00132 25.289 9.11062 25.2845 9.11507C25.289 9.11101 25.3802 8.95198 25.5337 8.88495C25.3791 8.79447 24.9798 8.8826 24.9687 8.88585C24.9876 8.87936 25.3555 8.52973 25.9216 8.70846C26.035 8.74308 26.1342 8.80006 26.2255 8.84921C26.1465 8.73639 26.0951 8.66691 26.0929 8.66691C26.1607 8.66934 26.5878 8.79336 26.818 9.2826C26.8703 9.39319 27.0016 9.67802 27.0738 9.83216C27.204 10.1092 27.4556 10.4966 27.7158 10.7647C28.0751 11.1333 28.4654 11.2986 28.8992 11.3388C28.6645 11.2762 28.5108 11.1413 28.5397 10.9983C28.8701 11.138 29.1871 11.196 29.3516 10.804C29.5151 10.4119 29.4317 9.08689 27.8946 7.39791C27.9113 7.49062 27.9516 7.65259 27.9538 7.8246C27.5534 7.25269 26.7393 6.39482 26.2366 6.00162C26.2577 6.10327 26.3413 6.4397 26.3825 6.57934C26.1144 6.29897 25.361 5.65758 25.361 5.65758L25.5167 6.13565C25.5167 6.13565 25.4335 6.02529 25.3423 5.91582C24.5026 4.9161 22.1837 3.70413 21.4785 3.33765L21.7877 3.84032C21.733 3.81103 21.6551 3.76963 21.556 3.72044L21.8683 4.25438L20.2325 3.48141L21.1143 3.50688C20.8662 3.39089 20.5683 3.25912 20.2378 3.12278C19.4282 2.83683 18.5474 2.60806 17.4885 2.40927C17.3005 2.37351 17.1092 2.34201 16.9167 2.31632L16.9173 2.31567ZM14.5489 3.22325C15.0294 3.28802 15.5752 3.37717 15.9445 3.44531C17.872 3.80051 19.5548 4.36261 21.0472 5.20707L21.2141 5.07839C19.8328 4.37014 18.2602 3.83414 16.5407 3.51822C16.0024 3.41871 15.0918 3.27573 14.549 3.22334L14.5489 3.22325Z"
                        fill="#785100"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.2198 0.676802C14.4856 0.856638 14.8526 1.1484 15.0628 1.31931C10.4949 0.803217 6.24065 2.41616 3.78495 5.21768L3.74046 4.6882L3.67595 3.92194C3.55694 4.07386 3.41658 4.24587 3.26533 4.43801C2.57354 5.3104 1.64706 6.56702 1.30118 8.19111C0.994223 9.62983 1.26003 10.8709 1.99965 12.429L1.45928 12.3201C1.71731 12.8149 2.01561 13.2961 2.35706 13.7597L2.35795 13.7606C3.68481 15.5634 5.64892 17.0916 8.29277 18.1103C8.79104 18.3024 9.20389 18.4409 9.56424 18.5459C9.98133 18.6677 10.3292 18.745 10.6618 18.8064C7.37308 17.6045 5.42692 15.8002 4.4748 13.7606L4.47346 13.7597C4.45911 13.7272 4.44362 13.6952 4.42904 13.6627L4.90061 13.7596L4.99493 13.7601C4.56579 12.6531 4.46693 11.0355 4.69153 10.2625C4.83055 9.78334 5.04966 9.29541 5.35885 8.919C5.5635 8.6688 5.86157 8.42841 6.12406 8.29214L5.95589 8.55799L5.41669 9.33901C6.27531 8.52918 8.60175 7.5862 11.0921 7.7515C11.3056 7.76487 11.5205 7.78634 11.734 7.81763L10.7442 8.0379L10.5062 8.09018C10.7531 8.07226 11.1499 8.1105 11.6326 8.19428C12.7426 8.38641 14.8379 9.00411 16.1126 9.56822C16.8289 9.88545 17.8477 10.3532 19.0599 11.1798C18.9286 10.9352 18.8143 10.6897 18.6853 10.4685C19.3159 10.9488 20.0866 11.573 20.2668 11.7652C20.6973 12.2209 21.0732 12.6646 21.0543 12.9304C21.0354 13.1963 20.4757 13.1692 20.4479 13.1994C21.1608 13.4206 21.7292 13.4193 21.9538 13.2785C21.638 12.9132 21.5123 12.5337 21.4622 12.031C21.2398 11.7149 19.9031 9.95003 16.5565 8.91C16.5565 8.91 16.8223 9.10435 17.2149 9.39255C16.6121 9.10882 15.8914 8.80634 15.2063 8.56731C14.6613 8.37741 13.2977 7.99384 12.4791 7.82069L13.3736 7.59833C11.7775 6.81985 8.39633 7.09253 6.85586 7.85318L7.52897 6.96315C5.55591 7.36863 4.58035 8.71685 4.23777 9.61727C3.86407 10.598 3.80959 12.0399 4.22665 13.3825L3.62918 13.261C3.69035 13.4307 3.75953 13.597 3.83516 13.76V13.7609C4.27227 14.7037 4.95381 15.5515 5.85806 16.4306C4.75808 15.7649 3.71817 14.7607 2.93973 13.7609L2.93884 13.76C2.66193 13.4034 2.41727 13.0486 2.21596 12.7089L2.73648 12.8148C1.92121 11.3125 1.52282 10.1407 1.92989 8.53664C1.93103 8.53023 1.94681 8.4687 1.94902 8.46206C2.16034 7.64103 2.82634 6.46381 3.36912 5.75212L3.53951 6.73286C7.02524 2.42683 11.3961 1.47037 16.6146 2.38634C16.5057 2.26354 16.2565 1.82813 15.9474 1.54327C18.1118 1.54814 21.3827 3.11603 21.9845 3.4489L21.5107 2.67817C23.1301 3.4031 24.8003 4.32107 25.8624 5.27282C25.8057 5.11867 25.7101 4.76905 25.6711 4.66963C25.8569 4.81149 27.2182 5.98123 27.9624 6.67937C29.1257 7.77181 29.644 8.98143 29.8909 9.7423C29.9076 9.73224 29.8567 9.34688 29.8522 9.26868C30.4751 9.90874 31.1544 10.8057 30.734 11.5407C30.7173 11.572 30.6984 11.6021 30.6762 11.6323L30.3091 11.4209L30.4061 11.5594C30.5151 11.7147 31.1135 12.6094 31.3804 13.76V13.7608C31.5639 14.5517 31.5917 15.4632 31.1958 16.339C30.8288 17.1488 30.0133 17.6415 29.1569 17.8068C28.7176 17.8905 28.1759 17.935 27.8534 17.8814C27.9546 17.8982 28.8276 17.5016 29.1791 16.818C29.4394 16.312 29.3804 15.4945 29.1635 14.9092C29.0367 14.5685 28.8732 14.212 28.6786 13.9048C28.6141 13.8021 28.5852 13.7596 28.5852 13.7596C27.5453 12.2237 25.8591 11.4665 25.0416 11.2665C23.9628 11.0018 23.1442 11.3338 22.924 12.0431C22.924 12.0431 22.8975 12.2238 22.903 12.3054C22.9064 12.2997 22.9117 12.2944 22.9173 12.2888C23.0007 12.2676 23.1097 12.2575 23.2309 12.2553C23.4623 12.2521 23.7359 12.2763 23.9494 12.3009C24.2887 12.34 24.9393 12.4584 25.244 12.5176C24.9749 12.3757 24.1899 12.1501 23.884 12.1177C23.8384 12.1137 23.7937 12.109 23.7492 12.1034C23.5657 12.0855 23.4 12.0752 23.2621 12.0931C23.281 12.0842 23.291 12.0797 23.291 12.0797L23.3777 11.9703C23.7292 11.595 24.3834 11.5672 24.954 11.708C25.6079 11.87 26.7802 12.3782 27.6677 13.35C27.1528 13.5644 25.8924 13.9375 24.4854 13.4751C23.292 13.083 23.2242 12.3514 23.2264 12.3179C23.2231 12.3614 22.9352 13.2693 24.2754 13.7597C24.2754 13.7597 24.3064 13.7724 24.3809 13.7981C25.6532 14.2282 26.6556 13.9845 27.2427 13.761L27.245 13.7601C27.4285 13.6898 27.5722 13.6207 27.6712 13.5738L27.8069 13.5077C27.8747 13.5892 27.9401 13.673 28.0035 13.7601C28.0035 13.7601 28.0424 13.8118 28.1259 13.938C27.2127 14.3524 25.7913 14.7722 24.0686 14.3187C23.5426 14.1801 23.1324 13.9793 22.8132 13.7615L22.8118 13.7606C22.0277 13.2256 21.7977 12.5933 21.7944 12.5609L21.8011 12.7316C21.8044 12.764 21.8433 13.2501 22.266 13.7606L22.2669 13.7615C22.5794 14.1391 23.101 14.5298 23.9752 14.7588C25.8181 15.2435 27.3418 14.675 28.3039 14.2293C28.6899 14.9062 29.0302 15.8155 28.8467 16.5728C28.731 17.0497 28.1638 17.5884 27.5254 17.91C27.6088 17.9491 27.8502 18.007 28.0081 18.0338C29.2905 18.2516 31.0779 17.9838 31.745 16.5071C32.1877 15.5286 32.1354 14.5679 31.903 13.7615V13.7606C31.6794 12.9898 31.2915 12.3598 31.0101 11.989C31.0078 11.8717 30.9634 11.6246 30.9856 11.6123C31.8409 11.1142 30.9823 9.76726 29.8601 9.01106C29.7077 8.15431 29.2103 7.26963 28.2282 6.22745C27.393 5.33944 26.2254 4.50703 24.9418 3.25924C24.9852 3.38658 25.1976 4.08247 25.1821 4.06572C24.5238 3.39201 21.7977 1.93895 20.2629 1.33016C20.3907 1.49551 20.6832 1.89315 20.8968 2.2104C19.6244 1.55135 16.9829 0.944808 16.0877 0.825302C15.4859 0.72142 14.8775 0.706665 14.2192 0.676514L14.2198 0.676802ZM13.6043 3.91336C12.222 3.92328 10.8538 4.09884 9.76573 4.43702C10.3307 4.29181 10.8157 4.20489 11.2161 4.14347C13.0645 3.85527 16.7372 4.27059 18.1843 4.88382C18.2344 4.84248 18.3712 4.74106 18.4446 4.7042C17.1827 4.16196 15.3816 3.9006 13.6042 3.91337L13.6043 3.91336ZM25.6051 8.65541C25.3816 8.65541 25.1725 8.72891 24.9845 8.873C24.9767 8.8786 24.9712 8.88325 24.9712 8.8873C24.979 8.8839 25.1545 8.84485 25.3191 8.84485C25.4158 8.84485 25.4883 8.85957 25.5339 8.88194C25.4439 8.92215 25.358 8.99923 25.2879 9.10758L25.287 9.11651C25.2881 9.11539 25.3947 9.02804 25.6216 9.02804C25.656 9.02804 25.6916 9.03069 25.7283 9.03475C26.2288 9.08948 26.419 9.54501 26.4535 9.71701C26.4991 9.68905 26.5514 9.67457 26.6114 9.67457C26.7571 9.67457 26.9042 9.76165 26.9598 9.79967C27.0432 9.92143 27.1233 10.0601 27.2067 10.2009C27.2012 10.2001 27.1943 10.2 27.1876 10.2C27.1431 10.2 27.0999 10.2156 27.0621 10.2469C27.1555 10.3519 27.2134 10.459 27.2178 10.4614L26.9642 10.4279C26.952 10.5697 27.0452 10.7485 27.2476 10.8144C27.3054 10.8334 27.361 10.8425 27.4144 10.8425C27.4678 10.8425 27.5192 10.8336 27.567 10.8135C27.6404 10.8939 27.7203 10.9721 27.8015 11.0414L27.7962 11.0454C27.7038 11.128 27.6149 11.2049 27.4603 11.2049H27.4514C27.4413 11.2049 27.4325 11.2051 27.4224 11.2076C27.438 11.2132 27.618 11.3475 27.6191 11.3483C28.1997 11.7862 28.4755 12.0889 28.7202 12.3559C28.788 12.4307 28.8528 12.5011 28.9217 12.5726L28.924 12.5708C28.7282 12.2033 28.3577 11.7933 27.7882 11.3219C27.8538 11.3313 27.9206 11.3354 28.0062 11.3354C28.0507 11.3354 28.0954 11.3335 28.1432 11.3327L28.1864 11.3318C28.4911 11.5183 28.8005 11.62 29.1064 11.6311C28.8929 11.6704 28.7247 11.6736 28.678 11.6736H28.6726C28.6604 11.6736 28.6523 11.6739 28.6513 11.6772C28.6536 11.6772 28.6613 11.6794 28.6736 11.6834C28.8949 11.7549 29.112 11.792 29.32 11.792C29.558 11.792 29.7758 11.744 29.9659 11.649C30.2095 11.5284 30.274 11.3742 30.3041 11.2402C30.333 11.1117 30.3076 10.8995 30.0162 10.6102C30.0096 10.6031 30.0049 10.599 29.9993 10.599C30.0516 10.6571 30.0907 10.9462 30.0362 11.0936C29.9973 11.1997 29.8505 11.355 29.7315 11.4243C29.826 11.3126 29.875 11.1651 29.8783 10.9842C29.8783 10.9761 29.8781 10.9731 29.8747 10.9699C29.8747 10.9743 29.6792 11.3429 29.1353 11.3461H29.1176C28.5503 11.3461 28.1065 11.1618 27.7184 10.763C27.4459 10.4837 27.1999 10.0939 27.0764 9.83141C27.0375 9.74763 26.9821 9.62699 26.9309 9.5164C26.8864 9.42034 26.8453 9.33208 26.8219 9.28182C26.5906 8.79144 26.1688 8.6688 26.0955 8.6688H26.0932C26.0987 8.67215 26.1457 8.73585 26.228 8.84753L26.2066 8.83591C26.1232 8.79011 26.0276 8.73787 25.9241 8.70544C25.8174 8.67197 25.7097 8.6554 25.6052 8.6554L25.6051 8.65541ZM26.3445 9.79788C26.29 9.8068 26.1946 9.91517 26.1501 10.0637C26.1012 10.2268 26.109 10.4511 26.2524 10.6142C25.4794 10.1517 24.7087 9.93079 23.9124 9.90286C22.9804 9.87157 21.8615 10.3785 21.6702 11.2509C21.5868 11.653 21.6569 11.9358 21.6569 11.9358C21.6569 11.9358 21.688 11.701 21.7192 11.6038C21.856 10.8666 22.8414 10.1653 23.9614 10.1888C24.9724 10.2089 25.4284 10.4131 26.8487 11.1436L27.0734 11.1941C26.8565 11.0176 26.6416 10.8601 26.427 10.7228C26.2079 10.496 26.1323 10.1922 26.3447 9.79786L26.3445 9.79788ZM4.90014 13.761L5.00335 13.782C5.00002 13.7755 4.99711 13.7689 4.9949 13.761H4.90013H4.90014Z"
                        fill="#003875"
                      />
                      <path
                        d="M10.319 4.71631L9.54045 8.01943H10.3088L8.73386 14.5406H7.97221L7.13138 17.9565H21.8847L22.7135 14.5415H20.8984L19.1811 10.3618L20.6884 9.06557C21.2319 9.41119 21.7426 9.78314 22.2197 10.1844L22.5365 10.1106C22.0167 9.70907 21.4304 9.32399 20.8059 8.96415L21.9016 8.02184H23.5454L24.3427 4.71872L10.3191 4.71648L10.319 4.71631Z"
                        fill="#EFAB00"
                      />
                      <path
                        d="M10.5645 4.97974L9.90077 7.71873H10.6847L8.97008 14.8399H8.20132L7.51976 17.6558H21.6533L22.3229 14.8408H20.6959L18.823 10.2768L21.7868 7.71965H23.2963L23.9801 4.98065L10.5648 4.97976L10.5645 4.97974ZM25.6876 7.87726C25.1893 7.85384 24.7578 8.07722 24.502 8.38663C24.2973 8.63461 24.2715 9.01795 24.3983 9.27934C24.3538 9.00008 24.4853 8.74652 24.6443 8.55328C24.8501 8.30418 25.275 8.14201 25.6943 8.1297C26.1747 8.11633 26.7451 8.27157 27.0543 8.6748C26.8296 8.21348 26.4038 7.91323 25.6876 7.87859V7.87724L25.6876 7.87726Z"
                        fill="white"
                      />
                      <path
                        d="M2.85463 3.74805C2.17619 4.61598 1.03972 5.92268 0.671585 7.74341L0.69962 8.33019C1.04997 6.61675 2.15215 4.64846 2.85508 3.74805H2.85464H2.85463ZM10.967 5.4894L10.5614 7.20948H11.3644L9.39444 15.3471H8.59497L8.1501 17.1352H13.215L13.651 15.3471H12.8413L13.0415 14.5406L15.2637 12.6314L16.3902 15.3427H15.1569L14.721 17.1353H21.263L21.699 15.3427H20.3452L18.2098 10.1241L21.6256 7.20968H22.8944L23.2983 5.48949H16.8216L16.399 7.20968H17.1397L14.2168 9.68949L14.8143 7.20968H15.3424L15.7651 5.48949H10.9671L10.967 5.4894ZM26.5736 7.74085C26.9384 7.87377 27.4102 8.18788 28.0208 9.09825L28.1988 9.3708C28.4446 9.75505 28.6501 9.99857 29.0138 10.0879C28.7313 10.0187 28.6223 9.63195 28.3843 9.26222L28.2041 8.98521C27.5579 8.02681 26.8128 7.75423 26.5736 7.74085H26.5736ZM16.1395 18.9686C15.6468 18.9694 15.0649 19.1907 15.0593 19.767C15.0549 20.1803 15.3974 20.4138 15.7622 20.502C15.9079 20.5378 15.9815 20.5646 15.9815 20.6383C15.9815 20.7121 15.9168 20.7424 15.8223 20.7424C15.6966 20.7416 15.5622 20.6597 15.5567 20.5212C15.2942 20.5838 15.0304 20.6461 14.7679 20.7098C14.8179 21.2024 15.3696 21.3366 15.78 21.3366C16.2838 21.3374 16.9213 21.1499 16.9158 20.5378C16.9125 20.1502 16.6008 19.9145 16.2516 19.8229C16.1626 19.7994 15.9513 19.7614 15.9379 19.6643C15.9312 19.614 15.9815 19.5606 16.0838 19.5606C16.1962 19.5606 16.2863 19.6298 16.2907 19.7304C16.5588 19.6935 16.8279 19.6564 17.096 19.6196C17.0704 19.1113 16.5666 18.9686 16.1395 18.9686L16.1395 18.9686ZM10.2404 19.0155C10.2048 19.2076 10.1692 19.3984 10.1336 19.5905C10.1025 19.7614 10.0725 19.9335 10.0513 20.1066H10.0349C9.97371 19.967 9.9023 19.8318 9.8289 19.6978C9.70322 19.471 9.57777 19.2432 9.45208 19.0164H8.62016C8.47223 19.8039 8.32431 20.5903 8.17749 21.3777C8.47112 21.3696 8.76361 21.3632 9.05613 21.3554L9.15934 20.8027C9.1927 20.6184 9.2263 20.4338 9.24965 20.2495H9.26745C9.3542 20.4238 9.45207 20.5915 9.54994 20.7602C9.66561 20.9523 9.78127 21.1454 9.89694 21.3375C10.1572 21.3334 10.4174 21.3276 10.6777 21.3232C10.8245 20.5547 10.9724 19.7851 11.1204 19.0154H10.2404L10.2404 19.0155ZM11.3895 19.0155C11.3462 19.2445 11.3015 19.4733 11.257 19.7022C11.4672 19.7014 12.1334 19.7 12.1334 19.7L11.8273 20.0092L11.5773 21.3094C11.8765 21.3062 12.1745 21.3029 12.4737 21.2996C12.5783 20.7656 12.6828 20.2315 12.7874 19.6964C12.9976 19.6964 13.2075 19.6955 13.4178 19.6955C13.4611 19.4688 13.5059 19.2423 13.5503 19.0155H11.3895V19.0155ZM17.366 19.0155C17.3216 19.2434 17.2773 19.4699 17.2339 19.6978C17.4441 19.6986 18.1037 19.7013 18.1037 19.7013L17.8056 20.002C17.7222 20.4354 17.6385 20.8697 17.5551 21.3031C17.8543 21.3064 18.1524 21.3112 18.4516 21.3143C18.5561 20.7781 18.6598 20.2409 18.7643 19.7036C18.9745 19.7044 19.1847 19.7059 19.3938 19.7067C19.4383 19.4768 19.4828 19.2466 19.5273 19.0155H17.366L17.366 19.0155ZM20.239 19.016C19.8019 19.7867 19.3613 20.5541 18.9186 21.3214C19.2267 21.3255 19.5339 21.3328 19.8409 21.3384C19.8998 21.2345 19.9588 21.1307 20.0166 21.0256C20.288 21.0313 20.8316 21.0422 20.8316 21.0422H21.0865L20.8672 21.2647C20.8716 21.2937 20.8776 21.3247 20.8832 21.3616C21.179 21.3681 21.4749 21.3762 21.7708 21.384C21.644 20.5954 21.516 19.8057 21.3882 19.0158H20.239L20.239 19.016ZM8.26052 19.0164C7.62545 19.0164 6.99149 19.0173 6.35642 19.0173C6.20849 19.8282 6.06058 20.6379 5.91375 21.4488C6.54771 21.4254 7.18255 21.4055 7.81651 21.3876C7.85878 21.1609 7.90015 20.9352 7.94241 20.7085C7.5943 20.7166 7.24707 20.7229 6.90004 20.7308C6.91673 20.6448 6.92584 20.6012 6.94364 20.5141C7.24616 20.5084 7.54847 20.5027 7.8521 20.4971C7.88547 20.2994 7.92039 20.1017 7.95487 19.9051C7.65345 19.9075 7.35182 19.9108 7.05042 19.9154C7.06821 19.8283 7.07579 19.7856 7.09357 19.6996C7.43946 19.6963 7.78559 19.6931 8.13148 19.6906C8.17372 19.4652 8.21715 19.2408 8.2605 19.0164H8.26052ZM6.14554 19.0182C5.81537 19.019 5.48518 19.0186 5.1561 19.0186C4.97037 19.3057 4.78573 19.5941 4.60223 19.8823C4.55775 19.8831 4.5355 19.8827 4.49101 19.8846C4.54106 19.5964 4.59133 19.3073 4.64138 19.0191C4.34331 19.0199 4.04435 19.02 3.74628 19.02H3.4313L3.69824 19.289C3.56588 20.0441 3.43488 20.8003 3.30363 21.5565C3.60282 21.5431 3.90089 21.5297 4.20006 21.5163C4.25345 21.2125 4.3075 20.9087 4.362 20.6048C4.41205 20.604 4.43696 20.6025 4.48701 20.6017C4.5771 20.8988 4.66585 21.1959 4.75704 21.4931C5.06958 21.4807 5.3821 21.4685 5.69575 21.4573C5.55561 21.0597 5.4177 20.662 5.27978 20.2644C5.56662 19.8479 5.85424 19.4325 6.14553 19.0182L6.14554 19.0182ZM22.035 19.0182C21.9906 19.2539 21.9461 19.4896 21.9016 19.7264C22.1129 19.7288 22.6045 19.7362 22.6045 19.7362H22.7704L22.4768 20.0324C22.3934 20.4882 22.3086 20.9426 22.2241 21.3983C22.5233 21.4072 22.8225 21.4163 23.1205 21.4265C23.2251 20.8646 23.3287 20.3025 23.4333 19.7407C23.6435 19.7431 23.8526 19.7463 24.0628 19.7487C24.1073 19.5052 24.1518 19.2619 24.1963 19.0195V19.0186C23.4755 19.0178 22.7546 19.0182 22.035 19.0182L22.035 19.0182ZM24.4878 19.0182C24.341 19.8314 24.1939 20.6446 24.046 21.4577C24.6811 21.4812 25.3153 21.508 25.9492 21.5359C25.9915 21.298 26.0326 21.0603 26.0738 20.8224C25.7268 20.8112 25.3798 20.7999 25.0328 20.7898C25.0494 20.7015 25.0583 20.6571 25.075 20.5677C25.3775 20.5758 25.6814 20.5843 25.9839 20.5932C26.0184 20.3832 26.0527 20.1754 26.0871 19.9654C25.7846 19.9614 25.4832 19.9556 25.1818 19.9511C25.1996 19.8618 25.2072 19.8171 25.225 19.7277C25.5708 19.7318 25.917 19.7367 26.2629 19.7411C26.2851 19.6139 26.3071 19.4865 26.3305 19.3582L26.6677 19.02H26.3171V19.0209C25.7065 19.0201 25.0973 19.0198 24.4878 19.0182L24.4878 19.0182ZM20.6506 19.7H20.6675L20.7409 20.4319C20.6097 20.4311 20.4784 20.4285 20.3472 20.4261L20.6506 19.7L20.6506 19.7Z"
                        fill="#003875"
                      />
                      <path
                        d="M12.7897 1.02877C8.9284 1.08067 5.82899 2.30596 3.76006 4.40922L3.80455 4.93869C6.08577 2.33718 9.80497 0.91084 14.533 1.12977C14.5184 1.11302 14.5041 1.09609 14.4906 1.0793C13.9087 1.03799 13.3415 1.0214 12.7898 1.02881L12.7897 1.02877ZM3.1897 4.17016C2.53788 5.01796 1.26662 6.45208 0.858367 8.43135C0.561478 9.8689 0.832878 11.1067 1.57471 12.6617L1.03551 12.5532C2.29899 14.9715 4.54424 17.0526 7.84979 18.3259C8.55045 18.5963 9.08095 18.7605 9.5381 18.8744C9.17661 18.7697 8.7641 18.6299 8.26709 18.4389C4.94377 17.1587 2.69353 15.0731 1.43458 12.6493L1.97734 12.7579C1.23764 11.1995 0.971824 9.95963 1.27878 8.51979C1.6258 6.89556 2.55116 5.63896 3.24293 4.76669L3.18963 4.17007L3.1897 4.17016ZM26.765 7.66201C27.1298 7.79493 27.6025 8.10971 28.2131 9.01895L28.3901 9.29285C28.6359 9.67599 28.8415 9.9204 29.2052 10.0086C28.9227 9.94049 28.815 9.55424 28.577 9.18339L28.3968 8.90727C27.7506 7.94774 27.0052 7.67654 26.765 7.66201H26.765ZM25.7453 7.95913C25.2304 7.93457 24.7821 8.1669 24.5174 8.48637C24.3061 8.74329 24.2805 9.1396 24.4107 9.40991C24.365 9.12059 24.5005 8.85831 24.6651 8.65837C24.8787 8.40035 25.3182 8.2328 25.752 8.2205C26.2503 8.20599 26.8408 8.36661 27.16 8.78435C26.9276 8.30628 26.4871 7.99596 25.7453 7.95911L25.7453 7.95913ZM23.9622 10.1909C22.9468 10.1697 22.0427 10.7436 21.7814 11.4004C21.6835 11.7869 21.7358 12.282 21.9282 12.731L21.9215 12.5688C21.9271 12.6146 22.253 13.8402 24.0703 14.3172C25.7931 14.7696 27.2146 14.3494 28.1275 13.9361C28.0274 13.7853 27.9207 13.6423 27.8072 13.5071L27.6724 13.5719C27.2565 13.773 26.0577 14.3471 24.3817 13.7953C23.7644 13.5931 23.4628 13.3052 23.3193 13.0371C23.1124 12.8204 22.9845 12.5657 22.9745 12.2775C22.9556 12.2808 22.9367 12.284 22.9189 12.2887C22.9133 12.2944 22.9078 12.2996 22.9033 12.3052C22.8989 12.2237 22.9256 12.0429 22.9256 12.0429C23.1458 11.3336 23.9644 11.0016 25.0432 11.2664C25.8852 11.473 27.6502 12.2708 28.6802 13.9038C28.8737 14.211 29.0385 14.5671 29.1642 14.9078C29.3822 15.4931 29.4401 16.3099 29.1798 16.817C28.8284 17.5006 27.9564 17.8971 27.8541 17.8804C28.1766 17.9329 28.7191 17.8893 29.1585 17.8044C30.0138 17.6391 30.8301 17.1465 31.196 16.3367C31.265 16.1848 31.3206 16.0317 31.3651 15.8787C31.6487 14.0903 30.3118 11.6127 30.1506 11.6864C29.9037 11.7981 29.6792 11.8061 29.5068 11.7815C29.0608 11.8329 28.676 11.6799 28.6526 11.6765C28.6571 11.6765 28.8495 11.6822 29.1087 11.6341C28.7906 11.6196 28.4791 11.5087 28.19 11.3311C28.0432 11.3344 27.9217 11.3403 27.7905 11.3213C28.2209 11.6821 28.5336 12.0013 28.7439 12.2895C29.2922 12.9396 29.7115 13.5889 29.7115 13.5889C29.7115 13.5889 29.1309 12.9385 28.8284 12.6336C28.2912 12.0941 27.5315 11.5604 26.8019 11.1203C25.4195 10.411 24.9621 10.211 23.9622 10.1909L23.9622 10.1909ZM1.80646 15.2295C1.83871 15.4953 2.4391 16.2015 3.47566 16.9108C4.80808 17.8234 5.49655 17.953 5.75574 17.9742C4.79701 17.5251 4.15749 17.1596 3.50463 16.7061C2.58251 16.0683 1.98993 15.4774 1.80641 15.2295H1.80646ZM14.8637 18.8062L13.8881 19.3714C13.8881 19.3714 13.8795 19.4197 13.8316 19.576C13.7838 19.7313 13.756 19.816 13.756 19.816L13.9807 19.7311C13.9807 19.7311 13.9406 19.8975 13.8494 20.1399C13.7582 20.3823 13.6292 20.6939 13.6292 20.6939L13.8917 20.5822C13.8917 20.5822 13.8939 20.5936 13.7893 20.8807C13.7015 21.1197 13.5949 21.3722 13.5949 21.3722C13.5949 21.3722 13.8094 21.1675 13.9807 20.9955C14.1519 20.8246 14.2934 20.6752 14.2934 20.6752L14.0999 20.7364C14.0999 20.7364 14.2 20.5934 14.3268 20.4102C14.4524 20.2281 14.5768 20.0273 14.5768 20.0273L14.3488 20.0898C14.3488 20.0898 14.4544 19.8728 14.589 19.5433C14.7236 19.2149 14.864 18.8061 14.864 18.8061L14.8637 18.8062Z"
                        fill="#EFAB00"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="shrink-0 w-8 h-8 relative overflow-hidden">
                    <svg
                      className="h-[auto] absolute left-0 top-[2.57px] overflow-visible"
                      width="33"
                      height="28"
                      viewBox="0 0 33 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.4082 21.4009C32.4082 21.4009 29.6336 21.3577 29.4447 21.3685V19.7479L28.365 17.9707V16.1124L29.7146 13.9516H27.5877C27.3974 12.8702 27.1194 11.8061 26.7564 10.7698C26.1217 9.03966 25.2359 7.41242 24.1275 5.94047C21.5634 2.63986 17.8495 0.641133 14.1896 0.570908C12.7597 0.524709 11.3407 0.834702 10.0601 1.47304C7.00472 1.61889 5.53104 3.19627 5.53644 3.95794C5.07696 4.26552 4.77515 4.75904 4.71053 5.30844C4.66734 5.30844 3.27463 5.59474 3.60391 7.82035C4.14372 11.4397 6.26518 12.5579 6.26518 12.5579C6.24332 11.9604 6.32927 11.3638 6.51889 10.7968C6.7888 10.3647 8.23009 10.9157 8.28947 12.1203C8.31646 12.6605 7.82524 13.3196 7.02092 13.9354H4.27868L5.60121 16.1124V17.9166L4.52159 19.7425V21.7412C4.11673 21.8439 3.6363 21.9897 3.6363 21.9897C3.6363 21.9897 2.61066 23.0701 2.25978 23.5563L0.5 25.8629C0.5 25.8629 2.37854 25.1553 3.62011 24.8366C2.95074 25.4956 1.30972 27.1324 1.30972 27.1324L7.12348 25.6847L7.54453 25.2363C7.93477 25.6572 8.26535 26.1298 8.52699 26.6408C8.96308 26.533 9.41883 26.533 9.85493 26.6408L12.6727 27.3809C12.6727 27.3809 12.2517 26.8407 11.6417 25.971L24.3435 25.7387L24.4838 25.5604L24.9804 26.1006L25.7901 25.5982L26.2922 25.9224C26.6323 26.0034 26.832 25.971 28.2895 25.3227C29.747 24.6745 30.0169 24.0155 30.0762 23.5239L32.4082 21.4009Z"
                        fill="white"
                      />
                      <path
                        d="M29.8009 21.6871C29.5744 21.6741 29.3473 21.6741 29.1208 21.6871V19.845L28.0412 18.1434V15.9448L29.1208 14.2486H27.334C27.137 13.0965 26.8481 11.9621 26.4703 10.8562C25.8434 9.15946 24.9723 7.56345 23.8846 6.11863C21.3961 2.96928 17.7793 0.986761 14.1842 0.900329C12.7898 0.851361 11.4059 1.15808 10.1626 1.79165C8.65654 1.87809 7.24763 2.25622 6.1896 3.34742C5.98612 3.54959 5.8765 3.82776 5.88731 4.1145C5.43387 4.44942 4.93184 4.89779 5.0506 5.50821C4.99662 5.61625 4.84547 5.55683 4.75371 5.62165C3.917 5.99439 3.78205 6.8425 3.9224 7.75003C4.12387 9.33604 4.87 10.8026 6.03306 11.8987C5.99876 11.4539 6.08452 11.008 6.28137 10.6077C6.42259 10.3854 6.67852 10.2636 6.93994 10.2944C7.15781 10.3082 7.36902 10.375 7.55533 10.4888C8.18571 10.7846 8.59373 11.4128 8.60796 12.1094C8.60796 12.9035 7.917 13.6544 7.12348 14.2378H4.85627L5.93589 15.934V18.0948L4.85627 19.8342V21.995C4.31646 22.1247 3.98178 22.2219 3.94399 22.2381L3.79284 22.2813L3.67948 22.3786C2.85189 23.2846 2.07861 24.2388 1.36369 25.2362C1.36369 25.2362 4.32726 24.2531 4.81848 24.1558C4.46221 24.4745 2.37314 26.5543 2.37314 26.5543L6.95074 25.4145L7.54453 24.7554C7.88521 25.1023 8.1858 25.4865 8.44062 25.9007L8.67813 26.2734L9.12618 26.2302C9.39808 26.2272 9.66899 26.2636 9.9305 26.3382L11.8522 26.8784L11.0155 25.69L24.1707 25.4523L24.4622 25.085L25.0344 25.7332L25.7847 25.2632C25.936 25.3929 26.1051 25.5002 26.2868 25.5819C26.5189 25.663 26.7564 25.7332 28.1437 25.0796C29.8657 24.2639 29.7632 23.4265 29.7632 23.4265L31.5931 21.7357L29.8009 21.6871Z"
                        fill="#231F20"
                      />
                      <path
                        d="M18.4757 4.22805C19.1559 4.76825 20.0196 5.33546 20.0574 6.2754C20.1059 7.54486 19.1829 8.11207 18.1572 8.57124C17.6645 8.73992 17.1499 8.83635 16.6296 8.85754C18.9357 9.38004 21.1393 10.2818 23.1505 11.5261C22.5598 10.1845 21.5944 9.04209 20.3704 8.23632C21.2496 8.35133 22.0863 8.68365 22.805 9.20327C22.3337 8.34678 21.6749 7.60808 20.8779 7.04248C21.1316 5.80543 19.3772 4.51976 18.4757 4.23346V4.22805ZM11.8468 4.64401C11.1397 4.96812 10.0601 5.24362 9.24494 4.76825C9.47933 4.98724 9.66349 5.25447 9.78475 5.55154C11.0479 5.40568 11.5769 6.8102 12.5918 7.30718C13.0094 7.51432 13.4829 7.58065 13.9413 7.49625C13.9413 7.49625 12.581 7.08029 12.4622 6.56711C14.3893 7.22075 15.0965 5.70279 15.0965 5.70279C13.666 6.86422 11.9062 5.95668 11.4204 5.35707C11.6201 5.22742 11.836 5.13018 12.0412 5.01134C12.5204 5.56811 13.2705 5.80999 13.9845 5.63797C14.6041 5.50272 15.0126 4.90964 14.9184 4.28207C15.5969 4.25414 16.2732 4.37586 16.8995 4.6386C16.676 4.75515 16.5003 4.94625 16.4028 5.1788C17.2557 5.10913 18.1132 5.23858 18.9076 5.55694C18.7521 5.21096 18.5301 4.89894 18.2544 4.6386C17.4219 4.02936 16.4193 3.69683 15.388 3.68786C14.1469 3.71928 12.9319 4.05105 11.8468 4.65481V4.64401ZM21.9359 5.14639C22.9727 6.37677 23.8139 7.7597 24.4298 9.24648C25.1171 10.8576 25.6485 12.5308 26.0169 14.2433H25.5418C25.5418 14.2433 24.2733 13.4276 23.3826 12.9738C22.75 12.662 22.0972 12.3931 21.4285 12.169C22.2615 12.8379 22.9893 13.6282 23.5877 14.5134L22.7402 15.9611L21.7092 14.2379H14.6485C14.6207 13.4535 14.2593 12.7183 13.6552 12.2176C13.999 12.2585 14.3398 12.3216 14.6754 12.4066C14.1966 11.5272 13.4134 10.853 12.473 10.5105C13.4044 10.722 14.3019 11.062 15.1397 11.5207C15.0695 9.50578 14.303 8.2039 13.2989 8.00943C11.9278 7.67987 10.5252 7.49876 9.11539 7.46924C9.39144 7.02846 9.50238 6.50401 9.42848 5.9891C9.38529 5.1842 8.84548 4.79526 8.30027 4.33609C8.13293 4.14702 8.24629 3.75268 8.46222 3.38535C8.14296 3.45874 7.85771 3.63762 7.6525 3.89313C7.39879 3.89313 7.0749 3.89313 6.83199 3.89313C6.93372 3.5062 7.21178 3.1899 7.58232 3.03962C8.14515 2.75696 8.74207 2.54816 9.3583 2.41839C9.07391 2.61938 8.85439 2.89914 8.72672 3.22329C9.90891 2.19151 11.4258 1.8998 12.9588 1.62971C16.4784 1.28398 19.4366 2.84515 21.9413 5.14639"
                        fill="#CE0E2D"
                      />
                      <path
                        d="M7.01012 6.06464C7.2805 5.94771 7.55819 5.84846 7.84142 5.76753C8.00254 5.90179 8.14585 6.05609 8.26788 6.2267C8.34345 5.962 8.07354 5.11389 7.72806 5.43801C7.45268 5.60148 7.20939 5.81383 7.01012 6.06464ZM7.37179 4.44405C7.89701 4.55224 8.3386 4.90577 8.55937 5.39479C8.91565 6.11325 9.0452 7.25847 8.51079 7.93912C10.1838 7.85039 11.8594 8.05702 13.4609 8.54954C14.0807 9.00953 14.4565 9.7278 14.4811 10.4997L13.8765 10.1701C12.5594 9.44627 10.7834 9.28961 9.18016 9.34363C8.27867 9.41926 7.37179 9.31122 6.65924 9.77579C6.77946 9.57942 6.92262 9.39808 7.08569 9.23559C7.69568 8.76562 8.66734 8.89527 9.54183 8.82504C10.9608 8.79057 12.3697 9.07291 13.666 9.65155C13.4878 8.88987 12.6565 8.7116 12.0466 8.60356C10.5746 8.34195 9.07231 8.29827 7.58771 8.47392C6.37314 8.68459 5.96828 9.98107 5.75236 10.9858C5.20722 10.0091 4.84156 8.94242 4.67273 7.83648C4.67273 7.29629 4.51079 6.68046 4.93184 6.28072C5.35626 6.14552 5.81714 6.18638 6.2112 6.39416C6.93495 6.73434 7.52813 7.30139 7.9008 8.00935C7.83678 6.91168 7.05949 5.98662 5.98987 5.73512C5.88731 5.64868 5.56882 5.73512 5.67678 5.47042C5.9943 4.8327 6.64909 4.43367 7.36099 4.44405"
                        fill="#8C9091"
                      />
                      <path
                        d="M14.0385 18.6244L13.7794 18.619L13.7901 15.4642L14.0601 15.4534L14.4973 14.7296L12.1167 14.7188L12.5594 15.4588H12.8077L12.8131 18.619H12.5486L12.1005 19.3536L14.4595 19.3428L14.0385 18.6244Z"
                        fill="#8C9091"
                      />
                      <path
                        d="M27.836 18.6244L27.5985 18.619L27.5823 15.4642L27.8576 15.4534L28.2949 14.7296L25.9143 14.7188L26.357 15.4588H26.6161L26.6053 18.619H26.3462L25.8981 19.3536L28.2571 19.3428L27.836 18.6244Z"
                        fill="#8C9091"
                      />
                      <path
                        d="M11.1343 18.6136H10.8698V15.4588H11.1343L11.5769 14.7188H9.9413L8.64035 16.9444L7.33401 14.7188H5.70378L6.14643 15.4588H6.41093V18.6136H6.14643L5.70378 19.3536H8.07895L7.6363 18.6136H7.3772V16.469L8.64035 18.619L9.89811 16.469V18.6136H9.639L9.19096 19.3536H11.5769L11.1343 18.6136Z"
                        fill="#8C9091"
                      />
                      <path
                        d="M25.2719 18.6136H25.0074V15.4588H25.2719L25.7146 14.7188H24.0843L22.778 16.9444L21.4717 14.7188H19.8414L20.2895 15.4588H20.5486V18.6136H20.2895L19.8414 19.3536H22.222L21.774 18.6136H21.5148V16.469L22.778 18.619L24.0358 16.469V18.6136H23.7767L23.334 19.3536H25.7146L25.2719 18.6136Z"
                        fill="#8C9091"
                      />
                      <path
                        d="M17.1532 16.1125L16.8347 17.101H17.4771L17.1532 16.1125ZM19.6471 19.3536H17.3205L17.7686 18.6136H17.9737L17.774 17.9923H16.5378L16.3327 18.6136H16.5378L16.9912 19.3536H14.6754L15.1181 18.6136H15.3178L16.3435 15.4588H16.1005L15.6525 14.7188H18.697L18.2544 15.4588H17.9683L18.9993 18.6136H19.1937L19.6471 19.3536Z"
                        fill="#8C9091"
                      />
                      <path
                        d="M13.3637 4.41162C13.287 4.4245 13.2113 4.44255 13.137 4.46564C13.137 4.50886 13.3259 4.71953 12.9912 4.914C12.8072 4.97968 12.6019 4.91848 12.4838 4.76275L12.2733 4.8978C12.4504 5.10765 12.7113 5.22829 12.9858 5.22732C13.1325 5.20464 13.2704 5.14309 13.3853 5.04905C13.5239 4.85922 13.5239 4.60146 13.3853 4.41162"
                        fill="white"
                      />
                      <path
                        d="M6.17882 20.0774H6.47571V20.6176C6.47571 20.731 6.5189 20.7796 6.64306 20.7796H6.93995C7.06411 20.7796 7.10729 20.731 7.10729 20.6176V20.0774H7.40959V20.6716C7.40959 20.9039 7.28543 21.0119 7.01013 21.0119H6.57828C6.30297 21.0119 6.17882 20.9039 6.17882 20.6716V20.0774Z"
                        fill="white"
                      />
                      <path
                        d="M8.68893 20.0774H9.15317L9.71458 20.7526H9.71997V20.0774H10.0169V21.0011H9.55263L8.99123 20.3313V21.0011H8.68893V20.0774Z"
                        fill="white"
                      />
                      <path
                        d="M11.6147 20.0774H11.3178V21.0011H11.6147V20.0774Z"
                        fill="white"
                      />
                      <path
                        d="M12.8185 20.0774H13.1478L13.531 20.7634L13.9089 20.0774H14.2382L13.7146 21.0011H13.3421L12.8185 20.0774Z"
                        fill="white"
                      />
                      <path
                        d="M15.4258 20.0774H16.4946V20.2935H15.7227V20.4393H16.4514V20.6338H15.7227V20.7797H16.5108V21.0011H15.4258V20.0774Z"
                        fill="white"
                      />
                      <path
                        d="M18.0708 20.5312H18.5621C18.643 20.5312 18.6754 20.5312 18.6754 20.4339C18.6754 20.3529 18.6323 20.3367 18.5351 20.3367H18.0708V20.5312ZM17.7686 20.0774H18.697C18.9291 20.0774 18.9939 20.1854 18.9939 20.3529V20.4339C18.9939 20.5582 18.9615 20.6284 18.8266 20.6608C18.913 20.6608 18.9885 20.7148 18.9885 20.8661V21.0227H18.6916V20.9147C18.6916 20.8121 18.6592 20.7851 18.5675 20.7851H18.0978V21.0227H17.7955L17.7686 20.0774Z"
                        fill="white"
                      />
                      <path
                        d="M20.2301 20.6987H20.527C20.527 20.7959 20.5702 20.8067 20.6565 20.8067H21.0236C21.0884 20.8067 21.1532 20.8067 21.1532 20.7257C21.1532 20.6447 21.1208 20.6393 20.7321 20.6393C20.3434 20.6393 20.2301 20.5906 20.2301 20.3638C20.2301 20.1369 20.2301 20.0667 20.6241 20.0667H21.0452C21.3907 20.0667 21.4177 20.1801 21.4177 20.3422V20.3692H21.1208C21.1208 20.3043 21.1208 20.2773 20.975 20.2773H20.6457C20.5756 20.2773 20.527 20.2773 20.527 20.3476C20.527 20.4178 20.5648 20.4286 20.8887 20.4286C21.3529 20.4286 21.4609 20.4286 21.4609 20.7257C21.4609 21.0228 21.3745 21.012 20.975 21.012H20.608C20.3381 21.012 20.2301 20.9634 20.2301 20.7635V20.6987Z"
                        fill="white"
                      />
                      <path
                        d="M23.0425 20.0774H22.7456V21.0011H23.0425V20.0774Z"
                        fill="white"
                      />
                      <path
                        d="M24.2679 20.0774H25.4069V20.3097H24.9912V21.0011H24.6889V20.3097H24.2679V20.0774Z"
                        fill="white"
                      />
                      <path
                        d="M27.0695 20.6824L26.5297 20.0774H26.8914L27.2207 20.4555L27.5445 20.0774H27.9062L27.3664 20.6824V21.0011H27.0695V20.6824Z"
                        fill="white"
                      />
                      <path
                        d="M13.6174 18.7809V15.3021L13.9737 15.3183L14.2112 14.8645L12.4028 14.8807L12.6511 15.3021H12.9912L12.9966 18.7755H12.6403L12.4028 19.1969L14.1788 19.2023L13.9467 18.7809H13.6174Z"
                        fill="white"
                      />
                      <path
                        d="M27.415 18.7809L27.4096 15.3021L27.7712 15.2913L28.0088 14.8645L26.195 14.8807L26.4487 15.3021H26.7618L26.7672 18.7755H26.4379L26.1842 19.1969L27.998 19.1807L27.7443 18.7809H27.415Z"
                        fill="white"
                      />
                      <path
                        d="M16.6134 17.2629H17.693L17.1532 15.5937L16.6134 17.2629ZM19.361 19.1914H17.6174L17.8711 18.7755H18.2112L17.9035 17.8301H16.4298L16.1275 18.7755H16.4568L16.7105 19.1914H14.9561L15.2099 18.7755H15.4582L16.5864 15.2966H16.2085L15.9548 14.8752H18.4433L18.1896 15.2966H17.774L18.913 18.7755H19.1343L19.361 19.1914Z"
                        fill="white"
                      />
                      <path
                        d="M24.8509 18.7754V15.2966H25.1802L25.4339 14.8806H24.1761L22.778 17.2575L21.3853 14.8806H20.1221L20.3758 15.2966H20.7105L20.7051 18.7754H20.3758L20.1221 19.1968H21.9359L21.6876 18.7754H21.3529V15.88L22.778 18.3001L24.2193 15.88V18.7754H23.8684L23.6147 19.1968H25.4339L25.1802 18.7754H24.8509Z"
                        fill="white"
                      />
                      <path
                        d="M10.7132 18.7754V15.2966H11.0371L11.2962 14.8806H10.0385L8.64035 17.2575L7.24224 14.8806H5.98448L6.23819 15.2966H6.56748V18.7754H6.23819L5.98448 19.1968H7.79825L7.54454 18.7754H7.21525V15.88L8.64035 18.3001L10.0547 15.88V18.7754H9.72537L9.47706 19.1968H11.2962L11.0371 18.7754H10.7132Z"
                        fill="white"
                      />
                      <path
                        d="M12.6889 23.243L11.9872 23.2592L11.6849 23.6481L12.2733 23.6427L11.971 24.0371L11.3826 24.0479L10.9831 24.5611L11.7065 24.5503L11.4042 24.9446L9.84413 24.977L11.1559 23.2646L10.8374 23.2754L11.1451 22.881L12.9912 22.8486L12.6889 23.243Z"
                        fill="#CE0E2D"
                      />
                      <path
                        d="M19.4636 23.135H19.4258L18.5675 24.0695H18.9291L19.4636 23.135ZM19.28 24.8258H18.4919L18.697 24.4315H18.2166L17.8171 24.8204H17.0344L19.1559 22.7136H20.365L19.28 24.8258Z"
                        fill="#CE0E2D"
                      />
                      <path
                        d="M22.0385 24.7501L21.3043 24.7663L21.693 23.8696L21.5958 23.875L20.7753 24.7717L20.0412 24.7879L20.6997 22.7081L21.6606 22.6919L21.2719 23.7399L22.2382 22.6811L22.6593 22.6703L22.2058 23.7237L23.2422 22.6595L24.1977 22.6433L22.0385 24.7501Z"
                        fill="#CE0E2D"
                      />
                      <path
                        d="M24.7537 23.513L25.9953 22.6108L26.2814 22.9944L25.2072 23.7182L25.7308 24.4367L25.1802 24.7824L24.4406 23.9451L23.8306 24.7176L22.9939 24.7338L24.608 22.6378L25.4393 22.6216L24.7537 23.513Z"
                        fill="#CE0E2D"
                      />
                      <path
                        d="M29.7901 22.4004L29.2017 22.9406C28.5092 22.9038 27.8219 23.079 27.2314 23.443H29.0452C29.0452 23.443 29.0452 23.8859 27.8522 24.4207C27.4551 24.6418 27.0328 24.8141 26.5945 24.9339L25.9521 24.4964C26.5651 24.3935 27.153 24.1753 27.6849 23.8535L26.0654 23.8859C26.078 23.6488 26.1946 23.4294 26.3839 23.2863C27.5445 22.3842 29.8063 22.4166 29.8063 22.4166"
                        fill="#CE0E2D"
                      />
                      <path
                        d="M14.4595 23.2106H14.1086L13.1046 24.5179H13.4555L14.4595 23.2106ZM15.361 23.1026L14.2166 24.5935L13.4447 24.9068H11.971L13.2989 23.2268H13.0182L13.3313 22.8325L15.0479 22.8L15.361 23.1026Z"
                        fill="#CE0E2D"
                      />
                      <path
                        d="M18.249 22.6327L18.9453 21.7197H18.114L17.2503 22.8541C17.0074 22.9298 16.7861 23.0108 16.581 23.0918L17.585 21.7305H16.1815L15.7875 22.2707H16.3704L14.4109 24.8799H15.2368L16.0628 23.7995C16.3332 23.6251 16.6145 23.4681 16.9049 23.3295L15.7227 24.8637H16.554L18.114 22.8163C18.6053 22.6381 18.9453 22.5462 18.9453 22.5462C18.7006 22.5714 18.4685 22.6038 18.249 22.6435"
                        fill="#CE0E2D"
                      />
                      <path
                        d="M10.3839 22.3191C10.3839 22.3191 9.61201 22.4326 8.70513 22.6162C8.70513 22.6162 7.9224 23.3023 7.6525 23.567C7.6525 23.567 9.58502 23.4265 10.3839 22.3191ZM8.66734 23.8155C9.18612 24.397 9.67268 25.0065 10.1248 25.6413C9.77328 25.5457 9.40929 25.5038 9.04521 25.5171C9.04521 25.5171 8.18151 24.1396 7.42578 23.8209L6.57288 24.7554L4.72672 25.2146C5.65124 24.3167 6.65993 23.5099 7.73887 22.8053C6.23688 23.0343 4.75378 23.3738 3.30162 23.8209C3.54359 23.4945 3.81855 23.194 4.12213 22.9241C6.21542 22.3373 8.36518 21.9751 10.5351 21.8438L11.2045 22.4272C11.2045 22.4272 10.805 23.1186 8.64575 23.7885"
                        fill="#CE0E2D"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="shrink-0 w-8 h-8 relative overflow-hidden">
                    <svg
                      className="h-[auto] absolute left-[0.1px] top-[1.28px] overflow-visible"
                      width="33"
                      height="30"
                      viewBox="0 0 33 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.599136 4.6938C1.25499 15.5068 7.49942 24.8129 16.4849 29.7595C25.4677 24.8129 31.712 15.5068 32.3677 4.6938C27.732 1.89284 22.2977 0.280029 16.4849 0.280029C10.6711 0.280029 5.23599 1.89284 0.599136 4.6938Z"
                        fill="white"
                      />
                      <path
                        d="M22.6586 10.7725C22.8108 10.4482 23.1457 10.2192 23.5151 10.2192H28.6474L27.1641 13.4933H25.1444L26.0634 11.4739H24.3257L22.7634 14.8814H28.875C30.2107 11.8966 31.0321 8.66427 31.2293 5.2788C26.9621 2.78366 21.9064 1.3374 16.4836 1.3374C11.0603 1.3374 6.00271 2.78366 1.73642 5.27952C1.93285 8.63984 2.74128 11.8503 4.06128 14.8171L5.59071 11.4892L5.03942 10.2195H14.6003L11.8553 16.1363H9.83556L12.0093 11.4742H10.8041L8.65428 16.1363H6.63399L8.78328 11.4742H7.5917L5.44313 16.1363H4.69328C7.27699 21.2162 11.3878 25.503 16.483 28.489C21.5784 25.503 25.6887 21.2162 28.2724 16.1363H20.1823L22.6583 10.7727L22.6586 10.7725Z"
                        fill="#0D2647"
                      />
                      <path
                        d="M16.4843 2.70581C11.8329 2.70581 7.25042 3.87982 3.19528 6.09913C3.29271 7.0076 3.43828 7.90464 3.62414 8.79025H29.3441C29.5299 7.90464 29.6756 7.00731 29.7727 6.09885C25.717 3.87953 21.1356 2.70581 16.4841 2.70581H16.4843ZM7.15071 17.6212C9.44957 21.3494 12.6284 24.539 16.4843 26.8559C20.34 24.539 23.5186 21.3508 25.8171 17.6212H7.15142H7.15071Z"
                        fill="white"
                      />
                      <path
                        d="M11.3091 4.12183C8.82713 4.61006 6.42056 5.44453 4.17213 6.60868C4.23142 7.06206 4.30442 7.513 4.38642 7.96038H11.5044C11.4051 6.7081 11.3374 5.4251 11.3091 4.12183ZM21.6614 4.12197C21.6328 5.42496 21.5643 6.70824 21.4657 7.96038H28.5829C28.6643 7.51229 28.7371 7.06191 28.7971 6.60811C26.55 5.44467 24.1428 4.60991 21.6614 4.12197ZM8.84071 18.5332C10.4316 20.7886 12.3763 22.8012 14.6128 24.491C14.1954 23.0912 13.6324 21.04 13.0881 18.5332H8.84071ZM19.8814 18.5332C19.3371 21.0386 18.7757 23.0898 18.3571 24.4882C20.5928 22.7998 22.5386 20.7886 24.1286 18.5332H19.8814Z"
                        fill="#00A160"
                      />
                      <path
                        d="M13.769 4.99902L12.8064 7.09621H13.3484L14.3109 4.99902H13.769ZM15 4.99902C14.8329 4.99902 14.6829 5.1013 14.6114 5.24699L14.267 5.99419C14.2553 6.01833 14.2484 6.04519 14.2464 6.0729C14.2369 6.19031 14.3244 6.28487 14.4417 6.28487H15.2271L15.0471 6.67469H14.0026L13.8053 7.09621L15.1229 7.09278C15.29 7.09278 15.44 6.99051 15.5114 6.84538L16.2286 5.29085C16.2386 5.26614 16.2471 5.23942 16.2486 5.21157C16.2586 5.09415 16.1714 4.99902 16.0529 4.99902H15ZM17.0471 4.99902C16.88 4.99902 16.73 5.1013 16.6586 5.24699L16.3143 5.99419C16.3029 6.01819 16.2957 6.04519 16.2929 6.0729C16.2843 6.19031 16.3714 6.28487 16.4886 6.28487H17.2743L16.9057 7.09421L17.4457 7.09278L18.4071 4.99902H17.8657L17.47 5.86307H16.9186L17.3143 4.99902H17.0471ZM20.4771 4.99902L19.1586 5.00259C18.9914 5.00259 18.8414 5.10515 18.7714 5.25014L18.0543 6.80467C18.0429 6.8291 18.0343 6.85538 18.0314 6.8838C18.0229 7.00122 18.11 7.09621 18.2286 7.09621H19.2814C19.4486 7.09621 19.6 6.99365 19.6714 6.84867L20.0143 6.10161C20.0257 6.07676 20.0329 6.05019 20.0357 6.02233C20.0443 5.9052 19.9571 5.81036 19.84 5.81036H19.0543L19.2343 5.42112H20.2786L20.4771 4.99902ZM15.0729 5.42169H15.6257L15.4229 5.86307H14.8714L15.0729 5.42169ZM18.8586 6.23217H19.41L19.2086 6.67354H18.6571L18.8586 6.23217ZM16.4843 19.1121L16.0543 20.4377H14.66L15.7871 21.2576L15.3571 22.5817L16.4843 21.7632L17.6114 22.5817L17.1814 21.2576L18.3086 20.4377H16.9143L16.4843 19.1121Z"
                        fill="#AEAFAA"
                      />
                      <path
                        d="M24.3357 25.2058H24.1066L23.826 25.835H23.6089L23.8896 25.2058H23.66L23.7376 25.032H24.4133L24.3357 25.2058ZM25.2037 25.835H24.9886L25.2676 25.207H25.2447L24.8516 25.6469H24.7001L24.6994 25.1991H24.6703L24.3873 25.835H24.1829L24.5407 25.032H24.8907L24.878 25.4242L25.222 25.032H25.561L25.2037 25.835Z"
                        fill="#0D2647"
                      />
                      <path
                        d="M16.5114 10.2192C16.1426 10.2192 15.8074 10.4481 15.6559 10.7725L13.1791 16.136H15.1736L15.9879 14.3902H17.7131L16.8874 16.136H18.9064L21.6437 10.2192H16.5114ZM18.3049 13.1348H16.5741L17.3227 11.4739H19.0606L18.3049 13.1348Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
                <div className="bg-neutral1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-sm leading-8 font-semibold relative">
                    Player
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-xs leading-8 font-medium relative">
                    HEA
                  </div>
                </div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-xs leading-8 font-medium relative">
                    SIX
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-xs leading-8 font-medium relative">
                    PS
                  </div>
                </div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-xs leading-8 font-medium relative">
                    STR
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-xs leading-8 font-medium relative">
                    MR
                  </div>
                </div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-Medium',_sans-serif] text-xs leading-8 font-medium relative">
                    HUR
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-0 items-center justify-start flex-1 relative">
                <div className="bg-neutral1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 h-[52px] relative overflow-hidden"></div>
              </div>
              <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
                <div className="bg-neutral1 p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-sm leading-8 font-semibold relative">
                    Runs
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-xs leading-8 font-semibold relative">
                    145
                  </div>
                </div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-xs leading-8 font-semibold relative">
                    99
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-xs leading-8 font-semibold relative">
                    82
                  </div>
                </div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-xs leading-8 font-semibold relative">
                    67
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-xs leading-8 font-semibold relative">
                    66
                  </div>
                </div>
                <div className="bg-[#232323] p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
                  <div className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-xs leading-8 font-semibold relative">
                    52
                  </div>
                </div>
              </div>
            </div> */}
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
    </div>
  );
};

export default SideScore;
