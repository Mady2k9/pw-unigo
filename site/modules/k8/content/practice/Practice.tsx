import { Container, NoData } from '@components/ui'
import style from './Practice.module.css'
import PracticeCard from '../components/practice-card/PracticeCard'
import { PracticeCardType } from '@modules/k8/constants'
import { DppNotes } from '@lib/hooks/batches/useBatchContents'

const Practice = ({ practiceData }: { practiceData: DppNotes[] }) => {
  if (practiceData.length === 0) return <NoData />
  return (
    <Container>
      <div className={style.root}>
        {practiceData &&
          practiceData.map((data: DppNotes) => (
            <PracticeCard
              key={data._id}
              variant={PracticeCardType.PRACTICE}
              data={data}
            />
          ))}
      </div>
    </Container>
  )
}

export default Practice
