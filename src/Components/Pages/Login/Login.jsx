import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import AuthProvider from "../../Provider/Provider";
const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          role: "Make Admin",
          status: "Bronze",
        };
        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });

        toast("Successfull Login");

        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast("Password or Email is Wrong");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      navigate("/");
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        role: "Make Admin",
        status: "Bronze",
      };
      fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast("Sucessfully Login");
            navigate("/");
          }
        });
    });
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="hero min-h-screen w-[600px] flex justify-center rounded-md items-center bg-[#e2e8f0]">
        <Helmet>
          <title>Job Hunt | Log In</title>
        </Helmet>
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-[#eaa334]">Login </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
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
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-gost bg-[#eaa334]">Login</button>
                </div>
              </form>

              <p>
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full btn btn-error bg-[#eaa334]"
                >
                  Log in with Google
                </button>
              </p>
              <p>
                {" "}
                New in Here?
                <Link to="/register">
                  <button className="btn btn-link">Register</button>
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>{" "}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
