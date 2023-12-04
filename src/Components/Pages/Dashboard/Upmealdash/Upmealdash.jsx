import React from "react";
import { useState, useEffect } from "react";
import Tabcart from "../../Tabcart/Tabcart";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Allmeal from "../../Allmeal/Allmeal";
import Mealcart from "../Mealcart/Mealcart";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Upmealdash = () => {
  // const [cards, setcards] = useState([]);

  const axiosPublic = useAxiosPublic();
  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/mealup", {});

      return res.data;
    },
  });
  const add =(job)=>{
    fetch(`https://uni-meal-server.vercel.app/meal`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(job),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Sucessfully Added ");
        }
      });
  }
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
    <div className="container mx-auto gap-20 my-4 flex flex-row justify-center items-center">
      <table className="table flex justify-center items-center gap-2 w-[1000px] ">
        {/* head */}
        <thead>
          <tr>
            <th>Meal Title</th>
            <th>Distributor Name</th>
            <th>Distributor Email</th>
            <th>Like</th>
            <th>Review</th>
            <th>Publish</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((job) => (
            <tr key={job._id}>
              <td className="w-[200px]">{job.name}</td>
              <td className="w-[200px]">{job.username}</td>
              <td className="w-[200px]">{job.useremail}</td>
              <td className="w-[200px]">{job.likes}</td>
              <td className="w-[200px]">{job.review}</td>
              <td className="w-[200px]">
              {job.likes <10 ? (
                  "Unpublishable"
                ) : (  <button onclick={add(job)} className="btn btn-error">Publish</button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Upmealdash;
