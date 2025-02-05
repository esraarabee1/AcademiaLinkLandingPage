import React from "react";
import Banner from "../shared/Banner";
import share from "../assets/share.png";

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-24">
      <Banner
        banner={share}
        heading="Each Student Can Share Their Discount Code with Friends"
        subheading="We believe in rewarding our community! As a student, you can share your unique discount code with friends and family, helping them save while earning rewards for yourself. It's a win-win!"
        btn1={"Get started"}
        btn2={""}
      />
    </div>
  );
};

export default Newsletter;
