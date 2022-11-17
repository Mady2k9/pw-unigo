import BatchCard from '../batch-card/BatchCard'
import style from './BatchList.module.css'

const BatchList = () => {
  return (
    <div className={style.cardContainer}>
      {[1, 2].map((i: any) => (
        <BatchCard key={i} variant={i % 2 === 0 ? 'live' : 'self-paced'} />
      ))}
    </div>
  )
}

export default BatchList
