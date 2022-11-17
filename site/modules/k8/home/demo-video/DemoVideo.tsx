import React from 'react'
import style from './DemoVideo.module.css'

const DemoVideo = () => {
  return (
    <div className={style.demoVideoContainer}>
      <div className={style.textContainer}>
        <span className={style.textHeading}>
          Interactive, Collaborative & Fun
        </span>
        <span className={style.textDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </div>
      <div className={style.videoContainer}></div>
    </div>
  )
}

export default DemoVideo
