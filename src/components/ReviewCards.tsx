import { Flex } from "@mantine/core";
import React, { useState } from "react";
import { Star, ChevronUp, ChevronDown } from  "react-feather"
interface ReviewCard {
  productId: string;

    rating: number;
    comment: string;
    reviewerName: string;
}
export const ReviewCard: React.FC<ReviewCard>= ({   rating, comment, reviewerName }) => {
  const [textExpanded, setTextExpanded] = useState(false);
  const [expanded] = useState(false);

  const handleTextExpand = () => {
    setTextExpanded(!textExpanded);
  };

  return (
  <div className={`  p-2 transition-all ${expanded ? "h-auto" : "h-58"}`}>
    <div
      className={`lg:w-[450px] min-w-[350px] gap-4 bg-gray-100 flex ${
        expanded ? "flex-col" : "flex-row"
      } justify-center items-center py-4 px-3 mx-auto rounded-lg shadow-md`}
    >
    
      
       
      {/* Right Section */}
      <div className=" relative flex flex-col justify-between w-full lg:w-[70%]">
        <p className="font-semibold text-sm lg:text-base leading-relaxed">
          {textExpanded
            ? comment
            : comment.slice(0, 70) + "..."}
         
                  </p>
             
          <Flex direction="row" justify="space-between">
          <div className=" w-12 h-12 rounded-full flex justify-center items-center text-primary bg-white shadow-sm font-semibold">
                          <span className="font-bold text-xl">{ rating}</span>
          <Star />
        </div>
        <p className="text-end flex gap-3 mt-2 text-sm font-semibold">     <button
            onClick={handleTextExpand}
            className="text-primary bg-secondary flex w-8 h-8 items-center rounded-full  font-semibold justify-center  hover:underline"
          >
            {textExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>{reviewerName}</p>
         </Flex>
      </div>
    </div>
  </div>

  );
};