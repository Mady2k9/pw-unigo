import React, { useEffect, useRef, memo } from 'react'
import Container from '@components/ui/Container/Container'
import { TextInput } from '@components/ui'
import TalkToCounsller from '@modules/TalkToCounsller/talkToCounsller'
import Faq from '@modules/Faq'
import { useIntersectionObserver } from '@lib/hooks/useIntersectionObserver'
export interface CountryContentProps {
  contentItems: {
    whystudy: any
    colleges: any
    cost: any
    requirement: any
  }[];
  highlightTab: (tabIndex: number) => void;
  activeTab: number;
  faqs: { title: string; description: string }[]
}

const CountryContent: React.FC<CountryContentProps> = (props) => {
  const { contentItems, highlightTab, activeTab, faqs } = props

  const sections = ['whyStudy', 'college', 'cost', 'requirement', 'faq'];

  // section refs
  const sectionRefs = sections.map(() => useRef(null));;

  const observerOptions = {
    rootMargin: '-100px'
  }

  const observerOptionsForSmallerComponents = {
    threshold: 1
  }

  // section visibility
  const observers = sectionRefs.map((ref, index) => useIntersectionObserver(ref, index > 1 ? observerOptionsForSmallerComponents : observerOptions));

  let lastTimeout: ReturnType<typeof setTimeout>;

  useEffect(() => {
    let visibleSection = observers.findLastIndex(visibility => visibility?.isIntersecting === true)
    if(visibleSection > -1 && activeTab !== visibleSection) {
      if (lastTimeout) { 
        clearTimeout(lastTimeout)
      } else {
        // to stop observer from interfearing with scroll on tab click
        lastTimeout = setTimeout(function() {
          highlightTab(visibleSection);
        }, 500);
      }
    }

    return () => {
      clearTimeout(lastTimeout);
    }
  }, [observers]);

  return (
    <>
      <div className="bg-[#F8F8F8] w-full">
        <Container className="sm:flex w-full max-w-6xl px-3 xl:px-0 ">
          {contentItems?.map((item) => (
            <div key={item.whystudy.title} className="lg:w-8/12 sm:w-7/12 w-full flex-col sm:pr-2 py-4">
              <div ref={sectionRefs[0]} className="p-[24px] bg-white relative rounded-md drop-shadow-md">
                <div
                  id="whyStudy"
                  className="absolute sm:top-[-130px] top-[-117px]"
                ></div>
                <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
                  {item?.whystudy?.title}
                </h1>
                <p className="md:text-[16px] text-[14px] mb-[20px] leading-[24px]">
                  {item?.whystudy?.description}
                </p>
                <div className="w-[260px] h-[280px] md:leading-[28px] leading-[22px] md:text-[18px] text-[14px] ">
                  {item?.whystudy?.bulletPoint?.map((point: any) => (
                    <p className="mb-[12px] flex gap-2">
                      <img src={point?.bulletImage} alt="check" />
                      {point?.content}
                    </p>
                  ))}
                </div>
              </div>

              <div ref={sectionRefs[1]} className="p-4 mt-4 bg-white relative rounded-md drop-shadow-md">
                <div
                  id="colleges"
                  className="absolute sm:top-[-130px] top-[-110px]"
                ></div>
                <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
                  {item?.colleges?.title}
                </h1>

                {item?.colleges?.collegeDetails?.map((detail: any) => (
                  <div className="p-4 md:flex border sm:border-[#EFEFEF] border-[#D9DCE1]  md:mb-[14px] mb-[12px] rounded-md">
                    <div className="mr-4 sm:w-[150px] mb-3 w-[89px]">
                      <img
                        src={detail?.imageUrl}
                        className="sm:w-[150px] w-[89px]"
                        alt="office"
                      />
                    </div>
                    <div className="w-full">
                      {detail.tag.map((tagType: any) => (
                        <div className="rounded-lg bg-[#F1EFFF] text-[#5A4BDA] text-[12px] font-[600] px-3 w-fit mb-[6px] text-center leading-[18px]">
                          {tagType?.type}
                        </div>
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
                      {detail?.phone ? (
                        <div className="flex mb-2">
                          <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                            <img
                              src="/phone.svg"
                              className="sm:w-[24px] w-[18px]"
                              alt="phone"
                            />
                          </div>
                          <a href={'tel:' + detail.phone}>{detail.phone}</a>
                        </div>
                      ) : (
                        ''
                      )}
                      {detail?.email ? (
                        <div className="flex mb-2">
                          <div className="items-baseline sm:w-[24px] w-[18px] mr-2">
                            <img
                              src="/envelope.svg"
                              className="sm:w-[24px] w-[18px]"
                              alt="envelope"
                            />
                          </div>
                          <a href={'mailto:' + detail.email}> {detail.email}</a>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div ref={sectionRefs[2]} className="mt-4 p-[24px] bg-white rounded-md relative drop-shadow-md">
                <div
                  id="cost"
                  className="absolute sm:top-[-130px] top-[-110px]"
                ></div>
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
              </div>

              <div ref={sectionRefs[3]} className="mt-4 p-[24px] bg-white relative rounded-md drop-shadow-md">
                <div
                  id="requirement"
                  className="absolute sm:top-[-130px] top-[-110px]"
                ></div>
                <h1 className="md:text-[32px] text-[20px] font-bold mb-[10px] md:leading-[48px] leading-[30px]">
                  {item?.requirement?.title}
                </h1>

                <div
                  dangerouslySetInnerHTML={{
                    __html: item?.requirement?.description,
                  }}
                ></div>
              </div>
            </div>
          ))}

          <div className="lg:w-4/12 sm:w-5/12 w-full sm:pl-2 py-4">
            <div className="sticky top-[135px] p-[24px] bg-white rounded-md drop-shadow-md">
              <div
                id="TalkToCounsellor"
                className="absolute top-[-180px]"
              ></div>
              <h1 className="md:text-[24px]  text-[20px] font-bold mb-[10px] md:leading-[32px] leading-[30px]">
                Talk to our counsellor
              </h1>
              <div className="bg-transparent sm:bg-white  sm:pt-[18px] rounded-[6px]">
                <TalkToCounsller />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div ref={sectionRefs[4]}>
        <Faq
          items={faqs}
          subheading="Check out the most commonly asked questions and their answers."
        />
      </div>
    </>
  )
}

export default memo(CountryContent);
