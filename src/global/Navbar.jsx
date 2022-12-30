import React, { useContext } from 'react'
import { IconButton, useTheme, Box } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import {
  useAuth,
  useUser,
  UserButton,
  SignInButton,
  SignUpButton,
} from '@clerk/clerk-react'
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
  const { isSignedIn, isLoading, user } = useUser()
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

        {isSignedIn ? (
          <div>
            <IconButton type="button">
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton type="button">
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton type="button">
              <UserButton />
            </IconButton>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <SignInButton className="py-1 px-2 rounded-md font-semibold" />
            <SignUpButton
              className="py-1 px-2 rounded-md font-semibold"
              style={{
                backgroundColor: colors.greenAccent[400],
                color: colors.primary[400],
              }}
            />
          </div>
        )}
      </div>
    </Box>
  )
}
