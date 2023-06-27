import React from 'react'
import s from './content.module.css'
import Image from 'next/image'
import { Button, Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'
export interface contentProps {}

const content: React.FC<contentProps> = (props) => {
  return (
    <div className="w-full bg-white h-[calc(100vh-80px)] sm:p-4">
      <div className="w-full ">
        <div className="flex sm:w-10/12 w-full sm:justify-between sm:mx-auto justify-end ">
          asdasd
        </div>
      </div>
    </div>
  )
}

export default content
