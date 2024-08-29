import { JobBanner } from "../../components/Hero/Hero";

export default function GraphicsDesigner() {
  return (
    <>
      <JobBanner title="Graphics Designer (Remote)" />

      <section className="container my-5">
        <h3 className="text-2xl font-bold">What We Are Looking For?</h3>
        <p className="my-5">
          We are a creative and forward-thinking company seeking a talented
          Graphics Designer to join our remote team. If you have a passion for
          design and want to contribute to exciting projects, we’d love to hear
          from you!
        </p>

        {/* Job instruction */}
        <h4 className="text-xl font-bold underline">Location</h4>
        <p className="ml-5 mt-2">International</p>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline">Experience</h4>
        <p className="ml-5 mt-2">0-3 Years Experience Required</p>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Salary Range</h4>
        <p className="ml-5 mt-2">
          <p className="ml-5 mt-2">$50,000 - $90,000 per year</p>
        </p>

        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">
          Key Responsibilities
        </h4>
        <ul className="ml-5 mt-2">
          <li>
            Create visually appealing graphics for various digital and print
            media, including websites, social media, marketing materials, and
            presentations.
          </li>
          <li>
            Collaborate with the marketing and content teams to produce designs
            that align with brand guidelines and campaign goals.
          </li>
          <li>
            Develop and maintain design concepts and layouts, ensuring
            consistency and high-quality execution.
          </li>
          <li>
            Stay up-to-date with design trends and software to bring fresh ideas
            and techniques to the team.
          </li>
          <li>
            Manage multiple design projects simultaneously, meeting deadlines
            and maintaining attention to detail.
          </li>
          <li>
            Prepare and deliver final design files in various formats as
            required.
          </li>
        </ul>
        {/* Job instruction */}
        <h4 className="text-xl font-bold underline mt-5">Requirements</h4>
        <ul className="ml-5 mt-2">
          <li>0-3 years of experience in graphic design or a related field.</li>
          <li>
            Proficiency in design software such as Adobe Creative Suite
            (Photoshop, Illustrator, InDesign) and other graphic design tools.
          </li>
          <li>
            Strong portfolio showcasing a range of design projects and creative
            abilities.
          </li>
          <li>Excellent communication and collaboration skills.</li>
          <li>
            Ability to work independently and manage time effectively in a
            remote environment.
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
