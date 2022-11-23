import { Container } from '@components/ui'
import {BatchList, HomeHeader} from "@modules/k8";
import {Layout} from "@components/common";

export default function Home() {
  return (
    <Layout isProtected={true}>
      <Container className="flex flex-col gap-9 md:gap-14">
        <HomeHeader />
        <BatchList />
        {/*<DemoVideo />*/}
        {/*<TestimonialSection />*/}
        {/*<ShareNow />*/}
      </Container>
    </Layout>
  )
}

