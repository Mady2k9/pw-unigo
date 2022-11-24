import { Typography } from '@components/ui'
import Image from 'next/image'
import Guruji from '@assets/images/guruji.svg'

const CourseDetails = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-black">
        <Typography variant="subHeading" weight={700}>
          Course Details
        </Typography>
        <Image src={Guruji} alt="teacher_img" />
      </div>
    </div>
  )
}

export default CourseDetails
