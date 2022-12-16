import { Typography } from '@components/ui'
import style from './WeekCard.module.css'
import { RecentSchedule } from '@lib/hooks/batches/useRecentSchedule'
import { format } from 'date-fns'
import { useState } from 'react'

const WeekCard = ({
  data,
  setActiveDay,
}: {
  data: RecentSchedule[]
  setActiveDay: (idx: number) => void
}) => {
  const activeDay = data && data.findIndex((d) => d.isActive)

  const [isActive, setIsActive] = useState(activeDay)
  return (
    <>
      <div className={style.cardContainer}>
        {data.map((d: any, idx: number) => {
          const { date } = d
          const currDate = new Date(date).getDate()
          const month = format(new Date(date), 'LLL')
          const day = format(new Date(date), 'EEEE')

          return (
            <div
              key={date}
              className={`flex flex-col items-center w-full min-w-[120px] cursor-pointer  ${
                idx === isActive ? style.today : ''
              }`}
              onClick={() => {
                setActiveDay(idx)
                setIsActive(idx)
              }}
            >
              <Typography variant="small" weight={500}>
                <span
                  className={
                    idx === isActive ? 'text-indigo-500' : 'text-gray-500'
                  }
                >
                  {day}
                </span>
              </Typography>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <Typography variant="heading3" weight={700}>
                  <span
                    className={
                      idx === isActive ? 'text-indigo-500' : 'text-gray-500'
                    }
                  >
                    {month}
                  </span>
                </Typography>
                <Typography variant="heading3" weight={700}>
                  <span
                    className={
                      idx === isActive ? 'text-indigo-500' : 'text-gray-500'
                    }
                  >
                    {currDate}
                  </span>
                </Typography>
              </div>
            </div>
          )
        })}
      </div>

      <div className={style.mobileCardContainer}>
        {data.map((d: any, idx) => {
          const { date } = d
          const currDate = new Date(date).getDate()
          const month = format(new Date(date), 'LLL')
          const day = format(new Date(date), 'EEE')
          return (
            <div
              key={d}
              className={`flex flex-col gap-1 items-center bg-white py-3 px-2 rounded-3xl cursor-pointer ${
                idx === isActive ? style.today : ''
              }`}
              onClick={() => {
                setActiveDay(idx)
                setIsActive(idx)
              }}
            >
              <Typography variant="small" weight={500}>
                <span
                  className={idx === isActive ? 'text-white' : 'text-gray-500'}
                >
                  {day}
                </span>
              </Typography>
              <div className="flex flex-col gap-1 md:flex-row items-center">
                <Typography variant="subHeading" weight={700}>
                  <span
                    className={
                      idx === isActive ? 'text-white' : 'text-gray-500'
                    }
                  >
                    {month}
                  </span>
                </Typography>
                <Typography variant="heading3" weight={700}>
                  <span
                    className={
                      idx === isActive ? 'text-white' : 'text-gray-500'
                    }
                  >
                    {currDate}
                  </span>
                </Typography>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default WeekCard
