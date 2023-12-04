import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
const Upmealcart= ({ jobs }) => {
  const { _id, username, image, name, type, price, pdate, rating } = jobs;
  // console.log({ name });
  return (
    <div>
      <div className="flex justify-center items-center text-center  rounded-md ">
        <div className="h-[400px] w-[300px] rounded-md flex flex-col m-2  gap-2 border-2 border-black  bg-slate-200">
          <img
            src={image}
            className="h-[200px] w-[280px] m-2 rounded-md p-2 bg-white"
          ></img>

          <h3 className="text-center  text-[#120f0a]  font-semibold">{name}</h3>
          <h3 className="text-center  text-[#120f0a]  font-semibold">
            <Rating
              placeholderRating={rating}
              emptySymbol={
                <img
                  src="https://i.ibb.co/k5sbZ4X/star-empty.png"
                  className="icon w-[15px]"
                />
              }
              placeholderSymbol={
                <img
                  src="https://i.ibb.co/KqZ970k/star-full.png"
                  className="icon"
                />
              }
              fullSymbol={
                <img
                  src="https://i.ibb.co/KqZ970k/star-full.png"
                  className="icon"
                />
              }
            />
          </h3>

          <h3 className="text-center  text-[#120f0a]  font-semibold">
            Price : {price} ৳
          </h3>
          <div>
            {" "}
            {/* <Link to={`/meal/${_id}`}> */}
              {" "}
              <button className="btn btn-error w-[180px] mt-2 ">like</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upmealcart;
