import React from 'react';

const Sellcart = ({meal}) => {
     const { image, name } = meal;
    return (
      <div className="h-[320px] w-[220px] rounded-md flex flex-col  border-2 border-black  bg-slate-200">
        <div>
          <img
            src={image}
            className="h-[260px] w-[200px] m-2 rounded-md p-2 bg-white"
          ></img>
        </div>
        <div className="flex flex-col gap-2 ">
          <h3 className="text-center pt-1 text-[#120f0a] text-xl font-semibold">
            {name}
          </h3>
        </div>
      </div>
    );
};

export default Sellcart;