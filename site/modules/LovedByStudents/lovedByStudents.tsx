import Card from './card'

const LovedByStudents = () => {
  return (
    <>
      <div className="bg-[#FEF6F7] sm:py-[40px] py-[24px] xl:px-0 px-[10px]">
        <div className="text-[20px] md:text-[32px] font-[700] mb-[16px] lg:mb-[34px] text-center">
          ❤️ Loved by students worldwide
        </div>
        <div className="mx-auto max-w-6xl xl:px-0 px-3 overflow-x-auto">
          <div className="flex mt-2 lg:p-0 gap-5">
            <Card
              testimonial={
                'Participating in the study abroad program was truly a life-changing experience for me. I had the privilege of studying in a foreign country, immersing myself in a new culture, and making lifelong friends from all around the world. The academic opportunities provided were exceptional, and the professors were both knowledgeable and approachable.'
              }
              name={'Rishabh Kumar'}
              designation={'MBBS, East West University'}
            />
            <Card
              testimonial={
                "My decision to join the study abroad program was undoubtedly the best choice I've made during my college years. The international exposure I gained opened my mind to diverse perspectives and helped me become more adaptable to different environments"
              }
              name={'Abhishek Takki'}
              designation={'MBBS, south Kazakhstan medical Academy'}
            />
            <Card
              testimonial={
                "The study abroad experience also allowed me to become more independent, responsible, and confident in my abilities. Exploring the country's cultural heritage, trying new cuisines, and participating in various social activities added an extra layer of excitement to my journey"
              }
              name={'Ashpreet Singh'}
              designation={'MBBS, International Higher School Of Medicine'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LovedByStudents
