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

  const { data, isLoading, refetch } = useBatchContents({
    batchSlug: batchSlug as string as string,
    subjectSlug: subjectSlug as string as string,
    contentType: TAB_ITEMS[batch.variant as BatchType]?.items[currentIndex].key,
    tag: topicSlug as string as string,
  })

  const contentType = batch?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

  useEffect(() => {
    refetch
  }, [currentIndex])

  const renderItems = (data: any) => {
    if (contentType === BatchType.SELF_LEARNING) {
      switch (currentIndex) {
        case 0:
          return (
            <Suspense fallback={<LoadingSection />}>
              <Lectures videoData={data} />
            </Suspense>
          )
        case 1:
          return (
            <Suspense fallback={<LoadingSection />}>
              <Assignment />
            </Suspense>
          )
        case 2:
          return (
            <Suspense fallback={<LoadingSection />}>
              <Practice />
            </Suspense>
          )
        default:
          return <></>
      }
    } else {
      switch (currentIndex) {
        case 0:
          return (
            <Suspense fallback={<LoadingSection />}>
              <Lectures videoData={data} />
            </Suspense>
          )
        case 1:
          return (
            <Suspense fallback={<LoadingSection />}>
              <Notes />
            </Suspense>
          )
        case 2:
          return (
            <Suspense fallback={<LoadingSection />}>
              <Notes />
            </Suspense>
          )

        case 3:
          return (
            <Suspense fallback={<LoadingSection />}>
              <Lectures videoData={data} />
            </Suspense>
          )
        default:
          return <></>
      }
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <TabHeader
        title="Coordinate Geometry"
        items={TAB_ITEMS[contentType].items}
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
