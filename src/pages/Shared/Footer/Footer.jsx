import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2c324ad9] text-white">
      <div className="container">
        <div className="flex gap-3 md:gap-5 py-5">
          <a href="/help">Help</a>
          <a href="/about">About US</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy</a>
        </div>
        <div>
          ©2024 Valued Opinions. Valued Opinions is a trademark of Dynata Global
          UK Limited (f/k/a Research Now Limited)
        </div>
      </div>
    </footer>
  );
}
