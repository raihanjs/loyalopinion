import { Link } from "react-router-dom";
import abdullah from "../../assets/veriff/abdullah-al-raiyan.jpg";

// first sent salman farsi but this didn't
// 24th september sending to abdullah al raiyan

export default function VerifyMemberTwo() {
  return (
    <div className="py-20 container">
      <h2 className="text-4xl font-bold text-center">Candidate Verification</h2>
      <p className="mt-8 text-red-500 font-bold">
        Warning: This Link will active for 48 hours only
      </p>
      <p className="py-5">
        Welcome to the candidate verification page. As part of our commitment to
        ensuring a secure and trusted recruitment process, we require all
        shortlisted applicants to complete a verification process with Veriff.
        This ensures that we maintain the highest standards of integrity and
        transparency throughout our hiring procedures.
      </p>

      <h3 className="text-2xl font-bold">Instructions:</h3>

      <div>
        <div className="mb-3 mt-3">
          <p>
            <strong>Step 1: Prepare Your Documents</strong>
          </p>
          <p>
            Make sure you have a valid ID (passport, driver’s license, or
            national ID card) ready.
          </p>
        </div>
        <div className="mb-3">
          <p>
            <strong>Step 2: Start Verification</strong>
          </p>
          <p>
            Scan the image or click the &nbsp;
            <a href="#veriff-btn" className="text-cyan-500">
              Verify
            </a>
            &nbsp; Button below to begin the verification process with Veriff.
          </p>
        </div>
        <div className="mb-3">
          <p>
            <strong>Step 3: Complete Verification</strong>
          </p>
          <p>
            Follow the instructions provided by Veriff to complete your identity
            verification. This process is quick and secure.
          </p>
        </div>
      </div>

      <div className="border border-green-500 p-5" id="veriff-btn">
        <img className="mb-5" src={abdullah} alt="veriff scan image" />
        <hr />
        <button className="py-2 px-8 bg-green-500 rounded-md text-white font-bold mt-5">
          <a href="https://veriff.me/s/Mj14GpRZJ">Verify Me</a>
        </button>
      </div>

      <div className="py-5">
        <p className="font-medium text-sm">
          Once your identity is verified, we will proceed with the final stages
          of your application. You will be contacted by our recruitment team
          with further instructions within 48 hours.
        </p>
      </div>

      <div>
        <p className="mb-2">
          <strong>Questions or Concerns? </strong>
          If you encounter any issues or have questions about the verification
          process, please contact our support team at &nbsp;
          <strong>support@loyalopinion.com</strong>.
        </p>
        <p>
          <strong>Privacy and Security: </strong>
          Your privacy is our priority. For more information about how your data
          is protected, please review our &nbsp;
          <Link to="/privacy" className="text-cyan-500">
            Privacy Policy Link
          </Link>
          &nbsp; and
          <a
            className="text-cyan-500"
            href="https://www.veriff.com/privacy-notice"
            target="_blank"
          >
            &nbsp; Veriff’s Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  );
}
