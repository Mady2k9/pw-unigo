import { LayoutNoContentPadding } from '@components/common/Layout'
import { LoadingSection, TabHeader } from '@components/ui'
import { TabHeaderVariant } from '@components/ui/TabHeader/TabHeader'
import useBatchDetails, {
  BatchDetailModel,
} from '@lib/hooks/batches/useBatchDetails'
import { BatchType } from '@lib/hooks/batches/useBatches'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { Suspense, useState } from 'react'
import { Layout } from '@components/common'

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

const Wrapper = ({ batchDetails }: { batchDetails: any }) => {
  const variant = batchDetails.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const tabHeaderVariant = TabHeaderVariant

  const renderTabs = (batchDetails: BatchDetailModel) => {
    switch (currentIndex) {
      case 0:
        return (
          <Suspense fallback="loading....">
            <Description batchDetails={batchDetails} />
          </Suspense>
        )

      case 1:
        return (
          <Suspense fallback="loading....">
            <Classroom batchDetails={batchDetails} />
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
    <Layout isProtected={true} variant={'NoPadding'}>
      <div className="flex flex-col gap-8 min-h-full">
        <TabHeader
          title={batchDetails?.name}
          variant={tabHeaderVariant.round}
          currentIndex={currentIndex}
          items={TAB_ITEMS[variant].items}
          onChange={(index: number) => setCurrentIndex(index)}
        />
        <div>{renderTabs(batchDetails)}</div>
      </div>
    </Layout>
  )
}

const BatchDetails = () => {
  const router = useRouter()
  const { batchSlug } = router.query

  const { data: batchDetails, isLoading } = useBatchDetails({
    batchSlug: batchSlug as string,
  })

  if (isLoading) return <LoadingSection />

  return <Wrapper batchDetails={batchDetails} />
}

export default BatchDetails
