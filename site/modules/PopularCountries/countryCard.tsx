import Image from 'next/image'
const CountryCard = ({ logo, name }: { logo: string; name: string }) => {
  return (
    <>
      <div className="w-[158px] h-[158px] sm:w-4/12 sm:h-[352px] relative">
        <img src={logo} alt={name} />
        <div className="text-white bg-transparent h-full w-full font-bold absolute top-0 flex text-[24px]">
          <div className="m-auto">{name}</div>
        </div>
      </div>
    </>
  )
}
export default CountryCard
