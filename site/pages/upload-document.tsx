import Header from '@modules/Dashboard/components/Header/header'
import Sidebar from '@modules/Dashboard/components/Sidebar/sidebar'
import ContentUploads from '@modules/Dashboard/components/Content/content-upload'
const contentUploads = () => {
  return (
    <>
      <Header title="Step 3: Upload Document" />
      <div className="sticky left-0 h-[calc(100vh-80px)] bg-[#f8f8f8] z-19 sm:flex">
        <Sidebar></Sidebar>
        <ContentUploads></ContentUploads>
      </div>
    </>
  )
}

export default contentUploads
