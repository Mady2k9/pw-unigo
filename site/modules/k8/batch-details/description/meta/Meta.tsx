import { Typography } from '@components/ui'

const Meta = ({ metaData }: { metaData: any }) => {
  const meta = metaData.filter((data: any) => data.value)

  return meta.length > 0 ? (
    <div className="flex flex-col gap-4 animated fadeIn duration-200">
      <Typography variant="subHeading" weight={700}>
        This Course Includes
      </Typography>
      <div className="flex items-center justify-center md:justify-start">
        {meta.map(
          (
            { id, key, value }: { id: number; key: string; value: string },
            idx: number
          ) => (
            <div
              key={id}
              className={`flex flex-col items-center ${
                idx < meta.length - 1 && 'border-r'
              } ${idx !== 0 && 'pl-6'} ${idx !== meta.length - 1 && 'pr-6'}`}
            >
              <Typography variant="regular" weight={700}>
                {value}
              </Typography>
              <Typography variant="small" weight={500}>
                <span className="text-[#999]">{key}</span>
              </Typography>
            </div>
          )
        )}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Meta
