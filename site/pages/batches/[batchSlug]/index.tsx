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
import SuspenseSection from '@components/common/SuspenseSection'
import eventTracker from '@lib/eventTracker/eventTracker'

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
        key: 'announcement',
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
          <SuspenseSection>
            <Description batchDetails={batchDetails} />
          </SuspenseSection>
        )

      case 1:
        return (
          <SuspenseSection>
            <Classroom batchDetails={batchDetails} />
          </SuspenseSection>
        )

      case 2:
        return (
          <SuspenseSection>
            <Announcement batchDetails={batchDetails} />
          </SuspenseSection>
        )
      default:
        return <></>
    }
  }

  return (
    <div className="flex flex-col gap-8 min-h-full">
      <TabHeader
        title={batchDetails?.name}
        variant={tabHeaderVariant.round}
        currentIndex={currentIndex}
        items={TAB_ITEMS[variant].items}
        onChange={(index: number) => {
          eventTracker.myBatchNavigation(
            batchDetails,
            TAB_ITEMS[variant].items[index].key
          )
          setCurrentIndex(index)
        }}
      />
      <div>{renderTabs(batchDetails)}</div>
    </div>
  )
}

const BatchDetails = ({ batchSlug }: { batchSlug: string }) => {
  const { data: batchDetails, isLoading } = useBatchDetails({
    batchSlug: batchSlug as string,
    enabled: !!batchSlug,
  })

  if (isLoading)
    return (
      <div className={'h-screen w-screen'}>
        <LoadingSection />
      </div>
    )

  return <Wrapper batchDetails={batchDetails} />
}

const BatchPageWrapper = () => {
  const router = useRouter()
  const { batchSlug } = router.query
  return (
    <Layout variant={'NoPadding'} isProtected={true}>
      <BatchDetails batchSlug={batchSlug as string} />
    </Layout>
  )
}
export default BatchPageWrapper
