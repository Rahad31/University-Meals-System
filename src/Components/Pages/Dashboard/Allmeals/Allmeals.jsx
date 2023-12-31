import React from "react";
import { useState, useEffect } from "react";
import Tabcart from "../../Tabcart/Tabcart";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Allmeal from "../../Allmeal/Allmeal";
import Mealcart from "../Mealcart/Mealcart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Allmeals = () => {
  // const [cards, setcards] = useState([]);

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/meal", {});

      return res.data;
    },
  });
  const [displaycard, setDisplaycard] = useState(meals);

  const handleDeleteUser = (job) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/meal/${job._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

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
            <th>Delete</th>
            <th>Update</th>
            <th>Details</th>
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
                <button
                  onClick={() => handleDeleteUser(job)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </td>
              <td className="w-[200px]">
                <Link to={`/meal/update/${job._id}`}>
                  <button className="btn btn-error">Update</button>
                </Link>
              </td>
              <Link to={`/dashboard/meal/${job._id}`}>
                <td className="w-[200px]">
                  <button className="btn btn-error">Detail</button>
                </td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allmeals;
