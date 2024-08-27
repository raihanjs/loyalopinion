import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QualifyFour() {
  const navigate = useNavigate();
  const [emptyFields, setEmptyFields] = useState(true);
  const [details, setDetails] = useState({
    area: "",
    married: "",
    person: "",
    children: "",
    house: "",
    decesion: "",
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
    navigate("/survey/qualify-question-5");
  };

  console.log(details);

  return (
    <section>
      <div className="bg-red-500 p-2">
        <p>Completed 15%</p>
      </div>
      <div className="w-6/12 mx-auto my-12">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="area"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Living Area Is In
            </label>
            <select
              id="area"
              name="area"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select Area</option>
              <option value="no ">Urban Area</option>
              <option value="primary_1_4">Sub Urban Area</option>
              <option value="primary_5_8">Rural Area</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="married"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Status
            </label>
            <select
              id="married"
              name="married"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select Status</option>
              <option value="un">Unmarried</option>
              <option value="part">Married</option>
              <option value="full">Single</option>
              <option value="self">Living With Partner</option>
              <option value="not">Prferred Not To Say</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="person"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              How Many Person Living In Your Home (including yourself)
            </label>
            <input
              type="text"
              id="person"
              name="person"
              onChange={handleChange}
              placeholder="2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="children"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Any Children Living In Your Home (Less than 18 years)
            </label>
            <input
              type="text"
              id="children"
              name="children"
              onChange={handleChange}
              placeholder="2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="house"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Is the house you live in your own or rented?
            </label>
            <select
              id="house"
              name="house"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select</option>

              <option value="ceo">Own</option>
              <option value="vp">Rent</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="decesion"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              In Your Household Who Is The Decesion Maker?
            </label>
            <select
              id="decesion"
              name="decesion"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select</option>

              <option value="executive">Myself</option>
              <option value="operations">Someone Else</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="check"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Write Anything In The Box
            </label>
            <input
              type="text"
              id="check"
              name="check"
              onChange={handleChange}
              placeholder="check"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
