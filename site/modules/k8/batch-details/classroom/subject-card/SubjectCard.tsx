import Image from 'next/image'
import { Card, Typography } from '@components/ui'
import { getImageUrlFromObjectImageId } from '@lib/utilities'
import { SubjectMode } from '@lib/content-constants'

const SubjectCard = ({
  mode,
  subject,
  handleClick,
}: {
  mode?: SubjectMode
  subject: any
  handleClick?: () => void
}) => {
  return (
    <Card>
      <div
        className="w-[150px] md:w-full cursor-pointer flex flex-col items-center justify-center md:justify-start md:flex-row gap-4 md:gap-3 py-3 md:px-2.5 animated fadeIn duration-200 px-2"
        onClick={handleClick}
      >
        <div className="h-[40px] w-[40px] relative ">
          <Image
            src={getImageUrlFromObjectImageId(subject?.imageId)}
            alt="subject_logo"
            layout="fill"
            width={40}
            height={40}
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
    </Card>
  )
}

export default SubjectCard
