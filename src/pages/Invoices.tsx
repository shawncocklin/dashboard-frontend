import React from 'react'
import Header from '../components/Header'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { tokens } from '../theme'
import { useTheme, Box } from '@mui/material'

import { mockDataInvoices } from '../data/mockData'

export default function Invoices() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-col' },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'cost',
      headerName: 'Cost',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      cellClassName: 'name-col',
      renderCell: ({ row: { cost } }) => {
        return `$${cost}`
      },
    },
    { field: 'date', headerName: 'Date', flex: 1 },
  ]
  const rows = [...mockDataInvoices]
  return (
    <div className="m-6 h-full flex flex-col">
      <Header
        title="Invoices"
        subtitle="List of Invoice Balances"
      />
      <Box
        className="mt-8"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },

          '& .MuiDataGrid-columnHeader': {
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            marginLeft: '2px',
          },
          '& .MuiDataGrid-columnSeparator': {
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          ' & .MuiDataGrid-footerContainer': {
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiDataGrid-row': {
            backgroundColor: colors.blueAccent[900],
          },
          '& .name-col': {
            color: colors.greenAccent[400],
          },
        }}
      >
        <DataGrid
          checkboxSelection={true}
          columns={columns}
          rows={rows}
        />
      </Box>
    </div>
  )
}
