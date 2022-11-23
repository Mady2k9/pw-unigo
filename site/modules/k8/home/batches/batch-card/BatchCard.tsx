/* eslint-disable @next/next/no-img-element */
import { Button } from '@components/ui'
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

const K8Card = ({
  variant,
  batchData,
}: {
  variant: string
  batchData: any
}) => {
  const router = useRouter()

  const redirectTo = () => {
    batchData?.isSelfLearning
      ? router.push({
          pathname: `/batches/${batchData?.slug}`,
          query: { contentType: 'selfLearning' },
        })
      : router.push({
          pathname: `/batches/${batchData?.slug}`,
          query: { contentType: 'live' },
        })
  }
  return (
    <div
      className={`${style.cardContainer} ${
        variant === 'selfLearning'
          ? 'bg-[#F2EDFF] text-black'
          : 'bg-indigo-600 text-white'
      }`}
    >
      <div
        className={`${style.cardVariantChip} ${
          variant === 'selfLearning' ? style.lightBorder : style.darkBorder
        }`}
      >
        <Image
          src={variant === 'live' ? live : EBook}
          objectFit={'contain'}
          alt=""
        />
        <span>{variant === 'live' ? 'Live Batches' : 'Self Learning'}</span>
      </div>
      <div className={style.cardDescriptionContainer}>
        <div className="flex items-center justify-between">
          <span className={style.batchTitle}>{batchData.name}</span>
          <div className={style.iconsContainer}>
            <div className="rounded-md text-black bg-[#FBDE47] px-2 py-1 text-xs font-bold">
              New
            </div>
            <div className="bg-white rounded-md h-[20px] w-[20px] flex items-center justify-center cursor-pointer">
              <Image src={Share} alt="share_icon" />
            </div>
          </div>
        </div>
        {variant === 'selfLearning' ? (
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
            <div className="max-w-[140px]">
              <Image
                src={
                  batchData.previewImage.baseUrl + batchData.previewImage.key
                }
                objectFit={'contain'}
                width={'100%'}
                height={'100%'}
                alt=""
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col-reverse md:flex-row items-start  justify-between">
            <div className="flex flex-col gap-1 text-[12px] font-semibold px-2 md:px-0">
              <div className="flex items-center gap-2">
                <Image src={student} alt="" />
                <span>Class 7th School Preparation</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={calendar} alt="" />
                <span>
                  <span className="font-normal">Starts on </span> 09 May, 2022 .{' '}
                  <span className="font-normal">Ends on</span> 31 May, 2023
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={teacher} alt="" />
                <span>Varun Kumar, Vansh Singh & 2 more</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={meta} alt="" />
                <span>Live Lectures | Practice Sheets | Doubt Solving</span>
              </div>
            </div>
            <div className="max-w-[140px]">
              <Image src={BatchImage} objectFit={'contain'} alt="" />
            </div>
          </div>
        )}
      </div>
      <div className="px-2 md:px-6 py-4 flex flex-col gap-4">
        <div className="flex items-center justify-between md:justify-start gap-8">
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-sm font-medium">
              {variant === 'selfLearning' && (
                <span className="text-[10px] md:text-sm">Starting at</span>
              )}
              <span
                className={` font-extrabold ${
                  variant === 'selfLearning'
                    ? 'text-indigo-400 text-base md:text-2xl'
                    : 'text-2xl'
                }`}
              >
                ₹{batchData.feeId.total.toFixed()}
              </span>
              {batchData.feeId.discount > 0 && (
                <span className="text-[#A2A1A6] text-xs font-light line-through">
                  {batchData.feeId.amount.toFixed()}
                </span>
              )}
            </span>
            <span className="text-[10px] md:text-sm font-medium">
              (For Full Course)
            </span>
          </div>
          {batchData?.feeId?.discount > 0 && (
            <div className="flex items-center justify-center">
              <div className={style.shape}></div>
              <div className="text-white text-sm font-semibold bg-[#46B586] py-2 px-8 rounded-xl flex items-center gap-2 ">
                <img src={discount.src} alt="" />
                <span>{batchData?.feeId?.discount.toFixed()}% Discount</span>
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
