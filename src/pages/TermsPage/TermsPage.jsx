import React from "react";
import SectionTitleBlack from "../../components/Titles/SectionTitleBlack";
import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <section className="my-12">
      <div className="container">
        <div className="text-center">
          <SectionTitleBlack txt="General Terms & Conditions/Terms of Use" />
        </div>

        <div className="my-12">
          <p className="mb-3 text-justify">
            Loyal Opinions (the “Panel”) is a market research access panel owned
            and operated by Dynata, LLC, along with its parent, subsidiary, and
            affiliated companies, including Dynata Global UK Limited (formerly
            Research Now Limited) and Research Now Group, LLC (collectively
            "Dynata").
          </p>
          <p className="mb-3 text-justify">
            As a member of the Panel, you'll have the opportunity to engage in
            various market research activities, such as online and mobile
            surveys, product testing, focus groups, and more.
          </p>
          <p className="mb-3 text-justify">
            Please note that these terms are subject to change. For details on
            how we handle your data, refer to our
            <span className="text-cyan-500">
              {" "}
              <Link to="/privacy">Privacy Policy</Link>
            </span>
            .
          </p>
          <p className="mb-3 text-justify">
            These General Terms & Conditions/Terms of Use include a waiver of
            class action and jury trials, and require binding arbitration on an
            individual basis to resolve any disputes.
          </p>
        </div>

        {/* Terms 1 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">
            1. Applicability; Agreement
          </h3>

          <p className="mb-3">
            These General Terms and Conditions/Terms of Use (these “Terms”)
            govern and apply to all of Dynata's applications and services,
            including, but not limited to, (1) any Dynata panel or subpanel
            (individually a “Panel” and collectively the “Panels”), (2) any
            Panel website (individually a “Website” and collectively the
            “Websites”), (3) any Dynata mobile application(s), (4) participation
            in any survey or study offered, provided, hosted or administered by
            or through Dynata and (5) your eligibility for, and/or redemption
            of, rewards, incentives and prizes offered for certain actions and
            activities, including, but not limited to, successfully completing
            surveys (collectively, the “Applications/Services”).{" "}
          </p>

          <p className="mb-3">
            All references in these terms to “Dynata” include Dynata, LLC f/k/a
            Survey Sampling International, LLC and its parents, subsidiaries and
            affiliates, including Research Now Group, LLC and Dynata Global UK
            Ltd. All references in these Terms to “us” or “we” refer to Dynata.
          </p>

          <p className="mb-3">
            <strong>
              By registering for, accessing, using, and/or participating in, the
              Applications/Services, you hereby expressly agree to comply with
              and be bound by these Terms.{" "}
            </strong>
          </p>

          <p className="mb-3">
            Dynata reserves the right to refuse, restrict, prohibit or reject
            your access to, use of, and/or participation in the
            Applications/Services, at any time and for any reason.
          </p>
        </div>
        {/* Terms 2 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">
            2. Membership Eligibility and Participationy
          </h3>

          <p className="mb-3">
            The Applications/Services are strictly for your personal,
            non-commercial use. You may use the Applications/Services only when
            and as available. The Applications/Services are only available to
            individuals who are seventeen (17) years of age or older residing in
            United States of America. Participation on the Panel is limited to
            only one (1) account per person. From time to time our clients may
            want to survey the opinion of minors, they may only participate with
            parental consent, via their parent's account.
          </p>

          <p className="mb-3">
            Dynata employees are not permitted to participate in the Panel for
            personal use (see Section 19).
          </p>

          <p className="mb-3">
            Your participation in survey, focus group, telephone or other
            research (“Research”) through the Applications/Services is based on
            your desire to share opinions and provide feedback. Such
            participation in the Research is voluntary for you, without control
            or direction of Dynata, and you shall exercise independent judgment
            and discretion while doing so.
          </p>
        </div>
        {/* Terms 3 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">
            3. Use of the Applications/Services
          </h3>

          <p className="mb-3">
            The Applications/Services are for personal, non-commercial use. You
            may use the Applications/Services only when and as available. Dynata
            reserves the right to change, modify or eliminate, and/or restrict
            or block access to, all or any part of the Applications/Services,
            without notice, at any time, for any reason or for no reason.
          </p>

          <p className="mb-3">
            Dynata provides Panel members and non-Panel members with the
            opportunity to participate in surveys. Participation in surveys is
            voluntary. By agreeing to become a Panel member, you agree to
            receive invitations to participate in surveys. Additionally, Dynata
            may provide Panel members with the opportunity to communicate with
            other Panel members and/or Dynata. You may unsubscribe from Panel
            membership at any time; see Section 10 "Opt-Out Policy" below.
          </p>
        </div>
        {/* Terms 4 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">
            4. Panel Registration; Passwords
          </h3>

          <p className="mb-3">
            You may access any Website(s) as a visitor without registering for
            membership with the Panel associated with the Website(s) and without
            providing or disclosing personal information.
          </p>

          <p className="mb-3">
            In order to register as a Panel member, you must register with or
            for the Panel and provide certain personal information. Panel
            members and non-Panel members are required to truthfully provide all
            information. Dynata reserves the right to restrict or prohibit your
            use of, access to and/or participation in the Applications/Services
            if you provide, or Dynata reasonably suspects that you have
            provided, information that is untrue, inaccurate, not current, or
            incomplete.
          </p>
          <p className="mb-3">
            Each Panel member will create his/her own username and password.
            Panel members are solely responsible for the security of their
            usernames and passwords and will be solely liable and responsible
            for any use, whether authorized or unauthorized, of their membership
            accounts. Dynata strongly recommends against the use of a social
            security number, financial account number or any other
            identification or account number, as a username or password. Please
            do not disclose your password to anyone else, you are responsible
            for keeping it safe. We will not be liable for any unauthorized use
            of your account, which includes unauthorized use of your email
            address, password and reward redemption.
          </p>
          <p className="mb-3">
            Panel membership is specific to the individual who registers for
            membership with the Panel; panel membership is not transferrable.
          </p>
          <p className="mb-3">
            You acknowledge that you are accessing, using and/or participating
            in the Applications/Services in the capacity of an independent
            contractor and that no agency, partnership, join venture,
            employee–employer or franchisor–franchisee relationship is intended
            or created by this agreement.
          </p>
        </div>
        {/* Terms 5 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">5. Unauthorized Uses</h3>

          <p className="mb-3">
            You agree not to: (i) use spiders, robots or other automated data
            mining techniques to catalogue, download, store or otherwise
            reproduce or distribute data or content available in connection with
            the Applications/Services, or to manipulate the results of any
            survey, prize draw or contest; (ii) take any action to interfere
            with any Website(s) or an individual's use of any Website,
            including, but not limited to, by overloading, “flooding”, “mail
            bombing” or “crashing” any Website; (iii) send or transmit any
            viruses, corrupted data or any other harmful, disruptive or
            destructive code, file or information, including, but not limited
            to, spyware; (iv) collect any personally identifiable information of
            or about any other user of the Applications/Services; (v) send
            unsolicited emails, including, but not limited to, promotions and/or
            advertising of products or services; (vi) open, use, or maintain
            more than one (1) membership account with a Panel; (vii) Forge or
            mask your true identity; (viii) frame a portion(s) of any Website
            within another website or alter the appearance of any Website; (ix)
            establish links from any other website to any page of, on or located
            within any Website or to the Applications/Services, without the
            prior express written permission of Dynata; (x) post or transmit any
            threatening, libellous, defamatory, obscene, pornographic, lewd,
            scandalous or inflammatory material or content or any material or
            content that could otherwise violate Applicable Laws (as defined
            herein); (xi) engage in any fraudulent activity, including, but not
            limited to, speeding through surveys, taking the same survey more
            than once, masking or forging your identity, submitting false
            information during the registration process, submitting false or
            untrue survey data, redeeming or attempting to redeem rewards,
            prizes and/or incentives through false or fraudulent means, and
            tampering with surveys; (xii) reverse engineer any aspect of the
            Applications/Services or do any act or take any action that might
            reveal or disclose the source code, or bypass or circumvent
            measurers or controls utilized to prohibit, restrict or limit access
            to any webpage, content or code, except as expressly permitted by
            Applicable Laws; (xiii) engage in any criminal or illegal act(s);
            (xiv) use Restricted Content (as defined herein) in violation or
            breach of these Terms; or (xv) encourage and/or advise any
            individual, including, but not limited to, any Dynata employee, to
            commit any act(s) prohibited hereunder.
          </p>

          <p className="mb-3">
            You acknowledge and agree that Dynata will fully cooperate with all
            legal disclosure request(s) (e.g. court order or subpoena).
          </p>
          <p className="mb-3">
            In order to protect against unauthorized use of
            Applications/Services, Dynata has engaged and from time-to-time will
            engage certain other third party ID verification service providers
            as set forth here: Veriff. In connection with your use of the
            Applications/Services, you may be asked to verify your identity
            through our third party ID verification service provider's
            platform.In all cases, such service providers shall be subject to
            appropriate agreements concerning data processing, confidentiality,
            etc.
          </p>
        </div>
        {/* Terms 6 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">6. Restricted Content</h3>

          <p className="mb-3">
            In connection with your use of, access to and/or participation in
            the Applications/Services, you may have the opportunity to review or
            access confidential and proprietary information, materials, products
            and content (“Restricted Content”) belonging to Dynata and/or
            Dynata's clients, partners and/or licensors. Restricted Content is
            and shall remain the sole and exclusive property of the owner of the
            Restricted Content. In no event shall you obtain or receive any
            right, title and/or interest in or to any Restricted Content. You
            agree to protect the confidentiality and secrecy of the Restricted
            Content and you agree not to modify, copy, reproduce, republish,
            display, transmit, distribute, reverse engineer, create derivative
            works of, decompile or otherwise use, alter or transfer Restricted
            Content without the prior express written consent of Dynata. You
            acknowledge and agree that Restricted Content may be subject to, and
            protected by, intellectual property laws, regulations and codes. You
            further acknowledge and agree that if you breach or otherwise
            violate the restrictions, limitations and prohibitions contained in
            this Section, in addition to any other rights or remedies available
            to Dynata, Dynata reserves the right to terminate, prohibit or
            restrict your use of, access to and/or participation in the
            Applications/Services.
          </p>
        </div>
        {/* Terms 7 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">7. User Content</h3>

          <p className="mb-3">
            You are solely liable and responsible for all content, materials,
            information and comments you use, upload, post or submit in
            connection with the Applications/Services (“User Content”). You are
            solely responsible for all third-party approvals, consents and/or
            authorizations required for User Content. If you submit User
            Content, the User Content may become publicly available and may be
            shared with third parties including, but not limited to, Dynata's
            clients, clients of Dynata's clients, and third-party service
            providers. User Content should only include audio, video, images or
            the likeness of the individual submitting the User Content and
            should not contain copyrighted or trademarked content or material of
            any third party. User Content should not include audio, video,
            images, or the likeness of anyone other than the user. You will not
            receive compensation for any User Content. If you would like
            information about the identity of the sponsor of a survey in which
            you submit photos or videos, please contact Dynata as set forth in
            Dynata's Privacy Policy. In order to identify the specific survey,
            you will need to provide Dynata with your email address and
            information on the specific survey (e.g., survey number, survey
            topic or subject matter, date you completed the survey, etc.).
          </p>
          <p className="mb-3">
            By using, uploading, posting or submitting User Content in
            connection with the Applications/Services, you hereby grant to
            Dynata a perpetual, irrevocable, unlimited, transferrable,
            sub-licensable, world-wide, royalty free, right and license to edit,
            copy, transmit, publish, display, create derivative works of,
            reproduce, modify, distribute and otherwise use, modify or
            distribute your User Content in any manner, without compensation or
            notice.
          </p>
          <p className="mb-3">
            You are solely responsible for User Content. Dynata does not and
            cannot review all User Content and Dynata is not responsible for
            User Content. Dynata reserves the right to delete, move or edit User
            Content that is, in Dynata's sole discretion, deemed to: (i) violate
            these Terms; (ii) violate copyright or trademark laws; or (iii) be
            abusive, defamatory, obscene or otherwise unacceptable.
          </p>
        </div>
        {/* Terms 8 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">8. Rewards Programs</h3>

          <p className="mb-3">
            A. In connection with your use of the Applications/Services, you may
            have the opportunity to accumulate rewards, incentives and entries
            into prize draws or sweepstakes. Incentives may be in the form of
            points or program/panel currency (“Panel Currency”). Panel Currency
            has no monetary value and cannot be redeemed for cash; Panel
            Currency may not be auctioned, traded, bartered or sold and is not
            transferrable upon death, by gift, as part of a domestic relations
            matter, or otherwise, except by operation of law. Information,
            official rules and terms and conditions for rewards, incentives and
            prize draws or sweepstakes may be available in these Terms, on the
            Website for a Panel, at the beginning or end of a survey, in survey
            invitations, on the website(s) or webpage(s) for redeeming rewards,
            incentives, and prizes, and/or may be described in any newsletter or
            other communication distributed or published by Dynata.
          </p>
          <p className="mb-3">
            The various types of incentives and rewards Dynata may provide are
            to encourage participation in the Panel and are not compensation for
            time spent. Any points or Panel Currency that is earned or paid to
            you or any reward that is redeemed by you for participation in the
            Research or other activity on a Panel is not calculated based on
            time spent by you. Similarly, any consideration paid to or points
            earned by you for participation is not pro-rated on an hourly basis
            or otherwise.
          </p>
          <p className="mb-3">
            B. All points or Panel Currency posted to a Panel member's account
            expire one (1) year following posting, unless the points or Panel
            Currency are forfeited or canceled earlier due to membership or
            account inactivity or as otherwise set forth in these Terms. Panel
            member accounts are not actual bank or financial accounts and do not
            accrue or accumulate interest of any kind.
          </p>
          <p className="mb-3">
            C. Points or Panel Currency posted in connection with the
            Applications/Services do not constitute property of the Panel
            member, cannot be transferred during or after the Panel member's
            life, by operation of law or otherwise, and have no value until
            presented by the Panel member for redemption in accordance with
            these Terms.
          </p>
          <p className="mb-3">
            D. In the event that any points, Panel Currency, or incentive have
            been erroneously posted to a Panel member's account, Dynata may
            remove them from the Panel member's account.
          </p>
          <p className="mb-3">
            E. In the event that any points, Panel Currency, or incentive have
            been obtained and/or posted to a Panel member's account through
            fraudulent means, Dynata will remove them from the Panel member's
            account and the account may be suspended and/or terminated.
          </p>
          <p className="mb-3">F. Redemption</p>
          <p className="mb-3">
            (1) Points or Panel Currency will be deducted from the Panel
            member's account at the time the redemption request is made.
          </p>
          <p className="mb-3">
            (2) All redemptions are final, and rewards may not be returned for
            credit except as otherwise provided in these Terms or as otherwise
            agreed to in writing by an authorized representative of Dynata.
          </p>
          <p className="mb-3">
            (3) The minimum points or Panel Currency redemption threshold
            required to redeem a reward is the equivalent of Fifty United States
            Dollars ($50). Unless there is a lower redemption option available,
            if you do not satisfy the foregoing threshold, you will not have a
            redemption option under Dynata's rewards program. Dynata reserves
            the right to provide reward options with lower minimum redemption
            thresholds without prior notice to or consent from you.
          </p>
          <p className="mb-3">
            (4) Dynata has engaged and from time-to-time will engage certain
            third party ID verification service providers, listed here: Veriff
            in connection with the redemption process. In order to redeem
            rewards, you may be asked to verify your identity through our third
            party ID verification service provider's platform. In all cases,
            such service providers shall be subject to appropriate agreements
            concerning data processing, confidentiality, etc.
          </p>
          <p className="mb-3">
            G. Dynata may modify, alter, delete or add new terms and conditions
            for its rewards program or the Applications/Services at any time
            without notice. For Dynata this includes, but is not limited to,
            modifying, altering, adding or deleting point values, redemption
            levels, conversion ratios, conditions for status, conditions for
            membership and conditions for earning incentives or rewards, at any
            time without notice. In addition, Dynata may terminate or cease
            offering any incentive or reward in connection with Dynata's rewards
            program, at any time without notice.
          </p>
          <p className="mb-3">
            H. You may not combine your points or Panel Currency with points or
            Panel Currency belonging to any other member, including, but not
            limited to, any family member or friend.
          </p>
          <p className="mb-3">
            I. Dynata make no representations or warranties of any kind, express
            or implied, regarding any product or service received in connection
            with Dynata's rewards program, including, but not limited to, any
            warranty of merchantability or fitness for a particular purpose.
            Dynata is not, and will not be, liable or responsible for the
            performance of, or for the failure of the performance of, any
            product or service for which points or Panel Currency, incentives or
            rewards are redeemed. In addition, Dynata is not and will not be
            responsible or liable for any cost, damage, accident, delay, injury,
            loss, expense or inconvenience that may arise in connection with the
            use of, or defect in, any product or service for which points, Panel
            Currency, incentives or rewards are redeemed. Dynata will not
            replace any lost, stolen, misplaced or damaged incentives or
            rewards.
          </p>
          <p className="mb-3">
            J. YOU HEREBY EXPRESSLY ACKNOWLEDGE AND AGREE THAT THE POINTS, PANEL
            CURRENCY, INCENTIVES OR REWARDS EARNED THROUGH THE
            APPLICATIONS/SERVICES MAY BE SUBJECT TO TAX, WHICH IS THE SOLE
            RESPONSIBILITY OF THE PANEL MEMBER. Dynata may provide you and/or
            the appropriate government agency or taxing authority with
            information related to any payments or incentives you earn in
            connection with your use of the Applications/Services. You agree to
            provide Dynata with all required information to assist Dynata in
            complying with its reporting or withholding obligations. Dynata may
            withhold any tax from any incentive or reward as required by
            applicable law.
          </p>
          <p className="mb-3">
            K. Dynata uses reasonable efforts to ensure that points or Panel
            Currency are credited and debited appropriately; however, the Panel
            member should review their account to ensure that their account
            correctly identifies the posted points or Panel Currency,
            incentives, or rewards, and reflects all of the appropriate
            redemption transactions. If you feel that your account was not
            credited or debited correctly or reflects incorrect redemption
            transactions, please send an email to support@loyalopinions.com .
            Any email sent to Dynata should include the Panel member's name,
            email address and specific information on the subject matter. Dynata
            will use reasonable efforts to investigate the matter and to respond
            back to the Panel member promptly. Dynata's decision is final and
            binding.
          </p>
          <p className="mb-3">
            L. The suppliers or providers of the products or services offered in
            connection with Dynata's rewards program and/or the owners or
            operators of the website(s)/webpage(s) on which redemption
            transactions occur, may have their own terms and conditions; please
            review these terms and conditions carefully.
          </p>
          <p className="mb-3">
            M. Personal information may have to be collected, processed and/or
            disclosed in connection with Dynata's rewards program and/or any
            request to redeem a reward or incentive. By agreeing to these Terms,
            you hereby agree to the collection, processing and/or disclosure of
            your personal information for such purpose(s) and all such personal
            information shall be subject to the terms set forth in Dynata's
            Privacy Policy. Redemption of Virtual Mastercard® or Visa® may
            require verification of your identity by the financial institution
            responsible for issuing your Virtual Mastercard® and Visa®, and that
            such verification may require you to provide your date of birth, tax
            identification number, and similar information.
          </p>
          <p className="mb-3">
            N. If a Panel member elects to donate points or Panel Currency to
            one of the charities approved by Dynata, Dynata will donate said
            points or Panel Currency to the selected charity. The donation is
            not made by or on behalf of Dynata and Dynata does not and will not
            match any donation. Please note that the donation option is not
            available on every panel owned and/or operated by or on behalf of
            Dynata. Please check the redemption options available for the panel
            to which you belong.
          </p>
          <p className="mb-3">
            O. Your daily limit on the redemption of points or Panel Currency is
            limited to two (2) redemptions per 24-hour period.
          </p>
          <p className="mb-3">
            P. In the United States, Dynata has an obligation to: (i) provide a
            W-9 tax form to individuals who receive payments (whether via the
            redemption of points or Panel Currency or other means) of $600 or
            more in a tax year; and (ii) file a 1099-Misc form with the United
            States Internal Revenue Service (“IRS”) for such payments. In
            addition, Dynata will provide you with a completed 1099-Misc form
            for your tax compliance purposes. As a result, please see the
            following:
          </p>
          <p className="mb-3">
            (1) If you have received payments of $599 during a tax year, your
            account will be suspended (i.e., you will not be able to receive
            further payments and will not be able to complete or participate in
            surveys) for the remainder of the applicable tax year unless and
            until you provide Dynata with a completed and verified W-9 form.
          </p>
          <p className="mb-3">
            (2) If you have received payments of $600 or more during a tax year,
            your account will be suspended indefinitely (i.e., you will not be
            able to receive further payments and will not be able to complete or
            participate in surveys) unless and until you provide Dynata with a
            completed and verified W-9 form. In this case, your account will not
            be reinstated at the beginning of the next tax year, unless or until
            you provide Dynata with a completed and verified W-9 form.
          </p>
          <p className="mb-3">
            (3) You agree to provide Dynata with your then-current address
            information. You have the responsibility to update Dynata on any
            change of address and Dynata is not responsible for any misdirected
            communication based on your failure to do so.
          </p>
        </div>
        {/* Terms 9 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">9. Profile Updates</h3>

          <p className="mb-3">
            Panel members agree to notify Dynata promptly of any changes in or
            to the information contained in their member profile. Panel members
            agree to review and update their membership profiles as necessary
            but no less frequently than once every six (6) months. A Panel
            member may update, correct and/or delete information contained in
            his or her membership profile by: (i) accessing his or her Panel
            membership account; or (ii) sending an email to the appropriate
            Panel member services team for the appropriate Panel.
          </p>
        </div>
        {/* Terms 10 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">10. Opt-Out Policy</h3>

          <p className="mb-3">
            Panel members may opt out from using the Applications/Services
            (including, without limitation, from receiving newsletters or
            communications), at any time, by: (i) following the unsubscribe
            procedures described on the applicable Website(s) or contained in
            any email received from Dynata; or (ii) sending an email to the
            Panel member services team. Dynata shall use reasonable efforts to
            read and respond to each email request within a reasonable period of
            time after receipt. Upon termination, a Panel member's contact
            information will be removed from any further communication or
            contact lists. Please allow a few days for the complete removal of
            contact information from Dynata's communication or contact lists for
            the applicable Panel, during which period the member may receive
            communications which were created or compiled prior to termination.
            Please see Dynata's Privacy Policy for information on how Dynata
            handles information and data following an unsubscribe, termination
            or opt-out request (“Dynata's Privacy Policy”).
          </p>
        </div>
        {/* Terms 11 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">11. Links</h3>

          <p className="mb-3">
            In connection with your use of the Applications/Services, you may be
            able to link or connect voluntarily to websites maintained and/or
            operated by third parties (“Third Party Websites”). Dynata does not
            endorse any Third-Party Website nor any products, services and/or
            opportunities advertised, offered and/or sold by, through or in
            connection with any Third-Party Website (“Third-Party Information”).
            Dynata does not make any representations or warranties regarding
            Third Party Websites and/or Third-Party Information. Please
            carefully review all policies and terms applicable to Third-Party
            Websites and Third-Party Information.
          </p>
        </div>
        {/* Terms 12 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">
            12. Communications with Dynata
          </h3>

          <p className="mb-3">
            All communications (excluding personal information) and User Content
            submitted or transmitted by you to Dynata, by electronic mail or
            otherwise, shall be treated as non-confidential and non-proprietary
            information, unless specifically indicated by you either prior to,
            or contemporaneously with, the submission or transmission of such
            communications and User Content. You agree that any such
            communications and User Content may be used by Dynata for any legal
            reason.
          </p>
        </div>
        {/* Terms 13 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">13. Disclaimer</h3>

          <p className="mb-3">
            THE APPLICATIONS/SERVICES, INCLUDING ALL INFORMATION, SURVEYS,
            CONTENT, MATERIAL, COMMENTARY AND APPLICATIONS/SERVICES MADE
            AVAILABLE ON OR THROUGH THE APPLICATIONS/SERVICES, ARE PROVIDED “AS
            IS”. DYNATA DOES NOT MAKE ANY REPRESENTATIONS OR WARRANTIES OF ANY
            KIND WHATSOEVER IN CONNECTION WITH ANY INFORMATION, CONTENT,
            MATERIAL, COMMENTARY, SURVEYS, PRODUCTS OR SERVICES MADE AVAILABLE
            ON OR THROUGH THE APPLICATIONS/SERVICES, INCLUDING, BUT NOT LIMITED
            TO, ANY USER CONTENT. FURTHER, DYNATA HEREBY DISCLAIMS ANY AND ALL
            WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED
            TO, THE IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY, AND
            FITNESS FOR A PARTICULAR PURPOSE. DYNATA DOES NOT WARRANT THAT THE
            TOOLS, TECHNOLOGY OR FUNCTIONS CONTAINED IN THE
            APPLICATIONS/SERVICES OR ANY CONTENT, MATERIAL, COMMENTARY,
            INFORMATION AND/OR SERVICES CONTAINED THEREIN, WILL BE UNINTERRUPTED
            OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, THAT THE SYSTEMS OR
            THE SERVER(S) THAT SUPPORT THE APPLICATIONS/SERVICES AND MAKE THE
            APPLICATIONS/SERVICES AVAILABLE WILL BE CORRECTED OR THAT THE
            APPLICATIONS/SERVICES AND/OR THE SYSTEMS AND/OR THE SERVER(S) THAT
            SUPPORT THE APPLICATIONS/SERVICES ARE FREE OF VIRUSES OR OTHER
            HARMFUL COMPONENTS. DYNATA DOES NOT PROVIDE ACCESS OR CONNECTION TO
            THE INTERNET AND IS NOT AND SHALL NOT BE RESPONSIBLE OR LIABLE FOR
            THE ACTIONS OR OMISSIONS OF THIRD PARTIES THAT INTERFERE WITH,
            LIMIT, RESTRICT OR PREVENT ACCESS OR CONNECTION TO, OR USE OF, THE
            APPLICATIONS/SERVICES.
          </p>
        </div>
        {/* Terms 14 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">14. Changes</h3>

          <p className="mb-3">
            Dynata hereby reserves the right, in Dynata's sole discretion, to
            make changes to these Terms. Dynata encourages you to review these
            Terms on an ongoing basis. Dynata will obtain your consent prior to
            changes that are of such nature that consent is needed or required.
            For changes that do not require consent, your continued use of,
            access to, and/or participation in the Applications/Services does
            and will constitute your acceptance of these Terms as amended.
          </p>
        </div>
        {/* Terms 15 */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-5">15. Indemnification</h3>

          <p className="mb-3">
            You agree to indemnify, defend and hold harmless Dynata and its
            parent, affiliated and subsidiary companies and its and their
            respective members, managers, shareholders, directors, officers,
            employees and agents from and against any and all claims,
            liabilities, losses, judgments, awards, fines, penalties and costs
            and/or expenses of any kind, including, but not limited to,
            reasonable attorneys' fees and court costs, arising out of,
            resulting from or caused, either directly or indirectly, by: (i)
            your breach or violation of these Terms; and/or (ii) your use of,
            participation in, and/or access to the Applications/Services.
          </p>
        </div>
      </div>
    </section>
  );
}
