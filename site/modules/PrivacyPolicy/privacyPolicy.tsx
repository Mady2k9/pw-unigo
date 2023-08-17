const PrivacyPolicy = () => {
  return (
    <>
      <div className="flex  mt-[20px] md:mt-[38px] max-w-6xl mx-auto px-3 xl:px-0">
        <div className="m-auto px-3 xl:px-0">
          <div className="text-[#DA1F3D] text-[24px] md:text-[40px] font-[600] mb-[20px] md:mb-[40px]">
            Privacy Policy
          </div>
          <div className="text-[18px] md:text-[24px] font-[700] mb-[10px]">
            Introduction
          </div>
          <div className="mb-[32px] text-[14px] md:text-[16px] text-[#3D3D3D]">
            Thank you for choosing PW Unigo (referred to as "we," "our," or
            "us"). We value your trust and are committed to protecting your
            privacy. This Privacy Policy outlines how we collect, use, disclose,
            and safeguard your personal information when you interact with our
            services.t
          </div>
          <div className="text-[18px] md:text-[24px] font-[700] mb-[10px]">
            Information We Collect
          </div>
          <ol className="mb-[32px]  md:text-[16px] text-[14px] list-decimal list-outside px-[16px]">
            <li>
              Personal Information: We may collect personally identifiable
              information, such as your name, email address, postal address,
              phone number, and other relevant details when you voluntarily
              provide it to us through forms, registrations, or account
              creation.
            </li>
            <li>
              Device and Usage Data: When you access our website or use our app,
              we may automatically collect non-personal information, such as
              your IP address, device type, operating system, browser type, and
              usage data, through cookies and similar technologies.
            </li>
            <li>
              Cookies and Tracking Technologies: We use cookies and similar
              technologies to enhance your user experience, analyze usage
              patterns, and improve our services. You can manage your cookie
              preferences through your browser settings.
            </li>
          </ol>

          {/*  */}
          <div className="text-[18px] md:text-[24px] font-[700] mb-[10px]">
            Use of Information
          </div>
          <ol className="mb-[32px]  md:text-[16px] text-[14px] list-decimal list-outside px-[16px]">
            <li>
              Providing Services: We use the information collected to deliver
              the services you request, such as processing orders, providing
              customer support, and personalizing your experience.
            </li>
            <li>
              Communication: We may use your contact information to send you
              important updates, newsletters, marketing materials, and
              promotional offers. You can opt-out of marketing communications at
              any time.
            </li>
            <li>
              Analytics and Improvements: We use aggregated and anonymized data
              to analyze website and app usage patterns, troubleshoot issues,
              and enhance our services.
            </li>
          </ol>

          {/*  */}
          <div className="text-[18px] md:text-[24px] font-[700] mb-[10px]">
            Data Security
          </div>
          <div className="text-[14px] md:text-[16px]  mb-[32px]">
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, alteration, and destruction.
            However, please understand that no method of transmission or storage
            is completely secure, and we cannot guarantee absolute security.
          </div>

          {/*  */}
          <div className="text-[18px] md:text-[24px] font-[700] mb-[10px]">
            Changes to Privacy Policy
          </div>
          <div className="text-[14px] md:text-[16px]  mb-[32px]">
            We reserve the right to modify this Privacy Policy at any time. Any
            updates will be effective upon posting the revised version on our
            website. We encourage you to review this Privacy Policy
            periodically.
          </div>
          <div className="mb-[32px] flex md:mb-[40px]">
            <p className="text-[14px] md:text-[16px] ">Last Updated :</p>
            <p className="text-[14px] font-[600] md:text-[16px] ">
              25th July 2023
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
