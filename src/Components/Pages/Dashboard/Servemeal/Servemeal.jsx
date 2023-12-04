import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const Servemeal = () => {
  const [userss, setusers] = useState([]);

  // const Users2 = () => {
  //   const { data: users } = useQuery({
  //     queryKey: ["users"],
  //     queryFn: async () => {
  //       const res = await fetch("https://uni-meal-server.vercel.app/meal");
  //       return res.json();
  //     },
  //   });
  // };
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reqmeal", {});

      return res.data;
    },
  });

  console.log(users);
  // useEffect(() => {
  //   fetch("https://uni-meal-server.vercel.app/users")
  //     .then((res) => res.json())
  //     .then((data) => setusers(data));
  // }, []);

  const update = (user) => {
    //   const name = user.name;
    // const email=user.email;
    // const role="admin"

    // const upjob = {
    //  name,
    //  email,
    //  role,
    // };

    fetch(`https://uni-meal-server.vercel.app/reqmeal/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast("Served");
          refetch();
          navigate("/");
        }
        refetch();
      });
  };

  return (
    <div className="container mx-auto gap-20 my-4 flex flex-row justify-center items-center">
      <table className="table flex justify-center items-center gap-2 w-[1000px] ">
        {/* head */}
        <thead>
          <tr>
            <th>Meal Title</th>
            <th>Requester Email</th>
            <th>Requester Name</th>
            <th>Status</th>
            <th>Serve</th>
          </tr>
        </thead>
        <tbody>
          {users.map((job) => (
            <tr key={job._id}>
              <td className="w-[200px]">{job.name}</td>
              <td className="w-[200px]">{job.useremails}</td>

              <td className="w-[200px]">{job.usernameadd}</td>
              <td className="w-[200px]">{job.stats}</td>
              <td className="w-[200px]">
                {job.stats === "Served" ? (
                  "Served"
                ) : (
                  <button onClick={() => update(job)} className="btn btn-error">
                    Serve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Servemeal;
