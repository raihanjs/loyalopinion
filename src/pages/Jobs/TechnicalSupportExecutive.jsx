import { JobBanner } from "../../components/Hero/Hero";

export default function TechnicalSupportExecutive() {
  return (
    <>
      <JobBanner title="Technical Support Executive (Remote)" />

      <section className="container my-5">
        <h3 className="text-2xl font-bold">What We Are Looking For?</h3>
        <p className="my-5">
          We are an innovative company seeking an experienced Remote Technical
          Support Executive to join our team. The ideal candidate will have 2-3
          years of technical support experience and a strong passion for
          problem-solving. This role offers the flexibility of working remotely
          while contributing to our commitment to excellent customer service.
        </p>

        {/* Job instruction */}
        <h4 className="text-xl font-bold underline">Location</h4>
        <p className="ml-5 mt-2">Remote (International)</p>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline">Experience</h4>
        <p className="ml-5 mt-2">1-2 Years Experience Required</p>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Salary Range</h4>
        <p className="ml-5 mt-2">$45,000 - $60,000 per year</p>

        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">
          Key Responsibilities
        </h4>
        <ul className="ml-5 mt-2">
          <li>
            Provide expert technical support to customers through various
            channels, including phone, email, and chat.
          </li>
          <li>
            Diagnose and resolve technical issues related to our products and
            services efficiently.
          </li>
          <li>
            Guide customers through troubleshooting steps and offer solutions to
            their technical problems.
          </li>
          <li>
            Document and track customer interactions and issue resolutions in
            our support system.
          </li>
          <li>
            Collaborate with cross-functional teams to address complex technical
            problems and enhance support processes.
          </li>
          <li>
            Stay informed about product updates and industry trends to provide
            accurate support.
          </li>
        </ul>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Requirements</h4>
        <ul className="ml-5 mt-2">
          <li>
            1-3 years of experience in technical support or a similar role.
          </li>
          <li>Strong technical knowledge and problem-solving skills.</li>
          <li>Excellent communication skills, both verbal and written.</li>
          <li>
            Ability to work independently and manage multiple support cases
            effectively.
          </li>
          <li>Reliable internet connection and a quiet workspace.</li>
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
          <strong>How to Apply:</strong> If you have the experience and skills
          required for this role and are ready to contribute to a dynamic team
          as a Remote Technical Support Executive, please submit your resume at{" "}
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
