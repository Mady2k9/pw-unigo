import React, { useEffect, useState } from 'react'
import cn from 'clsx'
import s from './announcement.module.css'
import { Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'
import { getOrgAnnouncement } from '@modules/auth/lib'

export interface AnnouncementProps {
  data?: any
}

const Announcement: React.FC<AnnouncementProps> = () => {
  const rootClassName = cn(s.root, {})

  const [announcementData, setannouncementData] = useState<any>([])

  useEffect(() => {
    ;(async () => {
      const randomId = localStorage.getItem('randomId') || ''
      const { data } = await getOrgAnnouncement(randomId)
      if (data.success) {
        //console.log('Announcement Data :: ', data)
        setannouncementData(data?.data)
      }
    })()
  }, [])
  const [closeAnnouncement, setCloseAnnouncement] = useState(true)
  const closeButton = () => {
    setCloseAnnouncement(!closeAnnouncement)
  }

  return (
    <>
      {announcementData?.announcementLabel?.length > 0 && closeAnnouncement && (
        <div className="bg-[#1B2124] text-white w-full text-center p-[12px] flex">
          <div className="mx-auto max-w-6xl mt-2">
            <Typography weight={500} variant="heading3">
              <div className="font-[700] sm:text-[16px] sm:leading-[24px] text-[14px] leading-[22px] mt-[-6px]">
                {announcementData?.announcementLabel}
              </div>
            </Typography>
          </div>
          <button onClick={closeButton}>
            <img src="/x.svg" alt="x" />
          </button>
        </div>
      )}
    </>
  )
}

export default Announcement
