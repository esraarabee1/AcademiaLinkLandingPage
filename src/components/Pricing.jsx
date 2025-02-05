import React, { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const packages = [
    {
      name: "start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        "A common form of lorem ipsum reads:lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    },
    {
      name: "Advanced",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        "A common form of lorem ipsum reads:lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    },
    {
      name: "Premium",
      monthlyPrice: 39,
      yearlyPrice: 199,
      description:
        "A common form of lorem ipsum reads:lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto py-10">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          We offer flexible plans to suit your needs, whether you're looking for
          short-term commitment or long-term growth.
        </p>
      </div>
      <div className="mt-16">
        <label
          htmlFor="toggle"
          className="flex items-center justify-center cursor-pointer"
        >
          <span className="mr-8 text-2xl font-semibold">Monthly</span>
          <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out ">
            <div
              className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${
                isYearly ? "bg-primary ml-8" : "bg-gray-500"
              }`}
            ></div>
          </div>
          <span className="ml-8 text-2xl font-semibold">Yearly</span>
        </label>
        <input
          type="checkbox"
          id="toggle"
          className="hidden"
          checked={isYearly}
          onChange={() => {
            setIsYearly(!isYearly);
          }}
        ></input>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {packages.map((pkg, index) => {
          return (
            <div
              key={index}
              className="border py-10 md:px-6 px-4 rounded-lg shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-center text-primary">
                {pkg.name}
              </h3>
              <p className="text-tartiary text-center my-5">
                {pkg.description}
              </p>
              <p className="mt-5 text-center text-secondary text-4xl font-bold">
                {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}{" "}
                <span className="text-base text-tartiary font-medium">
                  /{isYearly ? "year" : "month"}
                </span>
              </p>
              <ul className="mt-4 space-y-2 px-4">
                <li>
                  <img src="" alt=""></img>Video of lessons
                </li>
                <li>
                  <img src="" alt=""></img>Video of lessons
                </li>
                <li>
                  <img src="" alt=""></img>Video of lessons
                </li>
                <li>
                  <img src="" alt=""></img>Video of lessons
                </li>
                <li>
                  <img src="" alt=""></img>Video of lessons
                </li>
              </ul>
              <div className="w-full mx-auto mt-8 flex justify-center">
                <button className="py-2 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
                  Get started
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
