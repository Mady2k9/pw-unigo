import Calendar from '@assets/images/calendar.png'
import { Typography } from '@components/ui'
import Image from 'next/image'

const CourseDuration = ({
  startDate,
  endDate,
}: {
  startDate: string
  endDate: string
}) => {
  const startsOn = new Date(startDate).toDateString()
  const endsOn = new Date(endDate).toDateString()
  return (
    <div className="flex items-center gap-2">
      <Image src={Calendar} alt="calendar_icon" />
      <Typography variant="small" weight={700}>
        Starts on {startsOn}
      </Typography>
      <span className="text-gray-400">|</span>
      <Typography variant="small" weight={700}>
        Ends on {endsOn}
      </Typography>
    </div>
  )
}

export default CourseDuration
