import pic from '../../assets/images/image-4.png'
import Image from 'next/image'
import { TextInput } from '@components/ui'
import { Dialog } from '@headlessui/react'
import { Cross } from '@components/icons'
import { useState } from 'react'

const TalkToCounsller = () => {
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <div className="my-auto w-screen px-3 md:px-6 max-w-7xl m-auto">
        <div className="rounded-[8px] sm:rounded-[16px] bg-[#1B2124] sm:relative w-fit sm:w-full m-auto p-[16px] lg:p-0 ">
          {/* first div */}
          <div className=" h-full hidden lg:block">
            <Image src={pic} alt="bg" className="rounded-[8px]" />
          </div>
          <div className=" lg:absolute top-0 h-fit w-full lg:bg-transparent flex ">
            <div className="md:mx-[48px] md:my-[36px] md:w-full justify-between  sm:flex">
              <div className="my-auto text-white font-[Gilroy] lg:mr-0 sm:p-[16px] md:p-0">
                <p className="font-bold text-[20px] lg:leadig-[48px] lg:text-[32px] ">
                  What are you waiting for?
                </p>
                <p className="font-bold text-[20px] lg:leadig-[48px] lg:text-[32px] ">
                  Make your dream come true today!
                </p>
                <p className="text-[14px] lg:leading-[28px] lg:text-[18px] ">
                  Talk to our counsellors today and get all your doubts
                  resolved.
                </p>
              </div>
              <div className="bg-transparent sm:bg-white py-[12px] sm:p-[24px] sm:pt-[18px] w-full sm:w-[360px] rounded-[6px]">
                <div className="mb-[16px]">
                  <TextInput
                    action={{
                      disabled: true,
                      loading: false,
                      onAction: function noRefCheck() { },
                      text: '',
                    }}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    label="Student Name*"
                    onChange={function noRefCheck() { }}
                    placeholder="Student Name*"
                    preElement={[]}
                    setRef={function noRefCheck() { }}
                    spellCheck="false"
                    className="pr-2"
                  />
                </div>
                <div className="mb-[16px]">
                  <TextInput
                    action={{
                      disabled: true,
                      loading: false,
                      onAction: function noRefCheck() { },
                      text: '',
                    }}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    label="Email*"
                    onChange={function noRefCheck() { }}
                    placeholder="Email*"
                    preElement={[]}
                    setRef={function noRefCheck() { }}
                    spellCheck="false"
                  />
                </div>
                <div className=" mb-[16px]">
                  <TextInput
                    action={{
                      disabled: true,
                      loading: false,
                      onAction: function noRefCheck() { },
                      text: '',
                    }}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    label="Mobile Number*"
                    onChange={function noRefCheck() { }}
                    placeholder="Mobile Number*"
                    preElement={[]}
                    setRef={function noRefCheck() { }}
                    spellCheck="false"
                  />
                </div>
                <div className="mb-[16px]">
                  <TextInput
                    action={{
                      disabled: true,
                      loading: false,
                      onAction: function noRefCheck() { },
                      text: '',
                    }}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    onChange={function noRefCheck() { }}
                    placeholder="OTP"
                    preElement={[]}
                    setRef={function noRefCheck() { }}
                    spellCheck="false"
                  />
                </div>

                <button onClick={handleSubmit} className="w-full h-[48px] bg-[#DA1F3D] sm:bg-[#1B2124] rounded-[6px] text-white text-[16px]">
                  Submit
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>



      <Dialog
        className={'relative z-[999999]'}
        open={showModal}
        onClose={handleSubmit}
      >

        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />

        <div className="fixed inset-0 flex items-end justify-center">
          <Dialog.Panel className="m-auto  max-w-[480px] h-[272px] rounded-lg bg-white ring-1 transition-all px-5 pb-5 relative">
            <div
              className="cursor-pointer  flex justify-center absolute w-full top-1 right-1"
              onClick={handleSubmit}
            >
              <Cross className="h-6 w-6 absolute right-0 mt-[15px] mr-[15px]" />

            </div>

            <div className="text-center m-2 flex flex-col gap-y-[16px] pt-[24px]">
              <img className='h-[104px] w-[104px] m-auto' src="green_click.gif" alt="check Image" />
              <p className="font-bold leading-[30px] text-[20px] ">
                Thank you!
              </p>
              <p className='text-[16px] leading-[24px]'>Your details have been recorded. Our team will contact you soon!</p>
            </div>

          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
export default TalkToCounsller
