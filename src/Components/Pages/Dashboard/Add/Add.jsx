import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Add = () => {
  const handleAddmeal = (event) => {
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
    console.log(newmeal);
    form.reset();
    // send data
    fetch(`https://uni-meal-server.vercel.app/meal`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newmeal),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Sucessfully Added");
        }
      });
  };

  const handleupmeal = (event) => {
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
    console.log(newmeal);
    form.reset();
    // send data
    fetch(`https://uni-meal-server.vercel.app/mealup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newmeal),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Sucessfully Added to Upcoming meal");
        }
      });
  };

  return (
    <div className="container mx-auto flex justify-center flex-row gap-5 items-center p-2">
      <form
        onSubmit={handleAddmeal}
        className="flex flex-col  justify-center items-center bg-slate-200  border-2 border-black w-fit rounded-md lg:w-[800px]"
      >
        <h1 className="text-2xl font-bold mt-6">Add Meal</h1>
        <div className="flex flex-row flex-wrap justify-center items-center p-10 gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Meal Title</span>
            </label>
            <input
              type="text"
              name="meal_name"
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
              defaultValue="0"
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
              defaultValue="0"
              placeholder="0"
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
              placeholder="User Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs my-10 ">
            <input
              type="submit"
              value="Add Meal"
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

      <form
        onSubmit={handleupmeal}
        className="flex flex-col  justify-center items-center bg-slate-200  border-2 border-black w-fit rounded-md lg:w-[800px]"
      >
        <h1 className="text-2xl font-bold mt-6">Add to Upcoming Meal</h1>
        <div className="flex flex-row flex-wrap justify-center items-center p-10 gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Meal Title</span>
            </label>
            <input
              type="text"
              name="meal_name"
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
              defaultValue="0"
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
              defaultValue="0"
              placeholder="0"
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
              placeholder="User Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs my-10 ">
            <input
              type="submit"
              value=" Add to Upcoming Meal"
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
      <ToastContainer />
    </div>
  );
};

export default Add;
