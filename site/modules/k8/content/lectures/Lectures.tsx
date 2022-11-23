import { Card, Container } from '@components/ui'
import Search from '@assets/images/search.svg'
import Image from 'next/image'
import style from './Lecture.module.css'
import VideoCard from '../components/video-card/VideoCard'

const Lectures = () => {
  return (
    <Container className="flex flex-col gap-4">
      <div className={style.searchContainer}>
        <span className="text-sm font-medium text-[#888888]">
          Search lectures
        </span>
        <Image src={Search} alt="search_icon" />
      </div>
      <div className={style.lectureContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((vid: any) => (
          <VideoCard key={vid} variant={'selfLearning'} />
        ))}
      </div>
    </Container>
  )
}

export default Lectures
