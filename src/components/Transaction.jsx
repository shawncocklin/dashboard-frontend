import React from 'react'
import { tokens } from '../theme'
import { useTheme } from '@mui/material'

export default function Transaction({ id, user, date, amount }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <div
      className="flex items-center justify-between p-4"
      style={{ backgroundColor: colors.primary[400] }}
    >
      <div>
        <p
          className="text-base font-bold"
          style={{ color: colors.greenAccent[400] }}
        >
          {id}
        </p>
        <p className="text-sm">{user}</p>
      </div>
      <p className="text-sm">{date}</p>
      <div
        className="p-2 rounded"
        style={{ backgroundColor: colors.greenAccent[500] }}
      >
        <p className="text-sm">{amount}</p>
      </div>
    </div>
  )
}
