import React from 'react'
import { Select } from '@components/ui'

function nominateContent() {
  return (
    <>
      <table className="table-auto mt-3 mb-2 border-spacing-6 text-[#757575]">
        <thead>
          <tr className="text-[#1B2124]">
            <th>Group</th>
            <th>Competition Title</th>
            <th>Criteria</th>
            <th>Select Criteria</th>
          </tr>
        </thead>

        <tbody>
          <tr className=" border-t-2">
            <td className="text-center font-bold">A</td>
            <td className="w-[40%] p-2">
              Bal Shakti Purasakar (National Child Award in Academics/ Research/
              Innovation)
            </td>
            <td className="text-center">Awardees</td>
            <td className="text-center w-[25%] p-[0.5rem]">
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
                placeholder="Select Value"
                shadow
                withTarget
              />
            </td>
            <td className="p-2">
              <input
                type="checkbox"
                className="appearance-none checked:bg-[#5A4BDA] rounded-full "
              />
            </td>
          </tr>

          <tr>
            <td className="text-center font-bold"> </td>
            <td className="p-2">
              CTY Summer Program John Hopkins University, USA
            </td>
            <td className="text-center">Scholarship</td>
            <td className="text-center p-[0.5rem]">
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
                placeholder="Select Value"
                shadow
                withTarget
              />
            </td>

            <td className="p-2">
              <input
                type="checkbox"
                className="appearance-none checked:bg-[#5A4BDA] rounded-full"
              />
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold"> </td>
            <td className="p-2">
              Bal Shakti Purasakar (National Child Award in Academics/ Research/
              Innovation)
            </td>
            <td className="text-center">Awardees</td>
            <td className="text-center p-[0.5rem]">
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
                placeholder="Select Value"
                shadow
                withTarget
              />
            </td>
            <td className="p-2">
              <input
                type="checkbox"
                className="appearance-none checked:bg-[#5A4BDA] rounded-full"
              />
            </td>
          </tr>

          <tr className="border-t-2 ">
            <td className="text-center font-bold mt-6 p-2">B</td>
            <td className="p-2">
              Bal Shakti Purasakar (National Child Award in Academics/ Research/
              Innovation)
            </td>
            <td className="text-center">Awardees</td>
            <td className="text-center p-[0.5rem]">
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
                placeholder="Select Value"
                shadow
                withTarget
              />
            </td>
            <td className="p-2">
              <input
                type="checkbox"
                className="appearance-none checked:bg-[#5A4BDA] rounded-full"
              />
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold"> </td>
            <td className="p-2">
              CTY Summer Program John Hopkins University, USA
            </td>
            <td className="text-center">Awardees</td>
            <td className="text-center p-[0.5rem]">
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
                placeholder="Select Value"
                shadow
                withTarget
              />
            </td>
            <td className="p-2">
              <input
                type="checkbox"
                className="appearance-none checked:bg-[#5A4BDA] rounded-full"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default nominateContent
