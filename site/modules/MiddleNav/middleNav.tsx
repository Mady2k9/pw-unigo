import React, { useState } from 'react'
import Image from 'next/image'
import CountryBanners from '../../public/CountryImageBanner.png'
import { Tabs } from '@components/ui'
export interface MiddleNavProps {}
import Container from '@components/ui/Container/Container'

const items = [
  {
    name: 'Why study in Armenia',
    key: 'TabKey1',
  },
  {
    name: 'Colleges',
    key: 'TabKey2',
  },
  {
    name: 'Cost',
    key: 'TabKey3',
  },
  {
    name: 'Requirements',
    key: 'TabKey4',
  },
  {
    name: 'FAQs',
    key: 'TabKey5',
  },
]
const middleNav: React.FC<MiddleNavProps> = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="w-full border border-b-grey-600">
        <Container className="w-full max-w-6xl px-4">
          <Tabs
            currentIndex={activeTab}
            items={items}
            onChange={(index) => {
              setActiveTab(index)
            }}
          />
        </Container>
      </div>
    </>
  )
}
export default middleNav
