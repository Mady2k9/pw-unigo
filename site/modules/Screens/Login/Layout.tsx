import s from '@modules/Screens/components.module.css' // TODO - Changes module to tailwind

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-full">
      <div className="sm:w-1/2 h-screen bg-[#FFF2C2] items-center sm:flex  hidden">
        <div className="mx-auto lg:w-1/2 sm:w-full sm:px-4">
          <div className={s.login_left_heading}>
            <img
              className={s.shine_stars}
              src="/shine_stars.gif"
              alt="shine-stars"
            />
            The Best Singular Resource For Celebrating Your Accomplishments
          </div>
          <div className={s.login_left_subheading}>
            PW Marvels is a one-of-a-kind platform for making your journey from
            student to success, a joyous one!
          </div>
        </div>
        <img
          className="absolute bottom-0 ml-[20px] xl:h-[264px] md:h-[164px] "
          src="/trophy.svg"
          alt="trophy"
        />
        <img
          className="absolute right-[47%] bottom-[5%] xl:h-[206px] md:h-[150px] "
          src="/login-arrow.svg"
          alt="login-arrow"
        />
      </div>
      <div className="sm:w-1/2 h-screen items-center flex w-full">
        {children}
      </div>
    </div>
  )
}
