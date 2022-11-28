import { Typography } from '@components/ui'
import { useState } from 'react'
import style from './WeekCard.module.css'

const WEEK = [
  {
    day: 'Monday',
    date: '27',
    month: 'Jan',
    today: false,
  },
  {
    day: 'Tuesday',
    date: '28',
    month: 'Jan',
    today: false,
  },
  {
    day: 'Wednesday',
    date: '29',
    month: 'Jan',
    today: true,
  },
  {
    day: 'Thursday',
    date: '30',
    month: 'Jan',
    today: false,
  },
  {
    day: 'Friday',
    date: '30',
    month: 'Jan',
    today: false,
  },
  {
    day: 'Saturday',
    date: '31',
    month: 'Jan',
    today: false,
  },
  {
    day: 'Sunday',
    date: '01',
    month: 'Feb',
    today: false,
  },
]

const WeekCard = () => {
  return (
    <>
      <div className={style.cardContainer}>
        {WEEK.map((d: any) => (
          <div
            key={d.day}
            className={`flex flex-col items-center w-full min-w-[120px]  ${
              d.today ? style.today : ''
            }`}
          >
            <Typography variant="small" weight={500}>
              <span
                className={`text-gray-500 ${d.today ? 'text-indigo-500' : ''}`}
              >
                {d.day}
              </span>
            </Typography>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <Typography variant="heading3" weight={700}>
                <span
                  className={`text-gray-500 ${
                    d.today ? 'text-indigo-500' : ''
                  }`}
                >
                  {d.month}
                </span>
              </Typography>
              <Typography variant="heading3" weight={700}>
                <span
                  className={`text-gray-500 ${
                    d.today ? 'text-indigo-500' : ''
                  }`}
                >
                  {d.date}
                </span>
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <div className={style.mobilecardContainer}>
        {WEEK.map((d: any) => (
          <div
            key={d}
            className={`flex flex-col gap-1 items-center ${
              d.today ? style.today : ''
            }`}
          >
            <Typography variant="small" weight={500}>
              <span
                className={`text-gray-500 ${d.today ? 'text-indigo-500' : ''}`}
              >
                {d.day}
              </span>
            </Typography>
            <div className="flex flex-col gap-1 md:flex-row items-center">
              <Typography variant="heading3" weight={700}>
                <span
                  className={`text-gray-500 ${
                    d.today ? 'text-indigo-500' : ''
                  }`}
                >
                  {d.month}
                </span>
              </Typography>
              <Typography variant="heading3" weight={700}>
                <span
                  className={`text-gray-500 ${
                    d.today ? 'text-indigo-500' : ''
                  }`}
                >
                  {d.date}
                </span>
              </Typography>
            </div>
          </div>
        ))}
        {/* <div
          key={d.day}
          className={`flex flex-col items-center w-full min-w-[120px]  ${
            d.today ? style.today : ''
          }`}
        >
          <Typography variant="small" weight={500}>
            <span
              className={`text-gray-500 ${d.today ? 'text-indigo-500' : ''}`}
            >
              {d.day}
            </span>
          </Typography>
          <div className="flex flex-col md:flex-row items-center">
            <Typography variant="heading3" weight={700}>
              <span
                className={`text-gray-500 ${d.today ? 'text-indigo-500' : ''}`}
              >
                {d.month}
              </span>
            </Typography>
            <Typography variant="heading3" weight={700}>
              <span
                className={`text-gray-500 ${d.today ? 'text-indigo-500' : ''}`}
              >
                {d.date}
              </span>
            </Typography>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default WeekCard
