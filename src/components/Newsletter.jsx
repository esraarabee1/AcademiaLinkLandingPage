import React from "react";
import Banner from "../shared/Banner";
import edu1 from "../assets/edu1.png";

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-24">
      <Banner
        banner={edu1}
        heading="Each student an share their discount code for friends"
        subheading="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem."
        btn1={"Get started"}
        btn2={""}
      />
    </div>
  );
};

export default Newsletter;
