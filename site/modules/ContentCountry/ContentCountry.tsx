import React from 'react'
import Container from '@components/ui/Container/Container'

function ContentCountry() {
  return (
    <>
      <div className="bg-[#F8F8F8] w-full">
        <Container className="sm:flex w-full max-w-6xl px-4">
          <div className="sm:w-8/12 w-full flex-col sm:pr-2 py-4">
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
            <div className="p-[24px] mt-4 bg-white rounded-md drop-shadow-md">
              <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
                Why Study in Armenia?
              </h1>
              <div className="p-[16px] md:flex border border-[#EFEFEF] md:mb-[14px] mb-[12px]">
                <div>
                  <img src="/CountryImageBanner.png" alt="office" />
                </div>
                <div className="w-[490px] h-[154px] ml-[16px]">
                  <p className="rounded-lg bg-[#F1EFFF] text-[#5A4BDA] mt-[10px] text-[12px] font-[600] md:w-[59px] w-[147px] mb-[6px] text-center leading-[18px]">
                    Private
                  </p>
                  <p className="text-[18px] font-[600] mb-[6px] leading-[28px]">
                    American University of Armenia
                  </p>
                  <div className=" leading-[22px]">
                    <p className="mb-[10px]">
                      {' '}
                      "icon" 40 Baghramyan Ave, Yerevan 0019, Armenia
                    </p>
                    <p className="mb-[10px]"> "icon" +374 60 69 40 40</p>
                    <p>"icon" info@aua.am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-4/12 w-full sm:pl-2 py-4">
            <div className="sticky top-3 p-[24px] bg-white rounded-md drop-shadow-md">
              <h1 className="md:text-[24px]  text-[20px] font-bold mb-[10px] md:leading-[32px] leading-[30px]">
                Talk to our counsellor <div className="h-[210px]"></div>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ContentCountry
