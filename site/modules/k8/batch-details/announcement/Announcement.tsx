import useAnnouncement from "@lib/hooks/batches/useAnnouncement";
import {Container, LoadingSection} from "@components/ui";
import {AnnouncementCard} from "@components/common";

const Announcement = ({batchDetails}: { batchDetails: any }) => {
    const {data, isLoading} = useAnnouncement({batchSlug: batchDetails?._id});
    console.log(data)
    return <Container>
        <div className={'flex flex-col space-y-8'}>
            {
                isLoading ? <LoadingSection/> : data.map((announcement, index) => {
                    return <AnnouncementCard key={index} attachment={announcement.attachment} createdAt={announcement.createdAt} announcement={announcement.announcement}/>
                })
            }
        </div>
    </Container>
}

export default Announcement
