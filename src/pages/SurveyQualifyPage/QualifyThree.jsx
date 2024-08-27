import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QualifyThree() {
  const navigate = useNavigate();
  const [emptyFields, setEmptyFields] = useState(true);
  const [details, setDetails] = useState({
    study: "",
    job: "",
    industry: "",
    role: "",
    salary: "",
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
    navigate("/survey/qualify-question-3");
  };

  console.log(emptyFields);

  return (
    <section>
      <div className="bg-red-500 p-2">
        <p>Completed 5%</p>
      </div>
      <div className="w-6/12 mx-auto my-12">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="study"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Level of Study
            </label>
            <select
              id="study"
              name="study"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select Education</option>
              <option value="no ">No Formal Education</option>
              <option value="primary_1_4">1st to 4th Grade</option>
              <option value="primary_5_8">5th to 8th Grade</option>
              <option value="some_high_school">
                Some High School, No Diploma
              </option>
              <option value="high_school_diploma">
                High School Graduate, Diploma or Equivalent (e.g., GED)
              </option>
              <option value="some_college">Some College, No Degree</option>
              <option value="associate_degree">
                Associate Degree (e.g., AA, AS)
              </option>
              <option value="bachelor_degree">
                Bachelor’s Degree (e.g., BA, BS)
              </option>
              <option value="some_graduate_school">
                Some Graduate School, No Degree
              </option>
              <option value="masters_degree">
                Master’s Degree (e.g., MA, MS, MBA)
              </option>
              <option value="professional_degree">
                Professional Degree (e.g., JD, MD, DDS)
              </option>
              <option value="doctorate_degree">
                Doctorate Degree (e.g., PhD, EdD)
              </option>
              <option value="vocational_technical">
                Vocational/Technical School
              </option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="job"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Profession
            </label>
            <select
              id="job"
              name="job"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select Profession</option>
              <option value="un">Unemployed</option>
              <option value="part">Part Time Employee</option>
              <option value="full">Full Time Employee</option>
              <option value="self">Self Employed</option>
              <option value="retired">Retired</option>
              <option value="not">Prferred Not To Say</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="salary"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Annual Income
            </label>
            <select
              id="salary"
              name="salary"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select Annual Income</option>
              <option value="20k">$ less than 20k</option>
              <option value="30k">$ 21k -30k</option>
              <option value="full">$ 31k - 40k</option>
              <option value="self">$ 41k - 50k</option>
              <option value="self">$ 51k - 60k</option>
              <option value="self">$ 61k - 70k</option>
              <option value="self">$ 71k - 80k</option>
              <option value="self">$ 81k - 90k</option>
              <option value="self">$ 91k - 100k</option>
              <option value="self">$ 101k - 110k</option>
              <option value="self">$ 111k - 120k</option>
              <option value="self">$ more than 120K</option>
              <option value="not">Prferred Not To Say</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="industry"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              In Which Industry Do You Work
            </label>
            <select
              id="industry"
              name="industry"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select Industry</option>

              <option value="agriculture">
                Agriculture, Forestry, Fishing, and Hunting
              </option>
              <option value="mining">
                Mining, Quarrying, and Oil and Gas Extraction
              </option>
              <option value="construction">Construction</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="utilities">Utilities</option>
              <option value="wholesale_trade">Wholesale Trade</option>
              <option value="retail_trade">Retail Trade</option>
              <option value="transportation">
                Transportation and Warehousing
              </option>
              <option value="information_technology">
                Information Technology
              </option>
              <option value="finance">Finance and Insurance</option>
              <option value="real_estate">
                Real Estate and Rental and Leasing
              </option>
              <option value="professional_services">
                Professional, Scientific, and Technical Services
              </option>
              <option value="management">
                Management of Companies and Enterprises
              </option>
              <option value="administrative_support">
                Administrative and Support and Waste Management Services
              </option>
              <option value="education">Educational Services</option>
              <option value="healthcare">
                Healthcare and Social Assistance
              </option>
              <option value="arts_entertainment">
                Arts, Entertainment, and Recreation
              </option>
              <option value="accommodation_food">
                Accommodation and Food Services
              </option>
              <option value="public_administration">
                Public Administration
              </option>
              <option value="other_services">
                Other Services (except Public Administration)
              </option>
              <option value="military">Military</option>
              <option value="non_profit">Non-Profit Organizations</option>
              <option value="unemployed">Unemployed</option>
              <option value="student">Student</option>
              <option value="retired">Retired</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              What is your role
            </label>
            <select
              id="role"
              name="role"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select Role</option>

              <option value="ceo">CEO/President/Owner</option>
              <option value="vp">Vice President</option>
              <option value="director">Director</option>
              <option value="manager">Manager</option>
              <option value="supervisor">Supervisor</option>
              <option value="operations_manager">Operations Manager</option>
              <option value="project_manager">Project Manager</option>
              <option value="production_manager">Production Manager</option>
              <option value="sales_manager">Sales Manager</option>
              <option value="sales_rep">Sales Representative</option>
              <option value="marketing_manager">Marketing Manager</option>
              <option value="marketing_coordinator">
                Marketing Coordinator
              </option>
              <option value="business_development">Business Development</option>
              <option value="cfo">CFO/Financial Director</option>
              <option value="accountant">Accountant</option>
              <option value="financial_analyst">Financial Analyst</option>
              <option value="bookkeeper">Bookkeeper</option>
              <option value="hr_manager">HR Manager</option>
              <option value="hr_specialist">HR Specialist</option>
              <option value="recruiter">Recruiter</option>
              <option value="it_manager">IT Manager</option>
              <option value="software_developer">Software Developer</option>
              <option value="network_admin">Network Administrator</option>
              <option value="it_support">IT Support Specialist</option>
              <option value="customer_support_manager">
                Customer Support Manager
              </option>
              <option value="customer_service_rep">
                Customer Service Representative
              </option>
              <option value="tech_support">Technical Support Specialist</option>
              <option value="graphic_designer">Graphic Designer</option>
              <option value="ux_ui_designer">UX/UI Designer</option>
              <option value="content_creator">Content Creator</option>
              <option value="copywriter">Copywriter</option>
              <option value="engineer">Engineer</option>
              <option value="engineering_manager">Engineering Manager</option>
              <option value="qa">Quality Assurance</option>
              <option value="legal_counsel">Legal Counsel</option>
              <option value="paralegal">Paralegal</option>
              <option value="doctor">Doctor/Physician</option>
              <option value="nurse">Nurse</option>
              <option value="healthcare_admin">Healthcare Administrator</option>
              <option value="teacher">Teacher/Instructor</option>
              <option value="academic_coordinator">Academic Coordinator</option>
              <option value="school_admin">School Administrator</option>
              <option value="research_scientist">Research Scientist</option>
              <option value="lab_technician">Lab Technician</option>
              <option value="rd_manager">R&D Manager</option>
              <option value="executive_assistant">Executive Assistant</option>
              <option value="office_manager">Office Manager</option>
              <option value="admin_assistant">Administrative Assistant</option>
              <option value="freelancer">Freelancer/Consultant</option>
              <option value="entrepreneur">Entrepreneur/Self-employed</option>
              <option value="intern">Intern</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="decesion"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              In Which Department You Make Decesion?
            </label>
            <select
              id="decesion"
              name="decesion"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select Department</option>

              <option value="executive">Executive/Management</option>
              <option value="operations">Operations</option>
              <option value="sales_marketing">Sales and Marketing</option>
              <option value="finance">Finance and Accounting</option>
              <option value="hr">Human Resources</option>
              <option value="it">Information Technology</option>
              <option value="customer_service">Customer Support/Service</option>
              <option value="creative_design">Creative/Design</option>
              <option value="engineering">Engineering</option>
              <option value="legal">Legal</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="research_development">
                Research and Development
              </option>
              <option value="administrative">Administrative</option>
              <option value="other">Other</option>
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
              placeholder="1-123-456-7890"
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
            />
          )}
        </form>
      </div>
    </section>
  );
}
