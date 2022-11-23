import { Container } from '@components/ui'
import style from './Practice.module.css'
import PracticeCard from '../components/practice-card/PracticeCard'

const Practice = () => {
  return (
    <Container>
      <div className={style.root}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((vid: any) => (
          <PracticeCard key={vid} variant={'practice'} />
        ))}
      </div>
    </Container>
  )
}

export default Practice
