import { useState } from "react";

export default function QualifyTwo() {
  const [ageErr, setAgeErr] = useState(false);
  const [countryErr, setCountryErr] = useState(false);
  const [details, setDetails] = useState({ age: "", country: "", state: "" });

  const handleChange = (event) => {
    const target = event.target.name;
    const value = event.target.value;

    const newDetails = { ...details, [target]: value };
    setDetails(newDetails);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // details.age !== "" ? setAgeErr(false) : setAgeErr(true);
    // details.country !== "" ? setCountryErr(false) : setCountryErr(true);
  };

  console.log(details.country);

  return (
    <section>
      <div className="bg-red-500 p-2">
        <p>Completed 1%</p>
      </div>
      <div className="w-6/12 mx-auto my-12">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="age"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Your Age
            </label>
            <select
              id="age"
              name="age"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Select Your Age</option>
              <option value="24">18-24</option>
              <option value="32">25-32</option>
              <option value="40">33-40</option>
              <option value="50">41-50</option>
              <option value="60">51-60</option>
              <option value="61">60+</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Your Country
            </label>
            <select
              id="country"
              name="country"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Choose a country</option>
              <option value="us">United States</option>
              <option value="">Others</option>
            </select>
            {details.country.length < 1 && (
              <p className="text-sm text-red-500">
                You must have to be from USA
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="state"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Your State
            </label>
            <select
              id="state"
              name="state"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Choose Your State</option>
              <option value="al">Alabama</option>
              <option value="ak">Alaska</option>
              <option value="az">Arizona</option>
              <option value="ar">Arkansas</option>
              <option value="ca">California</option>
              <option value="co">Colorado</option>
              <option value="ct">Connecticut</option>
              <option value="de">Delaware</option>
              <option value="fl">Florida</option>
              <option value="ga">Georgia</option>
              <option value="hi">Hawaii</option>
              <option value="id">Idaho</option>
              <option value="il">Illinois</option>
              <option value="in">Indiana</option>
              <option value="ia">Iowa</option>
              <option value="ks">Kansas</option>
              <option value="ky">Kentucky</option>
              <option value="la">Louisiana</option>
              <option value="me">Maine</option>
              <option value="md">Maryland</option>
              <option value="ma">Massachusetts</option>
              <option value="mi">Michigan</option>
              <option value="mn">Minnesota</option>
              <option value="ms">Mississippi</option>
              <option value="mo">Missouri</option>
              <option value="mt">Montana</option>
              <option value="ne">Nebraska</option>
              <option value="nv">Nevada</option>
              <option value="nh">New Hampshire</option>
              <option value="nj">New Jersey</option>
              <option value="nm">New Mexico</option>
              <option value="ny">New York</option>
              <option value="nc">North Carolina</option>
              <option value="nd">North Dakota</option>
              <option value="oh">Ohio</option>
              <option value="ok">Oklahoma</option>
              <option value="or">Oregon</option>
              <option value="pa">Pennsylvania</option>
              <option value="ri">Rhode Island</option>
              <option value="sc">South Carolina</option>
              <option value="sd">South Dakota</option>
              <option value="tn">Tennessee</option>
              <option value="tx">Texas</option>
              <option value="ut">Utah</option>
              <option value="vt">Vermont</option>
              <option value="va">Virginia</option>
              <option value="wa">Washington</option>
              <option value="wv">West Virginia</option>
              <option value="wi">Wisconsin</option>
              <option value="wy">Wyoming</option>
            </select>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}
