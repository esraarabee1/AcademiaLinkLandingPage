import React from "react";
import edu1 from "../assets/edu1.png";
import rafiki from "../assets/rafiki.png";
import Banner from "../shared/Banner";

const Home = () => {
  //container--row--col--item
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
      <Banner
        banner={rafiki}
        heading="Develop Your Skills with Confidence"
        subheading="Take the first step towards unlocking your full potential. Our academy offers expert-led courses designed to help you master new skills, enhance your knowledge, and achieve your goals."
        btn1={"Get started"}
        btn2={"Discount"}
      />
    </div>
  );
};

export default Home;
