import { NoClasses } from '@components/lotties'
import { Container, Tabs, Typography } from '@components/ui'
import { StarIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SubjectCard from './subject-card/SubjectCard'
import TopicCard from './topic-card/TopicCard'
import style from './Classroom.module.css'
import { BatchType } from '@lib/hooks/batches/useBatches'
import { SubjectMode } from '@modules/k8/constants'
import LiveClassroom from './live-classroom/LiveClassroom'
import SelfLearningClassroom from './selfLearning-classroom/SelfLearningClassroom'

// const ContentTabItems = [
//   {
//     name: 'Maths',
//     key: 'maths',
//     svgImage: <StarIcon className={'h-6 w-6'} />,
//   },
//   {
//     name: 'Science',
//     key: 'science',
//     svgImage: <StarIcon className={'h-6 w-6'} />,
//   },
// ]

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
