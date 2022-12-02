import { LayoutNoContentPadding } from '@components/common/Layout'
import { LoadingSection, TabHeader } from '@components/ui'
import { TabHeaderVariant } from '@components/ui/TabHeader/TabHeader'
import useBatchContents, {
  ContentType,
} from '@lib/hooks/batches/useBatchContents'
import { BatchType } from '@lib/hooks/batches/useBatches'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Suspense, useEffect, useState } from 'react'
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

const ContentDetails = ({ batch }: { batch: any }) => {
  const tabHeaderVariant = TabHeaderVariant
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const router = useRouter()

  const { batchSlug, subjectSlug, topicSlug } = router.query

  const variant = batch?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

  const { data, isLoading, refetch } = useBatchContents({
    batchSlug: batchSlug as string as string,
    subjectSlug: subjectSlug as string as string,
    contentType: TAB_ITEMS[variant as BatchType]?.items[currentIndex].key,
    tag: topicSlug as string as string,
  })

  useEffect(() => {
    refetch
  }, [currentIndex])

  const renderItems = (data: any) => {
    if (variant === BatchType.SELF_LEARNING) {
      switch (currentIndex) {
        case 0:
          return (
            <SuspenseSection>
              <Lectures videoData={data} />
            </SuspenseSection>
          )
        case 1:
          return (
            <SuspenseSection>
              <Assignment assignmentData={data} />
            </SuspenseSection>
          )
        case 2:
          return (
            <SuspenseSection>
              <Practice practiceData={data} />
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
              <Lectures videoData={data} />
            </SuspenseSection>
          )
        case 1:
          return (
            <SuspenseSection>
              <Notes notesData={data} />
            </SuspenseSection>
          )
        case 2:
          return (
            <SuspenseSection>
              <Notes notesData={data} />
            </SuspenseSection>
          )

        case 3:
          return (
            <SuspenseSection>
              <Lectures videoData={data} />
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
        title="Coordinate Geometry"
        items={TAB_ITEMS[variant].items}
        currentIndex={currentIndex}
        onChange={(index: number) => setCurrentIndex(index)}
        variant={tabHeaderVariant.round}
      />
      {isLoading && <LoadingSection />}

      {data && renderItems(data)}
    </div>
  )
}
const Content = () => {
  const router = useRouter()
  const { batchSlug } = router.query
  const { data: batchDetails, isLoading } = useBatchDetails({
    batchSlug: batchSlug as string,
  })

  if (isLoading || !batchDetails) {
    return <LoadingSection />
  }
  return <ContentDetails batch={batchDetails} />
}

export default Content

Content.Layout = LayoutNoContentPadding
