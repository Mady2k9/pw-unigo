import { Container } from '@components/ui'
import style from './Notes.module.css'
import React from 'react'
import NoteCard from '../components/note-card/NoteCard'

const Notes = () => {
  return (
    <Container>
      <div className={style.notesContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((vid: any) => (
          <NoteCard key={vid} />
        ))}
      </div>
    </Container>
  )
}

export default Notes
