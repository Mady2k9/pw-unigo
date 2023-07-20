import React, { useState } from 'react'
import Image from 'next/image'
import downArrow from 'public/downArrow.svg'
import { Select } from '@components/ui'

type SelectedExamAchievementsProps = {
  achievements: any
}

function SelectedExamAchievements({
  achievements,
}: SelectedExamAchievementsProps) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  return (
    <div className="p-4 w-full cursor-pointer">
      <p className="text-[#757575] max-[640px]:mt-8">
        Selected Exam Category: Profile Based scholarship award
      </p>
      <div className="mt-6 bg-[#F8F8F8] flex justify-between items-center p-4 max-[640px]:mt-3">
        <div>
          <p className="text-[#757575]">Fill your achievements here for</p>
          <p className="text-[#1B2124] text-base">Current Year (2023)</p>
        </div>
        <div
          className={`transition-all duration-300 ${
            isAccordionOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <Image
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            src={downArrow}
            alt="Accordion Icon"
          />
        </div>
      </div>

      {isAccordionOpen && (
        <div className="text-[#757575]">
          <div className="text-[#1B2124] font-bold grid grid-cols-12 py-4 mt-5 border-b-2">
            <div className="col-span-1">Group</div>
            <div className="col-span-4">Competition Title</div>
            <div className="col-span-3">Criteria</div>
            <div className="col-span-4">Select Criteria</div>
          </div>
          {Object.keys(achievements?.['Group'][0])?.map(
            (achievement, index) => {
              const group = achievement
              const groupData = achievements?.['Group'][0][achievement][0] || {}
              const competitions = groupData['Competition Title'] || []
              const criterias = groupData['Criteria'] || []
              const dropdownArray =
                groupData['Select Criteria (dropdown)'] || []

              return (
                <div
                  key={`${achievement}-${index}`}
                  className="grid grid-cols-12 border-b-2 py-4"
                >
                  <div className="col-span-1 py-2">{group}</div>
                  <div className="col-span-11">
                    {competitions.map((_: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className="grid grid-cols-12 py-2 border-b last:border-b-0 gap-6"
                        >
                          <div className="col-span-4">
                            {competitions[index]}
                          </div>
                          <div className="col-span-3">{criterias[index]}</div>
                          <div className="col-span-4 flex">
                            <Select
                              options={dropdownArray.map((el: string) => ({
                                id: el,
                                name: el,
                              }))}
                              placeholder="Select"
                              className="h-[50px] text-[14px] mr-2"
                            />
                            <input
                              type="checkbox"
                              className="appearance-none mt-[17px] checked:bg-[#5A4BDA] rounded-full"
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            }
          )}
        </div>
      )}
    </div>
  )
}

export default SelectedExamAchievements
