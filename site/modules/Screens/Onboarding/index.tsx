import React from 'react'
import { Header, Sidebar } from './Components'

type OnboardingProps = {
  mainContent: React.ReactNode
}
const Onboarding = ({ mainContent }: OnboardingProps) => {
  return (
    <div>
      <Header
        title={''}
        handleEditForm={function (navBarText: string): void {
          throw new Error('Function not implemented.')
        }}
        profileData={undefined}
        isEditEnabled={false}
        navBarText={''}
        shouldDisabled={false}
      />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar name={''} phone={''} />
        </div>
        <div className="col-span-9">{mainContent}</div>
      </div>
    </div>
  )
}

export default Onboarding
