import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Check from "../../Check/Check";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const CheckoutForm = (membership) => {
  const member = membership.membership;
  console.log(member);

  let Price;
  if (member == "Platinum") {
    Price = "100";
  } else if (member == "Gold") {
    Price = "80";
  } else if (member == "Silver") {
    Price = "50";
  } else {
  }
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const navigate = useNavigate();

  const totalPrice = Price;

  let status = member;
  console.log(status);
  let members = {
    status,
  };
  const [carts, setcarts] = useState([]);

  const axiosPublic = useAxiosPublic();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users", {});

      return res.data;
    },
  });

  console.log(users);
  useEffect(() => {
    fetch("https://uni-meal-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setcarts(data));
  }, []);

  console.log(members);

  console.log(member);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // fetch(`https://uni-meal-server.vercel.app/users/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(members),
    // });
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    const userEmail = user.email;
    if (userEmail) {
      const fil = users.filter((card) => card.email === userEmail);
      console.log(fil);

      if (fil.length > 0) {
        const count = fil[0];
        console.log(count);

        const id = count._id;
        console.log(id);
        fetch(`https://uni-meal-server.vercel.app/users/check/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(members),
        });
      } else {
        console.log("No user found with the given email.");
      }
    } else {
      console.log("User email is not defined.");
    }
    console.log("oks");
    toast(`Successfully Upgraded to ${member} `);
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        console.log("ok");

        // now save the payment in the database
        //   const payment = {
        //     email: user.email,
        //     price: totalPrice,
        //     transactionId: paymentIntent.id,
        //     date: new Date(), // utc date convert. use moment js to
        //     cartIds: cart.map((item) => item._id),
        //     menuItemIds: cart.map((item) => item.menuId),
        //     status: "pending",
        //   };

        //   const res = await axiosSecure.post("/payments", payment);
        //   console.log("payment saved", res.data);
        //   refetch();
        //   if (res.data?.paymentResult?.insertedId) {
        //     Swal.fire({
        //       position: "top-end",
        //       icon: "success",
        //       title: "Thank you for the taka paisa",
        //       showConfirmButton: false,
        //       timer: 1500,
        //     });
        //     navigate("/dashboard/paymentHistory");
        //   }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=" my-20">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary my-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-600">
            {" "}
            Your transaction id: {transactionId}
          </p>
        )}
      </form>
      <Check cart={carts}></Check>
    </div>
  );
};

export default CheckoutForm;
