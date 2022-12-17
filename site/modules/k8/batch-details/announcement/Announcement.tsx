import useAnnouncement from "@lib/hooks/batches/useAnnouncement";
import {Container, LoadingSection, NoData} from "@components/ui";
import {AnnouncementCard} from "@components/common";

const Announcement = ({batchDetails}: { batchDetails: any }) => {
    const {data, isLoading} = useAnnouncement({batchSlug: batchDetails?._id});
    return <Container>
        <div className={'flex flex-col space-y-8'}>
            {
                isLoading ? <LoadingSection/> : data.map((announcement, index) => {
                    return <AnnouncementCard key={index} attachment={announcement.attachment}
                                             createdAt={announcement.createdAt}
                                             announcement={announcement.announcement}/>
                })
            }
            {
                !isLoading && !data?.length && <NoData/>
            }
        </div>
    </Container>
}

export default Announcement
