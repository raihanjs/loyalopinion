import { JobBanner } from "../../components/Hero/Hero";

export default function DigitlamMarketer() {
  return (
    <>
      <JobBanner title="Digital Marketer (Remote)" />

      <section className="container my-5">
        <h3 className="text-2xl font-bold">What We Are Looking For?</h3>
        <p className="my-5">
          We are an innovative and forward-thinking company looking for a
          skilled Digital Marketer to join our remote team. If you have a
          passion for digital marketing and a drive to achieve results, we would
          love to hear from you!
        </p>

        {/* Job instruction */}
        <h4 className="text-xl font-bold underline">Location</h4>
        <p className="ml-5 mt-2">Remote (USA only)</p>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline">Experience</h4>
        <p className="ml-5 mt-2">0-3 Years Experience Required</p>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Salary Range</h4>
        <p className="ml-5 mt-2">$35,000 - $45,000 per year</p>

        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">
          Key Responsibilities
        </h4>
        <ul className="ml-5 mt-2">
          <li>
            Develop and implement digital marketing strategies to drive online
            traffic and increase brand awareness.
          </li>
          <li>
            Manage and optimize digital advertising campaigns across platforms
            such as Google Ads, Facebook, Instagram, and LinkedIn.
          </li>
          <li>
            Create and curate engaging content for various digital channels,
            including websites, social media, and email newsletters.
          </li>
          <li>
            Monitor and analyze digital marketing performance metrics and adjust
            strategies as needed.
          </li>
          <li>
            Conduct market research to identify trends and opportunities for
            growth.
          </li>
          <li>
            Collaborate with other team members to align marketing efforts with
            overall business goals.
          </li>
        </ul>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Requirements</h4>
        <ul className="ml-5 mt-2">
          <li>
            0-3 years of experience in digital marketing or a related field.
          </li>
          <li>
            Proficiency in digital marketing tools and platforms (e.g., Google
            Analytics, SEMrush, Hootsuite).
          </li>
          <li>
            Strong understanding of SEO, PPC, social media marketing, and
            content marketing.
          </li>
          <li>Excellent communication and analytical skills.</li>
          <li>Ability to work independently and as part of a remote team.</li>
          <li>Must be based in the USA.</li>
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
