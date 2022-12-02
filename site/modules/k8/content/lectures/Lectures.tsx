import {Card, Container, NoData, Typography} from '@components/ui'
import style from './Lecture.module.css'
import VideoCard from '../components/video-card/VideoCard'
import {BatchType} from '@lib/hooks/batches/useBatches'
import {useRouter} from 'next/router'
import {Lecture} from '@lib/hooks/batches/useBatchContents'
import {ModalSearch} from "@components/common";
import {useEffect, useMemo, useState} from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import cn from "clsx";

const Lectures = ({videoData}: { videoData: Lecture[] }) => {
    const router = useRouter()
    const {contentType} = router.query
    const [enableSearch, setEnableSearch] = useState(false);
    const [query, setQuery] = useState('');
    useEffect(() => {

    }, [query]);
    const ItemsWrapper = useMemo(() => {
        return <div className={cn(
            style.lectureContainer, {
                ['grid-cols-2 md:grid-cols-3 lg:grid-cols-4']: !enableSearch,
                ['grid-cols-1 md:grid-cols-2 lg:grid-cols-3']: enableSearch,
            }
        )}>
            {videoData &&
                videoData.map((video: any) => (
                    <VideoCard key={video._id} videoDetails={video}/>
                ))}
        </div>
    }, [videoData, enableSearch]);
    if (videoData.length === 0) return <NoData/>
    return (
        <Container className="flex flex-col gap-4 mb-6">
            {contentType === BatchType.SELF_LEARNING && (
                <div
                    className="relative text-gray-400 flex space-x-2 border rounded-md border-gray-200 px-4 py-2 shadow w-[400px] max-w-full"
                    onClick={() => setEnableSearch(true)}>
                    <MagnifyingGlassIcon
                        className="pointer-events-none h-5 w-5 "
                        aria-hidden="true"
                    />
                    <Typography>Search for Lectures</Typography>
                </div>
            )}
            {
                enableSearch ? <ModalSearch query={query} setQuery={setQuery} onClose={() => setEnableSearch(false)}
                                            itemsLength={videoData?.length || 0}>
                    {ItemsWrapper}
                </ModalSearch> : ItemsWrapper}

        </Container>
    )
}

export default Lectures
