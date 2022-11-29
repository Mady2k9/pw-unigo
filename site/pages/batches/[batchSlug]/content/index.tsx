import {LayoutNoContentPadding} from '@components/common/Layout'
import {LoadingSection, TabHeader} from '@components/ui'
import {TabHeaderVariant} from '@components/ui/TabHeader/TabHeader'
import {BatchType} from '@lib/hooks/batches/useBatches'
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import {Suspense, useState} from 'react'

const TAB_ITEMS = {
    selfLearning: {
        items: [
            {name: 'Lectures', key: 'lectures'},
            {name: 'Assignment', key: 'assignment'},
            {name: 'Practice', key: 'practice'},
        ],
    },
    live: {
        items: [
            {name: 'Lectures', key: 'lectures'},
            {name: 'Notes', key: 'notes'},
            {name: 'DHA', key: 'dha'},
            {name: "DHA's Sol", key: 'dha-sol'},
        ],
    },
}

const Lectures = dynamic(()=>import('@modules/k8/content/lectures/Lectures'))
const Assignment = dynamic(()=>import('@modules/k8/content/assignment/Assignment'))
const Practice = dynamic(()=>import('@modules/k8/content/practice/Practice'))
const Notes = dynamic(()=>import('@modules/k8/content/notes/Notes'))

const Content = () => {
    const tabHeaderVariant = TabHeaderVariant
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const router = useRouter()
    const {contentType} = router.query

    const renderItems = () => {
        if (contentType === BatchType.SELF_LEARNING) {
            switch (currentIndex) {
                case 0:
                    return (
                        <Suspense fallback="loading...">
                            <Lectures/>
                        </Suspense>
                    )
                case 1:
                    return (
                        <Suspense fallback="loading...">
                            <Assignment/>
                        </Suspense>
                    )
                case 2:
                    return (
                        <Suspense fallback="loading...">
                            <Practice/>
                        </Suspense>
                    )
                default:
                    return <></>
            }
        } else {
            switch (currentIndex) {
                case 0:
                    return (
                        <Suspense fallback="loading...">
                            <Lectures/>
                        </Suspense>
                    )
                case 1:
                    return (
                        <Suspense fallback="loading...">
                            <Notes/>
                        </Suspense>
                    )
                case 2:
                    return (
                        <Suspense fallback="loading...">
                            <Notes/>
                        </Suspense>
                    )

                case 3:
                    return (
                        <Suspense fallback="loading...">
                            <Lectures/>
                        </Suspense>
                    )
                default:
                    return <></>
            }
        }
    }

    if(!TAB_ITEMS[contentType as BatchType]){
        return <LoadingSection/>
    }
    return (
        <div className="flex flex-col gap-6">
            <TabHeader
                title="Coordinate Geometry"
                items={TAB_ITEMS[contentType as BatchType].items}
                currentIndex={currentIndex}
                onChange={(index: number) => setCurrentIndex(index)}
                variant={tabHeaderVariant.round}
            />
            <div>{renderItems()}</div>
        </div>
    )
}

export default Content

Content.Layout = LayoutNoContentPadding
