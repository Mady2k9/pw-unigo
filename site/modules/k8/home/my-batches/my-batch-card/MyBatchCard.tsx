import { Button, Card, Typography } from '@components/ui'
import Live from '@assets/images/live.svg'
import EBook from '@assets/images/E-Book.svg'
import Image from 'next/image'
import PencilBoy from '@assets/images/pencilboy.svg'
import { Arrow } from '@components/lotties'
import { BatchType } from '@lib/hooks/batches/useBatches'
import { useRouter } from 'next/router'

const MyBatchCard = ({ batchDetail }: { batchDetail: any }) => {
  const variant = batchDetail?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE

  const router = useRouter()
  const Tag =
    variant === BatchType.SELF_LEARNING ? 'Self Learning' : 'Live Batches'
  return (
    <Card>
      <div className="px-4 py-3 relative">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <Image
              src={variant === BatchType.LIVE ? Live : EBook}
              alt="live_icon"
            />
            <Typography variant="small" weight={600}>
              {Tag}
            </Typography>
          </div>
          <span className="block truncate mb-2 max-w-[80%]">
            <Typography variant="regular" weight={700} capitalize={true}>
              {batchDetail?.name}
            </Typography>
          </span>
          <Button
            size={'tiny'}
            onClick={() => {
              router.push(
                `batches/${batchDetail?.slug}#${
                  variant === BatchType.SELF_LEARNING
                    ? 'study-room'
                    : 'classroom'
                }`
              )
            }}
          >
            <Typography variant="tiny" weight={700}>
              <span className="text-white">Let’s Study</span>
            </Typography>
            <div className="-rotate-90">
              <Arrow />
            </div>
          </Button>
        </div>
        <div className="absolute right-2 -top-5">
          <Image src={PencilBoy} alt="pencilboy" />
        </div>
      </div>
    </Card>
  )
}

export default MyBatchCard
