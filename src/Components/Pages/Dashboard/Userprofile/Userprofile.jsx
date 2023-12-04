import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/Provider";
import { useState, useEffect } from "react";
import Procart from "../Procart/Procart";
const Userprofile = () => {
  const { user } = useContext(AuthContext);

  const [cards, setcards] = useState([]);

  useEffect(() => {
    fetch("https://uni-meal-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setcards(data));
  }, []);

  const mem = cards.filter((card) => card.email == user.email);

  return (
    <div className="flex flex-col my-5 justify-center items-center text-center gap-3 md:my-40">
      <span>
        {" "}
        <img className=" w-[300px] rounded-md" src={user.photoURL}></img>
      </span>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {mem.map((jobs) => (
          <Procart jobs={jobs}></Procart>
        ))}
      </div>
    </div>
  );
};

export default Userprofile;
