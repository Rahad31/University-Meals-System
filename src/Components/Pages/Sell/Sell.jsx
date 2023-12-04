import React from 'react';
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import Sellcart from '../Sellcart/Sellcart';

import { useState, useEffect } from "react";
const Sell = () => {
 const [sell, setsell] = useState([]);
 useEffect(() => {
   fetch("http://localhost:5000/meal")
     .then((res) => res.json())
     .then((data) => setsell(data));
 }, []);
 return (
   <div className="container mx-auto text-center my-20">
     <h1 className="text-4xl font-bold  mb-4 text-[#EAA334]">BEST SELLING MEAL</h1>
     <hr className="mb-6"></hr>

     <Marquee>
       <div className="flex  pr-2 gap-4">
         {sell.map((meal) => (
           <Sellcart meal={meal}></Sellcart>
         ))}
       </div>
     </Marquee>

     <hr className="mt-6"></hr>
   </div>
 );
};

export default Sell;