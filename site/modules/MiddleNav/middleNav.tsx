import React, { useState } from 'react'
import Image from 'next/image'
import CountryBanners from '../../public/CountryImageBanner.png'
import { Tabs } from '@components/ui'
//export interface MiddleNavProps {}
import Container from '@components/ui/Container/Container'
//import CountryDetail from '@config/country.json'

export interface MiddleNavProps {
  items: { name: string; key: string }[]
}

const middleNav: React.FC<MiddleNavProps> = (props) => {
  const { items } = props
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      {
        <div className="w-full border-b-2 border-b-grey-600 sticky top-[79px] z-10 bg-white">
          <Container className="w-full max-w-7xl px-4">
            <Tabs
              currentIndex={activeTab}
              items={items}
              onChange={(index) => {
                setActiveTab(index)
              }}
            />
          </Container>
        </div>
      }
    </>
  )
}
export default middleNav
