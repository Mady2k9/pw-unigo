import Image from 'next/image'
import shareNow from '@assets/images/share_now.png'

const ShareNow = () => {
  return (
    <div className="flex items-center justify-center mb-6 cursor-pointer">
      <Image
        src={shareNow}
        width={425}
        height={165}
        alt=""
        objectFit="contain"
      />
    </div>
  )
}

export default ShareNow
