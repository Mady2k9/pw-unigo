import { useEffect, useMemo, useState } from 'react'
import { Sidebar } from '../Components'
import ImportantNoticeData from '@modules/ImportantNotices/importantNoticeData'

type LayoutProps = {
  children: React.ReactNode
  header: React.ReactNode
  navBarText: string
  isRegistrationEnded: boolean
}

const Layout = ({
  children,
  header,
  navBarText,
  isRegistrationEnded,
}: LayoutProps) => {
  const [userData, setUserData] = useState<any>({})
  /* const [show, setShow] = useState(false) */

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (typeof user === 'string') {
      setUserData(JSON.parse(user))
    }
  }, [])
  /* const openImportantNotices = () => {
    setShow(!show)
  } */

  const [showModal, setShowModal] = useState(false)
  const showDataModal = () => {
    console.log('show modal fire', showModal)
    setShowModal(!showModal)

    /*  if (showModal) {
      setShowModal(false)
    } */
  }

  const name = useMemo(() => {
    return userData?.firstName || '' + userData?.lastName
  }, [userData?.firstName, userData?.lastName])

  return (
    <>
      {header}
      {showModal === true ? (
        <ImportantNoticeData closeModal={showDataModal} />
      ) : (
        ''
      )}

      <div className="sticky left-0 h-[calc(100vh-80px)] sm:h-100vh sm:bg-[#f8f8f8] bg-white  z-19 sm:flex mt-[48px] sm:mt-0">
        <Sidebar
          isRegistrationEnded={isRegistrationEnded}
          name={name}
          phone={userData?.primaryNumber}
          closeModal={showDataModal}
          email={userData?.email}
          navBarText={navBarText}
        />
        {children}
      </div>
    </>
  )
}

export default Layout
