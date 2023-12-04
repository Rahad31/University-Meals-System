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
import useAuth from "../../../hooks/useAuth";
const Userrev = () => {
  // const [cards, setcards] = useState([]);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/review", {});

      return res.data;
    },
  });
  let fil;
  const [displaycard, setDisplaycard] = useState();
  const userEmail = user.email;
  console.log(user.email);
  if (userEmail) {
    fil = meals.filter((card) => card.useremails === userEmail);
    console.log(fil);

    if (fil.length > 0) {
      const count = fil[0];
      console.log(count);

      const id = count._id;
      console.log(id);
    } else {
      console.log("No user found with the given email.");
    }
  } else {
    console.log("User email is not defined.");
  }

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
        axiosSecure.delete(`/review/${job._id}`).then((res) => {
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

            <th>Like</th>
            <th>Review</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {fil.map((job) => (
            <tr key={job._id}>
              <td className="w-[200px]">{job.name}</td>

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
                <Link to={`/review/update/${job._id}`}>
                  <button className="btn btn-error">Edit</button>
                </Link>
              </td>
              <Link to={`/dashboard/review/${job._id}`}>
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

export default Userrev;
