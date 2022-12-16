import { Card, Typography } from '@components/ui'
import Attachment from '@assets/images/attach.svg'
import Image from 'next/image'
import style from './ClassCard.module.css'
import { ClassMode } from '@modules/k8/constants'

const ClassCard = ({
  isLive,
  variant,
}: {
  isLive?: boolean
  variant: ClassMode
}) => {
  return (
    <>
      <Card>
        <div className="flex flex-col flex-1 min-h-[150px] animated fadeIn duration-200">
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <Typography variant="small" weight={700}>
              2:30 <span className="font-medium text-gray-500">PM</span>
            </Typography>
            <Typography variant="small" weight={700}>
              <span className=" text-indigo-500">1 h 30 min</span>
            </Typography>
          </div>
          <div className="flex flex-col gap-3 px-4 pt-4 pb-2">
            <div className="flex flex-col w-full">
              <Typography variant="regular" weight={700}>
                <span className="text-gray-600  truncate">
                  MEC - 03 - Lakshya NEET
                </span>
              </Typography>
              <Typography variant="tiny" weight={500}>
                <span className="text-gray-400">MEC By Manish Sir</span>
              </Typography>
            </div>

            {isLive && variant !== ClassMode.RECORDED && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-[7px] w-[7px] rounded-[50%] bg-red-600"></span>
                  <Typography variant="small" weight={600}>
                    Live
                  </Typography>
                </div>
                <div className="px-3 py-1 bg-indigo-500 rounded-[40px]">
                  <Typography variant="small" weight={700}>
                    <span className="text-white">Join Now</span>
                  </Typography>
                </div>
              </div>
            )}

            {variant === ClassMode.RECORDED && (
              <div className="flex items-center justify-end">
                <div className="px-3 py-1 bg-indigo-500 rounded-[40px]">
                  <Typography variant="small" weight={700}>
                    <span className="text-white">Start class</span>
                  </Typography>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
      {variant === ClassMode.RECORDED && (
        <div className={style.attachment}>
          <Image src={Attachment} alt="icon" />
          <Typography variant="tiny" weight={700}>
            <span className="text-gray-700">Attachments</span>
          </Typography>
        </div>
      )}
    </>
  )
}

export default ClassCard
