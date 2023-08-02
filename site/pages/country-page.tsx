import React, { useState } from 'react'
import CountryBanner from '../modules/CountryBanner'
import MiddleNav from '../modules/MiddleNav'
import ContentCountry from '../modules/ContentCountry'
import Faq from 'modules/Faq'
import Header from '../modules/Header'
import Footer from '../modules/Footer'

import CountryDetail from '@config/country.json'

const CountryPage = () => {
  const [jsonData, setJsonData] = useState(CountryDetail)

  const countryBanner = [
    {
      image: jsonData.russia[0].imageHeader,
      title: jsonData.russia[0].titleHeader,
    },
  ]
  const countryNavData = jsonData.russia[0].tabs
  const countryContents = [
    {
      whystudy: jsonData.russia[0].whyStudy,
      colleges: jsonData.russia[0].colleges,
      cost: jsonData.russia[0].cost,
      requirement: jsonData.russia[0].requirement,
    },
  ]
  return (
    <>
      <Header handleState={undefined} />
      <CountryBanner bannerItems={countryBanner} />
      <MiddleNav items={countryNavData} />
      <ContentCountry contentItems={countryContents} />
      <Faq data={undefined} />
      <Footer />
    </>
  )
}

export default CountryPage
