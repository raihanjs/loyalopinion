import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QualifyTwo() {
  const navigate = useNavigate();
  const [emptyFields, setEmptyFields] = useState(true);
  const [details, setDetails] = useState({
    name: "",
    gender: "",
    age: "",
    country: "",
    state: "",
    zip: "",
    phone: "",
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

    setEmptyFields(hasEmptyProperty(details));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const age = form.age.value;
    const state = form.state.value;
    const zip = form.zip.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const surveyUser = {
      name,
      age,
      state,
      zip,
      email,
      phone,
    };

    fetch("https://loyalopinion-server.vercel.app/surveys", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(surveyUser),
    })
      .then((res) => {
        navigate("/survey/qualify-question-3");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <div className="bg-red-500 p-2">
        <p>Completed 1%</p>
      </div>
      <div className="md:w-6/12 mx-auto my-12">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="John Doe"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Are You?
            </label>
            <select
              id="gender"
              name="gender"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="">Select Your Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
              <option value="not">Prefer Not To Say</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="age"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Date of Birth
            </label>
            <input
              type="text"
              id="age"
              name="age"
              onChange={handleChange}
              placeholder="12 May 1997"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="country"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select Your Country
            </label>
            <select
              id="country"
              name="country"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            >
              <option value="">Choose a country</option>
              <option value="us">United States</option>
              <option value="os">Others</option>
            </select>
            {details.country === "os" && (
              <p className="text-sm text-red-500">
                You must have to be from USA
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="state"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select Your State
            </label>
            <select
              id="state"
              name="state"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
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
          <div className="mb-5">
            <label
              htmlFor="zip"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Zip Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              onChange={handleChange}
              placeholder="29401"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <input
              type="mail"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="john@mail.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={handleChange}
              placeholder="1-123-456-7890"
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
