import { Footer } from '@components/common'
import Header from '@components/common/Header/Header'
import Breadcrumb from '@modules/Breadcrumb/breadcrumb'
import EligibilityContent from '@modules/Eligibility/eligibility'

const items = [{ name: 'Eligibility', url: '/' }]

const Eligibility = () => {
  return (
    <>
      <Header variant="MARVELSHeader" />
      <Breadcrumb items={items} title="Eligibility" homeLink="/" />
      <EligibilityContent />
      <Footer variant={'MARVELSFooter'} />
    </>
  )
}

export default Eligibility
