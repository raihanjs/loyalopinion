import { JobBanner } from "../../components/Hero/Hero";

export default function SocialMediaManager() {
  return (
    <>
      <JobBanner title="Social Media Manager (Remote)" />

      <section className="container my-5">
        <h3 className="text-2xl font-bold">What We Are Looking For?</h3>
        <p className="my-5">
          We are a dynamic company looking for a creative and motivated Remote
          Social Media Manager to help us grow our online presence. This is an
          entry-level position, and no prior experience is required. If you're
          passionate about social media and eager to learn, this could be the
          perfect opportunity for you!
        </p>

        {/* Job instruction */}
        <h4 className="text-xl font-bold underline">Location</h4>
        <p className="ml-5 mt-2">Remote (USA only)</p>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline">Experience</h4>
        <p className="ml-5 mt-2">No Experience Required</p>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Salary Range</h4>
        <p className="ml-5 mt-2">$35,000 - $45,000 per year</p>

        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">
          Key Responsibilities
        </h4>
        <ul className="ml-5 mt-2">
          <li>
            - Develop and implement social media strategies to enhance brand
            visibility and engagement.
          </li>
          <li>
            - Create, curate, and manage content across various social media
            platforms (e.g., Facebook, Instagram, Twitter, LinkedIn).
          </li>
          <li>
            - Monitor social media channels and respond to comments, messages,
            and mentions in a timely manner.
          </li>
          <li>
            - Analyze social media metrics and generate reports to track
            performance and optimize strategies.
          </li>
          <li>
            - Collaborate with the marketing team to align social media efforts
            with broader marketing campaigns.
          </li>
          <li>
            - Stay up-to-date with the latest social media trends and tools.
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
          <li>- Competitive salary with opportunities for growth.</li>
          <li>- Flexible remote work environment.</li>
          <li>- Comprehensive training and support.</li>
          <li>
            - Paid time off and health benefits after a probationary period.
          </li>
        </ul>

        {/* Application */}
        <p className="mt-5">
          <strong>How to Apply:</strong> If you're excited about social media
          and ready to start your career as a Remote Social Media Manager,
          please submit your resume at <strong>info@loyalopinion.com</strong>.
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
