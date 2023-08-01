import Coma from '../../assets/images/coma.svg'
import Image from 'next/image'
const Card = ({ name, comment }: { name: string; comment: string }) => {
  return (
    <>
      <div className=" w-[300px] h-[280px] md:h-[314px] mr-[16px] md:mr-[20px] md:w-[360px]  p-[16px] md:p-[24px] bg-white">
        <div className="w-[40px] h-[30px] mb-[14px] ">
          <Image src={Coma} alt="quote icon" />
        </div>
        <div className="text-[14px] md:text-[16px] mb-[24px]">
          Studying abroad with [Study Abroad Program Name] was a life-changing
          experience for me. The program provided an exceptional blend of
          academic excellence, cultural immersion, and personal growth.
        </div>
        <div className="text-[16px] md:text-[18px] font-[700]">{name}</div>
        <div className="text-[#757575] text-[14px] md:text-[16px]">
          {comment}
        </div>
      </div>
    </>
  )
}

export default Card
