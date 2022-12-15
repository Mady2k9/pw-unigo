import {Container, LoadingSection, NoData} from '@components/ui'
import style from './Notes.module.css'
import React from 'react'
import NoteCard from '../../../../shared/components/core/contents/note-card/NoteCard'
import useBatchContents, {ContentType} from '@lib/hooks/batches/useBatchContents'
import {useRouter} from "next/router";

const Notes = ({ type }: { type: ContentType }) => {
    const router = useRouter()

    const { batchSlug, subjectSlug, topicSlug } = router.query

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
    if(isLoading) return <LoadingSection />
    if(data.length === 0) return  <NoData />
  return (
    <Container>
      <div className={style.notesContainer}>
        {data &&
          data.map((note: any) => <NoteCard key={note._id} note={note} />)}
      </div>
    </Container>
  )
}

export default Notes
