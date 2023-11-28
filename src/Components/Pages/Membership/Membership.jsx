import React from 'react';

const Membership = () => {
    return (
      <div>
        <div className="container mx-auto flex flex-col justify-center items-center gap-2 my-6">
          <div className="text-4xl font-bold text-[#EAA334]">MEMBERSHIP</div>

          <div className="text-xl">Great minds need great meals</div>
          <div
            className="w-1/12
       -bold"
          >
            <hr></hr>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-2 border-4 ">
              <img
                src="https://i.ibb.co/PtnzmGG/silverattachment-6865518.png"
                className="h-[300px] w-[300px] m-2 rounded-full p-2 bg-white border-black"
              ></img>

              <h3 className="text-center border-4 border-black pt-1 text-[#120f0a] text-xl font-semibold">
                $40
              </h3>
            </div>

            <div className="flex flex-col gap-2 border-4 ">
              <img
                src=" https://i.ibb.co/0cjXbYC/goldattachment-6865518.png"
                className="h-[300px] w-[300px] m-2 rounded-full p-2 bg-white border-black"
              ></img>

              <h3 className="text-center border-4 border-black pt-1 text-[#120f0a] text-xl font-semibold">
                $60
              </h3>
            </div>
            <div className="flex flex-col gap-2 border-4 ">
              <img
                src="https://i.ibb.co/Cvbzj51/platinumattachment-6865518.png"
                className="h-[300px] w-[300px] m-2 rounded-full p-2 bg-white border-black"
              ></img>

              <h3 className="text-center border-4 border-black pt-1 text-[#120f0a] text-xl font-semibold">
                $20
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Membership;