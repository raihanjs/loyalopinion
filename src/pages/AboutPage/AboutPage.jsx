import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import { PrimaryButton } from "../../components/Buttons";

import aboutImg from "../../assets/about.jpeg";
import SectionTitleRedBlack from "../../components/Titles/SectionTitleRedBlack";

export default function AboutPage() {
  return (
    <>
      <Hero
        img={aboutImg}
        title="Loyal Opinions: rewarding your time"
        subTitle=" We reward our members for their participation in paid market research, including online surveys and product testing. "
      />
      <section className="container py-5 md:py-0">
        <div className="md:flex items-center">
          <div className="md:w-6/12 md:p-5">
            <SectionTitleRedBlack black="What is" red="Loyal Opinions?" />

            <p className="text-lg mb-2">
              Loyal Opinions is a trusted market research panel established in
              2024. Our members participate in online surveys, diary studies, or
              at-home product testing, and in return, we reward them with
              credits that can be exchanged for gift cards from top brands like
              Amazon.com, Apple, Paypal, and many more.
            </p>
            <p className="text-lg mb-2">
              As a newly established survey site, we’re excited to build a
              growing community where members can share their opinions and start
              earning valuable rewards.
            </p>

            <p className="mb-2 font-medium">
              <Link to="" className="text-[#3f7dbe;]">
                Take Survey
              </Link>
              &nbsp; today and start getting paid for your insights while
              earning exciting rewards!
            </p>
          </div>
          <div className="hidden md:block w-6/12">
            <img src="https://vopassets.imgix.net/vop4about5.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-5 md:py-0">
        <div className="container">
          <div className="md:flex items-center">
            <div className="hidden md:block w-6/12">
              <img src="https://vopassets.imgix.net/vop4rewards.jpg" alt="" />
            </div>
            <div className="md:w-6/12 md:p-5">
              <SectionTitleRedBlack
                black="Take paid online surveys and"
                red="earn great rewards."
              />
              <p className="text-lg mb-2">
                <strong>Loyal Opinions</strong> online surveys play a crucial
                role in shaping the future of products and services. Leading
                companies and organizations around the globe use our market
                research to understand the preferences and opinions of people
                like you. We appreciate your valuable insights and reward your
                time and effort with credits that can be redeemed for gift cards
                from top brands, including Amazon.com, Macy’s, Target, and many
                more.
              </p>
              <p className="text-lg">
                Whether it's environmental issues, blockbuster films, fashion
                trends, or favorite foods, your opinion, along with those of our
                growing community of members, can drive meaningful change and
                make a significant impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="md:flex gap-5 items-center ">
          <div className="md:w-6/12 py-5 md:py-0">
            <SectionTitleRedBlack
              black="Joining Loyal Opinions is"
              red="quick and easy"
            />

            <p>
              All you have to do to start taking paid surveys is complete a
              short registration form , then verify your identity. Once you're a
              verified member, you'll start receiving invitations to complete
              surveys. It's also not just surveys; we have lots of other ways
              for you to have your say, from reviewing advertising campaigns to
              helping develop and test new products.
            </p>
          </div>
          <div className="md:w-6/12">
            <SectionTitleRedBlack
              black="We provide a great online survey experience and"
              red="rewards to match"
            />

            <p>
              As a Loyal Opinions member, you will be regularly invited to take
              part in paid market research, in the form of online surveys and
              product testing. You can earn up to $100 in credit for each survey
              you complete, which you can exchange for gift cards from top
              brands including Amazon.com, Apple, Paypal, and many more.
            </p>
          </div>
        </div>
      </section>
      <section className="py-5 bg-slate-50">
        <div className="container md:flex gap-5 items-center">
          <div className="md:w-6/12 py-5 md:py-0">
            <SectionTitleRedBlack
              black="Get the most from your"
              red="membership"
            />

            <p>
              Keep your profile information up to date to ensure you receive
              surveys that are most relevant to you. The more relevant the
              surveys are to you, the more likely you'll complete them and
              receive your rewards.
            </p>
            <p>
              If you want even more from your membership and have even more ways
              to share your opinions, why not follow us on Twitter or like us on
              Facebook to join the conversation. You can also read our brand new
              blog , and take part in quick polls to have your say on topical
              events. Quick polls also influence the articles we write so you
              could be part of our next post!
            </p>
          </div>
          <div className="md:w-6/12">
            <SectionTitleRedBlack
              black="Your information is"
              red="safe with us"
            />

            <p>
              The protection of your data is one of our primary concerns and our
              commitment to privacy and fair data use has been independently
              certified. We promise to keep the information you give us
              confidential and anonymous.
            </p>
            <p className="mb-3">
              As a well-established company, we’re members of all the major
              market research governing bodies, including:
            </p>

            <ol>
              <li className="text-cyan-600">
                <a
                  href="https://www.marketingresearch.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>-</strong> The Marketing Research Association (MRA)
                </a>
              </li>
              <li className="text-cyan-600">
                <a
                  href="https://www.mrs.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>-</strong> The Market Research Society (MRS)
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="container py-10">
        <SectionTitleRedBlack black="Further" red="Information" />
        <p>
          If you have any problems or questions at all, please check out our
          FAQs or feel free to contact us if you can’t find what you’re looking
          for. Our dedicated member services team have been specially trained to
          help you. If you're not yet a member, sign up for free today!
        </p>

        <PrimaryButton text="Take Survey" />
      </section>
    </>
  );
}
