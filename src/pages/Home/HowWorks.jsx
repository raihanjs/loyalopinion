import React from "react";
import { MdCheckBox } from "react-icons/md";

export default function HowWorks() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="md:grid grid-cols-2 gap-5">
          <div className="flex items-center md:justify-center h-full">
            <div className="mb-5 md:mb-0">
              <h3 className="text-2xl md:text-4xl font-bold text-black mb-5">
                3 SIMPLE STEPS
              </h3>
              <ul>
                <li className="flex items-center text-xl md:text-4xl mb-3 md:mb-5 text-3xl font-bold">
                  <MdCheckBox className="mr-3 text-[#d81033]" /> Participate In
                  Surveys
                </li>
                <li className="flex items-center text-xl md:text-4xl mb-3 md:mb-5 text-3xl font-bold">
                  <MdCheckBox className="mr-3 text-[#d81033]" /> Provide Your
                  Loyal Opinion
                </li>
                <li className="flex items-center text-xl md:text-4xl mb-3 md:mb-5 text-3xl font-bold">
                  <MdCheckBox className="mr-3 text-[#d81033]" /> Earn Rewards
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h5 className="text-lg md:text-xl font-bold uppercase text-[#d81033] mb-5">
              How It Works
            </h5>

            <h3 className="text-3xl md:text-5xl font-bold text-black mb-5">
              Share your opinions through paid online surveys and make your
              voice heard.
            </h3>

            <p className="text-md md:text-lg mb-3">
              Get started by choosing from a variety of surveys available on our
              platform. Each survey is tailored to your interests, ensuring that
              your feedback is relevant and valuable.
            </p>
            <p className="text-md md:text-lg mb-3">
              Share your honest opinions and insights through our
              easy-to-complete surveys. Your voice helps shape the future of
              products and services, making a real impact in the market.
            </p>
            <p className="text-md md:text-lg">
              After completing surveys, you'll earn points that can be redeemed
              for exciting rewards, including Amazon gift cards, Apple gift
              cards, PayPal, and more. The more surveys you take, the more you
              earn!
            </p>

            <button className="mt-8 inline-block bg-[#d81033] hover:bg-[#9b181b] text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
