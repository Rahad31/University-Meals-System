import React from "react";
import { useState, useEffect } from "react";
import Tabcart from "../../Tabcart/Tabcart";
const Allmeals = () => {
  const [cards, setcards] = useState([]);
  const [displaycard, setDisplaycard] = useState(cards);

  const Users2 = () => {
    const { data: users } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/meal");
        return res.json();
      },
    });
  };

  console.log(Users2);
  useEffect(() => {
    fetch("http://localhost:5000/meal")
      .then((res) => res.json())
      .then((data) => setcards(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/meal")
      .then((res) => res.json())
      .then((data) => setDisplaycard(data));
  }, []);
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-2 my-6">
      <div className="text-4xl font-bold text-[#EAA334]">ALL MEAL </div>

      <div className="text-xl">Great minds need great meals</div>
      <div
        className="w-1/12
       -bold"
      >
        <hr></hr>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {displaycard.map((jobs) => (
          <Tabcart jobs={jobs}></Tabcart>
        ))}
      </div>
      <hr></hr>
    </div>
  );
};

export default Allmeals;
