import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import downArrow from 'public/downArrow.svg'
import { Select } from '@components/ui'
import { AchievementBEType } from '.'

type SelectedExamAchievementsProps = {
  achievements: any
  onValueSelect: (val: AchievementBEType) => void
  selectedValues: any
}

function SelectedExamAchievements({
  achievements,
  onValueSelect,
  selectedValues,
}: SelectedExamAchievementsProps) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true)

  const achievementsData =
    achievements && achievements?.['Group'] && achievements?.['Group']?.[0]

  const onSelectCriteria = (
    examGroup: string,
    val: string,
    achievementName: string,
    criteria: string
  ) => {
    onValueSelect({
      year: '2023',
      examGroup,
      achievementName,
      remarks: val,
      criteria,
    })
  }

  const getSelectedValue = useCallback(
    (examGroup: string, achievementName: string, criteria: string) => {
      /**
       * Write logic if the value is available then it should retuen the value
       */
      const value = selectedValues.find((value: any) => {
        if (
          value.examGroup === examGroup &&
          value.achievementName === achievementName &&
          value.criteria === criteria
        ) {
          return value
        }
      })
      if (value) {
        return value.remarks
      }
    },
    [selectedValues]
  )

  if (!achievementsData) {
    //TODO fix this
    return null
  }

  return (
    <div className="p-4 w-full cursor-pointer">
      <p className="text-[#757575] max-[640px]:mt-8">
        Selected Exam Category: Profile Based scholarship award
      </p>
      <div
        className="mt-6 bg-[#F8F8F8] flex justify-between items-center p-4 max-[640px]:mt-3"
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
      >
        <div>
          <p className="text-[#757575]">Fill your achievements here for</p>
          <p className="text-[#1B2124] text-base">Current Year (2023)</p>
        </div>
        <div
          className={`transition-all duration-300 ${
            isAccordionOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <Image src={downArrow} alt="Accordion Icon" />
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
          {Object.keys(achievementsData)?.map((achievement, index) => {
            const group = achievement
            const groupData = achievements?.['Group'][0][achievement][0] || {}
            const competitions = groupData['Competition Title'] || []
            const criterias = groupData['Criteria'] || []
            const dropdownArray = groupData['Select Criteria (dropdown)'] || []

            return (
              <div
                key={`${achievement}-${index}`}
                className="grid grid-cols-12 border-b-2 py-4"
              >
                <div className="col-span-1 py-2">{group}</div>
                <div className="col-span-11">
                  {competitions.map((_: any, index: number) => {
                    const selectedVal = getSelectedValue(
                      group,
                      competitions[index],
                      criterias[index]
                    )
                    return (
                      <div
                        key={index}
                        className="grid grid-cols-12 py-2 border-b last:border-b-0 gap-6"
                      >
                        <div className="col-span-4">{competitions[index]}</div>
                        <div className="col-span-3">{criterias[index]}</div>
                        <div className="col-span-4 flex">
                          <Select
                            options={dropdownArray.map((el: string) => ({
                              id: el,
                              name: el,
                            }))}
                            placeholder="Select"
                            className="h-[50px] mr-2 select-arrow"
                            onChange={(val: string) =>
                              onSelectCriteria(
                                group,
                                val,
                                competitions[index],
                                criterias[index]
                              )
                            }
                            value={selectedVal}
                          />
                          <input
                            type="checkbox"
                            className="appearance-none mt-[17px] checked:bg-[#5A4BDA] rounded-full"
                            checked={!!selectedVal}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SelectedExamAchievements
