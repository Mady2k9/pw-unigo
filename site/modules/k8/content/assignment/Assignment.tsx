import { Container, LoadingSection, NoData } from '@components/ui'
import useBatchContents, {
  ContentType,
  ContentModel,
} from '@lib/hooks/batches/useBatchContents'
import { PracticeCardType } from '@modules/k8/constants'
import PracticeCard from '@components/contents/practice-card/PracticeCard'
import style from './Assignment.module.css'
import { useRouter } from 'next/router'

const Assignment = ({ type }: { type: ContentType }) => {
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
            <div key={data._id}>
              <PracticeCard
                variant={PracticeCardType.ASSIGNMENNT}
                attachmentId={
                  data?.homeworkIds[0]?.attachmentIds[0]?.baseUrl +
                  data?.homeworkIds[0]?.attachmentIds[0]?.key
                }
                solution={data?.homeworkIds[0]?.solutionVideoId}
                title={data?.homeworkIds[0]?.topic}
              />
            </div>
          ))}
      </div>
    </Container>
  )
}

export default Assignment
