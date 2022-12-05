import { Card, Typography } from '@components/ui'
import Live from '@assets/images/live.svg'
import Image from 'next/image'
import Link from 'next/link'
import PencilBoy from '@assets/images/pencilboy.svg'
import { Arrow } from '@components/lotties'

const MyBatchCard = () => {
  return (
    <Card>
      <div className="px-4 py-3 relative">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <Image src={Live} alt="live_icon" />
            <Typography variant="small" weight={600}>
              Live Batches
            </Typography>
          </div>
          <Typography variant="regular" weight={700}>
            Little Yodha Genius
          </Typography>
          <Link href={''}>
            <div className="bg-indigo-600 flex items-center w-fit py-1 px-3 rounded-lg mt-4">
              <Typography variant="tiny" weight={700}>
                <span className="text-white">Let’s Study</span>
              </Typography>
              <div className="-rotate-90">
                <Arrow />
              </div>
            </div>
          </Link>
        </div>
        <div className="absolute right-2 -top-5">
          <Image src={PencilBoy} alt="pencilboy" />
        </div>
      </div>
    </Card>
  )
}

export default MyBatchCard
