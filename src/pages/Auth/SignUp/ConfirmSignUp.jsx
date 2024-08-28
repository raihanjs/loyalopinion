import React from "react";
import SectionTitleRed from "../../../components/Titles/SectionTitleRed";

export default function ConfirmSignUp() {
  return (
    <section className="container my-20">
      <SectionTitleRed txt="Thank you for signup" />
      <p>Keep track your mail, we will send a verification link</p>
      <br />
      <small>Also check your spam box, Thank you</small>
    </section>
  );
}
