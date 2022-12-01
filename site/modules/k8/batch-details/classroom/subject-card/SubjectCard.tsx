import Image from 'next/image'
import Subject from '@assets/images/subject.svg'
import { Card, Typography } from '@components/ui'
import { useRouter } from 'next/router'
import { SubjectMode } from '@modules/k8/constants'

const SubjectCard = ({
  mode,
  subject,
  handleClick,
}: {
  mode: SubjectMode
  subject: any
  handleClick?: () => void
}) => {
  const router = useRouter()
  console.log(subject)
  return (
    <Card>
      <div
        className="min-w-[90px] w-full flex flex-col items-center md:flex-row gap-2 py-2 md:py-3 md:px-2 animated fadeIn duration-200"
        onClick={handleClick}
      >
        <div className="h-[55px] w-[55px] relative">
          <Image
            src={subject?.imageId?.baseUrl + subject?.imageId?.key}
            alt="subject_logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <Typography weight={600} variant="subHeading">
            <span className="text-[#444] truncate w-[60%]">
              {subject?.subject}
            </span>
          </Typography>
        </div>
      </div>
    </Card>
  )
}

export default SubjectCard
