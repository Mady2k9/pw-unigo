import React from 'react'
import cn from 'clsx'
import s from './announcement.module.css'
import { Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'

export interface AnnouncementProps {
  title: string
}

const Announcement: React.FC<AnnouncementProps> = (props) => {
  const { title } = props
  const rootClassName = cn(s.root, {})

  return (
    <div className="bg-[#1B2124] text-white w-full text-center p-[12px] flex">
      <div className="mx-auto max-w-6xl mt-2">
        <Typography weight={500} variant="heading3">
          <div className="font-[700] sm:text-[16px] sm:leading-[24px] text-[14px] leading-[22px] mt-[-6px]">
            {title}
          </div>
        </Typography>
      </div>
      <img src="/x.svg" alt="x" />
    </div>
  )
}

export default Announcement
