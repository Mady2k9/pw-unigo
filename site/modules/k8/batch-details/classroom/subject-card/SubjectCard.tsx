import Image from 'next/image'
import Subject from '@assets/images/subject.svg'
import { Card, Typography } from '@components/ui'
import { useRouter } from 'next/router'
import { SubjectMode } from '@modules/k8/constants'

const SubjectCard = ({
  mode,
  batchSlug,
  handleClick,
}: {
  mode: SubjectMode
  batchSlug?: string
  handleClick?: () => void
}) => {
  const router = useRouter()

  const redirectTo = () => {
    if (mode === SubjectMode.WEEKLY) {
      router.push(`${batchSlug}/weekly-schedule`)
    } else if (mode === SubjectMode.ALL_CLASSES) {
      handleClick()
    }
  }
  return (
    <Card>
      <div
        className="min-w-[90px] w-full flex flex-col items-center md:flex-row gap-2 py-2 md:py-3 md:px-2 animated fadeIn duration-200"
        onClick={redirectTo}
      >
        <Image src={Subject} alt="subject_logo" />
        <Typography weight={600} variant="subHeading">
          <span className="text-[#444]">Maths</span>
        </Typography>
      </div>
    </Card>
  )
}

export default SubjectCard
