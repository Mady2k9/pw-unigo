import { Typography } from '@components/ui'
import Link from 'next/link'
import React from 'react'
import TeacherCard from '../teacher-card/TeacherCard'

const Faculties = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Typography variant="subHeading" weight={700}>
          Top Faculties
        </Typography>

        <Link href="#">
          <Typography variant="subHeading" weight={700}>
            <span className="text-indigo-500">View All</span>
          </Typography>
        </Link>
      </div>
      <div className="flex items-center justify-between">
        {[1, 2, 3].map((teacher: any) => (
          <TeacherCard key={teacher} />
        ))}
      </div>
    </div>
  )
}

export default Faculties
