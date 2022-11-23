import Image from 'next/image'
import Subject from '@assets/images/subject.svg'
import { Card } from '@components/ui'

const SubjectCard = () => {
  return (
    <Card>
      <div className="flex flex-col items-center md:flex-row gap-2 px-6 py-2 md:p-2 md:min-w-[200px]">
        <Image src={Subject} alt="subject_logo" />
        <span className="text-[#444] text-lg font-semibold">Maths</span>
      </div>
    </Card>
  )
}

export default SubjectCard
