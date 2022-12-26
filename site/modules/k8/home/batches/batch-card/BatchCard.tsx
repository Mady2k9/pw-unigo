/* eslint-disable @next/next/no-img-element */
import { Button, Typography } from '@components/ui'
import style from './BatchCard.module.css'
import live from '@assets/images/live.svg'
import EBook from '@assets/images/E-Book.svg'
import calendar from '@assets/images/calendar.svg'
import teacher from '@assets/images/teacher.svg'
import meta from '@assets/images/meta.svg'
import Image from 'next/image'
import Share from '@assets/images/share.svg'
import { useRouter } from 'next/router'
import { BatchType, Teachers } from '@lib/hooks/batches/useBatches'
import cn from 'clsx'
import placeholderImage from '@assets/images/placeholder.png'
import { DiscountBadge } from '@components/common'
import { priceDisplay } from '@lib/user-utility'
import format from 'date-fns/format'
import { useEffect, useState } from 'react'
import useNotify, { NotificationEnums } from '@lib/useNotify'
import { generateWhatsappLink } from '@lib/utilities'

const K8Card = ({
  batchData,
  loading,
}: {
  batchData: any
  loading?: boolean
}) => {
  const router = useRouter()
  const { showNotification } = useNotify()
  const [teachersToMap, setTeachersToMap] = useState('')
  const variant = batchData?.isSelfLearning
    ? BatchType.SELF_LEARNING
    : BatchType.LIVE
  const Tag =
    variant === BatchType.SELF_LEARNING ? 'Self Learning' : 'Live Batches'
  const redirectTo = () => {
    router.push({
      pathname: `/batches/${batchData?.slug}`,
    })
  }

  const startsOn = format(new Date(batchData?.startDate), 'd LLL, yyyy')
  const endsOn = format(new Date(batchData?.endDate), 'd LLL, yyyy')

  const modifyTeachers = (teachers: Teachers[]) => {
    if (teachers.length === 0) {
      return
    } else if (teachers.length === 1) {
      setTeachersToMap(teachers[0]?.name)
    } else if (teachers.length === 2) {
      setTeachersToMap(`${teachers[0]?.name} & ${teachers[1]?.name}`)
    } else {
      setTeachersToMap(
        `${teachers[0]?.name}, ${teachers[1]?.name} & ${
          teachers.length - 2
        } others`
      )
    }
  }

  const metaToMap = batchData?.meta
    .slice(0, 3)
    .map((m: any) => m.key)
    .join(' | ')

  useEffect(() => {
    modifyTeachers(batchData?.teachers)
  }, [batchData])

  const redirectToOrderSummary = () => {
    router.push(`/batches/${batchData?.slug}/order-summary`)
  }
  return (
    <div
      className={cn(style.cardContainer, 'animated fadeIn duration-500', {
        ['bg-[#F1EDFF]']: variant === BatchType.SELF_LEARNING,
        ['bg-[#5A51AC]']: variant === BatchType.LIVE,
      })}
    >
      <div
        className={cn(style.cardVariantChip, {
          ['border border-indigo-100']: variant === BatchType.SELF_LEARNING,
          ['border border-indigo-700']: variant === BatchType.LIVE,
        })}
      >
        <Image
          src={variant === BatchType.LIVE ? live : EBook}
          objectFit={'contain'}
          alt=""
        />
        <Typography weight={700} variant="tiny">
          {Tag}
        </Typography>
      </div>
      <div className={style.cardDescriptionContainer}>
        <div className="flex items-center justify-between">
          <span
            className={
              (variant === BatchType.LIVE ? 'text-white' : '') + ' line-clamp-1'
            }
          >
            <Typography capitalize={true} variant={'heading3'} weight={700}>
              {truncateString(batchData?.name, 16)}
            </Typography>
          </span>
          <div className={style.iconsContainer}>
            <div className="rounded-md text-black bg-[#FBDE47] px-2 py-1 text-xs font-bold">
              New
            </div>
            <div
              onClick={() => {
                navigator.clipboard.writeText(
                  generateWhatsappLink(batchData?.slug)
                )
                window.open(generateWhatsappLink(batchData?.slug))
                showNotification({
                  description: 'Whatsapp link copied !',
                  type: NotificationEnums.SUCCESS,
                  title: 'Share Link',
                  identifier: generateWhatsappLink(batchData?.slug),
                  onClose: () => {
                    console.log('closed')
                  },
                })
              }}
              className="bg-white rounded-md h-[20px] w-[20px] flex items-center justify-center cursor-pointer"
            >
              <Image src={Share} alt="share_icon" />
            </div>
          </div>
        </div>
        {variant === BatchType.SELF_LEARNING ? (
          <div className="flex justify-between mt-6 ">
            <div className="flex flex-col gap-2 max-w-[70%] ">
              <span className="text-white font-bold text-[12px] uppercase bg-[#2E2676] p-1 px-1.5 rounded-md w-fit">
                What you get
              </span>
              <Typography html={batchData?.byName} />
            </div>
            <div className="h-[112px] w-[112px] relative">
              <Image
                src={
                  batchData
                    ? batchData.previewImage.baseUrl +
                      batchData.previewImage.key
                    : placeholderImage
                }
                objectFit={'contain'}
                layout="fill"
                alt=""
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col-reverse md:flex-row items-start gap-3 justify-between mt-6">
            <div className="flex flex-col gap-3 px-2 md:px-0 ">
              {batchData?.byName && (
                <div className="flex items-center gap-2">
                  <Image src={teacher} alt="" />
                  <Typography variant="tiny" weight={600}>
                    <span className="text-white line-clamp-1">
                      {batchData?.byName}
                    </span>
                  </Typography>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Image src={calendar} alt="" />
                <div className="flex items-center gap-1">
                  <Typography variant="tiny" weight={600}>
                    <span className="text-white">
                      <span className="font-normal">Starts on </span> {startsOn}{' '}
                    </span>
                  </Typography>
                  <div className="h-[4px] w-[4px] bg-white rounded-full"></div>
                  <Typography variant="tiny" weight={600}>
                    <span className="text-white">
                      <span className="font-normal">Ends on</span> {endsOn}
                    </span>
                  </Typography>
                </div>
              </div>
              {metaToMap.length > 0 && (
                <div className="flex items-center gap-2">
                  <Image src={meta} alt="" />
                  <Typography variant="tiny" weight={600}>
                    <span className="text-white line-clamp-1">{metaToMap}</span>
                  </Typography>
                </div>
              )}
            </div>
            <div className="lg:h-[80px] h-[134px] w-full lg:max-w-[140px]">
              <img
                src={
                  batchData
                    ? batchData?.previewImage?.baseUrl +
                      batchData?.previewImage?.key
                    : placeholderImage
                }
                className="h-full w-full"
                alt=""
              />
            </div>
          </div>
        )}
      </div>

      <div className="px-2 md:px-4 pb-4 flex flex-col gap-4">
        <div className="flex items-center gap-12 md:gap-8">
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-sm font-medium">
              {variant === BatchType.SELF_LEARNING && (
                <span className="text-[10px] md:text-sm">Starting at</span>
              )}
              <Typography weight={800}>
                <span
                  className={` ${
                    variant === BatchType.SELF_LEARNING
                      ? 'text-base md:text-2xl text-indigo-500'
                      : 'text-2xl text-white'
                  }`}
                >
                  {priceDisplay(batchData?.feeId?.total)}
                </span>
              </Typography>
              {batchData?.feeId?.discount > 0 && (
                <Typography variant="tiny" weight={500}>
                  <span className="text-[#A2A1A6] line-through">
                    {batchData?.feeId?.amount}
                  </span>
                </Typography>
              )}
            </span>
            {batchData?.priceLabel && (
              <span
                className={`text-[10px] md:text-sm font-medium ${
                  variant === BatchType.LIVE ? 'text-white' : ''
                }`}
              >
                {batchData?.priceLabel}
              </span>
            )}
          </div>
          <DiscountBadge discount={batchData?.feeId?.discount} />
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="w-full"
            inverted={variant === BatchType.LIVE}
            onClick={redirectTo}
          >
            Explore
          </Button>
          <Button
            className="w-full"
            variant="secondary"
            inverted={variant === BatchType.LIVE}
            onClick={redirectToOrderSummary}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default K8Card
