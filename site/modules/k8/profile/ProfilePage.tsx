import { Card, Container } from '@components/ui'
import { UserAvatar } from '@components/common/UserAvatar'
import React from 'react'
import ProfileDetails from './ProfileDetails'

const ProfilePage = () => {
  return (
    <Container>
      <Card>
        <div className="grid grid-cols-8 p-2 md:p-6 lg:p-16 gap-4 lg:gap-0">
          <UserAvatar />
          <ProfileDetails />
        </div>
      </Card>
    </Container>
  )
}

export default ProfilePage
