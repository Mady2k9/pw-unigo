import { Typography } from '@components/ui'
import { BatchDetailModel } from '@lib/hooks/batches/useBatchDetails'
import { BatchType } from '@lib/hooks/batches/useBatches'
import { modifyMeta } from '@lib/utilities'
import CourseDuration from '../course-duration/CourseDuration'

const Meta = ({ batchDetail }: { batchDetail: BatchDetailModel }) => {
  const meta = modifyMeta(batchDetail?.meta.filter((data: any) => data.value))

  const variant = batchDetail?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

  return meta.length > 0 ? (
    <div className="flex flex-col gap-4 animated fadeIn duration-200 mb-4">
      <Typography variant="subHeading" weight={700}>
        This {variant === BatchType.SELF_LEARNING ? 'Course' : 'Batch'} Includes
      </Typography>
      {!batchDetail?.isSelfLearning &&
        batchDetail?.startDate &&
        batchDetail?.endDate && (
          <CourseDuration
            startDate={batchDetail?.startDate}
            endDate={batchDetail?.endDate}
          />
        )}
      <div className={'flex overflow-x-auto flex-1 mt-4'}>
        <div className="flex items-center ">
          {meta.slice(0, 5).map((m: any, idx: number) => (
            <div
              key={idx}
              className={`flex inline-flex flex-col items-center justify-center min-h-[66px] ${
                idx < meta.length - 1 && 'border-r'
              } ${idx !== 0 && 'pl-6'} ${idx !== meta.length - 1 && 'pr-6'}`}
            >
              <Typography variant="regular" weight={700} capitalize={true}>
                {m.value}
              </Typography>
              <span className="text-[#999] capitalize text-center">
                <Typography variant="small" weight={500} capitalize={true}>
                  {m.key}
                </Typography>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Meta
