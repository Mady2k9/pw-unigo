import style from './NoteCard.module.css'
import Download from '@assets/images/dwnld.svg'
import PDF from '@assets/images/pdf.svg'
import { DppNotes } from '@lib/hooks/batches/useBatchContents'
import Image from 'next/image'
import format from 'date-fns/format'
import { useRouter } from 'next/router'

const NoteCard = ({ note }: { note: DppNotes }) => {
  const router = useRouter()
  const startTime = format(new Date(note?.startTime), 'd LLL, yyyy')

  const redirectToPdf = () => {
    router.push('/pdf')
  }
  return (
    <div className={style.cardContainer} onClick={redirectToPdf}>
      <div className={style.noteDetails}>
        <span>{note?.homeworkIds[0]?.topic}</span>
        <span>{startTime}</span>
      </div>
      <div>
        <Image src={Download} alt="download_logo" />
        <Image src={PDF} alt="pdf_logo" />
      </div>
    </div>
  )
}

export default NoteCard
