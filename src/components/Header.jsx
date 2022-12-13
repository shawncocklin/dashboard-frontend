import React from 'react'
import { tokens } from '../theme'
import { useTheme } from '@mui/material'

export default function Header({ title, subtitle }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <div>
      <h1
        className="uppercase text-3xl font-bold mb-3"
        style={{ color: colors.grey[100] }}
      >
        {title}
      </h1>
      <p
        className="text-base"
        style={{ color: colors.greenAccent[400] }}
      >
        {subtitle}
      </p>
    </div>
  )
}
