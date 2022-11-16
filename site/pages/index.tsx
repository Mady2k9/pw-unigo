import {Layout} from '@components/common'
import dynamic from "next/dynamic";
import {Container, Tabs} from "@components/ui";
import TabHeader from "@components/ui/TabHeader";
import {useState} from "react";
import {TabHeaderVariant} from "@components/ui/TabHeader/TabHeader";
import {LayoutNoContentPadding} from "@components/common/Layout";
import {StarIcon} from "@heroicons/react/24/outline";

const AnimatedCanvas = dynamic(() => import("@modules/auth/animateCanvas"), {
    ssr: false
});

export default function Home() {
    const TabItems = [{
        name: 'Description',
        key: 'description'
    }, {
        name: 'Study Room',
        key: 'study-room'
    }];
    const ContentTabItems = [{
        name: 'Maths',
        key: 'maths',
        svgImage: <StarIcon className={'h-6 w-6'}/>
    }, {
        name: 'Science',
        key: 'science',
        svgImage: <StarIcon className={'h-6 w-6'}/>
    }];
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [contentTabIndex, setContentTabIndex] = useState(0);
    return (
        <div>
            <TabHeader
                title={'Maths & Science'}
                items={TabItems}
                variant={TabHeaderVariant.round}
                currentIndex={currentTabIndex}
                onChange={(index) => {
                    setCurrentTabIndex(index);
                }}
            />
            <Container>
                <div className={'my-4'}>
                    <Tabs items={ContentTabItems} currentIndex={contentTabIndex} onChange={(index) => {
                        setContentTabIndex(index);
                    }}/>
                </div>
            </Container>
        </div>
    )
}

Home.Layout = LayoutNoContentPadding
