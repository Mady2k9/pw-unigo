import React, { useState } from 'react'
import CountryBanner from '../modules/CountryBanner'
import MiddleNav from '../modules/MiddleNav'
import ContentCountry from '../modules/ContentCountry'
import Faq from 'modules/Faq'
import Header from '@modules/Header'
import Footer from '@modules/Footer'
import { useRouter } from 'next/router'

import CountryDetail from '@config/country.json'

const Country = () => {
  //const [jsonData, setJsonData] = useState(CountryDetail)

  /*  const { asPath, pathname } = useRouter()

  const countryPath = asPath
  const countryName = countryPath.replace(/\//g, '') */
  //console.log(countryName)

  const countryBanner = [
    {
      image: CountryDetail.russia.imageHeader,
      title: CountryDetail.russia.titleHeader,
    },
  ]
  const countryNavData = CountryDetail.russia.tabs
  const countryContents = [
    {
      whystudy: CountryDetail.russia.whyStudy,
      colleges: CountryDetail.russia.colleges,
      cost: CountryDetail.russia.cost,
      requirement: CountryDetail.russia.requirement,
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

export default Country
