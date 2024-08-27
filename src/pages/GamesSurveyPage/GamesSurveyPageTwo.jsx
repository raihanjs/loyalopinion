import { useNavigate } from "react-router-dom";
import SectionTitleBlack from "../../components/Titles/SectionTitleBlack";

export default function GamesSurveyPageTwo() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/survey/survey79eiyyfdqh8e8yewrqew9ewre6ew97ew");
  };
  return (
    <section>
      <div className="bg-red-500 p-2">
        <p>Completed 70%</p>
      </div>

      <div className="md:w-6/12 mx-auto my-12">
        <div className="text-center">
          <SectionTitleBlack
            txt="Part 2: Gaming Preferences and Opinions (10 Questions)
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
              What do you value most in a game?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Graphics/Visuals</option>
              <option value="2">Storyline</option>
              <option value="3">Gameplay mechanics</option>
              <option value="4">Multiplayer experience</option>
              <option value="5">Replayability</option>
              <option value="6">Other</option>
            </select>
          </div>
          {/* Type */}
          <div className="mb-5">
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you prefer games with a linear storyline or open-world
              exploration?
            </label>
            <select
              id="type"
              name="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Linear storyline</option>
              <option value="2">Open-world exploration</option>
              <option value="3">No preference</option>
            </select>
          </div>
          {/* Hours */}
          <div className="mb-5">
            <label
              htmlFor="hours"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How important is the game’s soundtrack to your overall gaming
              experience?
            </label>
            <select
              id="hours"
              name="hours"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Very important</option>
              <option value="2">Somewhat important</option>
              <option value="3">Not very important</option>
              <option value="4">Not important at all</option>
            </select>
          </div>
          {/* Genre */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How often do you play games that involve in-game purchases
              (microtransactions)?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Always</option>
              <option value="2">Often</option>
              <option value="3">Sometimes</option>
              <option value="4">Rarely</option>
              <option value="5">Never</option>
            </select>
          </div>
          {/* Single */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you prefer digital or physical copies of games?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Digital</option>
              <option value="2">Physical</option>
              <option value="3">No preference</option>
            </select>
          </div>
          {/* Spend */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How do you feel about early access games?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Very positive</option>
              <option value="1">Somewhat positive</option>
              <option value="1">Neutral</option>
              <option value="1">Somewhat negative</option>
              <option value="1">Very negative</option>
            </select>
          </div>
          {/* News */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you think video games can be considered a form of art?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Yes</option>
              <option value="2">No</option>
              <option value="3">Unsure</option>
            </select>
          </div>
          {/* Discover */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How do you feel about games that include loot boxes or gacha
              mechanics?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">I like them</option>
              <option value="1">I tolerate them</option>
              <option value="1">I dislike them</option>
              <option value="1">I avoid them entirely</option>
            </select>
          </div>
          {/* esports */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you usually complete a game before moving on to another one?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Yes, always</option>
              <option value="2">Most of the time</option>
              <option value="3">Sometimes</option>
              <option value="4">Rarely</option>
              <option value="5">ANever</option>
            </select>
          </div>
          {/* esports */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              What is your opinion on games with a focus on narrative vs.
              gameplay?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Strong preference for narrative</option>
              <option value="2">Balanced preference for both</option>
              <option value="2">Strong preference for gameplay</option>
            </select>
          </div>

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
