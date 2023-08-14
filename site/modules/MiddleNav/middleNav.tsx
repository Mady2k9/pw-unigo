import React from 'react'
import { Tabs } from '@components/ui'
import Container from '@components/ui/Container/Container'

export interface MiddleNavProps {
  items: { name: string; key: string }[]
  countryContents: {
    whystudy: any
    colleges: any
    cost: any
    requirement: any
  }[];
  handleClick: (index: number) => void;
  activeTab: number;
}

const middleNav: React.FC<MiddleNavProps> = (props) => {
  const { items, activeTab, handleClick } = props

  return (
    <>
      <div className="w-full border-b-2 border-b-grey-600 sticky sm:top-[79px] top-[59px] z-20 bg-white">
        <Container className="w-full  max-w-6xl px-3 xl:px-0">
          <Tabs
            currentIndex={activeTab}
            items={items}
            onChange={handleClick}
          />
        </Container>
      </div>
    </>
  )
}
export default middleNav
