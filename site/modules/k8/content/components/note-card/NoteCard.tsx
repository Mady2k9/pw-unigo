/* eslint-disable @next/next/no-img-element */
import style from './NoteCard.module.css'
import clipboard from '@assets/images/clipboard.svg'
import download from '@assets/images/download.svg'

const NoteCard = () => {
  return (
    <div className={style.cardContainer}>
      <div className={style.noteDetails}>
        <span>LAKSHYA BATCH : Physics for Class 12 + JEEMAINS / NEET</span>
        <span>12 Jan, 2021</span>
      </div>
      <div>
        <img src={clipboard.src} alt="" />
        <img src={download.src} alt="" />
      </div>
    </div>
  )
}

export default NoteCard
