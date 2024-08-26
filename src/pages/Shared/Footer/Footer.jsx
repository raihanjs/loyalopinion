import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#2c324ad9] text-white">
      <div className="container">
        <div className="flex gap-3 md:gap-5 py-5">
          <Link to="/help">Help</Link>
          <Link to="/about">About US</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
        <div>
          ©2024 Valued Opinions. Valued Opinions is a trademark of Dynata Global
          UK Limited (f/k/a Research Now Limited)
        </div>
      </div>
    </footer>
  );
}
