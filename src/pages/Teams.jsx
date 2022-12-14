import React from 'react'
import Header from '../components/Header'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../theme'
import { useTheme, Box } from '@mui/material'
import { mockDataTeam } from '../data/mockData'

export default function Teams() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'age', headerName: 'Age', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'access', headerName: 'Access Level', flex: 1 },
  ]
  const rows = [...mockDataTeam]

  return (
    <div className="ml-6 mt-4 h-full flex flex-col">
      <Header
        title="Team"
        subtitle="Managing the Team Members"
      />
      <div className="h-1/2">
        <DataGrid
          columns={columns}
          rows={rows}
        />
      </div>
    </div>
  )
}
