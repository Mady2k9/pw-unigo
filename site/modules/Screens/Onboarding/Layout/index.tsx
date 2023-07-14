import { useEffect, useMemo, useState } from 'react'
import { Sidebar } from '../Components'

type LayoutProps = {
  children: React.ReactNode
  header: React.ReactNode
}

const Layout = ({ children, header }: LayoutProps) => {
  const [userData, setUserData] = useState<any>({})
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (typeof user === 'string') {
      setUserData(JSON.parse(user))
    }
  }, [])

  const name = useMemo(() => {
    return userData?.firstName || '' + userData?.lastName
  }, [userData?.firstName, userData?.lastName])

  return (
    <>
      {header}
      <div className="sticky left-0 h-[calc(100vh-80px)] sm:bg-[#f8f8f8] bg-white  z-19 sm:flex">
        <Sidebar name={name} phone={userData?.primaryNumber} />
        {children}
      </div>
    </>
  )
}

export default Layout
