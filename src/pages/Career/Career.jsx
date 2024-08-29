import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components/Buttons";
import SectionTitleRedBlack from "../../components/Titles/SectionTitleRedBlack";

import { FaBriefcase } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Career() {
  return (
    <>
      <section className="py-16 md:py-28 bg-cyan-200/50">
        <div className="container">
          <div className="bg-white w-20 py-1 flex gap-2 items-center justify-center rounded-md">
            <FaBriefcase className="text-lg" />
            <span className="text-[#d81033] font-bold">Jobs</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold uppercase mb-10 md:mb-20">
            Empower <span className="text-[#d81033]">Your Career</span> <br />
            Journey with Us
          </h2>

          <p>For Any Queries Email:</p>
          <h3 className="text-xl md:text-3xl font-bold">
            support@loyalopinion.com
          </h3>

          <PrimaryButton text="Open Positions" />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="md:w-8/12 mx-auto text-center">
            <SectionTitleRedBlack black="Application" red="Process" />
            <p className="mt-5 text-justify md:text-center">
              Our application process is designed to find talent for our dynamic
              IT environment. Begin with an online application to showcase your
              qualifications
            </p>
          </div>

          <div className="my-12 grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Item */}
            <div>
              <div className="text-6xl font-bold bg-[#d81033] h-40 w-40 rounded-full flex justify-center items-center text-white">
                1
              </div>
              <p className="mt-4     mb-2 font-bold text-xl">
                Application review
              </p>
              <p>
                We evaluate applications using multiple criteria to find the
                best candidates.
              </p>
            </div>
            {/* Item */}
            <div>
              <div className="text-6xl font-bold bg-[#d81033] h-40 w-40 rounded-full flex justify-center items-center text-white">
                2
              </div>
              <p className="mt-4     mb-2 font-bold text-xl">
                KYC Verification
              </p>
              <p>
                We conduct KYC to prevent scammers and confirm that applicants
                are in the USA, ensuring the secure handling of sensitive
                documents.
              </p>
            </div>
            {/* Item */}
            <div>
              <div className="text-6xl font-bold bg-[#d81033] h-40 w-40 rounded-full flex justify-center items-center text-white">
                3
              </div>
              <p className="mt-4     mb-2 font-bold text-xl">Interviews</p>
              <p>
                Team leads are conducting this interview to recruit new hires.
              </p>
            </div>
            {/* Item */}
            <div>
              <div className="text-6xl font-bold bg-[#d81033] h-40 w-40 rounded-full flex justify-center items-center text-white">
                4
              </div>
              <p className="mt-4     mb-2 font-bold text-xl">Offer</p>
              <p>
                After a successful interview, you'll get a job offer at Loyal
                Opinion.
              </p>
            </div>
            {/* Item */}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="container">
          <div className="md:w-8/12 mx-auto text-center">
            <SectionTitleRedBlack black="Career" red="Openings" />
            <p className="mt-5 text-justify md:text-center">
              We're always looking for creative, talented self-starters to join
              the Loyal Opinion family. Check out our open roles below and fill
              out an application.
            </p>
          </div>

          {/* Jobs Container */}
          <div className="mx-auto flex justify-center flex-wrap gap-5 mt-10">
            {/* Job */}
            <div className="p-5 rounded-md bg-cyan-200/50 min-w-[300px] md:min-w-[360px]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                Customer Service Representative <br />
                (Remote)
              </h3>
              <div className="mt-3 flex items-center gap-1">
                <FaMapMarkerAlt />
                <span className="font-semibold">USA</span>
              </div>
              <div className="mt-12 mb-12">
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  No Experience Required
                </p>
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  Tk. 15,000 - 25,000 (Monthly)
                </p>
              </div>

              <div className="flex justify-between">
                <p className="flex items-center gap-2 font-medium">
                  <LuCalendarClock />
                  September 21, 2024
                </p>

                <Link to="">
                  <p className="flex items-center gap-2 hover:text-red-500 font-medium">
                    Details <BsArrowRight />
                  </p>
                </Link>
              </div>
            </div>
            {/* Job */}
            <div className="p-5 rounded-md bg-cyan-200/50 min-w-[300px] md:min-w-[360px]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                Social Media Manager <br />
                (Remote)
              </h3>
              <div className="mt-3 flex items-center gap-1">
                <FaMapMarkerAlt />
                <span className="font-semibold">USA</span>
              </div>
              <div className="mt-12 mb-12">
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  No Experience Required
                </p>
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  Tk. 15,000 - 25,000 (Monthly)
                </p>
              </div>

              <div className="flex justify-between">
                <p className="flex items-center gap-2 font-medium">
                  <LuCalendarClock />
                  September 21, 2024
                </p>

                <Link to="">
                  <p className="flex items-center gap-2 hover:text-red-500 font-medium">
                    Details <BsArrowRight />
                  </p>
                </Link>
              </div>
            </div>
            {/* Job */}
            <div className="p-5 rounded-md bg-cyan-200/50 min-w-[300px] md:min-w-[360px]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                Technical Support Executive <br />
                (Remote)
              </h3>
              <div className="mt-3 flex items-center gap-1">
                <FaMapMarkerAlt />
                <span className="font-semibold">USA & Any</span>
              </div>
              <div className="mt-12 mb-12">
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  2 to 3 yearss experienced
                </p>
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  Tk. 15,000 - 25,000 (Monthly)
                </p>
              </div>

              <div className="flex justify-between">
                <p className="flex items-center gap-2 font-medium">
                  <LuCalendarClock />
                  September 21, 2024
                </p>

                <Link to="">
                  <p className="flex items-center gap-2 hover:text-red-500 font-medium">
                    Details <BsArrowRight />
                  </p>
                </Link>
              </div>
            </div>
            {/* Job */}
            <div className="p-5 rounded-md bg-cyan-200/50 min-w-[300px] md:min-w-[360px]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                Sales & Marketing Executive <br />
                (Remote)
              </h3>
              <div className="mt-3 flex items-center gap-1">
                <FaMapMarkerAlt />
                <span className="font-semibold">USA</span>
              </div>
              <div className="mt-12 mb-12">
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  0 to 6 months experienced
                </p>
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  Tk. 15,000 - 25,000 (Monthly)
                </p>
              </div>

              <div className="flex justify-between">
                <p className="flex items-center gap-2 font-medium">
                  <LuCalendarClock />
                  September 21, 2024
                </p>

                <Link to="">
                  <p className="flex items-center gap-2 hover:text-red-500 font-medium">
                    Details <BsArrowRight />
                  </p>
                </Link>
              </div>
            </div>
            {/* Job */}
            <div className="p-5 rounded-md bg-cyan-200/50 min-w-[300px] md:min-w-[360px]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                Digital Marketer <br />
                (Remote)
              </h3>
              <div className="mt-3 flex items-center gap-1">
                <FaMapMarkerAlt />
                <span className="font-semibold">USA</span>
              </div>
              <div className="mt-12 mb-12">
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  0 to 3 yearss experienced
                </p>
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  Tk. 15,000 - 25,000 (Monthly)
                </p>
              </div>

              <div className="flex justify-between">
                <p className="flex items-center gap-2 font-medium">
                  <LuCalendarClock />
                  September 21, 2024
                </p>

                <Link to="">
                  <p className="flex items-center gap-2 hover:text-red-500 font-medium">
                    Details <BsArrowRight />
                  </p>
                </Link>
              </div>
            </div>
            {/* Job */}
            <div className="p-5 rounded-md bg-cyan-200/50 min-w-[300px] md:min-w-[360px]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                Graphics Designer
                <br /> (Remote)
              </h3>
              <div className="mt-3 flex items-center gap-1">
                <FaMapMarkerAlt />
                <span className="font-semibold">USA & Any</span>
              </div>
              <div className="mt-12 mb-12">
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  0 to 3 yearss experienced
                </p>
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  Tk. 15,000 - 25,000 (Monthly)
                </p>
              </div>

              <div className="flex justify-between">
                <p className="flex items-center gap-2 font-medium">
                  <LuCalendarClock />
                  September 21, 2024
                </p>

                <Link to="">
                  <p className="flex items-center gap-2 hover:text-red-500 font-medium">
                    Details <BsArrowRight />
                  </p>
                </Link>
              </div>
            </div>
            {/* Job */}
            <div className="p-5 rounded-md bg-cyan-200/50 min-w-[300px] md:min-w-[360px]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                UI/UX Designer
                <br /> (Remote)
              </h3>
              <div className="mt-3 flex items-center gap-1">
                <FaMapMarkerAlt />
                <span className="font-semibold">USA & Any</span>
              </div>
              <div className="mt-12 mb-12">
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  2 to 3 yearss experienced
                </p>
                <p className="py-2 px-5 mb-2 rounded-md bg-cyan-50 font-medium">
                  Tk. 15,000 - 25,000 (Monthly)
                </p>
              </div>

              <div className="flex justify-between">
                <p className="flex items-center gap-2 font-medium">
                  <LuCalendarClock />
                  September 21, 2024
                </p>

                <Link to="">
                  <p className="flex items-center gap-2 hover:text-red-500 font-medium">
                    Details <BsArrowRight />
                  </p>
                </Link>
              </div>
            </div>
            {/* Job */}
          </div>
        </div>
      </section>
    </>
  );
}
