import { Container } from '@components/ui'
import style from './Notes.module.css'
import React from 'react'
import NoteCard from '../components/note-card/NoteCard'
import { DppNotes } from '@lib/hooks/batches/useBatchContents'

const Notes = ({ notesData }: { notesData: DppNotes[] }) => {
  return (
    <Container>
      <div className={style.notesContainer}>
        {notesData &&
          notesData.map((note: any) => <NoteCard key={note._id} note={note} />)}
      </div>
    </Container>
  )
}

export default Notes
