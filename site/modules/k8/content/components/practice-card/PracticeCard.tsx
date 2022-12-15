import RightArrow from '@assets/images/right-arrow-round.svg'
import {Card, Typography} from '@components/ui'
import Image from 'next/image'
import {PracticeCardType} from '@modules/k8/constants'
import {DppNotes} from '@lib/hooks/batches/useBatchContents'
import PracticeIcon from '@assets/images/practice-card-icon.svg'
import AssignmentIcon from '@assets/images/assignment-card-icon.svg'
import {useRouter} from 'next/router'

const PracticeCard = ({
                          variant,
                          data,
                      }: {
    variant: PracticeCardType
    data: DppNotes
}) => {
    const router = useRouter()

    const redirectToExercise = () => {
        router.push('/practice/' + data._id);
    }

    return (
        <Card>
            <div
                className="flex items-center justify-between py-4 px-4 animated fadeIn duration-200 w-full cursor-pointer"
                onClick={redirectToExercise}
            >
                <Image
                    src={
                        variant === PracticeCardType.PRACTICE
                            ? PracticeIcon
                            : AssignmentIcon
                    }
                    height={42}
                    width={42}
                    alt="icon"
                />

                <div className="-ml-8 w-[65%]">
                    <Typography capitalize={true} variant="small" weight={600}>
            <span className="w-full line-clamp-2">
              {data?.homeworkIds[0]?.topic || data?.exerciseIds[0]?.title}
            </span>
                    </Typography>
                </div>

                <Image src={RightArrow} alt="arrow_icon" className="ml-auto"/>
            </div>
        </Card>
    )
}

export default PracticeCard
