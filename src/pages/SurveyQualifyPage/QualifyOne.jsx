import { useState } from "react";
import { Link } from "react-router-dom";

export default function QualifyOne() {
  const [conscent, setConscent] = useState(false);
  return (
    <section>
      <div className="bg-red-500 p-2">
        <p>Completed 0%</p>
      </div>
      <div className="md:w-6/12 mx-auto my-12">
        <h2 className="text-4xl font-bold text-center mb-5">Loyal Opinion</h2>
        <p className="mb-5">
          To take advantage of this rewards opportunity, I hereby direct Loyal
          Opinion to use my survey responses, as well as any personal,
          demographic, and other information about me, and to exchange such
          information with survey sponsors, vendors, and other trusted third
          parties, in connection with providing offers and rewards to me, and
          for related research, marketing, attribution, analytics, and other
          business purposes.
        </p>

        <p>
          You may rely upon this direction notwithstanding any general opt-out
          for the sale/share of personal information, processing for targeted
          advertising, or limiting certain uses of sensitive personal
          information. See links to our
          <Link to="/terms" className="text-cyan-500">
            Terms of Use
          </Link>
          ,
          <Link to="/privacy" className="text-cyan-500">
            Privacy Policy.
          </Link>
        </p>

        <div className="mt-12">
          <div
            className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 cursor mb-5"
            onClick={() => setConscent(true)}
          >
            <input
              id="bordered-radio-1"
              type="radio"
              value="yes"
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree
            </label>
          </div>

          <div
            className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 cursor mb-5"
            onClick={() => setConscent(false)}
          >
            <input
              id="bordered-radio-2"
              type="radio"
              value="yes"
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I disagree
            </label>
          </div>

          {conscent ? (
            <button className="text-lg font-bold bg-cyan-500 text-white py-2 px-20">
              <Link to="qualify-question-2">Continue</Link>
            </button>
          ) : (
            <button className="text-lg font-bold bg-cyan-100 text-white py-2 px-20">
              Continue
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
