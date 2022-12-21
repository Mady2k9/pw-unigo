import { Layout } from '@components/common'
import { ProfilePage } from '@modules/k8'
import React from 'react'

const Profile = () => {
  return (
    <Layout isProtected={true}>
      <ProfilePage />
    </Layout>
  )
}

export default Profile
