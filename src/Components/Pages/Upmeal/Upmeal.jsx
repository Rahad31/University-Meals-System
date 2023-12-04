import React from "react";
import { useState, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

import { Link } from "react-router-dom";
import Upmealcart from "../Upmealcart/Upmealcart";
const Upmeal = () => {
  // const [cards, setcards] = useState([]);

  const axiosPublic = useAxiosPublic();
  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/mealup", {});

      return res.data;
    },
  });
  const [displaycard, setDisplaycard] = useState(meals);
  // console.log(Users2);
  // useEffect(() => {
  //   fetch("https://uni-meal-server.vercel.app/meal")
  //     .then((res) => res.json())
  //     .then((data) => setcards(data));
  // }, []);
  // useEffect(() => {
  //   fetch("https://uni-meal-server.vercel.app/meal")
  //     .then((res) => res.json())
  //     .then((data) => setDisplaycard(data));
  // }, []);
  return (
    <div className="container mx-auto gap-6 my-4 flex flex-col justify-center items-center">
      <div className="text-4xl font-bold text-[#EAA334]">UPCOMING MEAL </div>

      <div className="text-xl">Great minds need great meals</div>
      <div
        className="w-1/12
       -bold"
      >
        <hr></hr>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {meals.map((jobs) => (
          <Upmealcart jobs={jobs}></Upmealcart>
        ))}
      </div>
      <hr></hr>
    </div>
  );
};

export default Upmeal;
