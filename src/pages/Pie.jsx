import React from 'react'
import Header from '../components/Header'
import PieChart from '../components/PieChart'

export default function Pie() {
  return (
    <div className="ml-6 mt-4">
      <Header
        title="Pie Chart"
        subtitle="Simple Pie Chart"
      />
      <div style={{ height: '75vh' }}>
        <PieChart />
      </div>
    </div>
  )
}
