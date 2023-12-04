import React from "react";

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/Provider";
import { useState, useEffect } from "react";
const Useradmin = () => {
  const { user } = useContext(AuthContext);

  const [cards, setcards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/meal")
      .then((res) => res.json())
      .then((data) => setcards(data));
  }, []);

  const mem = cards.filter((card) => card.useremail == user.email);
  let len = mem.length;
  console.log(len);
  return (
    <div className="flex flex-col my-5 justify-center items-center text-center gap-3 md:my-40">
      <span>
        {" "}
        <img className=" w-[300px] rounded-md" src={user.photoURL}></img>
      </span>


        <h3>Name : {user.displayName}</h3>
        <h3>Email : {user.email}</h3>
        <h3>Added Item : {len}</h3>
      </div>
    
  );
};

export default Useradmin;
