import React from 'react'
import Header from '../components/Header'
import LineChart from '../components/LineChart'

export default function Line() {
  return (
    <div className="m-6 h-full flex flex-col">
      <Header
        title="Line Chart"
        subtitle="Simple Line Chart"
      />
      <div style={{ height: '75vh' }}>
        <LineChart />
      </div>
    </div>
  )
}
