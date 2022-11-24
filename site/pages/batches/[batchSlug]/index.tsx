import { LayoutNoContentPadding } from '@components/common/Layout'
import { TabHeader } from '@components/ui'
import { TabHeaderVariant } from '@components/ui/TabHeader/TabHeader'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { Suspense, useState } from 'react'

const TAB_ITEMS = {
  selfLearning: {
    items: [
      {
        name: 'Description',
        key: 'description',
      },
      {
        name: 'Study Room',
        key: 'study-room',
      },
    ],
  },
  live: {
    items: [
      {
        name: 'Description',
        key: 'description',
      },
      {
        name: 'Classroom',
        key: 'classroom',
      },
      {
        name: 'Announcement',
        key: 'Announcement',
      },
    ],
  },
}

const Classroom = dynamic(
  import('@modules/k8/batch-details/classroom/Classroom')
)

const Description = dynamic(
  import('@modules/k8/batch-details/description/Description')
)

const Announcement = dynamic(
  import('@modules/k8/batch-details/announcement/Announcement')
)

const BatchDetails = () => {
  const router = useRouter()
  const { contentType } = router.query

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const tabHeaderVariant = TabHeaderVariant

  const renderTabs = () => {
    switch (currentIndex) {
      case 0:
        return (
          <Suspense fallback="loading....">
            <Description />
          </Suspense>
        )

      case 1:
        return (
          <Suspense fallback="loading....">
            <Classroom />
          </Suspense>
        )

      case 2:
        return (
          <Suspense fallback="loading....">
            <Announcement />
          </Suspense>
        )
      default:
        return <></>
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {/* <TabHeader
        title="Yojna JEE 2023"
        variant={tabHeaderVariant.round}
        currentIndex={currentIndex}
        items={TAB_ITEMS[contentType].items}
        onChange={(index: number) => setCurrentIndex(index)}
      /> */}
      <div>{renderTabs()}</div>
    </div>
  )
}

export default BatchDetails

BatchDetails.Layout = LayoutNoContentPadding
