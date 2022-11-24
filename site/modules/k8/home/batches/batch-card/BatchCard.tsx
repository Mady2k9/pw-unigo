/* eslint-disable @next/next/no-img-element */
import { Button, Typography } from '@components/ui'
import style from './BatchCard.module.css'
import discount from '@assets/images/discount.svg'
import live from '@assets/images/live.svg'
import EBook from '@assets/images/E-Book.svg'
import calendar from '@assets/images/calendar.svg'
import student from '@assets/images/student.svg'
import teacher from '@assets/images/teacher.svg'
import meta from '@assets/images/meta.svg'
import Image from 'next/image'
import BatchImage from '@assets/images/batch-image.png'
import Share from '@assets/images/share.svg'
import { useRouter } from 'next/router'
import { BatchType } from '@lib/hooks/batches/useBatches'
import cn from 'clsx'

const K8Card = ({ batchData }: { batchData: any }) => {
  const router = useRouter()
  const variant = batchData?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE
  const redirectTo = () => {
    router.push({
      pathname: `/batches/${batchData?.slug}`,
    })
  }
  return (
    <div
      className={cn(style.cardContainer, {
        ['bg-indigo-50']: variant === BatchType.SELF_LEARNING,
        ['bg-indigo-500']: variant === BatchType.LIVE,
      })}
    >
      <div
        className={cn(style.cardVariantChip, {
          ['border border-indigo-100']: variant === BatchType.SELF_LEARNING,
          ['border border-indigo-500']: variant === BatchType.LIVE,
        })}
      >
        <Image
          src={variant === BatchType.LIVE ? live : EBook}
          objectFit={'contain'}
          alt=""
        />
        <Typography weight={700} variant="tiny">
          {variant === BatchType.LIVE ? (
            <span className="text-black">Live Batches</span>
          ) : (
            <span>Self Learning</span>
          )}
        </Typography>
      </div>
      <div className={style.cardDescriptionContainer}>
        <div className="flex items-center justify-between">
          <Typography>
            <span
              className={cn(style.batchTitle, {
                ['text-white']: variant === BatchType.LIVE,
              })}
            >
              {batchData.name}
            </span>
          </Typography>
          <div className={style.iconsContainer}>
            <div className="rounded-md text-black bg-[#FBDE47] px-2 py-1 text-xs font-bold">
              New
            </div>
            <div className="bg-white rounded-md h-[20px] w-[20px] flex items-center justify-center cursor-pointer">
              <Image src={Share} alt="share_icon" />
            </div>
          </div>
        </div>
        {variant === BatchType.SELF_LEARNING ? (
          <div className="flex  justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold text-[12px] uppercase bg-[#2E2676] p-1 px-1.5 rounded-md w-fit">
                What you get
              </span>
              <ul className="list-disc text-[12px] px-4 font-medium">
                <li>1500+ hours of Recorded Videos</li>
                <li>Interactive Learning Approach</li>
                <li>Learn at your own pace</li>
              </ul>
            </div>
            <div>
              <Image
                src={
                  batchData.previewImage.baseUrl + batchData.previewImage.key
                }
                objectFit={'contain'}
                width={112}
                height={112}
                alt=""
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col-reverse md:flex-row items-start gap-2 justify-between">
            <div className="flex flex-col gap-3 px-2 md:px-0">
              <div className="flex items-center gap-2">
                <Image src={student} alt="" />
                <Typography variant="tiny" weight={600}>
                  <span className="text-white">
                    Class 7th School Preparation
                  </span>
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Image src={calendar} alt="" />
                <Typography variant="tiny" weight={600}>
                  <span className="text-white">
                    <span className="font-normal">Starts on </span> 09 May, 2022
                    . <span className="font-normal">Ends on</span> 31 May, 2023
                  </span>
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Image src={teacher} alt="" />
                <Typography variant="tiny" weight={600}>
                  <span className="text-white">
                    Varun Kumar, Vansh Singh & 2 more
                  </span>
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Image src={meta} alt="" />
                <Typography variant="tiny" weight={600}>
                  <span className="text-white">
                    Live Lectures | Practice Sheets | Doubt Solving
                  </span>
                </Typography>
              </div>
            </div>
            <div className="max-w-full lg:max-w-[140px] h-[134px] lg:h-[80px] ">
              <img
                src={
                  batchData?.previewImage?.baseUrl +
                  batchData?.previewImage?.key
                }
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
      <div className="px-2 md:px-4 py-4 flex flex-col gap-4">
        <div className="flex items-center justify-between md:justify-start gap-8">
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-sm font-medium">
              {variant === BatchType.SELF_LEARNING && (
                <span className="text-[10px] md:text-sm">Starting at</span>
              )}
              <Typography weight={800}>
                <span
                  className={` ${
                    variant === BatchType.SELF_LEARNING
                      ? 'text-base md:text-2xl'
                      : 'text-2xl text-white'
                  }`}
                >
                  ₹{batchData.feeId.total.toFixed()}
                </span>
              </Typography>
              {batchData.feeId.discount > 0 && (
                <Typography variant="tiny" weight={500}>
                  <span className="text-[#A2A1A6] line-through">
                    {batchData.feeId.amount.toFixed()}
                  </span>
                </Typography>
              )}
            </span>
            <span
              className={`text-[10px] md:text-sm font-medium ${
                variant === BatchType.LIVE ? 'text-white' : ''
              }`}
            >
              (For Full Course)
            </span>
          </div>
          {batchData?.feeId?.discount > 0 && (
            <div className="flex items-center justify-center">
              <div className={style.shape}></div>
              <div className="text-white bg-[#46B586] py-2 px-8 rounded-xl flex items-center gap-2 ">
                <Image src={discount} alt="" />
                <Typography variant="small" weight={600}>
                  <span className="text-white">
                    {batchData?.feeId?.discount.toFixed()}% Discount
                  </span>
                </Typography>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button className="w-full" variant="secondary" onClick={redirectTo}>
            Explore
          </Button>
          <Button className="w-full">Buy Now</Button>
        </div>
      </div>
    </div>
  )
}

export default K8Card
