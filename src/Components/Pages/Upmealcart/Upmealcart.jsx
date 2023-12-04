import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Upmealcart = ({ jobs }) => {
  const { _id, username, image, name, type, price, pdate, rating } = jobs;
  const { user } = useAuth();
  console.log(user);
  const handlelike = () => {
    const axiosPublic = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await axiosPublic.get("/mealup", {});

        return res.data;
      },
    });
    const userEmail = user.email;
    if (userEmail) {
      const fil = users.filter((card) => card._id === _id);
      console.log(fil);

      if (fil.length > 0) {
        const count = fil[0];
        console.log(count);

        const id = count._id;
        console.log(id);
        const counts = parseInt(count.likes) + 1;
        toast(`Liked....`);
        const uplike = {
          counts,
        };
        console.log(counts);
        fetch(`https://uni-meal-server.vercel.app/mealup/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(uplike),
        });
      } else {
        console.log("No user found with the given email.");
      }
    } else {
      console.log("User email is not defined.");
    }
  };
  // console.log({ name });
  return (
    <div>
      <div className="flex justify-center items-center text-center  rounded-md ">
        <div className="h-[400px] w-[300px] rounded-md flex flex-col m-2  gap-2 border-2 border-black  bg-slate-200">
          <img
            src={image}
            className="h-[200px] w-[280px] m-2 rounded-md p-2 bg-white"
          ></img>

          <h3 className="text-center  text-[#120f0a]  font-semibold">{name}</h3>
          <h3 className="text-center  text-[#120f0a]  font-semibold">
            <Rating
              placeholderRating={rating}
              emptySymbol={
                <img
                  src="https://i.ibb.co/k5sbZ4X/star-empty.png"
                  className="icon w-[15px]"
                />
              }
              placeholderSymbol={
                <img
                  src="https://i.ibb.co/KqZ970k/star-full.png"
                  className="icon"
                />
              }
              fullSymbol={
                <img
                  src="https://i.ibb.co/KqZ970k/star-full.png"
                  className="icon"
                />
              }
            />
          </h3>

          <h3 className="text-center  text-[#120f0a]  font-semibold">
            Price : {price} ৳
          </h3>
          <div>
            {" "}
            {/* <Link to={`/meal/${_id}`}> */}{" "}
            <button
              onClick={() => handlelike}
              className="btn btn-error w-[180px] mt-2 "
            >
              Like
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upmealcart;
