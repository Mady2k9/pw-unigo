import {Typography} from '@components/ui'
import useBatchDetails, {
    Subject,
    TeacherId,
} from '@lib/hooks/batches/useBatchDetails'
import Link from 'next/link'
import React from 'react'
import TeacherCard from '../teacher-card/TeacherCard'
import style from './Faculties.module.css'

const Faculties = ({batchSlug}: { batchSlug: string }) => {
    const {data, isLoading} = useBatchDetails({
        batchSlug: batchSlug as string,
        enabled: !!batchSlug
    })

    const teachers = data?.subjects
        .map((subject: Subject) => [...subject.teacherIds])
        .flat()

    return teachers.length > 0 ? (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <Typography variant="subHeading" weight={700}>
                    Top Faculties
                </Typography>

                <Link href={`${batchSlug}/faculties`}>
                    <Typography variant="subHeading" weight={700}>
                        <span className="text-indigo-500 cursor-pointer">View All</span>
                    </Typography>
                </Link>
            </div>
            <div className={'flex flex-1 overflow-x-auto'}>
                <div className={style.cardContainer}>
                    {teachers.slice(0, 3).map((teacher: any) => (
                        <TeacherCard key={teacher._id} teacherData={teacher}/>
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <></>
    )
}

export default Faculties
