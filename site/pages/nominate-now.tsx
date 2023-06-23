
import { NominateLeft, NominateRight } from 'modules'

function nominateNow() {
  return (
    <>
      <div className="flex max-[640px]:flex-col">
        <NominateLeft />
        <NominateRight />
      </div>
    </>
  )
}

export default nominateNow
