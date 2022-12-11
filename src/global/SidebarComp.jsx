import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { IconButton, Typography, useTheme, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../theme'

import {
  PersonOutlinedIcon,
  HomeOutlinedIcon,
  ContactsOutlinedIcon,
  ReceiptOutlinedIcon,
  CalendarTodayOutlinedIcon,
  HelpOutlinedIcon,
  BarChartOutlinedIcon,
  PieChartOutlineOutlinedIcon,
  TimelineOutlinedIcon,
  MenuOutlinedIcon,
  MapOutlinedIcon,
  PeopleOutlinedIcon,
} from '../data/icons'

export default function SidebarComp() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  const iconStyle = {
    '&:hover': {
      background: 'none',
      color: '#868dfb',
    },
  }
  const menuItemStyle = {
    ['.ps-menu-button:hover']: {
      background: 'transparent',
    },
  }

  return (
    <Box>
      <Sidebar
        backgroundColor={`${colors.primary[400]}`}
        rootStyles={{
          ['.ps-sidebar-container']: {
            padding: '5px 35px 5px 20px',
          },
        }}
      >
        <Menu>
          <MenuItem
            routerLink={<Link to="/" />}
            rootStyles={menuItemStyle}
          >
            <IconButton sx={iconStyle}>
              <HomeOutlinedIcon />
              Dashboard
            </IconButton>
          </MenuItem>
          {/* Data pages */}
          <p>Data</p>
          <MenuItem
            routerLink={<Link to="/teams" />}
            rootStyles={menuItemStyle}
          >
            <IconButton sx={iconStyle}>
              <PeopleOutlinedIcon />
              Manage Teams
            </IconButton>
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/contacts" />}
            rootStyles={menuItemStyle}
          >
            <IconButton sx={iconStyle}>
              <ContactsOutlinedIcon />
              Contacts Information
            </IconButton>
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/invoices" />}
            rootStyles={menuItemStyle}
          >
            <IconButton sx={iconStyle}>
              <ReceiptOutlinedIcon />
              Invoices Balances
            </IconButton>
          </MenuItem>
          {/* Other pages */}
          <p>Pages</p>
          <MenuItem
            routerLink={<Link to="/form" />}
            rootStyles={menuItemStyle}
          >
            <IconButton sx={iconStyle}>
              <PersonOutlinedIcon />
              Profile Form
            </IconButton>
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/calendar" />}
            rootStyles={menuItemStyle}
          >
            <IconButton sx={iconStyle}>
              <CalendarTodayOutlinedIcon />
              Calendar
            </IconButton>
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/faq" />}
            rootStyles={menuItemStyle}
          >
            <IconButton sx={iconStyle}>
              <HelpOutlinedIcon />
              FAQ Page
            </IconButton>
          </MenuItem>

          {/* Chart pages */}
          <p>Pages</p>
          <MenuItem
            routerLink={<Link to="/bar" />}
            rootStyles={menuItemStyle}
          >
            <IconButton sx={iconStyle}>
              <BarChartOutlinedIcon />
              Bar Chart
            </IconButton>
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/pie" />}
            rootStyles={menuItemStyle}
          >
            <IconButton sx={iconStyle}>
              <PieChartOutlineOutlinedIcon />
              Pie Chart
            </IconButton>
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/line" />}
            rootStyles={menuItemStyle}
          >
            <IconButton sx={iconStyle}>
              <TimelineOutlinedIcon />
              Line Chart
            </IconButton>
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/geo" />}
            rootStyles={menuItemStyle}
          >
            <IconButton sx={iconStyle}>
              <MapOutlinedIcon />
              Geography Chart
            </IconButton>
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  )
}
