import Image from 'next/image'
const CountryCard = ({ logo, name }: { logo: any; name: string }) => {
  return (
    <>
      <div className="w-[142px] h-[142px] md:min-w-[352px] md:min-h-[352px] relative cursor-pointer">
        <Image src={logo} alt={name} />
        <div className="text-white bg-transparent h-full w-full font-bold absolute top-0 flex text-[24px]">
          <div className="m-auto">{name}</div>
        </div>
      </div>
    </>
  )
}
export default CountryCard
