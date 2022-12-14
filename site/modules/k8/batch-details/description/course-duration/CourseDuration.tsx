import Calendar from '@assets/images/calender.svg'
import { Typography } from '@components/ui'
import Image from 'next/image'

import format from 'date-fns/format'

const CourseDuration = ({
  startDate,
  endDate,
}: {
  startDate: string
  endDate: string
}) => {
  const startsOn = format(new Date(startDate), 'd LLL, yyyy')
  const endsOn = format(new Date(endDate), 'd LLL, yyyy')
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
