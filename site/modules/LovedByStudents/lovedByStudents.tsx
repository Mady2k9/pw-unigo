import Card from './card'

const LovedByStudents = () => {
  return (
    <>
      <div className="bg-[#FEF6F7] sm:py-[40px] py-[24px]">
        <div className="text-[20px] md:text-[32px] font-[700] mb-[16px] lg:mb-[34px] text-center">
          ❤️ Loved by students worldwide
        </div>
        <div className="mx-auto max-w-6xl xl:px-0 px-3 overflow-x-auto">
          <div className="flex mt-2 lg:p-0 gap-5">
            <Card
              testimonial={
                'Studying abroad with [Study Abroad Program Name] was a life-changing experience for me. The program provided an exceptional blend of academic excellence, cultural immersion, and personal growth.'
              }
              name={'Ashpreet Singh'}
              designation={'MS in UX Design, Washington University'}
            />
            <Card
              testimonial={
                'Studying abroad with [Study Abroad Program Name] was a life-changing experience for me. The program provided an exceptional blend of academic excellence, cultural immersion, and personal growth.'
              }
              name={'Ashpreet Singh'}
              designation={'MS in UX Design, Washington University'}
            />
            <Card
              testimonial={
                'Studying abroad with [Study Abroad Program Name] was a life-changing experience for me. The program provided an exceptional blend of academic excellence, cultural immersion, and personal growth.'
              }
              name={'Ashpreet Singh'}
              designation={'MS in UX Design, Washington University'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LovedByStudents
