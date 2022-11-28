import { Container } from '@components/ui'
import style from './Practice.module.css'
import PracticeCard from '../components/practice-card/PracticeCard'
import { PracticeCardType } from '@modules/k8/constants'

const Practice = () => {
  return (
    <Container>
      <div className={style.root}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((vid: any) => (
          <PracticeCard key={vid} variant={PracticeCardType.PRACTICE} />
        ))}
      </div>
    </Container>
  )
}

export default Practice
