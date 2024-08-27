import { useNavigate } from "react-router-dom";
import SectionTitleBlack from "../../components/Titles/SectionTitleBlack";

export default function GamesSurveyPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/survey/surve9ew9eww9789ew8ewgeryew7ew70ew07ew");
  };
  return (
    <section>
      <div className="bg-red-500 p-2">
        <p>Completed 45%</p>
      </div>

      <div className="md:w-6/12 mx-auto my-12">
        <div className="text-center">
          <SectionTitleBlack txt="Part 1: Gaming Habits (10 Questions)" />
        </div>

        <form className="max-w-sm mx-auto mt-12" onSubmit={handleSubmit}>
          {/* Often */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How often do you play video games?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Daily</option>
              <option value="2">A few times a week</option>
              <option value="3">Once a week</option>
              <option value="4">A few times a month</option>
              <option value="5">Rarely/Never</option>
            </select>
          </div>
          {/* Type */}
          <div className="mb-5">
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              What type of device do you primarily use for gaming?
            </label>
            <select
              id="type"
              name="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Console</option>
              <option value="2">PC</option>
              <option value="3">Mobile</option>
              <option value="4">Tablet</option>
              <option value="5">Other</option>
            </select>
          </div>
          {/* Hours */}
          <div className="mb-5">
            <label
              htmlFor="hours"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How many hours do you typically spend gaming per week?
            </label>
            <select
              id="hours"
              name="hours"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Less than 5 hours</option>
              <option value="2">5-10 hours</option>
              <option value="3">11-20 hours</option>
              <option value="4">More than 20 hours</option>
            </select>
          </div>
          {/* Genre */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Which gaming genre do you prefer the most?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Action/Adventure</option>
              <option value="2">Role-Playing Games (RPG)</option>
              <option value="3">Shooter</option>
              <option value="4">Sports</option>
              <option value="5">Puzzle</option>
              <option value="6">Strategy</option>
              <option value="7">Simulation</option>
              <option value="8">Other</option>
            </select>
          </div>
          {/* Single */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you prefer single-player or multiplayer games?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Single-player</option>
              <option value="2">Multiplayer</option>
              <option value="3">Both equally</option>
            </select>
          </div>
          {/* Spend */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How much money do you spend on games or in-game purchases monthly?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">None</option>
              <option value="2">Less than $20</option>
              <option value="3">$20-$50</option>
              <option value="3">$50-$100</option>
              <option value="3">More than $100</option>
            </select>
          </div>
          {/* News */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you follow gaming news and updates?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Regularly</option>
              <option value="2">Occasionally</option>
              <option value="3">Rarely</option>
              <option value="3">Never</option>
            </select>
          </div>
          {/* Discover */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How do you discover new games to play?
            </label>
            <select
              id="often"
              name="often"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="1">Friends/Family recommendations</option>
              <option value="2">Online reviews</option>
              <option value="3">Social media</option>
              <option value="4">Gaming forums/communities</option>
              <option value="5">App store/Marketplace browsing</option>
              <option value="6">Other</option>
            </select>
          </div>
          {/* esports */}
          <div className="mb-5">
            <label
              htmlFor="often"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Have you ever participated in gaming tournaments or eSports?
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
          {/* Favortie */}
          <div className="mb-5">
            <label
              htmlFor="favorite"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              What is your favorite game of all time?
            </label>
            <input
              type="text"
              id="favorite"
              name="favorite"
              placeholder="Clash of clan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            />
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
