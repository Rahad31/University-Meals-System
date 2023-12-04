import React from "react";
import { useQuery } from "@tanstack/react-query";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

import Tabcart from "../Tabcart/Tabcart";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Allmeal = () => {
  // const [cards, setcards] = useState([]);

  const axiosPublic = useAxiosPublic();
  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/meal", {});

      return res.data;
    },
  });
    const [displaycard, setDisplaycard] = useState(meals);
  console.log(meals);
  // useEffect(() => {
  //   fetch("http://localhost:5000/meal")
  //     .then((res) => res.json())
  //     .then((data) => setcards(data));
  // }, []);
  useEffect(() => {
    fetch("http://localhost:5000/meal")
      .then((res) => res.json())
      .then((data) => setDisplaycard(data));
  }, []);

  const getvalue = (event) => {
    const filters = document.getElementById("search").value;
    console.log(filters);
    const Health1 = meals.filter((card) => card.name == filters);
    setDisplaycard(Health1);

    const filter = document.getElementById("mealss").value;
    search.value = " ";
    console.log(filter);
    if (filter == "Breakfast") {
      const Health = meals.filter((card) => card.type == "Breakfast");
      setDisplaycard(Health);
    } else if (filter == "Lunch") {
      const Clothing = meals.filter((card) => card.type == "Lunch");
      setDisplaycard(Clothing);
    } else if (filter == "Dinner") {
      const Education = meals.filter((card) => card.type == "Dinner");
      setDisplaycard(Education);
    } else {
      toast("Category Not Matched");
    }
    // console.log(Health);
  };
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-2 my-6">
      <div className="text-4xl font-bold text-[#EAA334]">ALL MEAL </div>

      <div className="text-xl">Great minds need great meals</div>
      <div
        className="w-1/12
       -bold"
      >
        <hr></hr>
      </div>
      <div className="join">
        <input
          id="search"
          className="input input-bordered join-item"
          placeholder="Search by title"
        />
        <button
          onClick={() => getvalue()}
          className="btn btn-error join-item rounded-r-md"
        >
          Search
        </button>
      </div>

      <h2 className=" font-bold text-2xl mr-2">Sort by:</h2>
      <select
        onChange={() => getvalue()}
        className="input input-bordered text-lg font-semibold text-yellow-500 "
        name="level"
        id="mealss"
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {displaycard.map((jobs) => (
          <Tabcart jobs={jobs}></Tabcart>
        ))}
      </div>
      <hr></hr>
    </div>
  );
};

export default Allmeal;
