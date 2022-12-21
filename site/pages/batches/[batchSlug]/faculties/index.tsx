import Layout from '@components/common/Layout'
import { Container, LoadingSection, Typography } from '@components/ui'
import useBatchDetails from '@lib/hooks/batches/useBatchDetails'
import TeacherCard from '@modules/k8/batch-details/description/teacher-card/TeacherCard'
import { useRouter } from 'next/router'

const Faculties = () => {
  const router = useRouter()
  const { batchSlug } = router.query

  const { data, isLoading } = useBatchDetails({
    batchSlug: batchSlug as string,
      enabled: !!batchSlug
  })

  if (isLoading) <LoadingSection />

  const teachers = data?.subjects
    .map((subject: any) => [...subject.teacherIds])
    .flat()
  return (
    <Container className="flex flex-col gap-7">
      <Typography variant="heading3" weight={700}>
        Top Faculties
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-20">
        {teachers &&
          teachers.map((teacher: any) => (
            <TeacherCard key={teacher._id} teacherData={teacher} />
          ))}
      </div>
    </Container>
  )
}

export default Faculties

Faculties.Layout = Layout
