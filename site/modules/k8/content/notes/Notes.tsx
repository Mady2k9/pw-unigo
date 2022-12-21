import { Container, LoadingSection, NoData } from '@components/ui'
import style from './Notes.module.css'
import React from 'react'
import NoteCard from '@components/contents/note-card/NoteCard'
import useBatchContents, {
  ContentType,
} from '@lib/hooks/batches/useBatchContents'
import { useRouter } from 'next/router'
import {ALL_CONTENTS} from "@lib/content-constants";

const Notes = ({ type }: { type: ContentType }) => {
  const router = useRouter()

  const { batchSlug, subjectSlug, topicSlug } = router.query

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

  const { data, isLoading } = useBatchContents(payload)
  if (isLoading) return <LoadingSection />
  if (data.length === 0) return <NoData />
  return (
    <Container>
      <div className={style.notesContainer}>
        {data &&
          data.map((note: any) => (
            <NoteCard
              key={note._id}
              name={note?.topic || note?.homeworkIds[0]?.attachmentIds[0]?.name}
              actions={note?.homeworkIds[0]?.actions}
              attachmentId={
                note?.homeworkIds[0]?.attachmentIds[0]?.baseUrl +
                note?.homeworkIds[0]?.attachmentIds[0]?.key
              }
              date={note?.date}
            />
          ))}
      </div>
    </Container>
  )
}

export default Notes
