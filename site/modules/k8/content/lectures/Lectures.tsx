import {Container, LoadingSection, NoData, Typography} from '@components/ui'
import style from './Lecture.module.css'
import VideoCard from '../components/video-card/VideoCard'
import {BatchType} from '@lib/hooks/batches/useBatches'
import {useRouter} from 'next/router'
import useBatchContents, {ContentType, Lecture} from '@lib/hooks/batches/useBatchContents'
import {ModalSearch} from '@components/common'
import {useEffect, useMemo, useState} from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import cn from 'clsx'
import useBatchDetails from "@lib/hooks/batches/useBatchDetails";


const Lectures = ({ videoData, type }: { videoData?: Lecture[], type: ContentType }) => {
  const router = useRouter()
  const { batchSlug, subjectSlug, topicSlug } = router.query

  const {data: batchDetails} = useBatchDetails({batchSlug: batchSlug as string})

  const variant = batchDetails?.isSelfLearning
      ? BatchType.SELF_LEARNING
      : BatchType.LIVE

  const payload = topicSlug === 'all-contents' ? {
    batchSlug: batchSlug as string as string,
    subjectSlug: subjectSlug as string as string,
    contentType: type as ContentType,
  } : {
    batchSlug: batchSlug as string as string,
    subjectSlug: subjectSlug as string as string,
    contentType: type as ContentType,
    tag: topicSlug as string as string,
  }

  const { data, isLoading } = useBatchContents(payload)

  const [enableSearch, setEnableSearch] = useState(false)
  const [query, setQuery] = useState('')
  useEffect(() => {}, [query])

  const ItemsWrapper = useMemo(() => {
    return (
      <div
        className={cn(style.lectureContainer, {
          ['grid-cols-2 md:grid-cols-3 lg:grid-cols-4']: !enableSearch,
          ['grid-cols-1 md:grid-cols-2 lg:grid-cols-3']: enableSearch,
        })}
      >
        {data &&
          data.map((video: any) => (
            <VideoCard key={video._id} videoDetails={video} />
          ))}
      </div>
    )
  }, [data, enableSearch])
  if(isLoading) return <LoadingSection />
  if (data.length === 0) return <NoData />

  return (
    <Container className="flex flex-col gap-4 mb-6">
      {variant === BatchType.SELF_LEARNING && (
        <div
          className="relative text-gray-400 flex space-x-2 border rounded-md border-gray-200 px-4 py-2 shadow w-[400px] max-w-full"
          onClick={() => setEnableSearch(true)}
        >
          <MagnifyingGlassIcon
            className="pointer-events-none h-5 w-5 "
            aria-hidden="true"
          />
          <Typography>Search for Lectures</Typography>
        </div>
      )}
      {enableSearch ? (
        <ModalSearch
          query={query}
          setQuery={setQuery}
          onClose={() => setEnableSearch(false)}
          itemsLength={videoData?.length || 0}
        >
          {ItemsWrapper}
        </ModalSearch>
      ) : (
        ItemsWrapper
      )}
    </Container>
  )
}

export default Lectures
