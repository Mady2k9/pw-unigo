import React from 'react'
import cn from 'clsx'
import s from './private-policy.module.css'

import Image from 'next/image'
import { Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'
export interface PrivatePolicyProps {
  data: any
}
const PrivatePolicy: React.FC<PrivatePolicyProps> = (props) => {
  const rootClassName = cn(s.root, {})
  return (
    <Container className="mx-auto xl:max-w-6xl w-full mt-10">
      <div>
        <Typography weight={500} variant="regular">
          <div className="p-1 break-normal">
            Please read the following Privacy policy of the services made
            available on www.pw.live or the equivalent PW Mobile Application
            available on Google Play, (<strong>"PW App”/ “Website”</strong>).
            The PW App or Website on which the Services are availed may together
            be referred to for convenience as the “Platform”.
          </div>
          <div className="p-1 break-normal">
            Please ensure that this Privacy Policy is perused by You before
            availing any services from Us. This Privacy Policy shall be updated
            from time to time and to stay abreast with our methods of using Your
            information and protecting Your privacy, please keep reviewing this
            Policy.
          </div>
          <div className="p-1 break-normal">
            By viewing the PW Platform, you agree to be bound by the terms of
            this Privacy Policy.
          </div>
          <div className="p-1 break-normal">
            By using the PW Platform and/or by providing Your information, You
            consent to the collection and use of the information You disclose on
            our Website in accordance with this Privacy Policy, including but
            not limited to your consent for sharing your information as per this
            Privacy Policy. If we decide to change our Privacy Policy, We will
            post those changes on this page so that You are always aware of what
            information We collect, how We use it, and under what circumstances
            We disclose it. If You do not agree for the forgoing, please do not
            continue to use or access our Website.
          </div>
        </Typography>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="heading3">
            1. Collection of Personally Identifiable Information
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            <p>
              1.1 We collect certain information about You to help us serve You
              better. The information collected by Us is of the following
              nature:
            </p>
          </Typography>
        </div>
        <div className="mx-4 p-1 break-normal">
          <Typography weight={500} variant="regular">
            <ul className="list-disc">
              <li>Name</li>
              <li>Telephone Number</li>
              <li>Email Address</li>
              <li>Service Address</li>
              <li>
                Other information about the service address which You give Us
              </li>
              <li>Your IP address</li>
              <li>Information about your device</li>
              <li>Network information</li>
              <li>College/ Institution Details and location</li>
              <li>User uploaded photo and IDs</li>
              <li>
                Demographic information such as postcode, preferences and
                interests
              </li>
              <li>
                Any other personal information which you give us in connection
                while booking a service or is relevant to customer surveys
                and/or offers.
              </li>
            </ul>
          </Typography>
        </div>
        <Typography weight={500} variant="regular">
          <div className="p-1 break-normal">
            <p>
              1.2 Information provided during Registration to create a profile
              and use this Website and services, you may be asked to provide the
              following information: your name, your username, password, email
              address, the speciality in which you practice or intend to
              practice (selected from a drop-down menu if applicable), year of
              graduation or year of joining undergraduate medical program and
              the name of your college or university. You may also choose to
              provide a picture to be associated with your profile.
            </p>
          </div>
          <div className="p-1 break-normal">
            <p>
              1.3 We also provide an option to register using Facebook. If you
              select this option, you allow us to access your profile
              information including the list of your friends. Please note that
              if you register to the Platform through Facebook, You shall be
              subject to the Terms & Conditions and Privacy Policy of Facebook.
            </p>
          </div>
          <div className="p-1 break-normal">
            <p>
              1.4 We will store your username, country and specialty on an
              unencrypted server. Your password is cryptographically hashed and
              your email address is encrypted. These information elements are
              referred to collectively as your “Personal User Information.” We
              collect and hold this information for the purpose of administering
              your use of the Application.
            </p>
          </div>
          <div className="p-1 break-normal">
            <p>1.5 You are solely responsible for</p>
            <ul className="list-decimal mx-4">
              <li>
                maintaining the strict confidentiality of your Personal User
                Information
              </li>
              <li>
                not allowing another person to use your Personal User
                Information to access the Services
              </li>
              <li>
                any and all damages or losses that may be incurred or suffered
                as a result of any activities that occur in your Account
              </li>
              <li>
                ensuring that the information submitted by you complies with our
                terms and conditions
              </li>
              <li>
                ensuring that the information provided by you is correct and
                updated from time to time.
              </li>
            </ul>
          </div>
          <div className="p-1 break-normal">
            <p>
              1.6 You agree to immediately notify PW in writing by email to
              support@pw.live of any unauthorized use of your Personal User
              Information or any other breach of security. PW is not and shall
              not be liable for any harm arising from or relating to the theft
              of your Personal User Information that is under Your control, your
              disclosure of your Personal User Information, or the use of your
              Personal User Information by another person or entity.
            </p>
          </div>
          <div className="p-1 break-normal">
            <p>
              1.7 On receiving personal information about You, You no longer
              remain anonymous to Us. We may use this information to do internal
              research on demographics, interests, and behaviour to better
              understand, protect and serve our customers. This information is
              compiled and analysed on an aggregated basis. We indicate fields
              that are mandatory required to be filled and fields that are
              optional. You may decide whether or not to provide such
              information to Us.
            </p>
          </div>
          <div className="p-1 break-normal">
            <p>
              1.8 You may choose not to provide us with any personal information
              or information as required to provide any Services. If we do not
              receive information required, we may choose not to provide you
              with such Service. Service shall have the meaning attributed to
              the phrase in the Terms of Use.
            </p>
          </div>
          <div className="p-1 break-normal">
            <p>
              1.9 On our Website, you can browse without telling Us who you are
              or revealing any personal information about Yourself. We may
              automatically track certain information about You based on Your
              behaviour on our Website. This information may include the URL
              that You just came from (whether this URL is on our Website or
              not), which URL You next go to (whether this URL is on our Website
              or not), Your browser information, and Your IP address.
            </p>
          </div>
          <div className="p-1 break-normal">
            <p>
              1.10 On our Websites, We use data collection devices such as
              "cookies" on certain pages to help analyse our web page flow,
              measure promotional effectiveness, and promote trust and safety.
              "Cookies" are small files placed on your hard drive that assist Us
              in providing our services. We offer certain features that are only
              available through the use of a "cookie". You are always free to
              decline our cookies if Your browser permits, although in that case
              You may not be able to use certain features on the Websites.
              Additionally, You may encounter "Cookies" or other similar devices
              on certain pages of the Website that are placed by third parties.
              We do not control the use of cookies by third parties.
            </p>
          </div>
        </Typography>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="heading3">
            2. Use of Personal Information
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            2.1 The information collected by Us through our Website is used by
            Us for various purposes to enable us to serve you better:
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            <ul className="list-decimal mx-4">
              <li>To find third party service providers</li>
              <li>nternal record keeping</li>
              <li>
                We may use the information to improve our products and services
              </li>
              <li>
                We may periodically send promotional emails or messages on the
                Website about new products, special offers or other information
                which We think You may find interesting using the email address
                which You have provided
              </li>
              <li>
                From time to time, we may use the information to customize the
                Website according to your interests.
              </li>
            </ul>
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            2.2 We may use personal information to resolve disputes that may
            arise with the use of our Services, help promote a safe service to
            all the customers, measure consumer interest in our services,
            customize your experience, detect and protect Us against error,
            fraud and other criminal activity, enforce our terms and conditions.
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            2.3 We identify and use your IP address to help diagnose problems
            with our server, and to administer our Websites. Your IP address is
            also used to help identify You and to gather broad demographic
            information.
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="heading3">
            3. Sharing of Personal Information
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            3.1 We may share your information with payment service providers,
            regulatory authorities, and third-party agencies in the event of any
            request from such authorities.
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            3.2 We may disclose Your personal information if required to do so
            by law or in the good faith and belief that such disclosure is
            reasonably necessary to respond to subpoenas, court orders, or other
            legal process. We may disclose personal information to law
            enforcement offices, third party rights owners, or others in the
            good faith belief that such disclosure is reasonably necessary to
            enforce our Terms or Privacy Policy; respond to claims that an
            advertisement, posting or other content violates the rights of a
            third party; or protect the rights, property or personal safety of
            our customers or the general public.
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            3.3 We and our affiliates will share/sell some or all of the
            collected information with another business entity should We (or our
            assets) plan to merge with, or be acquired by that business entity,
            or re-organization, amalgamation, restructuring of business. Should
            such a transaction occur, that other business entity (or the new
            combined entity) will be required to follow this Privacy Policy with
            respect to all the information collected.
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            3.4 We do not disclose personal information about identifiable
            individuals to advertisers, but We may provide them with aggregate
            and/or anonymised information about You to help advertisers reach
            the kind of audience they want to target. We may make use of the
            information We have collected from You to enable Us to comply with
            our advertisers' wishes by displaying their advertisement to that
            target audience.
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            3.5 If you choose to subscribe to any PW plan you may be required to
            upload a copy of a valid government issued identification document
            to allow access to the Platform.
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="heading3">
            4. Information Safety
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            4.1 All information is saved and stored on servers which are secured
            with passwords and pins to ensure no unauthorised person has access
            to it. Once your information is in our possession we adhere to
            strict security guidelines, protecting it against unauthorized
            access.
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="heading3">
            5. Choice/Opt-Out
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            5.1 We provide all customers with the opportunity to opt-out of
            receiving non-essential (promotional, marketing-related)
            communications from Us on behalf of our partners, and from Us in
            general, after providing Us with personal information. If You want
            to remove your contact information from all lists and newsletters,
            please write to [support@pw.live].
          </Typography>
        </div>
        <div className="p-1 break-normal">
          <Typography weight={500} variant="regular">
            <strong>
              All other terms and conditions as applicable under the Terms and
              Conditions of Use www.pw.live/ will be applicable to You and will
              be read along with this Privacy Policy.
            </strong>
          </Typography>
        </div>
      </div>
    </Container>
  )
}
export default PrivatePolicy
