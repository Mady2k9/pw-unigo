import Layout from '@components/common/Layout'
import { Container, Typography } from '@components/ui'
import TeacherCard from '@modules/k8/batch-details/description/teacher-card/TeacherCard'

const Faculties = () => {
  return (
    <Container className="flex flex-col gap-7">
      <Typography variant="heading3" weight={700}>
        Top Faculties
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-20">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((teacher: any) => (
          <TeacherCard key={teacher} />
        ))}
      </div>
    </Container>
  )
}

export default Faculties

Faculties.Layout = Layout
