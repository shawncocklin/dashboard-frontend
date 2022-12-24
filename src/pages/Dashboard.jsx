import React from 'react'
import {
  EmailIcon,
  TrafficIcon,
  PointOfSaleIcon,
  PersonAddIcon,
} from '../data/icons'
import Stats from '../components/Stats'
import Header from '../components/Header'

export default function Dashboard() {
  return (
    <div className="m-6 h-full flex flex-col">
      <Header
        title="Dashboard"
        subtitle="Welcome to your dashboard"
      />
      <div className="flex flex-wrap justify-between gap-4">
        <Stats
          icon={<EmailIcon />}
          stat="12,361"
          statLabel="Emails Sent"
          statChange="+14%"
        />
        <Stats
          icon={<PersonAddIcon />}
          stat="12,361"
          statLabel="Emails Sent"
          statChange="+14%"
        />
        <Stats
          icon={<PointOfSaleIcon />}
          stat="12,361"
          statLabel="Emails Sent"
          statChange="+14%"
        />
        <Stats
          icon={<TrafficIcon />}
          stat="12,361"
          statLabel="Emails Sent"
          statChange="+14%"
        />
      </div>
    </div>
  )
}
