import Header from '@modules/Dashboard/components/Header/header'
import SidebarUpload from '@modules/Dashboard/components/Sidebar/sidebar-upload'
import ContentUploads from '@modules/Dashboard/components/Content/content-upload'
const contentUploads = () => {
  return (
    <>
      <Header title="Step 3: Upload Document" />
      <div className="sticky left-0 h-[calc(100vh-80px)] bg-[#f8f8f8] z-19 sm:flex">
        <SidebarUpload name="John Snow" phone="+91 7864546474" />
        <ContentUploads></ContentUploads>
      </div>
    </>
  )
}

export default contentUploads
