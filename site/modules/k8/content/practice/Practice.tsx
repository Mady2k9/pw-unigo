import { Container, LoadingSection, NoData } from '@components/ui'
import style from './Practice.module.css'
import PracticeCard from '../../../../shared/components/core/contents/practice-card/PracticeCard'
import { PracticeCardType } from '@modules/k8/constants'
import useBatchContents, {
  ContentType,
  DppNotes,
} from '@lib/hooks/batches/useBatchContents'
import { useRouter } from 'next/router'

const Practice = ({ type }: { type: ContentType }) => {
  const router = useRouter()

  const { batchSlug, subjectSlug, topicSlug } = router.query

  const { data: noteData, isLoading } = useBatchContents({
    batchSlug: batchSlug as string as string,
    subjectSlug: subjectSlug as string as string,
    contentType: type as ContentType,
    tag: topicSlug as string as string,
  })
  if (isLoading) return <LoadingSection />
  if (noteData.length === 0) return <NoData />
  return (
    <Container>
      <div className={style.root}>
        {noteData &&
          noteData.map((data) => (
            <PracticeCard
              key={data._id}
              variant={PracticeCardType.PRACTICE}
              data={data as DppNotes}
            />
          ))}
      </div>
    </Container>
  )
}

export default Practice
