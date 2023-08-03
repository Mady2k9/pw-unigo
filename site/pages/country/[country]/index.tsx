import React, { useState } from 'react'
import CountryBanner from '../../../modules/CountryBanner'
import MiddleNav from '../../../modules/MiddleNav'
import ContentCountry from '../../../modules/ContentCountry'
import Faq from 'modules/Faq'
import Header from '@modules/Header'
import Footer from '@modules/Footer'
import { useRouter } from 'next/router'

import CountryDetail from '@config/country.json'

const items = [
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
  {
    title: 'How do I Share my Referral Code?',
    description:
      'Just Click on Refer & Earn on Menu of App, Click on the share button',
  },
]

const Country = (params: any) => {
  //console.log('params', params.router.query.country)
  //const [jsonData, setJsonData] = useState(CountryDetail)

  //const { asPath, pathname } = useRouter()

  //const path = useRouter()

  //const countryPath = path
  //const countryName = countryPath.replace(/\//g, '')
  //console.log('path:::', countryPath)

  type CountryNameType = keyof typeof CountryDetail

  const countryName: CountryNameType = params.router.query.country || ''

  //const countryData = CountryDetail

  //console.log('country name', countryName)

  const countryBanner = [
    {
      image: CountryDetail[countryName]?.imageHeader || '',
      title: CountryDetail[countryName]?.titleHeader || '',
    },
  ]

  const countryNavData = CountryDetail[countryName]?.tabs || []

  //const countryNavData = CountryDetail.russia.tabs

  const countryContents = [
    {
      whystudy: CountryDetail[countryName]?.whyStudy || [],
      colleges: CountryDetail[countryName]?.colleges || [],
      cost: CountryDetail[countryName]?.cost || [],
      requirement: CountryDetail[countryName]?.requirement || [],
    },
  ]
  return (
    <>
      <Header handleState={undefined} />
      <CountryBanner bannerItems={countryBanner} />

      <MiddleNav items={countryNavData} />
      <ContentCountry contentItems={countryContents} />
      <Faq
        items={items}
        heading="You have questions. We have answers!"
        subheading="Check out the most commonly asked questions and their answers."
      />
      <Footer />
    </>
  )
}

export default Country
