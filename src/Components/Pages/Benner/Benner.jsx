import React from "react";

const Benner = () => {
  return (
    <div className="container mx-auto p-4 my-20">
      <img
        className="h-[500px] w-full rounded-md relative"
        src="https://i.ibb.co/jfg808s/food-facebook-cover-template-modern-food-banner-497837-809.jpg"
      ></img>
      <div className=" flex flex-col gap-2 italic absolute top-[400px] right-[35px] md:top-[320px] md:right-[230px] lg:top-[300px] lg:right-[820px]">
        <div className="text-6xl font-bold">
          <span className="text-silver  ">UNI MEAL</span>
        </div>
        <h1 className="text-2xl font-semibold ">
          Great minds need great meals
        </h1>
        <div className="join">
          <input
            id="search"
            className="input input-bordered join-item"
            placeholder="Search Meal"
          />
          <button className="btn btn-error join-item rounded-r-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benner;
