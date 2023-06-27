import React from 'react'
import cn from 'clsx'
import s from './important_notice.module.css'
import { Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'

export interface ImportantNoticeProps {
  data: any
}

const ImportantNotice: React.FC<ImportantNoticeProps> = (props) => {
  const rootClassName = cn(s.root, {})

  return <div className="bg-gray-100 w-full h-full">Notices</div>
}

export default ImportantNotice
