import useBatches, {BatchType} from '@lib/hooks/batches/useBatches'
import BatchCard from '../batch-card/BatchCard'
import style from './BatchList.module.css'
import {LoadingSection} from "@components/ui";

const BatchList = () => {
    const {data: selfPacedBatches, isLoading: selfPacedBatchesLoading} =
        useBatches({
            cohortId: process.env.NEXT_PUBLIC_K8_COHORT_ID,
            contentType: BatchType.SELF_LEARNING,
        })

    const {data: liveBatches, isLoading: liveBatchesLoading} = useBatches({
        cohortId: process.env.NEXT_PUBLIC_K8_COHORT_ID,
        contentType: BatchType.LIVE,
    })

    return (
        <div className={style.cardContainer}>
            {
                (selfPacedBatchesLoading && liveBatchesLoading) && <div className={'col-span-2'}>
                    <LoadingSection/>
                </div>
            }
            {selfPacedBatches.map((data: any) => (
                <BatchCard
                    key={data._id}
                    batchData={data?.batchId}
                />
            ))}
            {liveBatches.map((data: any) => (
                <BatchCard key={data._id} batchData={data?.batchId}/>
            ))}
        </div>
    )
}

export default BatchList
