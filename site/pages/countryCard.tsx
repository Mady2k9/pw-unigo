import Image from 'next/image'
const CountryCard = ({ logo, name }: { logo: any; name: string }) => {
  return (
    <>
      <div className="w-[158px] h-[158px] md:w-[352px] md:h-[352px] relative m-[8px] sm:m-[12px]">
        <Image src={logo} alt={name} />
        <div className="text-white bg-transparent h-full w-full font-bold absolute top-0 flex text-[24px]">
          <div className="m-auto">{name}</div>
        </div>
      </div>
    </>
  )
}
export default CountryCard
