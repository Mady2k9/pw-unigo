import { Header } from '@modules/screens/Onboarding/components'
import NominationForm from '@modules/screens/Onboarding/NominationForm/NominationForm'
import { useEffect, useMemo, useState } from 'react'
import { fetchNomationFormat, postMarvelDataAsDraft } from '@modules/auth/lib'
import Layout from '../Layout'
import { Dialog } from '@headlessui/react'
import { Cross } from '@components/icons'
import { Button } from '@components/ui'
import { useRouter } from 'next/router'

export type AchievementFEType = {
  examGroup: string
  remarks: string
  achievementName: string
  criteria: string
}

export type AchievementBEType = AchievementFEType & {
  year: string
}

const TERMS_AND_CONDITIONS = [
  'To nominate yourself for PW Marvels, the student must have won at least one award in the listed academic years.',
  'Examination of the same category will be clubbed together and you should fill best among them.',
  'You can fill multiple awards that will be counted separately. Exact details mentioned in each category.',
  'The weightage of the exam is decreasing Group wise i.e. Group A & Group B',
  'You can fill only one exam for your nomination and marking scheme is almost same for all same-category exams, but there may be a minor variation depending on the exam-conducting body, number of students participating & rank achieved.',
  'You can only fill those forms whose Valid Certificates are available with you. No internet copy will be entertained.',
]

const NominationFormScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [selectedValues, setSelectedValues] = useState<AchievementFEType[]>([])
  const [nominationsFormat, setNominationsFormat] = useState<any>([])
  const [isChecked, setIsChecked] = useState(false)
  const { push } = useRouter()

  useEffect(() => {
    // TODO Check why this is calling twice
    ;(async () => {
      const randomId = localStorage.getItem('randomId') || ''
      const nominationFormatData = await fetchNomationFormat(10, randomId) // TODO class should be dynamic
      setNominationsFormat(nominationFormatData?.data?.data?.['Exam Category'])
    })()
  }, [])

  //FUNCTIONS
  const onValueSelect = (value: AchievementFEType) => {
    setSelectedValues([...selectedValues, value])
  }

  const onSubmit = async () => {
    const randomId = localStorage.getItem('randomId') || ''
    const dataToSend = {
      nominationDocsInfo: selectedValues,
    }

    const res = await postMarvelDataAsDraft(dataToSend, randomId)

    if (res) {
      push('/upload-document')
    }
  }

  const checkboxButton = () => {
    setIsChecked(!isChecked)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Layout
      header={<Header title="Step 2: Nominate Now" onSubmit={onSubmit} />}
    >
      <div className="sticky left-0 h-[calc(100vh-80px)] bg-[#f8f8f8] z-19 sm:flex">
        <NominationForm
          onValueSelect={onValueSelect}
          selectedValues={selectedValues}
          nominationsFormat={nominationsFormat}
        />
        <Dialog
          className={'relative z-[999999]'}
          open={isModalOpen}
          onClose={toggleModal}
        >
          <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4 ">
            <Dialog.Panel className="mx-auto w-full max-w-3xl rounded-xl bg-white ring-1 transition-all p-5 relative">
              <div
                className="cursor-pointer absolute top-4 right-4"
                onClick={toggleModal}
              >
                <Cross className="h-6 w-6" />
              </div>
              <div className="flex justify-center flex-col m-4">
                <p className="font-semibold text-[18px] mt-2 mb-4">
                  Nomination Terms and Conditions
                </p>
                <ul className="list-disc text-[14px]">
                  {TERMS_AND_CONDITIONS.map((termsConditions, index) => (
                    <li key={`terms-conditions-${index}`}>{termsConditions}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center mt-6 items-center">
                <input onClick={checkboxButton} type="checkbox" />
                <span className="ml-3 text-[14px]">I Accept</span>
                <Button
                  onClick={toggleModal}
                  className="w-[100px] ml-8"
                  disabled={!isChecked}
                >
                  Continue
                </Button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </Layout>
  )
}

export default NominationFormScreen
