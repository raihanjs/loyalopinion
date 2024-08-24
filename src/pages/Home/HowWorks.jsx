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

            <p className="text-md md:text-lg">
              We highly value the time and insights you contribute through our
              surveys. When you become a member of Valued Opinions, you have the
              opportunity to earn between $10 and $30 for each paid survey you
              complete. Your earnings can be redeemed for gift cards from some
              of the most popular retailers, including Amazon.com, Macy’s, and
              Target. Whether you’re sharing your opinion on the latest products
              or giving feedback on services, your participation is rewarded
              with gift cards that you can use at your favorite stores. Join us
              today and start turning your opinions into rewards!
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
