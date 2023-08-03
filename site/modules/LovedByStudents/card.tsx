import Coma from '../../assets/images/coma.svg'
import Image from 'next/image'
const Card = ({
  name,
  testimonial,
  designation,
}: {
  name: string
  testimonial: string
  designation: string
}) => {
  return (
    <>
      <div className="p-[16px] md:p-[24px] border border-[#B7B7B7] rounded-md bg-white sm:min-w-[360px] min-w-[300px]">
        <div className="w-[40px] h-[30px] mb-[14px] ">
          <Image src={Coma} alt="quote icon" />
        </div>
        <div className="text-[14px] md:text-[16px] mb-[24px]">
          {testimonial}
        </div>
        <div className="text-[16px] md:text-[18px] font-[700]">{name}</div>
        <div className="text-[#757575] text-[14px] md:text-[16px]">
          {designation}
        </div>
      </div>
    </>
  )
}

export default Card
