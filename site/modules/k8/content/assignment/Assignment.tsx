import { Container } from '@components/ui'
import { PracticeCardType } from '@modules/k8/constants'
import PracticeCard from '../components/practice-card/PracticeCard'
import style from './Assignment.module.css'

const Assignment = () => {
  return (
    <Container>
      <div className={style.root}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((vid: any) => (
          <PracticeCard key={vid} variant={PracticeCardType.ASSIGNMENNT} />
        ))}
      </div>
    </Container>
  )
}

export default Assignment
