import React from "react";
import showPhone from "../../assets/payment/show-phone.jpg";
import { PrimaryButton } from "../../components/Buttons";

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
              Giftme is a platform for brick and mortar small and medium sized
              businesses(smes) that allows them to easily acquire, retain and
              upsell their customers through digital channels.
            </p>

            <p className="text-md md:text-lg">
              Our platform allows you to create branded gift card websites,
              easily keep track of your customer base and provides a convenient
              way for shoppers to utilize the various gift options your business
              provides!
            </p>
            <PrimaryButton text="Learn More" />
          </div>
          <div className="ml-auto mt-5 md:mt-0">
            <img src={showPhone} className="rounded-md" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
