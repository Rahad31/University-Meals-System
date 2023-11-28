import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Tabs from "../Tabs/Tabs";
import Membership from "../Membership/Membership";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Tabs></Tabs>
      <Membership></Membership>
      <Footer></Footer>
    </div>
  );
};

export default Home;
