import { LayoutNoContentPadding } from '@components/common/Layout'
import { LoadingSection, TabHeader } from '@components/ui'
import { TabHeaderVariant } from '@components/ui/TabHeader/TabHeader'
import useBatchContents, {
  ContentType,
} from '@lib/hooks/batches/useBatchContents'
import { BatchType } from '@lib/hooks/batches/useBatches'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useBatchDetails from '@lib/hooks/batches/useBatchDetails'
import SuspenseSection from '@components/common/SuspenseSection'

const TAB_ITEMS = {
  selfLearning: {
    items: [
      { name: 'Lectures', key: ContentType.VIDEOS },
      { name: 'Assignment', key: ContentType.NOTES },
      { name: 'Practice', key: ContentType.EXERCISES },
    ],
  },
  live: {
    items: [
      { name: 'Lectures', key: ContentType.VIDEOS },
      { name: 'Notes', key: ContentType.NOTES },
      { name: 'DHA', key: ContentType.DPP_NOTES },
      { name: "DHA's Sol", key: ContentType.DPP_VIDEOS },
    ],
  },
}

const Lectures = dynamic(() => import('@modules/k8/content/lectures/Lectures'))
const Assignment = dynamic(
  () => import('@modules/k8/content/assignment/Assignment')
)
const Practice = dynamic(() => import('@modules/k8/content/practice/Practice'))
const Notes = dynamic(() => import('@modules/k8/content/notes/Notes'))

const ContentDetails = ({ batch, title }: { batch: any; title: string }) => {
  const tabHeaderVariant = TabHeaderVariant
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const variant = batch?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

  const renderItems = () => {
    if (variant === BatchType.SELF_LEARNING) {
      switch (currentIndex) {
        case 0:
          return (
            <SuspenseSection>
              <Lectures type={ContentType.VIDEOS} />
            </SuspenseSection>
          )
        case 1:
          return (
            <SuspenseSection>
              <Assignment type={ContentType.NOTES} />
            </SuspenseSection>
          )
        case 2:
          return (
            <SuspenseSection>
              <Practice type={ContentType.EXERCISES} />
            </SuspenseSection>
          )
        default:
          return <></>
      }
    } else {
      switch (currentIndex) {
        case 0:
          return (
            <SuspenseSection>
              <Lectures type={ContentType.VIDEOS} />
            </SuspenseSection>
          )
        case 1:
          return (
            <SuspenseSection>
              <Notes type={ContentType.NOTES} />
            </SuspenseSection>
          )
        case 2:
          return (
            <SuspenseSection>
              <Notes type={ContentType.DPP_NOTES} />
            </SuspenseSection>
          )

        case 3:
          return (
            <SuspenseSection>
              <Lectures type={ContentType.DPP_VIDEOS} />
            </SuspenseSection>
          )
        default:
          return <></>
      }
    }
  }

  return (
    <div className="flex flex-col gap-6 min-h-[100%]">
      <TabHeader
        title={title}
        items={TAB_ITEMS[variant].items}
        currentIndex={currentIndex}
        onChange={(index: number) => setCurrentIndex(index)}
        variant={tabHeaderVariant.round}
      />

      {renderItems()}
    </div>
  )
}
const Content = () => {
  const router = useRouter()
  const { batchSlug, topic } = router.query
  const { data: batchDetails, isLoading } = useBatchDetails({
    batchSlug: batchSlug as string,
  })

  if (isLoading || !batchDetails) {
    return <LoadingSection />
  }
  return <ContentDetails batch={batchDetails} title={topic as string} />
}

export default Content

Content.Layout = LayoutNoContentPadding
