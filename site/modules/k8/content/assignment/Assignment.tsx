import { Container, NoData } from '@components/ui'
import { DppNotes } from '@lib/hooks/batches/useBatchContents'
import { PracticeCardType } from '@modules/k8/constants'
import PracticeCard from '../components/practice-card/PracticeCard'
import style from './Assignment.module.css'

const Assignment = ({ assignmentData }: { assignmentData: DppNotes[] }) => {
  if (assignmentData.length === 0) return <NoData />
  return (
    <Container>
      <div className={style.root}>
        {assignmentData &&
          assignmentData.map((data: DppNotes) => (
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
