import React from "react";
import { contact1, contact2 } from "../assets";

const Contact = () => {
  return (
    <div className="w-full h-full bg-tertiary text-primary py-6 md:py-20 mb-6">
      <div className="w-full h-full flex flex-col md:flex-row flex-wrap">
        <div className="w-full md:w-[50%] flex flex-col flex-wrap justify-center items-center md:items-start px-4 sm:px-10 lg:px-20 py-6">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Who We Are</h1>
          <p className="mb-8">
            Welcome to our sales and marketing company, where we specialize in
            helping customers snag great deals from the leading solar and cable
            companies in the DC, Maryland, and Virginia area.We understand that
            finding the right solar and cable solutions for your needs can be a
            daunting task, which is why we're here to make the process easier
            and more affordable for you.
          </p>
          <div>
            <button className="my-2 py-3 px-4 lg:px-6 rounded-full mr-4 lg:mr-6 text-secondary bg-primary font-semibold">Read More</button>
            <button className="my-2 py-3 px-6 rounded-full bg-secondary font-semibold">Contact Us Today</button>
          </div>
        </div>

        <div className="static lg:relative w-full md:w-[50%] flex flex-wrap justify-center items-center right-40">
          <img src={contact1} alt="contact 1" className="hidden xl:block" />
          <img src={contact2} alt="contact 2" className="static lg:absolute right-1"/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
