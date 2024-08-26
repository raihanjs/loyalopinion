import React from "react";

export default function GiftCard({ card }) {
  return (
    <div className="border p-2 md:p-5 rounded-md">
      <div className="p-3">
        <img
          className="w-32 sm:w-40 md:w-60 mx-auto rounded-md"
          src={card?.img}
          alt={card?.name}
        />
      </div>
      <hr />
      <div className="text-center">
        <h6 className="text-lg font-bold capitalize">{card?.name}</h6>
        <p>{card?.text}</p>
      </div>
    </div>
  );
}
