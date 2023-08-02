import React, { useState } from 'react'
import CountryBanner from '../../../modules/CountryBanner'
import MiddleNav from '../../../modules/MiddleNav'
import ContentCountry from '../../../modules/ContentCountry'
import Faq from 'modules/Faq'
import Header from '@modules/Header'
import Footer from '@modules/Footer'
import { useRouter } from 'next/router'

import CountryDetail from '@config/country.json'

const Country = (params: any) => {
  //console.log('params', params.router.query.country)
  //const [jsonData, setJsonData] = useState(CountryDetail)

  //const { asPath, pathname } = useRouter()

  //const path = useRouter()

  //const countryPath = path
  //const countryName = countryPath.replace(/\//g, '')
  //console.log('path:::', countryPath)

  const countryName = params.router.query.country

  //console.log('country name', countryName)

  const countryBanner = [
    {
      image: CountryDetail.russia.imageHeader,
      title: CountryDetail.russia.titleHeader,
    },
  ]

  /* const countryNav = CountryDetail.russia.tabs
  const newData = { ...countryNav, russia: countryName }
  console.log('nwData', newData)
  console.log('countrydata', countryNav) */
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
