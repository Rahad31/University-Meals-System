import React from "react";

import { useEffect, useState } from "react";

import Tabcart from "../Tabcart/Tabcart";
const Tabs = () => {
  let Job = [];

  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/meal")
      .then((res) => res.json())
      .then((data) => setjobs(data));
  }, []);
  
  let Job1 = jobs.filter((job) => job.type == "Breakfast");
  // console.log(Job1);
  const [job, setjob] = useState(jobs);
  useEffect(() => {
    fetch("http://localhost:5000/meal")
      .then((res) => res.json())
      .then((data) => setjob(data));
  }, []);
  // console.log(job);
  // const [job, setjob] = useState(Job);
  // const [count, setcount] = useState();
  const handlesearch = (id) => {
    // console.log("done");
    // console.log(id);
    // Job = jobs.filter((job) => job.type == "Part Time");
    // console.log(Job);
    Job = jobs.filter((job) => job.type == "Breakfast");
    if (id == 1) {
      console.log("done");
      const site = jobs.filter((job) => job.type == "Breakfast");
      setjob(site);
    } else if (id == 2) {
      const remote = jobs.filter((job) => job.type == "Lunch");
      setjob(remote);
    } else if (id == 3) {
      const hybrid = jobs.filter((job) => job.type == "Dinner");
      setjob(hybrid);
    } else if (id == 0) {
      setjob(jobs);
    }
  };
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-2 my-6">
      <div className="text-4xl font-bold text-[#EAA334]">MEAL CATEGORY</div>

      <div className="text-xl">Great minds need great meals</div>
      <div
        className="w-1/12
       -bold"
      >
        <hr></hr>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        <button onClick={() => handlesearch("0")} className="btn btn-error">
          All
        </button>
        <button onClick={() => handlesearch("1")} className="btn btn-error">
          Breakfast
        </button>
        <button onClick={() => handlesearch("2")} className="btn btn-error">
          Lunch
        </button>
        <button onClick={() => handlesearch("3")} className="btn btn-error">
          Dinner
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {job.map((jobs) => (
          <Tabcart jobs={jobs}></Tabcart>
        ))}
      </div>
      <hr></hr>
    </div>
  );
};

export default Tabs;
