import Header from '@modules/Dashboard/components/Header/header'
import Sidebar from '@modules/Dashboard/components/Sidebar/sidebar'
import Content from '@modules/Dashboard/components/Content/content'
import ProfileView from '@modules/auth/components/ProfileView'
const profileDetails = () => {
  return (
    <ProfileView onSubmit={undefined} />
    /*  <>
      <Header title="Step 1: Profile Details" />
      <div className="sticky left-0 h-[calc(100vh-80px)] bg-[#f8f8f8] z-19 sm:flex">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    </> */
  )
}

export default profileDetails
