import Card  from "./card"

const SixthComp = () => {
  return (
    <><div className="bg-[#FEF6F7] py-[24px]">
      <div className="w-fit text-[20px] md:text-[32px] font-[700] h-fit m-auto  md:mb-[16ppx] lg:mb-[32px]">
          ❤️ Loved by students worldwide
        </div>
      <div className="w-full h-fit flex flex-col   overflow-y-auto  ">
        <div className="m-auto flex p-[16px] lg:p-0">
          <Card name={'Ashpreet Singh'} comment={'MS in UX Design, Washington University'}/>
          <Card name={'Ashpreet Singh'} comment={'MS in UX Design, Washington University'}/>
          <Card name={'Ashpreet Singh'} comment={'MS in UX Design, Washington University'}/>
          </div>
      </div>
      </div>
    </>
  )
}

export default SixthComp
