import React from 'react'
import s from './sidebar.module.css'
import Image from 'next/image'
import { Button, Typography } from '@components/ui'
import Container from '@components/ui/Container/Container'
export interface sidebarProps {
  title: string
}

const sidebar: React.FC<sidebarProps> = (props) => {
  const { title } = props
  return (
    <>
      {/* <div className="sm:w-[235px] sticky left-0 bottom-0 h-[calc(100vh-80px)] w-[235px] justify-center z-19 bg-[#F8F8F8]"></div> */}

      <div className="sticky left-0 h-[calc(100vh-80px)]  bg-[#f8f8f8] z-19 flex">
        <div className="sm:w-[235px]  flex pt-4 sm:justify-center">SSDSD</div>

        <div className="w-full bg-[#ff00ff] h-[calc(100vh-80px)] overflow-scroll">
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
          <div>ASDA</div>
        </div>
      </div>
    </>
  )
}

export default sidebar
