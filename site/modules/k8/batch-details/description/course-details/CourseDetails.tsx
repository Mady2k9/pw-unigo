import { Typography } from '@components/ui'
import Image from 'next/image'
import Guruji from '@assets/images/guruji.svg'
import { useLayoutEffect, useRef } from 'react'

const CourseDetails = ({ courseDetails }: { courseDetails: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-black">
        <Typography variant="subHeading" weight={700}>
          Course Details
        </Typography>
        <Image src={Guruji} alt="teacher_img" />
      </div>
      <Typography html={courseDetails} />
    </div>
  )
}

export default CourseDetails
