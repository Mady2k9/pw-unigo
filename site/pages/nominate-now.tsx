import Header from '@modules/Dashboard/components/Header/header'
import Sidebar from '@modules/Dashboard/components/Sidebar/sidebar'
import ContentNow from '@modules/Dashboard/components/Content/content-now'
const profileDetails = () => {
  return (
    <>
      <Header title="Step 2: Nominate Now" />
      <div className="sticky left-0 h-[calc(100vh-80px)] bg-[#f8f8f8] z-19 sm:flex">
        <Sidebar></Sidebar>
        <ContentNow></ContentNow>
      </div>
    </>
  )
}

export default profileDetails
