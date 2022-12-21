import Image from 'next/image'
import { Card, Typography } from '@components/ui'
import { SubjectMode } from '@modules/k8/constants'
import { getImageUrlFromObjectImageId } from '@lib/utilities'

const SubjectCard = ({
  mode,
  subject,
  handleClick,
}: {
  mode?: 'compact'
  subject: any
  handleClick?: () => void
}) => {
  return (
    <Card>
      {mode !== 'compact' ? (
        <div
          className="min-w-[96px] w-full cursor-pointer flex flex-col items-center justify-center md:justify-start md:flex-row gap-4 md:gap-3 py-1 md:py-3 md:px-2.5 animated fadeIn duration-200"
          onClick={handleClick}
        >
          <div className="h-[40px] w-[40px] relative ">
            <Image
              src={getImageUrlFromObjectImageId(subject?.imageId)}
              alt="subject_logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <span className="text-[#444] line-clamp-1">
              <Typography capitalize={true} weight={600} variant="regular">
                {subject?.subject || ''}
              </Typography>
            </span>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col gap-2 items-center justify-center pt-2 pb-3 cursor-pointer"
          onClick={handleClick}
        >
          <div className="h-[40px] w-[40px] relative ">
            <Image
              src={getImageUrlFromObjectImageId(subject?.imageId)}
              alt="subject_logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <span className="text-[#444] line-clamp-1">
              <Typography capitalize={true} weight={600} variant="regular">
                {subject?.subject || ''}
              </Typography>
            </span>
          </div>
        </div>
      )}
    </Card>
  )
}

export default SubjectCard
