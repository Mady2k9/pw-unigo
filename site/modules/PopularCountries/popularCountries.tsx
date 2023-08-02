import CountryCard from './countryCard'
import logo1 from '../../assets/images/image 27.png'
import logo2 from '../../assets/images/image 28.png'
import logo3 from '../../assets/images/image 29.png'
import logo4 from '../../assets/images/image 30.png'
import logo5 from '../../assets/images/image 31.png'
import logo6 from '../../assets/images/image 32.png'

const PopularCountries = () => {
  return (
    <>
      <div className="xl:py-[40px] mx-auto max-w-7xl sm:px-6 px-3 overflow-x-auto">
        <div className=" flex flex-col items-center text-[#1B2124] md:mb-[24px]">
          <p className="text-[20px] sm:text-[32px] font-bold ">
            Popular Countries To Study Abroad
          </p>
          <p className="text-[14px] sm:text-[18px]">
            Explore the countries we offer our services in
          </p>
        </div>
        <div className="flex-wrap flex justify-between">
          <CountryCard logo={'/01.png'} name={'Russia'} />
          <CountryCard logo={'logo2'} name={'Armenia'} />
          <CountryCard logo={'logo3'} name={'Georgia'} />
          <CountryCard logo={'logo4'} name={'Kazakhstan'} />
          <CountryCard logo={'logo5'} name={'Kyrgyzstan'} />
          <CountryCard logo={'logo6'} name={'Uzbekistan'} />
        </div>
      </div>
    </>
  )
}
export default PopularCountries
