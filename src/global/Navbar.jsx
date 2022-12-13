import React, { useContext } from 'react'
import { IconButton, useTheme, Box } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import {
  PersonOutlinedIcon,
  LightModeOutlinedIcon,
  DarkModeOutlinedIcon,
  NotificationsOutlinedIcon,
  SettingsOutlinedIcon,
  SearchIcon,
} from '../data/icons'

import { ColorModeContext, tokens } from '../theme'

export default function Navbar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
    >
      <div className="flex items-center p-2 rounded-sm ">
        <InputBase
          sx={{
            flex: 1,
            backgroundColor: colors.primary[400],
            padding: '8px',
          }}
          placeholder="Search"
        />
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </div>
      <div className="flex justify-between items-center">
        <IconButton
          type="button"
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark' ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton type="button">
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <PersonOutlinedIcon />
        </IconButton>
      </div>
    </Box>
  )
}
