import { LoadingSection } from '@components/ui'
import { useReferredFriends } from '@lib/hooks/refer-and-earn/useReferredFriends'

import Image from 'next/image'
import ReferredFriendCard from './ReferredFriendCard'

const ReferredFriend = () => {
  const { data, isLoading } = useReferredFriends()

  if (isLoading || !data) {
    return <LoadingSection />
  } else {
    return !!data.length ? (
      <section className="flex items-center justify-center flex-col gap-4 w-full my-8">
        <span className="font-bold text-2xl text-[#333]">Referred Friends</span>
        <div className="flex flex-col gap-4">
          {data?.map((friend: any) => (
            <ReferredFriendCard key={friend._id} friend={friend} />
          ))}
        </div>
      </section>
    ) : (
      <></>
    )
  }
}

export default ReferredFriend
