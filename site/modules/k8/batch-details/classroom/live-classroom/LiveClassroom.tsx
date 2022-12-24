import {NoClasses} from '@components/lotties'
import {Container, NoData, Typography} from '@components/ui'
import style from './LiveClassroom.module.css'
import SubjectCard from '../subject-card/SubjectCard'
import {useRouter} from 'next/router'
import {BatchDetailModel, Subject} from '@lib/hooks/batches/useBatchDetails'
import useTodaySchedule from '@lib/hooks/batches/useTodaySchedule'
import VideoCard from '@components/contents/video-card/VideoCard'
import {SubjectMode} from "@lib/content-constants";

const LiveClassroom = ({
                           batchDetails,
                       }: {
    batchDetails: BatchDetailModel
}) => {
    const router = useRouter()
    const {batchSlug} = router.query

    const {data: todaySchedule} = useTodaySchedule({
        batchSlug: batchSlug as string,
    })

    const redirectToWeeklySchedule = (slug: string, subject: string) => {
        router.push(`${batchSlug}/${slug}/weekly-schedule`)
    }

    const redirectToTopic = (slug: string, subject: string) => {
        router.push(`${batchSlug}/${slug}`)
    }

    return (
        <Container className="flex flex-col gap-11">
            <section>
                <Typography weight={700} variant="heading4">
                    Today's Classes
                </Typography>
                {todaySchedule && todaySchedule.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
                        {todaySchedule.map((ts) => {
                            return (
                                <VideoCard
                                    key={ts._id}
                                    id={ts._id}
                                    name={ts?.topic || ts?.videoDetails?.name}
                                    duration={ts?.videoDetails?.duration}
                                    slug={ts?.slug}
                                    image={ts?.videoDetails?.image}
                                    isTodaysScheduled={true}
                                    date={ts?.startTime}
                                    subjectSlug={ts?.subjectId?.slug}
                                    subject={ts?.subjectId?.name}
                                />
                            )
                        })}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <NoClasses/>
                        <Typography variant="small" weight={700}>
              <span className="text-gray-700">
                No Today’s Classes Scheduled Yet
              </span>
                        </Typography>
                    </div>
                )}
            </section>
            <section className="flex flex-col gap-1">
                <Typography variant="heading4" weight={700}>
                    Weekly Schedule
                </Typography>
                <Typography variant="small" weight={500}>
                    <span className="text-gray-500">Classes for current week</span>
                </Typography>

                <div className={'flex flex-1 overflow-x-auto pb-4 px-2 -mx-2'}>
                    {batchDetails?.subjects.length > 0 ? (
                        <div className={style.liveBatchCardContainer}>
                            {batchDetails?.subjects?.map((subject: Subject) => (
                                <SubjectCard
                                    key={subject._id}
                                    mode={SubjectMode.WEEKLY}
                                    subject={subject}
                                    handleClick={() =>
                                        redirectToWeeklySchedule(subject.slug, subject.subject)
                                    }
                                />
                            ))}
                        </div>
                    ) : (
                        <div>
                            <NoData/>
                        </div>
                    )}
                </div>
            </section>

            <section className="flex flex-col gap-1">
                <Typography variant="heading4" weight={700}>
                    All Classes
                </Typography>
                <Typography variant="small" weight={500}>
                    <span className="text-gray-500">Explore all your classes</span>
                </Typography>


                <div className={'flex flex-1 overflow-x-auto pb-4  px-2 -mx-2'}>
                    {batchDetails?.subjects.length > 0 ? (
                        <div className={style.liveBatchCardContainer}>
                            {batchDetails?.subjects.map((subject: any) => (
                                <SubjectCard
                                    key={subject._id}
                                    mode={SubjectMode.ALL_CLASSES}
                                    subject={subject}
                                    handleClick={() =>
                                        redirectToTopic(subject.slug, subject.subject)
                                    }
                                />
                            ))}
                        </div>
                    ) : (
                        <div>
                            <NoData/>
                        </div>
                    )}
                </div>
            </section>
        </Container>
    )
}

export default LiveClassroom
