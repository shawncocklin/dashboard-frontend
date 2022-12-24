import React from 'react'
import { tokens } from '../theme'
import { useTheme, Box } from '@mui/material'

export default function Stats({ icon, stat, statLabel, statChange }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <div
      className="flex items-center justify-between p-6 flex-1"
      style={{ backgroundColor: colors.primary[400] }}
    >
      <div className="flex flex-col items-start gap-2">
        <span
          className="text-xl"
          style={{ color: colors.greenAccent[400] }}
        >
          {icon}
        </span>
        <p className="text-xl font-bold">{stat}</p>
        <p
          className="text-base"
          style={{ color: colors.greenAccent[400] }}
        >
          {statLabel}
        </p>
      </div>
      <div className="flex flex-col items-end gap-8">
        <div
          className="circle w-10 h-10 rounded-full"
          style={{ backgroundColor: colors.blueAccent[200] }}
        ></div>
        <p
          className="italic text-base"
          style={{ color: colors.greenAccent[400] }}
        >
          {statChange}
        </p>
      </div>
    </div>
  )
}
