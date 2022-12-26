import { Typography, useUI } from '@components/ui'
import { Subject } from '@lib/hooks/batches/useBatchDetails'
import React from 'react'
import SubjectCard from '../../classroom/subject-card/SubjectCard'
import { useRouter } from 'next/router'
import { SubjectMode } from '@lib/content-constants'
import useNotify, {
  NotificationDuration,
  NotificationEnums,
} from '@lib/useNotify'

const BatchSchedule = ({ subjects }: { subjects: Subject[] }) => {
  const { openPDFViewer } = useUI()
  const router = useRouter()
  const { showNotification } = useNotify()
  const redirectToPDF = (subject: Subject) => {
    if (!subject?.fileId) {
      showNotification({
        type: NotificationEnums.WARNING,
        duration: NotificationDuration.SHORT,
        title: 'No Preview Available for ' + subject.subject,
        identifier: `no-preview-${subject._id}`,
        onClose: () => {
          console.log('closed')
        },
      })
      return
    }
    openPDFViewer(subject?.fileId?.baseUrl + subject?.fileId?.key)
    router.push('/pdf')
  }

  return (
    <div className="flex flex-col gap-4 ">
      <Typography variant="subHeading" weight={700}>
        Batch Schedule
      </Typography>
      <div className={'flex overflow-x-auto -mx-2'}>
        <div className="flex flex-wrap p-2 py-4 gap-4">
          {subjects.map((subject) => {
            return (
              <SubjectCard
                mode={SubjectMode.ALL_CLASSES}
                key={subject._id}
                subject={subject}
                handleClick={() => redirectToPDF(subject)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BatchSchedule
