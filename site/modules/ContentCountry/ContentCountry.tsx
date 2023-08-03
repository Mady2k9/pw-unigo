import React, { useState } from 'react'
import Container from '@components/ui/Container/Container'
import { TextInput } from '@components/ui'

export interface CountryContentProps {
  contentItems: {
    whystudy: any
    colleges: any
    //cost: any
    requirement: any
  }[]
}

const countryContent: React.FC<CountryContentProps> = (props) => {
  const { contentItems } = props
  //console.log('contents :: ', contentItems)
  return (
    <>
      <div className="bg-[#F8F8F8] w-full">
        <Container className="sm:flex w-full max-w-7xl px-4">
          {contentItems?.map((item) => (
            <div className="lg:w-8/12 sm:w-7/12 w-full flex-col sm:pr-2 py-4">
              <div className="p-[24px] bg-white rounded-md drop-shadow-md">
                <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
                  {item?.whystudy?.title}
                </h1>
                <p className="md:text-[16px] text-[14px] mb-[20px] leading-[24px]">
                  {item?.whystudy?.description}
                </p>
                <div className="w-[260px] h-[280px] md:leading-[28px] leading-[22px] md:text-[18px] text-[14px] ">
                  {item?.whystudy?.bulletPoint?.map((point: any) => (
                    <p className="mb-[12px] flex gap-2">
                      <img src="/red-check.svg" alt="check" />
                      {point?.content}
                    </p>
                  ))}
                </div>
              </div>

              <div
                className="p-4 mt-4 bg-white rounded-md drop-shadow-md"
                id="colleges"
              >
                <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
                  {item?.colleges?.title}
                </h1>

                {item?.colleges?.collegeDetails?.map((detail: any) => (
                  <div className="p-4 md:flex border sm:border-[#EFEFEF] border-[#D9DCE1]  md:mb-[14px] mb-[12px] rounded-md">
                    <div className="mr-4">
                      <img
                        src="/image.png"
                        className="sm:w-[154px] w-[89px] mb-3"
                        alt="office"
                      />
                    </div>
                    <div className="">
                      {detail.tag.map((tagType: any) => (
                        <p className="rounded-lg bg-[#F1EFFF] text-[#5A4BDA] text-[12px] font-[600] md:w-[59px] w-[147px] mb-[6px] text-center leading-[18px]">
                          {tagType?.type}
                        </p>
                      ))}

                      <p className="text-[18px] font-[600] mb-[6px] leading-[28px]">
                        {detail?.name}
                      </p>
                      <div className="flex mb-2">
                        <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                          <img
                            src="/map-pin.svg"
                            className="sm:w-[24px] w-[18px]"
                            alt="address"
                          />
                        </div>
                        {detail?.name}
                      </div>
                      <div className="flex mb-2">
                        <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                          <img
                            src="/phone.svg"
                            className="sm:w-[24px] w-[18px]"
                            alt="phone"
                          />
                        </div>
                        {detail.phone}
                      </div>
                      <div className="flex mb-2">
                        <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                          <img
                            src="/envelope.svg"
                            className="sm:w-[24px] w-[18px]"
                            alt="envelope"
                          />
                        </div>
                        {detail?.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="mt-4 p-[24px] bg-white rounded-md drop-shadow-md">
                <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
                  {item?.cost?.title}
                </h1>

                <table className="table-auto w-full border border-1 rounded-md">
                  <thead>
                    <tr className="bg-[#F9FAFB] border-b border md:text-[12px] text-[10px] md:leading-[18px] leading-[16px]">
                      {item?.cost?.headers?.map((header: any) => (
                        <th className="p-3">{header.display}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="md:text-[14px] text-[12px] md:leading-[22px] leading-[18px]">
                    {item?.cost?.content?.map((costContent: any) => (
                      <tr className="text-center  border-b border">
                        <td className="p-3">{costContent.education}</td>
                        <td className="p-3">₹ {costContent.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}

              <div className="mt-4 p-[24px] bg-white rounded-md drop-shadow-md">
                <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
                  {item?.requirement?.title}
                </h1>
                {item?.requirement?.description}
              </div>
            </div>
          ))}

          <div className="lg:w-4/12 sm:w-5/12 w-full sm:pl-2 py-4">
            <div className="sticky top-[135px] p-[24px] bg-white rounded-md drop-shadow-md">
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

export default countryContent
