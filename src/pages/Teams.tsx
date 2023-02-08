import React from 'react'
import Header from '../components/Header'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { tokens } from '../theme'
import { useTheme, Box } from '@mui/material'
import { mockDataTeam } from '../data/mockData'
import {
  AdminPanelSettingsOutlinedIcon,
  LockOpenOutlinedIcon,
  SecurityOutlinedIcon,
} from '../data/icons'

export default function Teams() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
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
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <div
            className="w-3/5 mx-auto p-2 flex justify-center items-center"
            style={{
              backgroundColor:
                access === 'admin'
                  ? colors.greenAccent[400]
                  : colors.greenAccent[700],
              borderRadius: '4px',
            }}
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <p
              className="font-bold ml-1"
              style={{ color: colors.grey[100] }}
            >
              {access}
            </p>
          </div>
        )
      },
    },
  ]
  const rows = [...mockDataTeam]

  return (
    <div className="m-6 flex flex-col">
      <Header
        title="Team"
        subtitle="Managing the Team Members"
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
