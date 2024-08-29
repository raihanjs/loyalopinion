import React from "react";
import { JobBanner } from "../../components/Hero/Hero";

export default function CustomerServiceRepresentative() {
  return (
    <>
      <JobBanner title="Customer Service Representative (Remote)" />

      <section className="container my-5">
        <h3 className="text-2xl font-bold">What We Are Looking For?</h3>
        <p className="my-5">
          We are a growing company looking for a dedicated and reliable Remote
          Customer Service Representative to join our team. No prior experience
          is required, as we provide full training. If you are motivated, enjoy
          helping others, and are looking for an entry-level opportunity, this
          could be the perfect role for you!
        </p>

        {/* Job instruction */}
        <h4 className="text-xl font-bold underline">Location</h4>
        <p className="ml-5 mt-2">Remote (USA only)</p>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Salary Range</h4>
        <p className="ml-5 mt-2">$30,000 - $40,000 per year</p>

        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">
          Key Responsibilities
        </h4>
        <ul className="ml-5 mt-2">
          <li>
            - Make and receive calls to assist customers with inquiries and
            support needs.
          </li>
          <li>- Accurately update and maintain customer data in our system.</li>
          <li>
            - Note important dates and information, ensuring they are
            communicated to the relevant upper-level personnel.
          </li>
          <li>
            - Provide excellent customer service by addressing customer needs
            and concerns promptly and professionally.
          </li>
        </ul>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Requirements</h4>
        <ul className="ml-5 mt-2">
          <li>- Strong communication skills, both written and verbal.</li>
          <li>- Ability to work independently and remotely.</li>
          <li>- Reliable internet connection and a quiet workspace.</li>
          <li>
            - No prior experience required, but a willingness to learn and adapt
            is essential.
          </li>
          <li>
            - Must be located in the USA and able to pass KYC verification.
          </li>
        </ul>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Benefits</h4>
        <ul className="ml-5 mt-2">
          <li>- Competitive salary with opportunities for growth.</li>
          <li>- Flexible remote work environment.</li>
          <li>- Comprehensive training and support.</li>
          <li>
            - Paid time off and health benefits after a probationary period.
          </li>
        </ul>

        {/* Application */}
        <p className="mt-5">
          <strong>How to Apply:</strong> If you're interested in joining our
          team as a Remote Customer Service Representative, please submit your
          resume at <strong>info@loyalopinion.com</strong>.
        </p>

        {/* KYC */}
        <p className="mt-5">
          <strong>Note on KYC Verification: </strong>
          For security purposes, you must verify your details using Veriff. This
          process involves submitting identification documents and, in some
          cases, participating in a video call to confirm your identity. This
          step ensures compliance and protects both you and the company.
        </p>
      </section>
    </>
  );
}
