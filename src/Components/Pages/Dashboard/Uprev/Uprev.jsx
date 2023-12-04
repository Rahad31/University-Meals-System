import React from "react";
import { useLoaderData } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
//  Swal.fire({
//    position: "center",
//    icon: "success",
//    title: "Succeessfully Updated",
//    showConfirmButton: false,
//    timer: 2000,
//  });
const Uprev = () => {
  const navigate = useNavigate();
  const meals = useLoaderData();
  console.log(meals);

  const {
    _id,

    review,
  } = meals;
  const handleUp = (event) => {
    event.preventDefault();
    const form = event.target;

    const review = form.meal_review.value;

    const newmeal = {
      review,
    };
    fetch(` https://uni-meal-server.vercel.app/review/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newmeal),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Succeessfully Updated",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="container mx-auto flex justify-center items-center p-2">
      <form
        onSubmit={handleUp}
        className="flex flex-col  justify-center items-center bg-slate-200  border-2 border-black w-fit rounded-md lg:w-[800px]"
      >
        <h1 className="text-2xl font-bold mt-6">Edit Review</h1>
        <div className="flex flex-row flex-wrap justify-center items-center p-10 gap-4">
          <div className="form-control w-full max-w-xs">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Reviews</span>
              </label>
              <input
                type="text"
                name="meal_review"
                defaultValue={review}
                className="input input-bordered w-full max-w-xs"
              />

              <div className="form-control w-full max-w-xs my-10 ">
                <input
                  type="submit"
                  value="Update Meal"
                  className="input input-bordered btn btn-error "
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Uprev;
