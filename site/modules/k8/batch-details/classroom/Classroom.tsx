import { NoClasses } from '@components/lotties'
import { Container, Tabs } from '@components/ui'
import { StarIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SubjectCard from './subject-card/SubjectCard'
import TopicCard from './topic-card/TopicCard'
import style from './Classroom.module.css'

const ContentTabItems = [
  {
    name: 'Maths',
    key: 'maths',
    svgImage: <StarIcon className={'h-6 w-6'} />,
  },
  {
    name: 'Science',
    key: 'science',
    svgImage: <StarIcon className={'h-6 w-6'} />,
  },
]

const Classroom = () => {
  const router = useRouter()
  const { contentType, batchSlug } = router.query
  const [contentTabIndex, setContentTabIndex] = useState(0)

  const redirectTo = () => {
    router.push(`${batchSlug}/content`)
  }

  return contentType === 'live' ? (
    <Container className="flex flex-col gap-10">
      <section>
        <span className="text-xl font-bold">Today's Classes</span>
        <div className="flex flex-col items-center justify-center">
          <NoClasses />
          <span className="text-sm text-[#444344] font-bold">
            No Today’s Classes Scheduled Yet
          </span>
        </div>
      </section>
      <section className="flex flex-col gap-1">
        <span className="text-[#262626] text-xl font-bold ">
          Weekly Schedule
        </span>
        <span className="text-[#888] text-sm font-medium">
          Classes for current week
        </span>

        <div className="flex items-center gap-4 mt-4">
          {[1, 2, 3, 4].map((subj: any) => (
            <SubjectCard key={subj} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-1">
        <span className="text-[#262626] text-xl font-bold ">All Classes</span>
        <span className="text-[#888] text-sm font-medium">
          Explore all your classes
        </span>

        <div className="flex items-center gap-4 mt-4">
          {[1, 2, 3, 4].map((subj: any) => (
            <SubjectCard key={subj} />
          ))}
        </div>
      </section>
    </Container>
  ) : (
    <Container>
      <div className={'my-4'}>
        <Tabs
          items={ContentTabItems}
          currentIndex={contentTabIndex}
          onChange={(index) => {
            setContentTabIndex(index)
          }}
        />
      </div>
      <section className="my-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold text-[#585173]">Content</span>
          <span className="text-xs font-medium text-[#8B8B8B]">
            11 Chapters | 120 Lectures
          </span>
        </div>
        <div className={style.cardContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((topic: any) => (
            <TopicCard handleClick={redirectTo} key={topic} />
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Classroom
