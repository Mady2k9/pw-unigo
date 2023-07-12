import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import downArrow from 'public/downArrow.svg'
import { Select } from '@components/ui'
import { AchievementBEType } from '.'

type SelectedExamAchievementsProps = {
  achievements: any
  onValueSelect: (val: AchievementBEType) => void
  onDeselectValue: (val: AchievementBEType) => void
  selectedValues: any
  year: {
    year: number
    title: string
  }
}

function SelectedExamAchievements({
  achievements,
  onValueSelect,
  onDeselectValue,
  selectedValues,
  year,
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
      year: year?.year,
      examGroup,
      achievementName,
      remarks: val,
      criteria,
    })
  }

  const getSelectedValue = useCallback(
    (
      examGroup: string,
      achievementName: string,
      criteria: string,
      year: number
    ) => {
      /**
       * Write logic if the value is available then it should retuen the value
       */
      const value = selectedValues.find((value: any) => {
        if (
          value.examGroup === examGroup &&
          value.achievementName === achievementName &&
          value.criteria === criteria &&
          value.year === year
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

  const unselectAcievement = (
    isChecked: boolean,
    examGroup: string,
    achievementName: string,
    criteria: string,
    val: string
  ) => {
    console.log('isChecked', isChecked)
    if (isChecked) {
      return false
    }

    onDeselectValue({
      year: year?.year,
      examGroup,
      achievementName,
      remarks: val,
      criteria,
    })
  }

  if (!achievementsData) {
    //TODO fix this
    return null
  }

  console.log('Achivement Data :: ', achievementsData, selectedValues)

  return (
    <>
      <div
        className="mt-6 bg-[#F8F8F8] flex justify-between items-center p-4 max-[640px]:mt-3"
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
      >
        <div>
          <p className="text-[#757575]">Fill your achievements here for</p>
          <p className="text-[#1B2124] text-base">
            Current Year ({year?.year})
          </p>
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
            //debugger
            console.log('test debug')
            const group = achievement
            const groupData = achievementsData?.[group][0] || {}
            const competitions = groupData['Competition Title'] || []

            return (
              <div
                key={`${achievement}-${index}`}
                className="grid grid-cols-12 border-b-2 py-4"
              >
                <div className="col-span-1 py-2">{group}</div>
                <div className="col-span-11">
                  {competitions.map(
                    (competitionDetails: any, index: number) => {
                      let competitionNameArr = Object.keys(competitionDetails)
                      //assuming array to be of only length 1, will otimize is later

                      let competitionName = competitionNameArr[0]
                      let criteria =
                        competitionDetails[competitionName]?.Criteria

                      //assuming array to be of only length 1, will otimize is later
                      let criteraName = Object.keys(criteria)[0]

                      let dropdownArray =
                        criteria[criteraName]['Select Criteria (dropdown)']

                      const selectedVal = getSelectedValue(
                        group,
                        competitionName,
                        criteraName,
                        year?.year
                      )

                      console.log('selectedVal', selectedVal)
                      //console.log(Object.keys(competitions[index]))
                      return (
                        <div
                          key={index}
                          className="grid grid-cols-12 py-2 border-b last:border-b-0 gap-6"
                        >
                          <div className="col-span-4">{competitionName}</div>
                          <div className="col-span-3">{criteraName}</div>
                          <div className="col-span-4 flex">
                            <Select
                              options={dropdownArray.map((el: string) => ({
                                id: el,
                                name: el,
                              }))}
                              placeholder="Select"
                              className="h-[50px] mr-2"
                              onChange={(val: string) =>
                                onSelectCriteria(
                                  group,
                                  val,
                                  competitionName,
                                  criteraName
                                )
                              }
                              value={selectedVal || ''}
                            />
                            <input
                              type="checkbox"
                              className="appearance-none mt-[17px] checked:bg-[#5A4BDA] rounded-full"
                              onChange={(e) => {
                                unselectAcievement(
                                  e.target.checked,
                                  group,
                                  competitionName,
                                  criteraName,
                                  selectedVal
                                )
                              }}
                              checked={!!selectedVal}
                            />
                          </div>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default SelectedExamAchievements
