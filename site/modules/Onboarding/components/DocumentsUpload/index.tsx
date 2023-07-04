import Header from '@modules/Onboarding/components/Header/header'
import SidebarNow from '@modules/Onboarding/components/Sidebar/sidebar-now'

import { useEffect, useMemo, useState } from 'react'

const DocumentsUpload = () => {
  const [profileData, setProfileData] = useState<any>({
    email: '',
    class: '',
    alternateNumber: '',
  })

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (typeof user === 'string') {
      setProfileData(JSON.parse(user))
    }
  }, [])

  const name = useMemo(() => {
    return profileData?.firstName || '' + profileData?.lastName
  }, [profileData?.firstName, profileData?.lastName])

  const onSubmit = () => {
    /**
     * MAKE DRAFT API TO SAVE DATA
     */
  }

  return (
    <>
      <Header title="Step 3: Upload Documents" onSubmit={onSubmit} />
      <div className="sticky left-0 h-[calc(100vh-80px)] bg-[#f8f8f8] z-19 sm:flex">
        <SidebarNow name={name} phone={profileData?.primaryNumber} />
      </div>
    </>
  )
}

export default DocumentsUpload
