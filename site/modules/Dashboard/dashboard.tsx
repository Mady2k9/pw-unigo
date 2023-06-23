import React from 'react'
import { Header } from './components'
import Container from '@components/ui/Container/Container'
export interface DashboardProps {
  data: any
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <div>
      <Header data={''} />
      dashboard
    </div>
  )
}

export default Dashboard
