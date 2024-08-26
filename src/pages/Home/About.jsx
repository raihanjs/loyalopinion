import React from "react";
import showPhone from "../../assets/payment/show-phone.jpg";
import { PrimaryButton } from "../../components/Buttons";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="md:grid grid-cols-2 gap-5">
          <div>
            <h5 className="text-lg md:text-xl font-bold uppercase text-[#d81033] mb-5">
              About Loyal Opinion
            </h5>
            <h3 className="text-3xl md:text-5xl font-bold text-black mb-5">
              The premiere choice for maximizing your digital sales and user
              retention!
            </h3>
            <p className="text-md md:text-lg mb-3">
              Founded in January 2024, our survey site is dedicated to providing
              a platform where your opinions truly matter. As we launch our
              website, we're excited to offer members the opportunity to
              participate in online surveys and be rewarded for their valuable
              insights.
            </p>
            <p className="text-md md:text-lg">
              We believe in rewarding your time and effort, which is why we
              offer a variety of compensation options, including Amazon gift
              cards, Apple gift cards, PayPal, and more. Your feedback helps
              shape the products and services of tomorrow, and we want to ensure
              you're recognized for your contribution.
            </p>

            <Link to="/about">
              <PrimaryButton text="Learn More" />
            </Link>
          </div>
          <div className="ml-auto mt-5 md:mt-0">
            <img src={showPhone} className="rounded-md" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
