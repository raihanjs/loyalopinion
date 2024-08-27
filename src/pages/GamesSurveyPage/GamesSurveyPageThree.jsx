import { useNavigate } from "react-router-dom";
import SectionTitleBlack from "../../components/Titles/SectionTitleBlack";

export default function GamesSurveyPageThree() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/survey/survey79eiyyfdqresponseyewrqew9ewre6ew");
  };
  return (
    <section>
      <div className="bg-red-500 p-2">
        <p>Completed 90%</p>
      </div>

      <div className="md:w-6/12 mx-auto my-12">
        <div className="text-center">
          <SectionTitleBlack
            txt="Part 3: Gaming Community and Social Aspects (10 Questions)
"
          />
        </div>

        <form className="max-w-sm mx-auto mt-12" onSubmit={handleSubmit}>
          {/* Often */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you actively participate in any gaming communities (e.g.,
              Discord servers, forums)?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
          {/* Type */}
          <div className="mb-5">
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Have you made friends through gaming?
            </label>
            <select
              id="type"
              name="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Yes, many</option>
              <option value="2">Yes, a few</option>
              <option value="3">No</option>
            </select>
          </div>
          {/* Hours */}
          <div className="mb-5">
            <label
              htmlFor="hours"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you watch gaming livestreams or video content (e.g., Twitch,
              YouTube)?
            </label>
            <select
              id="hours"
              name="hours"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Regularly</option>
              <option value="1">Occasionally</option>
              <option value="1">Rarely</option>
              <option value="1">Never</option>
            </select>
          </div>
          {/* Genre */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How important is multiplayer or social interaction in your gaming
              experience?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="8">Very important</option>
              <option value="8">Somewhat important</option>
              <option value="8">Not very important</option>
              <option value="8">Not important at all</option>
            </select>
          </div>
          {/* Single */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you prefer playing games with friends or solo?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">With friends</option>
              <option value="2">Solo</option>
              <option value="3">No preference</option>
            </select>
          </div>
          {/* Spend */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How often do you discuss gaming topics with others?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Daily</option>
              <option value="1">Weekly</option>
              <option value="1">Monthly</option>
              <option value="1">Rarely/Never</option>
            </select>
          </div>
          {/* News */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you follow any gaming influencers or streamers?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Yes, regularly</option>
              <option value="2">Yes, occasionally</option>
              <option value="3">No</option>
            </select>
          </div>
          {/* Discover */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Have you ever been part of a gaming clan or guild?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="6">Yes, currently</option>
              <option value="6">Yes, in the past</option>
              <option value="6">No</option>
            </select>
          </div>
          {/* esports */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How do you feel about toxicity in the gaming community?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">It’s a major issue</option>
              <option value="1">It’s somewhat of an issue</option>
              <option value="1">It’s not a big deal</option>
              <option value="1">I’ve never encountered it</option>
            </select>
          </div>
          {/* Favortie */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you think gaming brings people together or creates divisions?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Brings people together</option>
              <option value="1">Creates divisions</option>
              <option value="1">Both</option>
              <option value="1">Neither</option>
            </select>
          </div>
          {/* Favortie */}

          <input
            type="submit"
            className="text-lg font-bold bg-cyan-500 text-white py-2 px-20 cursor-pointer"
            defaultValue="Continue"
          />
        </form>
      </div>
    </section>
  );
}
