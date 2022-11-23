import { LayoutNoContentPadding } from '@components/common/Layout'
import { Container } from '@components/ui'
import {
  BatchList,
  DemoVideo,
  HomeHeader,
  ShareNow,
  TestimonialSection,
} from '@modules/k8'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <Container className="flex flex-col gap-9 md:gap-14">
      <HomeHeader />
      <BatchList />
      <DemoVideo />
      <TestimonialSection />
      <ShareNow />
    </Container>
  )
}

Home.Layout = LayoutNoContentPadding
