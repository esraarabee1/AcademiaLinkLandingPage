import React from "react";
import edu1 from "../assets/edu1.png";
import Banner from "../shared/Banner";
const Home = () => {
  //container--row--col--item
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
      <Banner
        banner={edu1}
        heading="develop your skills without lorem"
        subheading="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem."
        btn1={"Get started"}
        btn2={"Discount"}
      />
    </div>
  );
};

export default Home;
