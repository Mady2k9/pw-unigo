import {Container, LoadingSection, NoData} from '@components/ui'
import useBatchContents, {ContentType, DppNotes} from '@lib/hooks/batches/useBatchContents'
import { PracticeCardType } from '@modules/k8/constants'
import PracticeCard from '../components/practice-card/PracticeCard'
import style from './Assignment.module.css'
import {useRouter} from "next/router";

const Assignment = ({ type }: { type: ContentType }) => {
    const router = useRouter()

    const { batchSlug, subjectSlug, topicSlug } = router.query


    const { data: NoteData, isLoading } = useBatchContents({
        batchSlug: batchSlug as string as string,
        subjectSlug: subjectSlug as string as string,
        contentType: type as ContentType,
        tag: topicSlug as string as string,
    })
    if(isLoading) return <LoadingSection />
  if (NoteData.length === 0) return <NoData />

    return (
    <Container>
      <div className={style.root}>
        {NoteData &&
            NoteData.map((data: DppNotes) => (
            <PracticeCard
              key={data._id}
              variant={PracticeCardType.ASSIGNMENNT}
              data={data}
            />
          ))}
      </div>
    </Container>
  )
}

export default Assignment
