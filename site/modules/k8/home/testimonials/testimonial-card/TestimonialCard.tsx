import user from '@assets/images/user.svg'
import { Card, Typography } from '@components/ui'
import { StarIcon } from '@heroicons/react/24/solid'
import style from './TestimonialCard.module.css'

const TestimonialCard = ({ testimonialData }: { testimonialData: any }) => {
  return (
    <Card>
      <div className={style.testimonialCard}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={user.src}
          alt="avatar"
          className="absolute h-[68px] md:h-[77px] -top-5"
        />
        <div className="flex flex-col gap-1 ml-[100px] max-w-full">
          <div className="">
            <Typography variant="regular" weight={700}>
              <span className="truncate">{testimonialData.name}</span>
            </Typography>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i: any) => (
              <StarIcon
                key={i}
                height={14}
                width={14}
                className={`text-[#6a4fe27a] ${i < 4 ? 'text-[#7252F7]' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className="w-full">
          <Typography weight={500}>
            <span className="text-[#464646] text-xs md:text-sm">
              {testimonialData.desc}
            </span>
          </Typography>
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard
