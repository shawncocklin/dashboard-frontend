import React from 'react'
import Header from '../components/Header'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../theme'
import { useTheme, Box } from '@mui/material'

import { mockDataContacts } from '../data/mockData'

export default function Contacts() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const rows = [...mockDataContacts]
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'registrarId', headerName: 'Registrar ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-col' },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'zipCode', headerName: 'Zip Code', flex: 1 },
  ]
  return (
    <div className="m-6 h-full flex flex-col">
      <Header
        title="Contacts"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        className="mt-8"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiButton-text': {
            color: colors.grey[100],
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
          components={{ Toolbar: GridToolbar }}
          columns={columns}
          rows={rows}
        />
      </Box>
    </div>
  )
}
