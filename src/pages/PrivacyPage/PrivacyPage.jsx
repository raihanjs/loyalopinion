import SectionTitleBlack from "../../components/Titles/SectionTitleBlack";

export default function PrivacyPage() {
  return (
    <section className="my-12">
      <div className="container">
        <div className="text-center">
          <SectionTitleBlack txt="Privacy Policy" />
        </div>

        {/* Policy 1 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">1. Introduction</h3>

          <p className="mb-3">
            Welcome to Loyal Opinion! We respect your privacy and are committed
            to protecting your personal information. This Privacy Policy
            explains how we collect, use, and share your information when you
            interact with our website and services.
          </p>
        </div>
        {/* Policy 2 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">2. Information We Collect</h3>

          <p className="mb-3">
            - Personal Information: When you sign up or participate in surveys,
            we may collect personal information such as your name, email
            address, mailing address, date of birth, gender, and other
            demographic information.
          </p>
          <p className="mb-3">
            - Survey Responses: We collect responses and other information you
            provide when you complete surveys. This data may include opinions,
            preferences, and other insights based on the survey content.
          </p>
          <p className="mb-3">
            - Usage Data: We may collect information about your interactions
            with our website, such as IP addresses, browser types, operating
            systems, and pages viewed.
          </p>
        </div>
        {/* Policy 3 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">
            3. How We Use Your Information
          </h3>

          <p className="mb-3">
            - Survey Participation: We use your information to invite you to
            participate in surveys and process your survey responses.
          </p>
          <p className="mb-3">
            - Reward Fulfillment: We use your information to deliver rewards,
            such as gift cards, PayPal payments, or other incentives.
          </p>
          <p className="mb-3">
            - Communication: We may use your email address to send you
            notifications about surveys, rewards, or updates to our services.
          </p>
          <p className="mb-3">
            - Improvement of Services: We analyze your usage data to improve the
            functionality and user experience of our website.
          </p>
          <p className="mb-3">
            - Compliance and Legal Obligations: We may use your information to
            comply with legal obligations or respond to lawful requests from
            public authorities.
          </p>
        </div>
        {/* Policy 4 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">
            4. Sharing Your Information
          </h3>

          <p className="mb-3">
            - Third-Party Service Providers: We may share your information with
            trusted third-party service providers who assist us in operating our
            website, conducting surveys, or delivering rewards. These providers
            are obligated to protect your information and only use it for the
            purposes we specify.
          </p>
          <p className="mb-3">
            - Research Partners: We may share aggregated and anonymized data
            with our research partners for market research purposes. This data
            does not identify you personally.
          </p>
          <p className="mb-3">
            - Legal Requirements: We may disclose your information if required
            to do so by law or in response to valid legal processes, such as a
            court order or subpoena.
          </p>
        </div>
        {/* Policy 5 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">5. Your Rights and Choices</h3>

          <p className="mb-3">
            - Access and Correction: You have the right to access, correct, or
            update your personal information at any time by logging into your
            account or contacting us directly.
          </p>
          <p className="mb-3">
            - Opt-Out: You can opt out of receiving marketing communications or
            survey invitations by following the unsubscribe instructions in the
            emails we send or by adjusting your account settings.
          </p>
          <p className="mb-3">
            - Data Deletion: You may request the deletion of your personal
            information by contacting us. Please note that we may retain certain
            information as required by law or for legitimate business purposes.
          </p>
        </div>
        {/* Policy 6 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">6. Data Security</h3>

          <p className="mb-3">
            We implement appropriate security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. However, no online service can guarantee absolute
            security, so please be cautious when sharing your information
            online.
          </p>
        </div>
        {/* Policy 7 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">7. Children’s Privacy </h3>

          <p className="mb-3">
            Loyal Opinion is not intended for children under the age of 13. We
            do not knowingly collect personal information from children under
            13. If we become aware that we have inadvertently collected such
            information, we will take steps to delete it.
          </p>
        </div>
        {/* Policy 8 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">
            8. Changes to This Privacy Policy
          </h3>

          <p className="mb-3">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any significant changes by posting the new policy on our website
            and updating the effective date.
          </p>
        </div>
      </div>
    </section>
  );
}
