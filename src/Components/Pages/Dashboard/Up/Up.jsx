import React from "react";
import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
const Up = () => {
  const { user } = useAuth();
  console.log(user);
  const [carts, setcarts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setcarts(data));
  }, []);
  console.log(carts);
  const fil = carts.filter((card) => card.email == user.email);
  console.log(fil);
  const jil = fil[0];
  // const {_id,name}=jil;
  console.log(jil);
  let usser = toString(user.email);
  // let id = jil._id;
  // fetch(`http://localhost:5000/users/${usser}`, {
  //   method: "PUT",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(members),
  // });
//   console.log(member);
  return <div></div>;
};

export default Up;
