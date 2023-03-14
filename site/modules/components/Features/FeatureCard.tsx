import React from 'react'

const FeatureCard = ({
  feature,
}: {
  feature: { title: string; description: string; image: any }
}) => {
  return (
    <div className="flex items-start space-x-5 rounded-lg bg-white p-5 md:min-h-[200px] h-full">
      <img
        src={feature.image.src}
        className="object-contain max-w-[68px] "
        alt=""
      />
      <div className="flex flex-col max-w-[472px] ">
        <span className="text-md md:text-2xl font-bold">{feature.title}</span>
        <span className=" text-[12px] md:text-small font-semibold mt-2 md:mt-3 text-[#757575] leading-[18px]">
          {feature.description}
        </span>
      </div>
    </div>
  )
}

export default FeatureCard
