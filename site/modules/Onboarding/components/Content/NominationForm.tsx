import React, { useEffect, useState } from 'react'
import SelectedExamAchievements from './SelectedExamAchievements'
import { fetchNomationFormat } from '@modules/auth/lib'
import uuid from 'react-uuid'

const REGSISTARTION_FORM_INSTRUCTION = [
  'To nominate yourself, please select an exam with mentioned criteria.',
  'Weightage of the title is decreasing from group wise i.e. From Group A to Group C',
  'You can fill multiple awards that will be counted separately. Exact details mentioned in each category.',
  'After selecting the title of your choice, please click on submit button and your form will be saved.',
]

function NominationForm() {
  // TODO - Remove any and apply proper TS
  const [nominationsFormat, setNominationsFormat] = useState<any>([])
  const [activeExamCategory, setActiveExamCategory] = useState('')
  const [selectedExamFormatData, setselectedExamFormatData] = useState<any>([])

  useEffect(() => {
    ;(async () => {
      // TODO class should be dynamic
      const nominationFormatData = await fetchNomationFormat(10, uuid())
      setNominationsFormat(nominationFormatData?.data?.data?.['Exam Category'])
      setActiveExamCategory(
        Object.keys(nominationFormatData?.data?.data?.['Exam Category'])[0]
      )
    })()
  }, [])

  const onExamSelect = (examCategory: string) => {
    if (activeExamCategory !== examCategory) {
      setActiveExamCategory(examCategory)
    }
  }

  useEffect(() => {
    setselectedExamFormatData(nominationsFormat[activeExamCategory])
  }, [activeExamCategory, nominationsFormat])

  return (
    <div className="w-full bg-white overflow-y-scroll">
      <div className=" flex justify-center">
        <div className="md:bg-[#F8F8F8] w-full md:w-[90%] lg:w-[85%] h-fit  rounded-b-xl lg:p-3 items-center relative">
          <div className="">
            <div className="bg-white rounded-[8px] px-[8px] sm:px-[24px] py-[12px]">
              <div className="text-[16px] font-semibold mb-2">
                Instructions to fill registration form:
              </div>
              <ol className="bg-white list-disc px-[12px]">
                {REGSISTARTION_FORM_INSTRUCTION.map((instruction) => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ol>
            </div>
            <div className="mt-4 bg-white h-full flex max-[640px]:flex-col max-[640px]:h-screen ">
              <div className="w-[270px] p-4 max-[640px]:w-full max-[640px]:p-0 justify-end">
                <p className="text-[#1B2124] bg-[#E4E7EA] p-3 font-bold ">
                  Exam Category
                </p>
                {Object.keys(nominationsFormat)?.map(
                  (nomintaionFormat: any) => {
                    return (
                      <div
                        className={`text-[#1B2124] bg-[#F8F8F8] p-3 border-l-2 border-[#F8F8F8] cursor-pointer ${
                          nomintaionFormat === activeExamCategory &&
                          'text-indigo-500 bg-white border-l-2 !border-indigo-500'
                        }`}
                        key={nomintaionFormat}
                        onClick={() => onExamSelect(nomintaionFormat)}
                      >
                        {nomintaionFormat}
                      </div>
                    )
                  }
                )}
              </div>
              <SelectedExamAchievements achievements={selectedExamFormatData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NominationForm
