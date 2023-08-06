import React, { useState } from 'react'
import Image from 'next/image'
import CountryBanners from '../../public/CountryImageBanner.png'
import { Tabs } from '@components/ui'
//export interface MiddleNavProps {}
import Container from '@components/ui/Container/Container'
import { useRouter } from 'next/router'
//import CountryDetail from '@config/country.json'

export interface MiddleNavProps {
  items: { name: string; key: string }[]
}

const middleNav: React.FC<MiddleNavProps> = (props) => {
  const { items } = props
  const [activeTab, setActiveTab] = useState(0)
  const router = useRouter()

  const handleClick = (index: any) => {
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
  }

  return (
    <>
      <div className="w-full border-b-2 border-b-grey-600 sticky sm:top-[79px] top-[59px] z-20 bg-white">
        <Container className="w-full max-w-6xl px-3 xl:px-0">
          <Tabs
            currentIndex={activeTab}
            items={items}
            onChange={(index) => {
              setActiveTab(index)
              handleClick(index)
            }}
          />
        </Container>
      </div>
    </>
  )
}
export default middleNav
