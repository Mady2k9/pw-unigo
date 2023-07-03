import BackgroundImage from '@assets/images/register-now-bg.svg'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="bg-cover flex items-center lg:min-h-[90vh] min-h-[100vh]  justify-around"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      {children}
    </div>
  )
}
