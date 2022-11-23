import { LayoutNoContentPadding } from '@components/common/Layout'
import { TabHeader } from '@components/ui'
import { TabHeaderVariant } from '@components/ui/TabHeader/TabHeader'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'

const TAB_ITEMS = [
  { name: 'Lectures', key: 'lectures' },
  { name: 'Assignment', key: 'assignment' },
  { name: 'Practice', key: 'practice' },
]

const Lectures = dynamic(import('@modules/k8/content/lectures/Lectures'))
const Assignment = dynamic(import('@modules/k8/content/assignment/Assignment'))
const Practice = dynamic(import('@modules/k8/content/practice/Practice'))

const Content = () => {
  const tabHeaderVariant = TabHeaderVariant
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const renderItems = () => {
    switch (currentIndex) {
      case 0:
        return (
          <Suspense fallback="loading...">
            <Lectures />
          </Suspense>
        )
      case 1:
        return (
          <Suspense fallback="loading...">
            <Assignment />
          </Suspense>
        )
      case 2:
        return (
          <Suspense fallback="loading...">
            <Practice />
          </Suspense>
        )
      default:
        return <></>
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <TabHeader
        title="Coordinate Geometry"
        items={TAB_ITEMS}
        currentIndex={currentIndex}
        onChange={(index: number) => setCurrentIndex(index)}
        variant={tabHeaderVariant.round}
      />
      <div>{renderItems()}</div>
    </div>
  )
}

export default Content

Content.Layout = LayoutNoContentPadding
