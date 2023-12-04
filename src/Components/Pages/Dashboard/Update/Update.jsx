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
const Update = () => {
  const navigate = useNavigate();
  const meals = useLoaderData();
  console.log(meals);

  const {
    _id,
    name,
    type,
    image,
    ing,
    description,
    price,
    rating,
    pdate,
    likes,
    review,
    username,
    useremail,
  } = meals;
  const handleUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.meal_img.value;
    const name = form.meal_name.value;
    const username = form.meal_username.value;
    const type = form.meal_type.value;
    const ing = form.meal_ing.value;
    const price = form.meal_price.value;
    const description = form.meal_des.value;
    const pdate = form.meal_pdate.value;
    const rating = form.meal_rate.value;
    const likes = form.meal_like.value;
    const review = form.meal_review.value;
    const useremail = form.meal_useremail.value;
    const newmeal = {
      name,
      type,
      image,
      ing,
      description,
      price,
      rating,
      pdate,
      likes,
      review,
      username,
      useremail,

      price,
    };
    fetch(` https://uni-meal-server.vercel.app/meal/update/${_id}`, {
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
        <h1 className="text-2xl font-bold mt-6">Update Meal</h1>
        <div className="flex flex-row flex-wrap justify-center items-center p-10 gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Meal Title</span>
            </label>
            <input
              type="text"
              name="meal_name"
              defaultValue={name}
              placeholder="Title"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Meal Type</span>
            </label>
            <input
              type="text"
              name="meal_type"
              defaultValue={type}
              placeholder="Category"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  font-semibold">Image URL</span>
            </label>
            <input
              type="text"
              name="meal_img"
              defaultValue={image}
              placeholder="URL"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Ingredients</span>
            </label>
            <input
              type="text"
              name="meal_ing"
              defaultValue={ing}
              placeholder="Ingredients"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">
                Meal Short Description
              </span>
            </label>
            <input
              type="text"
              name="meal_des"
              defaultValue={description}
              placeholder="Short Description"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="text"
              name="meal_price"
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Rating</span>
            </label>
            <input
              type="text"
              name="meal_rate"
              defaultValue={rating}
              placeholder="Rate in 5"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Posting Date</span>
            </label>
            <input
              type="date"
              name="meal_pdate"
              defaultValue={pdate}
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">likes</span>
            </label>
            <input
              type="text"
              name="meal_like"
              defaultValue={likes}
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

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
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">User Name</span>
            </label>
            <input
              type="text"
              name="meal_username"
              defaultValue={username}
              placeholder="User Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">User Email</span>
            </label>
            <input
              type="text"
              name="meal_useremail"
              defaultValue={useremail}
              placeholder="User Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs my-10 ">
            <input
              type="submit"
              value="Update Meal"
              className="input input-bordered btn btn-error "
            />
          </div>
        </div>
        <div className="flex flex-row gap-5"></div>

        {/* <div>
          <button onClick={handleAddmeal} className="btn btn-error my-4 w-full">
            Add meal
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Update;
