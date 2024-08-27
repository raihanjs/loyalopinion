import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QualifyFive() {
  const navigate = useNavigate();
  const [emptyFields, setEmptyFields] = useState(true);
  const [details, setDetails] = useState({
    games: "",
    tv: "",
    music: "",
    sports: "",
    restaurant: "",
    check: "",
  });

  function hasEmptyProperty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (
          value === null ||
          value === undefined ||
          value === "" ||
          (Array.isArray(value) && value.length === 0)
        ) {
          return true;
        }
      }
    }
    return false;
  }

  const handleChange = (event) => {
    const target = event.target.name;
    const value = event.target.value;

    const newDetails = { ...details, [target]: value };
    setDetails(newDetails);

    let isEmpty = hasEmptyProperty(details);
    setEmptyFields(isEmpty);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/survey/survey90eww79ew9ewre6ew97ew7ew70ew07ew");
  };

  return (
    <section>
      <div className="bg-red-500 p-2">
        <p>Completed 30%</p>
      </div>
      <div className="md:w-6/12 mx-auto my-12">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="games"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How Many Hours Do You Play Games In A Week
            </label>
            <select
              id="games"
              name="games"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="">Select Hours</option>
              <option value="5">Less Than 5 Hours</option>
              <option value="10">10 Hours</option>
              <option value="15">15 Hours</option>
              <option value="20">20 Hours</option>
              <option value="20m">More Than 20 Hours</option>
              <option value="no">I do not play games</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="tv"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How Many Hours Do You Watch TV In A Week
            </label>
            <select
              id="tv"
              name="tv"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="">Select Hours</option>
              <option value="5">Less Than 5 Hours</option>
              <option value="10">10 Hours</option>
              <option value="15">15 Hours</option>
              <option value="20">20 Hours</option>
              <option value="20m">More Than 20 Hours</option>
              <option value="no">I do not watch tv</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="music"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How Many Hours Do You Listen Music In A Week
            </label>
            <select
              id="music"
              name="music"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="">Select Hours</option>
              <option value="5">Less Than 5 Hours</option>
              <option value="10">10 Hours</option>
              <option value="15">15 Hours</option>
              <option value="20">20 Hours</option>
              <option value="20m">More Than 20 Hours</option>
              <option value="no">I do not listen music</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="sports"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How Many Hours Do You Participate Sports In A Week
            </label>
            <select
              id="sports"
              name="sports"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="">Select Hours</option>
              <option value="10l">Less Than 5 Hours</option>
              <option value="10">10 Hours</option>
              <option value="15">15 Hours</option>
              <option value="20">20 Hours</option>
              <option value="20m">More Than 20 Hours</option>
              <option value="no">I do not participate</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="restaurant"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              How Many Times In A Week You Go To Restaurant
            </label>
            <select
              id="restaurant"
              name="restaurant"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="">Select</option>
              <option value="10l">Less Than 3 Times</option>
              <option value="10">5 Times</option>
              <option value="15">10 Times</option>
              <option value="20m">More Than 10 Times</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="check"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Write Anything In The Box
            </label>
            <input
              type="text"
              id="check"
              name="check"
              onChange={handleChange}
              placeholder="check"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            />
          </div>
          {!emptyFields ? (
            <input
              type="submit"
              className="text-lg font-bold bg-cyan-500 text-white py-2 px-20 cursor-pointer"
              defaultValue="Continue"
            />
          ) : (
            <input
              type="submit"
              className="text-lg font-bold bg-cyan-100 text-white py-2 px-20"
              defaultValue="Continue"
              disabled
            />
          )}
        </form>
      </div>
    </section>
  );
}
