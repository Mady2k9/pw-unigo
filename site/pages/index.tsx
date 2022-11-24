import {Container} from '@components/ui'
import {BatchList, DemoVideo, HomeHeader} from "@modules/k8";
import {Layout} from "@components/common";
import HomeBackground from "@modules/k8/home/background";

export default function Home() {
    return (
        <Layout isProtected={true} background={<HomeBackground/>}>
            <Container className="flex flex-col gap-6 md:gap-8">
                <HomeHeader/>
                <BatchList/>
                <div/>
                <DemoVideo/>
                {/*<TestimonialSection />*/}
                {/*<ShareNow />*/}
            </Container>
        </Layout>
    )
}

