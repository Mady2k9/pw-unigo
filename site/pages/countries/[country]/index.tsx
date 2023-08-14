import React, { useState } from 'react'
import CountryBanner from '@modules/CountryBanner'
import MiddleNav from '@modules/MiddleNav'
import Header from '@modules/Header'
import Footer from '@modules/Footer'
import { useRouter } from 'next/router'
import CountryDetail from '@config/country.json'
import TalkCounsellorButton from '@modules/TalkCounsellerButton'
import ContentCountry from '@modules/ContentCountry/ContentCountryAndFaq'

const Country = (params: any) => {
  type CountryNameType = keyof typeof CountryDetail

  const countryName: CountryNameType = params.router.query.country || ''

  const countryBanner = [
    {
      image: CountryDetail[countryName]?.imageHeader || '',
      mobImage: CountryDetail[countryName]?.mobImageHeader || '',
      title: CountryDetail[countryName]?.titleHeader || '',
    },
  ]

  const countryNavData = CountryDetail[countryName]?.tabs || []

  const countryContents = [
    {
      whystudy: CountryDetail[countryName]?.whyStudy || [],
      colleges: CountryDetail[countryName]?.colleges || [],
      cost: CountryDetail[countryName]?.cost || [],
      requirement: CountryDetail[countryName]?.requirement || [],
    },
  ]

  const faqs = CountryDetail[countryName]?.faqs || []

  // tab managers
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    if (index === 0) {
      router.push('#whyStudy')
    } else if (index === 1) {
      router.push('#colleges')
    } else if (index === 2) {
      router.push('#cost')
    } else if (index === 3) {
      router.push('#requirement')
    } else if (index === 4) {
      router.push('#faq')
    }
    setActiveTab(index);
  }

  const highlightTab = (index: number) => {
    setActiveTab(index);
  }

  return (
    <>
      <Header handleState={undefined} />
      <CountryBanner bannerItems={countryBanner} />

      <MiddleNav activeTab={activeTab} handleClick={handleTabClick} countryContents={countryContents} items={countryNavData} />
      <ContentCountry faqs={faqs} activeTab={activeTab} highlightTab={highlightTab} contentItems={countryContents} />
      <Footer />
      <div className="sm:hidden">
        <TalkCounsellorButton />
      </div>
    </>
  )
}

export default Country
