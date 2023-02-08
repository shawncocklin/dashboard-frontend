import React from 'react'
import Header from '../components/Header'
import GeoChart from '../components/GeoChart'

export default function Geo() {
  return (
    <div className="m-6 h-full flex flex-col">
      <Header
        title="Geography"
        subtitle="Simple Geography Chart"
      />
      <div
        style={{ height: '75vh' }}
        className="mt-6 border-solid border-1 border-white rounded-md"
      >
        <GeoChart />
      </div>
    </div>
  )
}
