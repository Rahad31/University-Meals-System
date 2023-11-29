import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const Alluser = () => {
  const [userss, setusers] = useState([]);

  // const Users2 = () => {
  //   const { data: users } = useQuery({
  //     queryKey: ["users"],
  //     queryFn: async () => {
  //       const res = await fetch("http://localhost:5000/meal");
  //       return res.json();
  //     },
  //   });
  // };
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`
        },
      });
      
      return res.data;
    },
  });

  console.log(users);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, []);

  const update = (user) => {
    //   const name = user.name;
    // const email=user.email;
    // const role="admin"

    // const upjob = {
    //  name,
    //  email,
    //  role,
    // };

    fetch(`http://localhost:5000/users/${user._id}`, {
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
          toast("Admin is done");
          navigate("/");
        }
        window.location.reload();
      });
  };

  return (
    <div className="container mx-auto gap-20 my-4 flex flex-row justify-center items-center">
      <table className="table flex justify-center items-center gap-2 w-[1000px] ">
        {/* head */}
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>Admin Status</th>
            <th>Membership</th>
          </tr>
        </thead>
        <tbody>
          {userss.map((job) => (
            <tr key={job._id}>
              <td className="w-[200px]">{job.name}</td>
              <td className="w-[200px]">{job.email}</td>
              <td className="w-[200px]">
                {job.role === "Admin" ? (
                  "Admin"
                ) : (
                  <button onClick={() => update(job)} className="btn btn-error">
                    {job.role}
                  </button>
                )}
              </td>{" "}
              <td className="w-[200px]">{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alluser;
