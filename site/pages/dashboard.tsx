import Header from '@modules/Dashboard/components/Header/header'
import Sidebar from '@modules/Dashboard/components/Sidebar/sidebar'
import Content from '@modules/Dashboard/components/Content/content'
const Dashboard = () => {
  return (
    <>
      <Header title="Step 1: Profile Details" />
      <div className="sticky left-0 h-[calc(100vh-80px)]  bg-[#f8f8f8] z-19 flex">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    </>
  )
}

export default Dashboard
