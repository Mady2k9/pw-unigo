import React from 'react'
import { Header } from './components'
export interface DashboardProps {
  data: any
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <div>
      <Header title={''} />
      dashboard
    </div>
  )
}

export default Dashboard
