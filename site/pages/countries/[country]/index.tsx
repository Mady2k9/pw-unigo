import React, { useState } from 'react'
import CountryBanner from '@modules/CountryBanner'
import MiddleNav from '@modules/MiddleNav'
import ContentCountry from '@modules/ContentCountry'
import Faq from '@modules/Faq'
import Header from '@modules/Header'
import Footer from '@modules/Footer'
import { useRouter } from 'next/router'
import CountryDetail from '@config/country.json'
import TalkCounsellorButton from '@modules/TalkCounsellerButton'

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

  const items = CountryDetail[countryName]?.faqs || []

  return (
    <>
      <Header handleState={undefined} />
      <CountryBanner bannerItems={countryBanner} />

      <MiddleNav items={countryNavData} />
      <ContentCountry contentItems={countryContents} />
      <Faq
        items={items}
        subheading="Check out the most commonly asked questions and their answers."
      />
      <Footer />
      <div className="sm:hidden">
        <TalkCounsellorButton />
      </div>
    </>
  )
}

export default Country
