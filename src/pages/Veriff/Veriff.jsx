import veriff from "../../assets/Reddit/Reddit.png";

export default function Veriff() {
  function letMe() {
    window.location.href = "https://veriff.me/s/e7PoQ88vY";
  }
  return (
    <section className="my-10">
      <div className="container">
        <div className="md:w-8/12 mx-auto text-center">
          <h2 className="text-xl md:text-4xl font-bold mb-3">
            You have completed survey
          </h2>
          <p>Now, you must have to verify yourself to receive the payment.</p>

          <div className="my-5">
            <p>
              <strong>Required Documents for Veriff Verification</strong>
            </p>
            <p>
              To pass Veriff verification, please ensure you have one of the
              following valid documents:
            </p>

            <ul>
              <li>- Passport</li>
              <li>- Driver’s License</li>
              <li> - National ID Card</li>
            </ul>
          </div>

          <p>
            <small>
              <strong>Note: </strong> Veriff is used for identity verification
              to ensure users are who they claim to be, helping businesses
              comply with legal regulations like Know Your Customer (KYC). This
              process reduces the risk of fraud, protects both the business and
              users, and builds trust in the service by confirming the identity
              of individuals interacting with the platform.
            </small>
          </p>

          <div className="mt-5">
            To Verify scan the image or click <strong>Verify Me</strong> button
            <img src={veriff} alt="" className="mx-auto" />
          </div>

          <button
            onClick={letMe}
            className="bg-green-400 text-white py-2 px-5 rounded-md"
          >
            Verify Me
          </button>
        </div>
      </div>
    </section>
  );
}
