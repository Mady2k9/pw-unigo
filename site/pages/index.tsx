import { Container } from '@components/ui'
import {
  BatchList,
  DemoVideo,
  HomeHeader,
  ShareNow,
  TestimonialSection,
} from '@modules/k8'
import { Layout } from '@components/common'
import HomeBackground from '@modules/k8/home/background'

export default function Home() {
  return (
    <Layout isProtected={true} background={<HomeBackground />}>
      <Container className="flex flex-col gap-9 md:gap-14">
        <HomeHeader />
        <BatchList />
        <DemoVideo />
        <TestimonialSection />
        <ShareNow />
      </Container>
    </Layout>
  )
}
