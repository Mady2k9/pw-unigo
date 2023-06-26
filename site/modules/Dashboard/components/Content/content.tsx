import React from 'react'
import s from './content.module.css'
import Image from 'next/image'
import { Button, Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'
export interface contentProps {}

const content: React.FC<contentProps> = (props) => {
  return (
    <div className="w-full bg-white h-[calc(100vh-80px)] overflow-scroll p-4">
      <div>Content Area</div>
    </div>
  )
}

export default content
