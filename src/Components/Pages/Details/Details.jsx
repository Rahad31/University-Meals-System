import React from "react";
import Rating from "react-rating";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useLoaderData, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/Provider";
import { useContext } from "react";

const Details = () => {
  const jobs = useLoaderData();
  const { _id } = useParams();

  const jobdetail = jobs.find((job) => job._id == _id);

  const { user } = useContext(AuthContext);

  let User = user.email;
  // console.log(jobdetail);
  const handleCart = () => {
    // savejob(idInt, User);
    // // toast("Successfully Added to Cart");

    const image = jobdetail.image;
    const name = jobdetail.name;
    const username = jobdetail.username;
    const pdate = jobdetail.pdate;
    const ing = jobdetail.ing;
    const rating = jobdetail.rating;
    const price = jobdetail.price;
    const description = jobdetail.description;
    const review = jobdetail.rev;
    const usernameadd = user.displayName;
    const useremails = user.email;
    let stats = "Pending";
    const cart = {
      image,
      name,
      usernameadd,
      stats,
      useremails,
    };

    console.log(cart);

    // send data
    fetch(`http://localhost:5000/reqmeal`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Sucessfully requested");
        }
      });
  };
  return (
    <div>
      <div className="flex  flex-col gap-1 justify-center items-center   rounded-md ">
        <h1 className="text-4xl font-bold text-[#EAA334]">Details</h1>
        <h1 className="text-xl"></h1>
        <div
          className="w-1/12
       -bold mb-4"
        >
          <hr></hr>
        </div>
        <div className="h-auto w-auto my-6 rounded-md flex flex-col md:flex-row gap-2  border-black  bg-slate-200">
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={jobdetail.image}
                className="h-[300px] w-[380px] m-2 rounded-md p-2 bg-white"
              ></img>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <h3 className="text-center pt-2 text-[#120f0a] text-xl font-semibold">
                {jobdetail.name}
              </h3>

              <h3 className="text-center w-[300px]  text-[#120f0a] text-normal font-semibold pt-2">
                Admin : {jobdetail.username}
              </h3>

              <h3 className="text-center w-[300px]  text-[#120f0a] text-normal font-semibold pt-2">
                Description: <br></br>
                {jobdetail.description}
              </h3>
              <h3 className="text-center w-[300px]  text-[#120f0a] text-normal font-semibold pt-2">
                Ingredients : <br></br>
                {jobdetail.ing}
              </h3>
              <h3 className="text-center w-[300px]  text-[#120f0a] text-normal font-semibold pt-2">
                Ratings:
              </h3>
              <Rating
                placeholderRating={jobdetail.rating}
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

              <h3 className="text-center  text-[#120f0a] text font-semibold">
                Price: {jobdetail.price} ৳
              </h3>

              <h3 className="text-center text-[#120f0a]  font-semibold">
                Post Time: {jobdetail.pdate}
              </h3>
              <h3 className="text-center w-[300px]  text-[#120f0a] text-normal font-semibold pt-2">
                Reviews:
              </h3>
              <button
                onClick={handleCart}
                className="btn btn-error w-[100px] mx-auto my-4"
              >
                Like
              </button>

              <div className="flex justify-center flex-col items-center md:mt-10">
                {" "}
                <Link className="flex flex-col" to="/">
                  <button
                    onClick={handleCart}
                    className="btn btn-error mx-4 mb-4"
                  >
                    Request Meal
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
