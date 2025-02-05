import React from "react";
import back from "../assets/back.png";
import idea from "../assets/idea.png";
import cuate from "../assets/cuate.png";
const About = () => {
  return (
    <div className="md:p-14 p-4  max-w-screen-2xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-center  gap-8">
        <div className="md:w-1/2">
          <img src={cuate} className="lg:h-[386px]"></img>
        </div>
        <div className="md:w-3/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            Our journey has been driven by a passion for excellence and a
            commitment to continuous growth. Over the years, we’ve refined our
            products to meet the evolving needs of our students and deliver
            unmatched quality.
          </p>
          <button className="py-2 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
            Get started
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between items-center  gap-8">
        <div className="md:w-1/2">
          <img src={cuate} className="lg:h-[386px]"></img>
        </div>
        <div className="md:w-3/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            We’re committed to continuous improvement, updating our programs
            with the latest trends. Our user-centric design ensures a seamless
            experience, and feedback-driven growth allows us to refine based on
            real user insights. This dedication has led to proven results with
            many successful students.
          </p>
          <button className="py-2 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
