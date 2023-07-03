import React from 'react'
import { Header, Sidebar } from './components'

type OnboardingProps = {
  mainContent: React.ReactNode
}
const Onboarding = ({ mainContent }: OnboardingProps) => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">{mainContent}</div>
      </div>
    </div>
  )
}

export default Onboarding
