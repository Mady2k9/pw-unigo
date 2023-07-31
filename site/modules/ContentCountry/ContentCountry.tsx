import React from 'react'
import Container from '@components/ui/Container/Container'
import { TextInput } from '@components/ui'

function ContentCountry() {
  return (
    <>
      <div className="bg-[#F8F8F8] w-full">
        <Container className="sm:flex w-full max-w-7xl px-4">
          <div className="lg:w-8/12 sm:w-7/12 w-full flex-col sm:pr-2 py-4">
            {/* div start - Why Study in Armenia?  */}
            <div className="p-[24px] bg-white rounded-md drop-shadow-md">
              <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
                Why Study in Armenia?
              </h1>
              <p className="md:text-[16px] text-[14px] mb-[20px] leading-[24px]">
                Studying in Armenia not only provides access to quality
                education but also offers a unique blend of cultural
                experiences, affordability, and a safe and supportive
                environment, making it an attractive choice for students looking
                to broaden their horizons and embark on a memorable academic
                journey.
              </p>
              <div className="w-[260px] h-[280px] md:leading-[28px] leading-[22px] md:text-[18px] text-[14px] ">
                <p className="mb-[12px] flex gap-2">
                  <img src="/red-check.svg" alt="check" />
                  Rich history & culture
                </p>
                <p className="mb-[12px] flex gap-2">
                  <img src="/red-check.svg" alt="check" />
                  Scenic Landscapes
                </p>
                <p className="mb-[12px] flex gap-2">
                  <img src="/red-check.svg" alt="check" />
                  Warm Hospitality
                </p>
                <p className="mb-[12px] flex gap-2">
                  <img src="/red-check.svg" alt="check" />
                  Affordable Living
                </p>
                <p className="mb-[12px] flex gap-2">
                  <img src="/red-check.svg" alt="check" />
                  Delicious Cuisine
                </p>
                <p className="mb-[12px] flex gap-2">
                  <img src="/red-check.svg" alt="check" />
                  Strong Sense of community
                </p>
                <p className="mb-[12px] flex gap-2">
                  <img src="/red-check.svg" alt="check" />
                  Accessible Education
                </p>
              </div>
            </div>
            {/* div end - Why Study in Armenia?  */}
            {/*  */}
            {/* div start - Colleges in Armenia  */}
            <div className="p-4 mt-4 bg-white rounded-md drop-shadow-md">
              <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
                Colleges in Armenia
              </h1>
              <div className="p-4 md:flex border sm:border-[#EFEFEF] border-[#D9DCE1]  md:mb-[14px] mb-[12px] rounded-md">
                <div className="mr-4">
                  <img
                    src="/image.png"
                    className="sm:w-[154px] w-[89px] mb-3"
                    alt="office"
                  />
                </div>
                <div className="">
                  <p className="rounded-lg bg-[#F1EFFF] text-[#5A4BDA] text-[12px] font-[600] md:w-[59px] w-[147px] mb-[6px] text-center leading-[18px]">
                    Private
                  </p>
                  <p className="text-[18px] font-[600] mb-[6px] leading-[28px]">
                    American University of Armenia
                  </p>
                  <div className="flex mb-2">
                    <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                      <img
                        src="/map-pin.svg"
                        className="sm:w-[24px] w-[18px]"
                        alt="address"
                      />
                    </div>
                    40 Baghramyan Ave, Yerevan 0019, Armenia
                  </div>
                  <div className="flex mb-2">
                    <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                      <img
                        src="/phone.svg"
                        className="sm:w-[24px] w-[18px]"
                        alt="phone"
                      />
                    </div>
                    +374 60 69 40 40
                  </div>
                  <div className="flex mb-2">
                    <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                      <img
                        src="/envelope.svg"
                        className="sm:w-[24px] w-[18px]"
                        alt="envelope"
                      />
                    </div>
                    info@aua.am
                  </div>
                </div>
              </div>
              <div className="p-4 md:flex border sm:border-[#EFEFEF] border-[#D9DCE1]  md:mb-[14px] mb-[12px] rounded-md">
                <div className="mr-4">
                  <img
                    src="/image.png"
                    className="sm:w-[154px] w-[89px] mb-3"
                    alt="office"
                  />
                </div>
                <div className="">
                  <p className="rounded-lg bg-[#F1EFFF] text-[#5A4BDA] text-[12px] font-[600] md:w-[59px] w-[147px] mb-[6px] text-center leading-[18px]">
                    Private
                  </p>
                  <p className="text-[18px] font-[600] mb-[6px] leading-[28px]">
                    American University of Armenia
                  </p>
                  <div className="flex mb-2">
                    <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                      <img
                        src="/map-pin.svg"
                        className="sm:w-[24px] w-[18px]"
                        alt="address"
                      />
                    </div>
                    40 Baghramyan Ave, Yerevan 0019, Armenia
                  </div>
                  <div className="flex mb-2">
                    <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                      <img
                        src="/phone.svg"
                        className="sm:w-[24px] w-[18px]"
                        alt="phone"
                      />
                    </div>
                    +374 60 69 40 40
                  </div>
                  <div className="flex mb-2">
                    <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                      <img
                        src="/envelope.svg"
                        className="sm:w-[24px] w-[18px]"
                        alt="envelope"
                      />
                    </div>
                    info@aua.am
                  </div>
                </div>
              </div>
              <div className="p-4 md:flex border sm:border-[#EFEFEF] border-[#D9DCE1]  md:mb-[14px] mb-[12px] rounded-md">
                <div className="mr-4">
                  <img
                    src="/image.png"
                    className="sm:w-[154px] w-[89px] mb-3"
                    alt="office"
                  />
                </div>
                <div className="">
                  <p className="rounded-lg bg-[#F1EFFF] text-[#5A4BDA] text-[12px] font-[600] md:w-[59px] w-[147px] mb-[6px] text-center leading-[18px]">
                    Private
                  </p>
                  <p className="text-[18px] font-[600] mb-[6px] leading-[28px]">
                    American University of Armenia
                  </p>
                  <div className="flex mb-2">
                    <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                      <img
                        src="/map-pin.svg"
                        className="sm:w-[24px] w-[18px]"
                        alt="address"
                      />
                    </div>
                    40 Baghramyan Ave, Yerevan 0019, Armenia
                  </div>
                  <div className="flex mb-2">
                    <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                      <img
                        src="/phone.svg"
                        className="sm:w-[24px] w-[18px]"
                        alt="phone"
                      />
                    </div>
                    +374 60 69 40 40
                  </div>
                  <div className="flex mb-2">
                    <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                      <img
                        src="/envelope.svg"
                        className="sm:w-[24px] w-[18px]"
                        alt="envelope"
                      />
                    </div>
                    info@aua.am
                  </div>
                </div>
              </div>
              <div className="p-4 md:flex border sm:border-[#EFEFEF] border-[#D9DCE1]  md:mb-[14px] mb-[12px] rounded-md">
                <div className="mr-4">
                  <img
                    src="/image.png"
                    className="sm:w-[154px] w-[89px] mb-3"
                    alt="office"
                  />
                </div>
                <div className="">
                  <p className="rounded-lg bg-[#F1EFFF] text-[#5A4BDA] text-[12px] font-[600] md:w-[59px] w-[147px] mb-[6px] text-center leading-[18px]">
                    Private
                  </p>
                  <p className="text-[18px] font-[600] mb-[6px] leading-[28px]">
                    American University of Armenia
                  </p>
                  <div className="flex mb-2">
                    <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                      <img
                        src="/map-pin.svg"
                        className="sm:w-[24px] w-[18px]"
                        alt="address"
                      />
                    </div>
                    40 Baghramyan Ave, Yerevan 0019, Armenia
                  </div>
                  <div className="flex mb-2">
                    <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                      <img
                        src="/phone.svg"
                        className="sm:w-[24px] w-[18px]"
                        alt="phone"
                      />
                    </div>
                    +374 60 69 40 40
                  </div>
                  <div className="flex mb-2">
                    <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                      <img
                        src="/envelope.svg"
                        className="sm:w-[24px] w-[18px]"
                        alt="envelope"
                      />
                    </div>
                    info@aua.am
                  </div>
                </div>
              </div>
            </div>
            {/* div end - Colleges in Armenia  */}
          </div>
          <div className="lg:w-4/12 sm:w-5/12 w-full sm:pl-2 py-4">
            <div className="sticky top-3 p-[24px] bg-white rounded-md drop-shadow-md">
              <h1 className="md:text-[24px]  text-[20px] font-bold mb-[10px] md:leading-[32px] leading-[30px]">
                Talk to our counsellor
              </h1>
              <div className="bg-transparent sm:bg-white  sm:pt-[18px] rounded-[6px]">
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
                <button className="w-full h-[48px] bg-[#1B2124] rounded-[6px] text-white text-[16px]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ContentCountry
