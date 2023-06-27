import React from 'react'
import { Select } from '@components/ui'

function nominateRightData() {
  return (
    <>
      <div className=" mt-3 mb-2 border-spacing-6 text-[#757575] ">
        <div>
          <div className="text-[#1B2124] flex font-bold mt-[31px] mb-[12px] ">
            <div className="w-2/12 text-center">Group</div>
            <div className="w-10/12 flex">
              <div className="w-6/12">Competition Title</div>
              <div className="w-2/12">Criteria</div>
              <div className="w-4/12">Select Criteria</div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 flex items-center">
            <div className="w-2/12 text-center">A</div>
            <div className="w-10/12">
              <div className=" flex">
                <div className="w-6/12 py-2 pe-2">
                  Bal Shakti Purasakar (National Child Award in Academics/
                  Research/ Innovation)
                </div>
                <div className="w-2/12 my-auto">Awardees</div>
                <div className="w-4/12 my-auto flex gap-2">
                  <Select
                    options={[
                      {
                        id: 1,
                        name: 'Awardees',
                      },
                      {
                        id: 2,
                        name: 'Awardees',
                      },
                      {
                        id: 3,
                        name: 'Scholarship',
                      },
                    ]}
                    placeholder="Select"
                    className="h-[50px] "
                    shadow
                    withTarget
                  />

                  <input
                    type="checkbox"
                    className="appearance-none mt-[17px] checked:bg-[#5A4BDA] rounded-full"
                  />
                </div>
              </div>
              <hr className="w-full" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-2/12 text-center"></div>
            <div className="w-10/12">
              <div className=" flex">
                <div className="w-6/12 py-2 pe-2">
                  CTY Summer Program John Hopkins University, USA
                </div>
                <div className="w-2/12 my-auto">Awardees</div>
                <div className="w-4/12 my-auto flex gap-2">
                  <Select
                    options={[
                      {
                        id: 1,
                        name: 'Awardees',
                      },
                      {
                        id: 2,
                        name: 'Awardees',
                      },
                      {
                        id: 3,
                        name: 'Scholarship',
                      },
                    ]}
                    placeholder="Select"
                    className="h-[50px] "
                    shadow
                    withTarget
                  />

                  <input
                    type="checkbox"
                    className="appearance-none mt-[17px] checked:bg-[#5A4BDA] rounded-full"
                  />
                </div>
              </div>
              <hr className="w-full" />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-2/12 text-center"></div>
            <div className="w-10/12">
              <div className=" flex">
                <div className="w-6/12 py-2 pe-2">
                  Bal Shakti Purasakar (National Child Award in Academics/
                  Research/ Innovation)
                </div>
                <div className="w-2/12 my-auto">Awardees</div>
                <div className="w-4/12 my-auto flex gap-2">
                  <Select
                    options={[
                      {
                        id: 1,
                        name: 'Awardees',
                      },
                      {
                        id: 2,
                        name: 'Awardees',
                      },
                      {
                        id: 3,
                        name: 'Scholarship',
                      },
                    ]}
                    placeholder="Select"
                    className="h-[50px] "
                    shadow
                    withTarget
                  />

                  <input
                    type="checkbox"
                    className="appearance-none mt-[17px] checked:bg-[#5A4BDA] rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 flex items-center">
            <div className="w-2/12 text-center">B</div>
            <div className="w-10/12">
              <div className=" flex">
                <div className="w-6/12 py-2 pe-2">
                  Bal Shakti Purasakar (National Child Award in Academics/
                  Research/ Innovation)
                </div>
                <div className="w-2/12 my-auto">Awardees</div>
                <div className="w-4/12 my-auto flex gap-2 ">
                  <Select
                    options={[
                      {
                        id: 1,
                        name: 'Awardees',
                      },
                      {
                        id: 2,
                        name: 'Awardees',
                      },
                      {
                        id: 3,
                        name: 'Scholarship',
                      },
                    ]}
                    placeholder="Select"
                    className="h-[50px] "
                    shadow
                    withTarget
                  />

                  <input
                    type="checkbox"
                    className="appearance-none mt-[17px] checked:bg-[#5A4BDA] rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default nominateRightData
