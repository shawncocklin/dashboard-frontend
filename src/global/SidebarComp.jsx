import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { IconButton, Typography, useTheme, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../theme'
import avatar from '../assets/avatar2.jpg'

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

import Item from '../components/Item'

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
    fontSize: '14px',
  }
  const menuItemStyle = {
    ['.ps-menu-button:hover']: {
      background: 'none',
      color: '#868dfb',
    },
    ['.ps-menu-button']: {
      backgroundColor: 'transparent',
    },
  }

  return (
    <Box>
      <Sidebar
        defaultCollapsed={isCollapsed}
        backgroundColor={`${colors.primary[400]}`}
        className="text-sm"
      >
        <Menu>
          <MenuItem
            rootStyles={menuItemStyle}
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <div className="flex justify-between items-center uppercase text-xl cursor-pointer">
                <p style={{ color: colors.grey[100] }}>Dashboard</p>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </div>
            )}
          </MenuItem>
          {!isCollapsed && (
            <div className="flex flex-col items-center mb-6 text-center">
              <img
                className="rounded-full w-24"
                src={avatar}
                alt=""
              />
              <p className="text-3xl font-bold mt-3">User Name</p>
              <p
                className="text-base"
                style={{ color: colors.greenAccent[400] }}
              >
                Very Fancy Title
              </p>
            </div>
          )}

          <div style={{ paddingLeft: isCollapsed ? undefined : '10%' }}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={menuItemStyle}
            />

            {/* Data pages */}
            <p style={{ paddingLeft: isCollapsed ? '20px' : undefined }}>
              Data
            </p>

            <Item
              title="Manage Teams"
              to="/teams"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={menuItemStyle}
            />

            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={menuItemStyle}
            />

            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={menuItemStyle}
            />

            {/* Other pages */}
            <p style={{ paddingLeft: isCollapsed ? '20px' : undefined }}>
              Pages
            </p>

            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={menuItemStyle}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={menuItemStyle}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={menuItemStyle}
            />

            {/* Chart pages */}
            <p style={{ paddingLeft: isCollapsed ? '20px' : undefined }}>
              Charts
            </p>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={menuItemStyle}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={menuItemStyle}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={menuItemStyle}
            />
            <Item
              title="Geography Chart"
              to="/geo"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={menuItemStyle}
            />
          </div>
        </Menu>
      </Sidebar>
    </Box>
  )
}
