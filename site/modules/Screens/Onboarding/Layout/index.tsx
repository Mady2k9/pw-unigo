import { useEffect, useMemo, useState } from 'react'
import { Sidebar } from '../Components'
import ImportantNoticeData from '@modules/ImportantNotices/importantNoticeData'

type LayoutProps = {
  children: React.ReactNode
  header: React.ReactNode
  navBarText: string
}

const Layout = ({ children, header, navBarText }: LayoutProps) => {
  const [userData, setUserData] = useState<any>({})
  const [show, setShow] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (typeof user === 'string') {
      setUserData(JSON.parse(user))
    }
  }, [])
  const openImportantNotices = () => {
    setShow(!show)
  }

  const name = useMemo(() => {
    return userData?.firstName || '' + userData?.lastName
  }, [userData?.firstName, userData?.lastName])

  return (
    <>
      {header}
      {show === true ? <ImportantNoticeData /> : ''}

      <div className="sticky left-0 h-[calc(100vh-80px)] sm:bg-[#f8f8f8] bg-white  z-19 sm:flex">
        <Sidebar
          name={name}
          phone={userData?.primaryNumber}
          openImportantNotices={openImportantNotices}
          email={userData?.email}
          navBarText={navBarText}
        />
        {children}
      </div>
    </>
  )
}

export default Layout
