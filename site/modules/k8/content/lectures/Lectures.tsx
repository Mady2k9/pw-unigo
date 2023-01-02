import {
  Button,
  Container,
  LoadingSection,
  NoData,
  Typography,
  useUI,
} from '@components/ui'
import style from './Lecture.module.css'
import VideoCard from '@components/contents/video-card/VideoCard'
import { BatchType } from '@lib/hooks/batches/useBatches'
import { useRouter } from 'next/router'
import useBatchContents, {
  ContentModel,
  ContentType,
} from '@lib/hooks/batches/useBatchContents'
import { ModalSearch } from '@components/common'
import { useMemo, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import cn from 'clsx'
import useBatchDetails from '@lib/hooks/batches/useBatchDetails'
import { ALL_CONTENTS } from '@lib/content-constants'
import useFetchStats from '@lib/hooks/video-player/useFetchStats'
import useNotify, {
  NotificationDuration,
  NotificationEnums,
} from '@lib/useNotify'
import { getVideoUrl } from '@lib/video-utility'

const Lectures = ({ type }: { type: ContentType }) => {
  const router = useRouter()
  const { user } = useUI()
  const { showNotification } = useNotify()
  const { batchSlug, subjectSlug, topicSlug } = router.query

  const { data: batchDetails } = useBatchDetails({
    batchSlug: batchSlug as string,
    enabled: !!batchSlug,
  })

  const isPurchased = batchDetails?.isPurchased

  const variant = batchDetails?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

  const payload =
    topicSlug === ALL_CONTENTS
      ? {
          batchSlug: batchSlug as string as string,
          subjectSlug: subjectSlug as string as string,
          contentType: type as ContentType,
        }
      : {
          batchSlug: batchSlug as string as string,
          subjectSlug: subjectSlug as string as string,
          contentType: type as ContentType,
          tag: topicSlug as string as string,
        }

  const { data, isLoading, fetchNextPage } = useBatchContents(payload)

  const videoIds = data?.map((video) => video._id).join(',')

  const { data: videoStatsData } = useFetchStats({
    typeId: videoIds,
    userId: user?.id,
    enabled: videoIds.length > 0,
  })

  const [enableSearch, setEnableSearch] = useState(false)
  const [query, setQuery] = useState('')

  const redirectToPlayer = (video: any) => {
    if (!isPurchased && !video.isFree) {
      showNotification({
        title: 'Batch not purchased!!!',
        type: NotificationEnums.ERROR,
        duration: NotificationDuration.LONG,
        description: 'Please purchase this batch to watch this content',
        identifier: video._id,
        content: (
          <div className="mt-2">
            <Button
              onClick={() => router.push(`/batches/${batchSlug}/order-summary`)}
            >
              {' '}
              Buy Now
            </Button>
          </div>
        ),
      })
      return
    }
    router.push(
      getVideoUrl({
        scheduleId: video._id as string,
        topicSlug: topicSlug as string,
        batchSubjectSlug: subjectSlug as string,
        batchSlug: batchSlug as string,
      })
    )
  }

  const ItemsWrapper = useMemo(() => {
    return (
      <>
        <div
          className={cn(style.lectureContainer, {
            ['grid-cols-2 md:grid-cols-3 lg:grid-cols-4']: !enableSearch,
            ['grid-cols-1 md:grid-cols-2 lg:grid-cols-3']: enableSearch,
          })}
        >
          {data &&
            data.map((video: any) => {
              const lastWatchedTimeInSec =
                videoStatsData &&
                videoStatsData.find((v: any) => v.typeId === video._id)
                  ?.lastWatchedPointInSec

              return (
                <VideoCard
                  key={video._id}
                  id={video._id}
                  name={video?.topic || video?.videoDetails?.name}
                  duration={video?.videoDetails?.duration}
                  slug={video?.slug}
                  date={video?.date}
                  image={video?.videoDetails?.image}
                  isLocked={!isPurchased && !video.isFree}
                  lastWatchedTimeInSec={lastWatchedTimeInSec}
                  handleClick={() => redirectToPlayer(video)}
                />
              )
            })}
        </div>
      </>
    )
  }, [data, enableSearch])

  if (isLoading) return <LoadingSection />
  if (data.length === 0) return <NoData />

  const subjName = batchDetails?.subjects?.filter(
    (subj: any) => subj.slug === subjectSlug
  )[0].subject

  return (
    <Container className="flex flex-col gap-4 mb-6">
      {variant === BatchType.SELF_LEARNING && (
        <div
          className="relative text-gray-400 flex items-center justify-between space-x-2 border rounded-md border-gray-200 px-4 py-2 shadow w-[400px] max-w-full"
          onClick={() => {
            setEnableSearch(true)
          }}
        >
          <Typography variant="small" weight={500}>
            Search lectures
          </Typography>
          <MagnifyingGlassIcon
            className="pointer-events-none h-5 w-5 text-gray-900"
            aria-hidden="true"
          />
        </div>
      )}
      {enableSearch ? (
        <ModalSearch
          query={query}
          setQuery={setQuery}
          onClose={() => {
            setEnableSearch(false)
            setQuery('')
          }}
          videos={data as ContentModel[]}
          batchId={batchDetails?._id}
          isPurchased={isPurchased}
          subjectName={subjName}
        />
      ) : (
        ItemsWrapper
      )}
    </Container>
  )
}

export default Lectures
