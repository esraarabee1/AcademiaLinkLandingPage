import React from "react";
import istudy from "../assets/istudy.png";
import { ImFacebook2 } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { TfiTwitter } from "react-icons/tfi";
const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 text-primary"
          >
            <img
              src={istudy}
              alt=""
              className="w-8 inline-block items-center"
            />
            <span className="text-white">AcademiaLink</span>
          </a>
          <p className="md:w-1/2">
            Your success is our mission. Join us for quality learning and
            flexible courses. Let’s grow together! We look forward to being part
            of your success!
          </p>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            ></input>
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
            ></input>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify between items-start gap-8">
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Platform</h4>
              <ul className="space-y-3">
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Feature
                </a>
                <a href="/" className="block hover:text-gray-300">
                  About
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Pricing
                </a>
              </ul>
            </div>
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Help</h4>
              <ul className="space-y-3">
                <a href="/" className="block hover:text-gray-300">
                  How does it works ?
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Where to ask question ?
                </a>
                <a href="/" className="block hover:text-gray-300">
                  How to play ?
                </a>
                <a href="/" className="block hover:text-gray-300">
                  What is need for this ?
                </a>
              </ul>
            </div>
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Contacts</h4>
              <ul className="space-y-3">
                <p className=" hover:text-gray-300">1234-567-890</p>
                <p className=" hover:text-gray-300">1234-567-890</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>All rights reserved.</p>
        <div className="flex items-center space-x-5">
          <ImFacebook2 className="cursor-pointer" />
          <GrLinkedin className="cursor-pointer" />
          <BsInstagram className="cursor-pointer" />
          <TfiTwitter className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
