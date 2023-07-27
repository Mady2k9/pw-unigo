import React, { useState } from 'react'
import { Typography } from '@components/ui'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Dialog } from '@headlessui/react'

function ImportantNoticeData({ closeModal }: { closeModal: any }) {
  const [closeNotice, setCloseNotice] = useState(true)
  const closeButton = () => {
    //setCloseNotice(!closeNotice)
    closeModal()
  }

  return (
    <>
      {closeNotice === true ? (
        <>
          <div className="opacity-25 fixed inset-0 z-40 bg-[#414347] "></div>
          <div className="  justify-end items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50">
            <div className="relative items-center flex w-auto my-6  max-w-full h-full ">
              {/*content*/}
              <div className="relative border-0 shadow-lg  flex flex-col lg:w-[480px] lg:h-full md:w-[480px] md:h-full bg-white  ">
                {/*header*/}
                <div className="h-12 p-6 flex justify-between items-center border-b-[1px] border-[#D9DCE1]">
                  <Typography variant="heading4" weight={700}>
                    Important Notices
                  </Typography>
                  <button onClick={closeButton}>
                    <XMarkIcon height={20} width={20} />
                  </button>
                </div>
                {/*body*/}
                <div className="relative top-0 pl-12 pr-6 py-8 flex-auto">
                  <Typography variant="regular" weight={500}>
                    <ol className="list-decimal">
                      <li className="py-3">
                        Announcement for Registration- 1st August 2023
                      </li>
                      <li className="py-3">
                        LAST date for Nomination- 31st December 2023
                      </li>
                      <li className="py-3">
                        Announcement of stage 1 qualified students- 14th january
                        2024
                      </li>
                      <li className="py-3">
                        Interaction round for Qualified students- In month of
                        January 2024 to February 2024
                      </li>
                      <li className="py-3">
                        Final Result declaration - within february 2024
                      </li>
                      <li className="py-3">
                        PW marvels felicitation - within february 2024
                      </li>
                    </ol>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
      {/*       {closeNotice === true ? (
        
      ) : (
        ' '
      )} */}
    </>
  )
}

export default ImportantNoticeData
