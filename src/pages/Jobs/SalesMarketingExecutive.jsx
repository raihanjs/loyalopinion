import { JobBanner } from "../../components/Hero/Hero";

export default function SalesMarketingExecutive() {
  return (
    <>
      <JobBanner title="Sales & Marketing Executive (Remote)" />

      <section className="container my-5">
        <h3 className="text-2xl font-bold">What We Are Looking For?</h3>
        <p className="my-5">
          We are a dynamic and innovative company seeking a motivated Sales &
          Marketing Executive to join our remote team. If you’re passionate
          about sales and marketing and eager to grow your career, we want to
          hear from you!
        </p>

        {/* Job instruction */}
        <h4 className="text-xl font-bold underline">Location</h4>
        <p className="ml-5 mt-2">Remote (USA only)</p>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline">Experience</h4>
        <p className="ml-5 mt-2">0-6 Months Experience Required</p>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Salary Range</h4>
        <p className="ml-5 mt-2">
          $40,000 - $50,000 annually (depending on experience)
        </p>

        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">
          Key Responsibilities
        </h4>
        <ul className="ml-5 mt-2">
          <li>
            Assist in developing and executing sales and marketing strategies.
          </li>
          <li>
            Conduct market research to identify new opportunities and trends.
          </li>
          <li>Manage social media accounts and create engaging content.</li>
          <li>
            Support lead generation efforts and follow up with potential
            clients.
          </li>
          <li>
            Collaborate with team members to achieve sales targets and marketing
            goals.
          </li>
          <li>
            Analyze marketing performance and provide recommendations for
            improvement.
          </li>
        </ul>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Requirements</h4>
        <ul className="ml-5 mt-2">
          <li>- Strong communication skills and a creative mindset.</li>
          <li>
            - Basic understanding of social media platforms and how they work.
          </li>
          <li>- Ability to work independently and remotely.</li>
          <li>- Reliable internet connection and a quiet workspace.</li>
          <li>
            - No prior experience required, but a passion for social media and
            marketing is essential.
          </li>
          <li>- Must be located in the USA.</li>
        </ul>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Benefits</h4>
        <ul className="ml-5 mt-2">
          <li>
            0-6 months of experience in sales, marketing, or a related field.
          </li>
          <li>Excellent communication and interpersonal skills.</li>
          <li>Strong organizational and time management abilities.</li>
          <li>
            Proficiency in Microsoft Office Suite and basic digital marketing
            tools.
          </li>
          <li>Must be based in the USA.</li>
          <li>
            Ability to work independently and as part of a team in a remote
            environment.
          </li>
        </ul>

        {/* Application */}
        <p className="mt-5">
          <strong>How to Apply:</strong> If you meet the requirements and are
          excited about this opportunity, please submit your resume at{" "}
          <strong>info@loyalopinion.com</strong>.
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
