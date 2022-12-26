import { Button, Card, Typography } from '@components/ui'
import Attachment from '@assets/images/attach.svg'
import Image from 'next/image'
import style from './ClassCard.module.css'
import { ClassMode, PDFActions } from '@modules/k8/constants'
import { format } from 'date-fns'
import { VideoDetails } from '@lib/hooks/batches/useRecentSchedule'
import { useState } from 'react'
import { ActionModal } from '@components/ui/Modal'
import Download from '@assets/images/dwnld.svg'
import PDF from '@assets/images/pdf.svg'
import PracticeIcon from '@assets/images/practice.svg'

const ClassCard = ({
  isLive,
  variant,
  duration,
  startTime,
  title,
  teacher,
  exerciseId,
  videoDetails,
  homeworkId,
}: {
  isLive?: boolean
  variant: ClassMode
  duration: string
  startTime: string
  title: string
  teacher: string
  homeworkId: any
  exerciseId: any
  videoDetails?: VideoDetails
}) => {
  const [openAttachment, setOpenAttachment] = useState(false)
  const time = format(new Date(startTime), 'hh:mm a')

  const timeDuration = duration && duration.split(':')

  return (
    <>
      <Card>
        <div className="flex flex-col min-h-[170px] animated fadeIn duration-200">
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <Typography variant="small" weight={700}>
              {time}
            </Typography>
            {timeDuration && (
              <Typography variant="small" weight={700}>
                <span className=" text-indigo-500">
                  {timeDuration.length === 3
                    ? `${timeDuration[0]} h: ${timeDuration[1]} mins`
                    : `${timeDuration[0]} mins: ${timeDuration[1]} secs`}
                </span>
              </Typography>
            )}
          </div>
          <div className="flex flex-col justify-between px-4 py-3 flex-1">
            <div className="flex flex-col gap-0.5 w-full">
              <div className="text-gray-600 line-clamp-2 w-full ">
                <Typography variant="regular" weight={700} capitalize={true}>
                  {title}
                </Typography>
              </div>
              {teacher?.length > 0 && (
                <Typography variant="tiny" weight={500}>
                  <span className="text-gray-400">{teacher}</span>
                </Typography>
              )}
            </div>

            {isLive && variant !== ClassMode.RECORDED && (
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2">
                  <span className="h-[7px] w-[7px] rounded-[50%] bg-red-600"></span>
                  <Typography variant="small" weight={600}>
                    Live
                  </Typography>
                </div>
                <Button
                  variant="primary"
                  rounded
                  size="small"
                  onClick={() => {}}
                >
                  Join now
                </Button>
              </div>
            )}

            {variant === ClassMode.RECORDED && videoDetails && (
              <div className="flex items-center justify-end">
                <Button size={'tiny'} rounded>
                  Start Class
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>
      {variant === ClassMode.RECORDED &&
        (!!homeworkId.length || !!homeworkId.length) && (
          <div
            className={style.attachment}
            onClick={() => setOpenAttachment(true)}
          >
            <Image src={Attachment} alt="icon" />
            <Typography variant="tiny" weight={700}>
              <span className="text-gray-700">Attachments</span>
            </Typography>
          </div>
        )}

      {openAttachment && (
        <ActionModal
          open={openAttachment}
          setOpen={() => setOpenAttachment(false)}
        >
          <div className="flex flex-col gap-2 w-full">
            {homeworkId.map((pdf: any) => {
              return (
                <div
                  key={pdf._id}
                  className="flex items-center gap-4 border border-gray-300 rounded-md p-2 pl-3"
                >
                  <Image src={PDF} alt="pdf_icon" />
                  <div className="text-left max-w-[75%] line-clamp-2">
                    <Typography variant="small" weight={600}>
                      {pdf?.topic || pdf?.attachmentIds?.[0]?.name}
                    </Typography>
                  </div>
                  {pdf?.actions.includes(PDFActions.DOWNLOAD) && (
                    <div className="ml-auto flex items-center cursor-pointer">
                      <Image
                        src={Download}
                        alt="download_icon"
                        height={42}
                        width={42}
                      />
                    </div>
                  )}
                </div>
              )
            })}
            {exerciseId.map((exercise: any) => {
              return (
                <div
                  key={exercise._id}
                  className="flex items-center gap-2 border border-gray-300 rounded-md p-2"
                >
                  <Image src={PracticeIcon} alt="" height={30} />
                  <div className="text-left max-w-[75%] line-clamp-2">
                    <Typography variant="small" weight={600}>
                      {exercise?.title}
                    </Typography>
                  </div>
                </div>
              )
            })}
          </div>
        </ActionModal>
      )}
    </>
  )
}

export default ClassCard
