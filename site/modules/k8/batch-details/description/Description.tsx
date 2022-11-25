import { Container } from '@components/ui'
import BatchDetailCard from './batch-detail-card/BatchDetailCard'
import CourseDetails from './course-details/CourseDetails'
import DemoVideos from './demo-videos/DemoVideos'
import Faculties from './faculties/Faculties'
import Faq from './faq/Faq'
import Meta from './meta/Meta'

const Description = () => {
  return (
    <Container className="flex flex-col-reverse md:flex-row gap-2">
      <section className="flex flex-col gap-6 w-full">
        <Meta />
        <Faculties />
        <DemoVideos />
        <CourseDetails />
        <Faq />
      </section>
      <section>
        <BatchDetailCard />
      </section>
    </Container>
  )
}

export default Description
