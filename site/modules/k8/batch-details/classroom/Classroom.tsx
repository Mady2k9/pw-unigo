import { BatchType } from '@lib/hooks/batches/useBatches'
import LiveClassroom from './live-classroom/LiveClassroom'
import SelfLearningClassroom from './selfLearning-classroom/SelfLearningClassroom'

const Classroom = ({ batchDetails }: { batchDetails: any }) => {
  const variant = batchDetails?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE


  return variant === BatchType.LIVE ? (
    <LiveClassroom batchDetails={batchDetails} />
  ) : (
    <SelfLearningClassroom batchDetails={batchDetails} />
  )
}

export default Classroom
