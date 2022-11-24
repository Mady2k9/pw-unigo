import Image from 'next/image'
import Subject from '@assets/images/subject.svg'
import { Card, Typography } from '@components/ui'

const SubjectCard = () => {
  return (
    <Card>
      <div className="flex flex-col items-center md:flex-row gap-2 px-6 py-2 md:p-2 md:min-w-[200px]">
        <Image src={Subject} alt="subject_logo" />
        <Typography weight={600} variant="subHeading">
          <span className="text-[#444]">Maths</span>
        </Typography>
      </div>
    </Card>
  )
}

export default SubjectCard
