import { Card, Container, Typography } from '@components/ui'
import Search from '@assets/images/search.svg'
import Image from 'next/image'
import style from './Lecture.module.css'
import VideoCard from '../components/video-card/VideoCard'
import { BatchType } from '@lib/hooks/batches/useBatches'
import { useRouter } from 'next/router'

const Lectures = () => {
  const router = useRouter()
  const { contentType } = router.query
  return (
    <Container className="flex flex-col gap-4 mb-6">
      {contentType === BatchType.SELF_LEARNING && (
        <div className={style.searchContainer}>
          <Typography variant="small" weight={500}>
            <span className="text-[#888888]">Search lectures</span>
          </Typography>

          <Image src={Search} alt="search_icon" />
        </div>
      )}
      <div className={style.lectureContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((vid: any) => (
          <VideoCard key={vid} />
        ))}
      </div>
    </Container>
  )
}

export default Lectures
