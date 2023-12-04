import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
const Revcart = ({ jobs }) => {
  const { _id, review } = jobs;
  // console.log({ name });
  return (
    <div>
      <div className="flex justify-center items-center text-center flex-col  rounded-md ">
        <div className=" w-[300px] rounded-md flex flex-col m-2  gap-2 border-2 border-black  bg-white">
          <h3 className="text-center  text-[#120f0a]  font-semibold">
            {review}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Revcart;
