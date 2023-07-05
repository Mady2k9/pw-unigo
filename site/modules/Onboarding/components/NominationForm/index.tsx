import Header from '@modules/Onboarding/components/Header/header'
import SidebarNow from '@modules/Onboarding/components/Sidebar/sidebar-now'
import ContentNow from '@modules/Onboarding/components/Content/NominationForm'
import { useEffect, useMemo, useState } from 'react'

const NominationForm = () => {
  const [profileData, setProfileData] = useState<any>({
    email: '',
    class: '',
    alternateNumber: '',
  })

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (typeof user === 'string') {
      setProfileData(JSON.parse(user))
    }
  }, [])

  const name = useMemo(() => {
    return profileData?.firstName || '' + profileData?.lastName
  }, [profileData?.firstName, profileData?.lastName])

  const onSubmit = () => {
    /**
     * MAKE DRAFT API TO SAVE DATA
     */
  }
  const [isChecked, setIsChecked] = useState(false)
  const [opcatitylow, setOpacityLow] = useState(false)
  const [showPopUp, setShowPopUp] = useState(false)
  const checkboxButton = () => {
    setIsChecked(!isChecked)
  }
  const continueWithCheckbox = () => {
    setOpacityLow(true)
    setShowPopUp(true)
  }

  return (
    <>
      <Header title="Step 2: Nominate Now" onSubmit={onSubmit} />
      <div className="sticky left-0 h-[calc(100vh-80px)] bg-[#f8f8f8] z-19 sm:flex">
        <SidebarNow name={name} phone={profileData?.primaryNumber} />
        <ContentNow />
        {opcatitylow === false ? (
          <div className="opacity-25 fixed inset-0 z-40 bg-[#414347] "></div>
        ) : (
          ''
        )}
        {showPopUp === false ? (
          <div className="absolute bg-[#FFFFFF] w-[882px] h-[332px] rounded-lg top-[20%] left-[20%] z-50 text-center ">
            <div className="flex justify-center flex-col m-4">
              <p className="font-semibold text-[18px] mt-2 mb-6">
                Nomination Terms and Conditions
              </p>
              <ul className="w-[750px] self-center text-left list-disc text-[14px] font-[500px]">
                <li>
                  To nominate yourself for PW Marvels, the student must have won
                  at least one award in the listed academic years.
                </li>
                <li>
                  Examination of the same category will be clubbed together and
                  you should fill best among them.
                </li>
                <li>
                  You can fill multiple awards that will be counted separately.
                  Exact details mentioned in each category.
                </li>
                <li>
                  The weightage of the exam is decreasing Group wise i.e. Group
                  A & Group B.{' '}
                </li>
                <li>
                  You can fill only one exam for your nomination and marking
                  scheme is almost same for all same-category exams, but there
                  may be a minor variation depending on the exam-conducting
                  body, number of students participating & rank achieved. 
                </li>
                <li>
                  You can only fill those forms whose Valid Certificates are
                  available with you. No internet copy will be entertained.
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-6 items-center">
              <input onClick={checkboxButton} type="checkbox" />
              <span className="ml-3 text-[14px]">I Accept</span>
              {isChecked === true ? (
                <button
                  onClick={continueWithCheckbox}
                  className=" w-[100px] h-[40px] ml-8 bg-[#5A4BDA] text-white rounded-md"
                >
                  Continue
                </button>
              ) : (
                <button className=" w-[100px] h-[40px]  ml-8 bg-[#D2CCFF] text-white rounded-md">
                  Continue
                </button>
              )}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default NominationForm
