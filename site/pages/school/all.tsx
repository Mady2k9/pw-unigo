import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import Allschool from '@modules/components/School/AllSchool'

const SeeAll = () => {
  return (
    <div>
      <div className="mb-3 sticky top-0 bg-white z-50">
        <Header variant="SIP" />
      </div>
      <div className="h-[calc(100vh - 75px)] overflow-y-scroll">
        <Allschool />
        <Footer variant="SIP" />
      </div>
    </div>
  )
}

export default SeeAll
