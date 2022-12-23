import React from 'react'
import Header from '../components/Header'
import BarChart from '../components/BarChart'

export default function Bar() {
  return (
    <div className="m-6 h-full flex flex-col">
      <Header
        title="Bar Chart"
        subtitle="Simple Bar Chart"
      />
      <div style={{ height: '75vh' }}>
        <BarChart />
      </div>
    </div>
  )
}
