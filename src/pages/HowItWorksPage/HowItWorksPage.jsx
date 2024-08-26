import Hero from "../../components/Hero/Hero";
import SectionTitleBlack from "../../components/Titles/SectionTitleBlack";
import SectionTitleRed from "../../components/Titles/SectionTitleRed";

import { IoMdCheckmarkCircle } from "react-icons/io";

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        img="https://darwin-assets.dynata.com/OO/howitworks/how-it-works-hero-oo.jpg"
        subTitle="Opinion Outpost is a market research website that rewards people for sharing their opinion."
      />

      <section className="container py-5">
        <div className="md:flex items-center">
          <div className="md:w-6/12">
            <SectionTitleRed txt="How It Works in 5 Simple Steps" />

            <ul className="text-lg font-medium">
              <li> 1. Fill in short, online surveys.</li>
              <li> 2. Earn points when you finish.</li>
              <li> 3. Verify yourself.</li>
              <li> 4. Wait for review (1-3 days).</li>
              <li> 5. Redeem your points for cash and other rewards.</li>
            </ul>
          </div>
          <div className="hidden md:block md:w-6/12">
            <img
              className="h-[500px]"
              src="https://darwin-assets.dynata.com/OO/howitworks/Image-2-desktop.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center">
          <SectionTitleBlack txt="Make the most of Opinion Outpost" />
          <p className="mt-2 mb-12">
            When you first sign up to the Outpost, you might wonder why we ask
            all sorts of personal questions like:
          </p>
        </div>

        <div className="flex justify-center">
          <ul>
            <li className="flex items-center gap-3 text-cyan-500 text-2xl font-bold">
              <IoMdCheckmarkCircle /> What do you do for a living?
            </li>
            <li className="flex items-center gap-3 text-cyan-500 text-2xl font-bold">
              <IoMdCheckmarkCircle /> Did you go to college?
            </li>
            <li className="flex items-center gap-3 text-cyan-500 text-2xl font-bold">
              <IoMdCheckmarkCircle /> How many kids do you have (if any)?
            </li>
          </ul>
        </div>

        <div className="flex justify-center mt-12">
          <div>
            <p className="text-xl">
              <strong>Well, there's a method to the madness.</strong>
            </p>

            <p>
              As you already know, companies are eager to discover what you,
              their customers, think. But when companies use the Loyal Opinion
              for market research, they don't want feedback from just anyone.
              Instead, they research certain groups of people, whether by age,
              gender, income, etc.
            </p>

            <p>
              So, suppose a company wants to research customers who are
              18–24-year-old college students, earning less than $21k a year.
              They need to make sure that only the people who match that exact
              criteria take their surveys. And that's where we come in:
            </p>

            <p>
              The more you tell us about yourself, the more we can match you
              with surveys that directly impact you – earning you more rewards
              in the long run!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="text-center">
            <h4 className="text-2xl font-medium mb-3">
              Express yourself in more ways than one
            </h4>
            <p className="sm:mx-40 mb-12">
              There's more to the Outpost than just surveys. You can also share
              your thoughts through different types of studies, tasks and
              challenges. Take a quick look at what you can experience when you
              join our community.
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-12 my-5">
            {/* Flex Item */}
            <div className="w-96 p-8 border">
              <img
                className="mb-5 h-12"
                src="https://darwin-assets.dynata.com/OO/howitworks/product-test.png"
                alt=""
              />
              <h4 className="text-lg font-medium mb-5">PRODUCT TESTS</h4>
              <p className="text-sm">
                Be the first to try out the latest products before they hit the
                shelves, giving manufacturers valuable feedback on their latest
                venture. (We’ll mail you the prototypes at no expense to you.)
              </p>
            </div>
            {/* Flex Item */}
            <div className="w-96 p-8 border">
              <img
                className="mb-5 h-12"
                src="https://darwin-assets.dynata.com/OO/howitworks/acvert-reviews.png"
                alt=""
              />
              <h4 className="text-lg font-medium mb-5">ADVERT REVIEWS</h4>
              <p className="text-sm">
                Give feedback on adverts before they launch on TV or online
                (especially before they go viral).
              </p>
            </div>
            {/* Flex Item */}
            <div className="w-96 p-8 border">
              <img
                className="mb-5 h-12"
                src="https://darwin-assets.dynata.com/OO/howitworks/location-based-icon.png"
                alt=""
              />
              <h4 className="text-lg font-medium mb-5">
                LOCATION-BASED SERVICES*
              </h4>
              <p className="text-sm">
                Take part in targeted surveys based on your location, sharing
                your experience of the shops, cafés and restaurants you visit.
                With location services on, you could pop into a store and get
                pinged about a survey of your in-store experience.
              </p>
            </div>
            {/* Flex Item */}
            <div className="w-96 p-8 border">
              <img
                className="mb-5 h-12"
                src="https://darwin-assets.dynata.com/OO/howitworks/diary-studies.png"
                alt=""
              />
              <h4 className="text-lg font-medium mb-5">DIARY STUDIES*</h4>
              <p className="text-sm">
                Keep track of and share your daily routines over a certain
                period. You could be given a food diary to log your shopping
                habits or you could be asked to journal how often you spend time
                on social media.
              </p>
            </div>
            {/* Flex Item */}
            <div className="w-96 p-8 border">
              <img
                className="mb-5 h-12"
                src="https://darwin-assets.dynata.com/OO/howitworks/google-adh.png"
                alt=""
              />
              <h4 className="text-lg font-medium mb-5">
                GOOGLE ADH (ADS DATA HUB)*
              </h4>
              <p className="text-sm">
                We’ve partnered with Google to run ad-based surveys. This gives
                you the chance to take part in surveys based on the ads you’ve
                seen on Google & its partners.
              </p>
            </div>
            {/* Flex Item */}
          </div>
        </div>
      </section>
    </>
  );
}
