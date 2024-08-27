import { Link } from "react-router-dom";
import SectionTitleRed from "../../components/Titles/SectionTitleRed";

export default function SuccessSurvey() {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div>
        <SectionTitleRed txt="Thank you for completing this survey" />
        <p>
          Please keep track your mail inbox. You will get a verification link to
          receive your payment
        </p>

        <Link to="/" className="text-cyan-500">
          Back to home
        </Link>
      </div>
    </section>
  );
}
