import React from "react";

import Footer from "../Footer/Footer";
import Tabs from "../Tabs/Tabs";
import Membership from "../Membership/Membership";
import Sell from "../Sell/Sell";

import Benner from "../Benner/Benner";
const Home = () => {
  return (
    <div className="">
      <Benner></Benner>
      <Tabs></Tabs>
      <Sell></Sell>
      <Membership></Membership>
      <Footer></Footer>
    </div>
  );
};

export default Home;
