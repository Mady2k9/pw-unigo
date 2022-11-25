import { Typography } from '@components/ui'

const META = [
  { id: 1, key: 'Lectures', value: '100+' },
  { id: 2, key: 'Quizzes', value: '50+' },
  { id: 3, key: 'Worksheets', value: '20+' },
]

const Meta = () => {
  return (
    <div className="flex flex-col gap-4 animated fadeIn duration-200">
      <Typography variant="subHeading" weight={700}>
        This Course Includes
      </Typography>
      <div className="flex items-center justify-center md:justify-start">
        {META.map(
          (meta: { id: number; key: string; value: string }, idx: number) => (
            <div
              key={meta.id}
              className={`flex flex-col items-center ${
                idx <= META.map.length && 'border-r'
              } ${idx !== 0 && 'pl-6'} ${idx !== META.length - 1 && 'pr-6'}`}
            >
              <Typography variant="regular" weight={700}>
                {meta.value}
              </Typography>
              <Typography variant="small" weight={500}>
                <span className="text-[#999]">{meta.key}</span>
              </Typography>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Meta
