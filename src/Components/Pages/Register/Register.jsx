import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
//  <ToastContainer />;
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const image = event.target.image.value;
    event.target.reset();
    // console.log(image);

    // validation

    if (password.length < 6) {
      toast("Password must be at least 6 characters or longer");
      return;
    } else if (
      !/^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/.test(
        password
      )
    ) {
      toast(
        "Your password should have at least one upper case characters and special character"
      );
      return;
    } else {
      toast("Successfully Registered and Login");
      navigate("/");
      createUser(email, password, name, image)
        .then((result) => {
          console.log(result.user);
          toast("Successfully Registered and Login");
          navigate("/");
        })

        .catch(() => {});
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="hero min-h-screen w-[600px] rounded-md bg-[#e2e8f0] ">
        <Helmet>
          <title>Job Hunt | Register</title>
        </Helmet>
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-4xl text-[#eaa334] font-bold">Register </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    className="input input-bordered"
                  />
                </div>{" "}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Upload Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Image"
                    className="input input-bordered "
                  />
                </div>
                {/* <Link to="/login"> */}
                <div className="form-control mt-6">
                  <button className="btn btn- bg-[#eaa334]">Register</button>
                </div>
                {/* </Link> */}
              </form>
              <p className="text-center">
                {" "}
                Already have account?
                <Link to="/login">
                  <button className="btn btn-link">Login</button>
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
