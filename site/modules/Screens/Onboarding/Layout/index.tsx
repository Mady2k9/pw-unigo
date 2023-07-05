import { Sidebar } from '../components'

type LayoutProps = {
  children: React.ReactNode
  header: React.ReactNode
  name: string
  phone: string
}

const Layout = ({ children, header, name, phone }: LayoutProps) => {
  return (
    <>
      {header}
      <div className="sticky left-0 h-[calc(100vh-80px)] bg-[#f8f8f8] z-19 sm:flex">
        <Sidebar name={name} phone={phone} />
        {children}
      </div>
    </>
  )
}

export default Layout
