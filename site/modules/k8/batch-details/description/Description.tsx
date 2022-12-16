import { Container } from '@components/ui'
import { BatchDetailModel } from '@lib/hooks/batches/useBatchDetails'
import BatchDetailCard from './batch-detail-card/BatchDetailCard'
import CourseDetails from './course-details/CourseDetails'
import CourseDuration from './course-duration/CourseDuration'
import DemoVideos from './demo-videos/DemoVideos'
import Faculties from './faculties/Faculties'
import Faq from './faq/Faq'
import Meta from './meta/Meta'

const Description = ({ batchDetails }: { batchDetails: BatchDetailModel }) => {
  return (
    <Container className="flex flex-col-reverse lg:flex-row gap-6 mb-8">
      <div className="flex flex-col gap-6 flex-1">
        {!batchDetails?.isSelfLearning &&
          batchDetails?.startDate &&
          batchDetails?.endDate && (
            <CourseDuration
              startDate={batchDetails?.startDate}
              endDate={batchDetails?.endDate}
            />
          )}
        <Meta batchDetail={batchDetails} />
        <Faculties batchSlug={batchDetails?.slug} />
        <DemoVideos batchSlug={batchDetails?.slug} />

        {batchDetails?.description && (
          <CourseDetails courseDetails={batchDetails?.description} />
        )}

        {batchDetails?.faqCat && <Faq categoryId={batchDetails?.faqCat} />}
      </div>
      {!batchDetails?.isPurchased && (
        <div className=" flex-1 md:max-w-[350px]">
          <BatchDetailCard batchDetails={batchDetails} />
        </div>
      )}
    </Container>
  )
}

export default Description
