import React from "react";
import Membercart from "../Membercart/membercart";
import { useState, useEffect } from "react";
const Membership = () => {
  const [mem, setmem] = useState([]);
  useEffect(() => {
    fetch("/member.json")
      .then((res) => res.json())
      .then((data) => setmem(data));
  }, []);
  console.log(mem);
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
        <div className=" container mx-auto flex flex-row flex-wrap gap-5 justify-center ">
          {mem.map((mem) => (
            <Membercart key={mem.img} mem={mem}></Membercart>
          ))}
        </div>
        <div className="flex flex-row gap-2"></div>
      </div>
    </div>
  );
};

export default Membership;
