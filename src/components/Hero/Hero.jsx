import React from "react";
import { PrimaryButton } from "../../components/Buttons";
import { Link } from "react-router-dom";

export default function Hero({ img, title, subTitle }) {
  return (
    <section
      className="relative h-[350px] sm:h-[550px] bg-cover bg-center"
      style={{
        backgroundImage: `url('${img}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl md:text-6xl font-bold leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-sm sm:text-md md:text-lg md:text-xl max-w-2xl uppercase">
          {subTitle}
        </p>
        <Link to="/survey">
          <PrimaryButton text="Take Survey" />
        </Link>
      </div>
    </section>
  );
}

import JobBG from "../../assets/job-details-banner.svg";
export function JobBanner({ title }) {
  return (
    <section
      className="relative h-[350px] sm:h-[350px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('${JobBG}')`,
      }}
    >
      <div className="bg-slate-900/75 py-40">
        <div className="container">
          <h1 className="text-white text-2xl sm:text-3xl font-bold">{title}</h1>

          <div className="sm:flex gap-5 text-white font-medium mt-5">
            <p>Job Type: Full Time</p>
            <p>Deadline : September 21, 2024</p>
          </div>

          <p className="text-white font-medium">
            For Any Queries Email:
            <span className="text-[#d81033]"> info@loyalopinion.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
