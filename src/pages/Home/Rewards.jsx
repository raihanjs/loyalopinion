import React from "react";
import rewardsBg from "../../assets/payment/payment-bg.png";
import AmazonCard from "../../assets/payment/amazon.png";
import AppleCard from "../../assets/payment/apple.png";
import PaypalCard from "../../assets/payment/paypal.png";
import { WhiteButton } from "../../components/Buttons";
import { Link } from "react-router-dom";

export default function Rewards() {
  return (
    <section
      className="overflow-hidden"
      style={{
        background:
          "radial-gradient(38.53% 56.7% at 25.49% 50.06%, #d81033 0%, #9b181b 100%)",
      }}
    >
      <img src={rewardsBg} className="ml-auto" alt="" />
      <div className="container">
        <div className="-mt[300px] md:-mt-[500px]">
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Get rewarded for your participation.
          </h4>
          <p className="text -lg md:text-xl text-white">
            Our rewards program offers popular giftcards
            <br />
            and cashouts via PayPal.
          </p>
          {/* Gift Cards */}
          <div className="flex pt-5">
            <img
              src={AmazonCard}
              className="h-[50px] md:h-[150px] rounded-md mr-2"
              alt=""
            />
            <img
              src={AppleCard}
              className="h-[50px] md:h-[150px] rounded-md mr-2"
              alt=""
            />
            <img
              src={PaypalCard}
              className="h-[50px] md:h-[150px] rounded-md"
              alt=""
            />
          </div>
          {/* See all gift cards */}
          <div className="pb-10">
            <Link to="/rewards">
              <WhiteButton text="See Our Rewards" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
