import { Typography, useUI } from '@components/ui'
import { Subject } from '@lib/hooks/batches/useBatchDetails'
import React from 'react'
import SubjectCard from '../../classroom/subject-card/SubjectCard'
import { useRouter } from 'next/router'

const BatchSchedule = ({ subjects }: { subjects: Subject[] }) => {
  const { openPDFViewer } = useUI()
  const router = useRouter()

  const redirectToPDF = (subject: Subject) => {
    if (!subject?.fileId) return
    openPDFViewer(subject?.fileId?.baseUrl + subject?.fileId?.key)
    router.push('/pdf')
  }

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="subHeading" weight={700}>
        Batch Schedule
      </Typography>
      <div className="grid grid-cols-auto89 gap-4 grid-flow-col overflow-x-auto p-2 py-4">
        {subjects.map((subject) => {
          return (
            <SubjectCard
              mode="compact"
              key={subject._id}
              subject={subject}
              handleClick={() => redirectToPDF(subject)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BatchSchedule
