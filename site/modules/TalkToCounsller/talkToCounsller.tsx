import pic from '../../assets/images/image-4.png'
import Image from 'next/image'
import { TextInput } from '@components/ui'
const TalkToCounsller = () => {
  return (
    <>
      <div className="my-auto w-screen px-[16px]  py-[24px] xl:px-[160px] bg-white h-fit sm:h-[524px] flex">
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
                      onAction: function noRefCheck() {},
                      text: '',
                    }}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    label="Student Name*"
                    onChange={function noRefCheck() {}}
                    placeholder="Student Name*"
                    preElement={[]}
                    setRef={function noRefCheck() {}}
                    spellCheck="false"
                    className="pr-2"
                  />
                </div>
                <div className="mb-[16px]">
                  <TextInput
                    action={{
                      disabled: true,
                      loading: false,
                      onAction: function noRefCheck() {},
                      text: '',
                    }}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    label="Email*"
                    onChange={function noRefCheck() {}}
                    placeholder="Email*"
                    preElement={[]}
                    setRef={function noRefCheck() {}}
                    spellCheck="false"
                  />
                </div>
                <div className=" mb-[16px]">
                  <TextInput
                    action={{
                      disabled: true,
                      loading: false,
                      onAction: function noRefCheck() {},
                      text: '',
                    }}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    label="Mobile Number*"
                    onChange={function noRefCheck() {}}
                    placeholder="Mobile Number*"
                    preElement={[]}
                    setRef={function noRefCheck() {}}
                    spellCheck="false"
                  />
                </div>
                <div className="mb-[16px]">
                  <TextInput
                    action={{
                      disabled: true,
                      loading: false,
                      onAction: function noRefCheck() {},
                      text: '',
                    }}
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="text-input-1"
                    onChange={function noRefCheck() {}}
                    placeholder="OTP"
                    preElement={[]}
                    setRef={function noRefCheck() {}}
                    spellCheck="false"
                  />
                </div>
                ​
                <button className="w-full h-[48px] bg-[#DA1F3D] sm:bg-[#1B2124] rounded-[6px] text-white text-[16px]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TalkToCounsller
