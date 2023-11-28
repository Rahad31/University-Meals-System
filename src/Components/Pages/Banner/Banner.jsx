import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto m-5 my-20">
      <img
        className="h-[500px] w-full rounded-md relative"
        src="https://i.ibb.co/jfg808s/food-facebook-cover-template-modern-food-banner-497837-809.jpg"
      ></img>
      <div className=" flex flex-col gap-2 italic absolute top-[420px] right-[35px] md:top-[320px] md:right-[230px] lg:top-[300px] lg:right-[820px]">
        <div className="text-6xl font-bold">
          <span className="text-silver  ">UNI MEAL</span>
        </div>
        <h1 className="text-2xl text-[#EAA334]">
          Great minds need great meals
        </h1>
        <label class="input-group">
          <input
            type="text"
            placeholder="Search Food"
            class="input input-bordered"
            id="job"
          />
          <button
            id="btn-apply"
            class="btn btn-error text-xl font-semibold normal-case text-white"
          >
            Search
          </button>
        </label>
      </div>
    </div>
  );
};

export default Banner;
