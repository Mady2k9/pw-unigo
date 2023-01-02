import Image from 'next/image'
import shareNow from '@assets/images/share_now.png'
import { useRouter } from 'next/router'

const ShareNow = () => {
  const router = useRouter()
  return (
    <div
      className="flex items-center justify-center mb-6 cursor-pointer mt-0 md:mt-16"
      onClick={() => router.push('/refer-and-earn')}
    >
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
