import React from 'react'
import { ColorModeContext, useMode } from './theme'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { ClerkProvider } from '@clerk/clerk-react'

import './App.css'
import { Navbar, SidebarComp } from './global'
import {
  Dashboard,
  Teams,
  Invoices,
  Contacts,
  Bar,
  ProfileForm,
  Line,
  Pie,
  Faq,
  Geo,
  CalendarPage,
} from './pages'

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ClerkProvider
      frontendApi={import.meta.env.VITE_REACT_APP_CLERK_FRONTEND_API}
    >
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <div className="app">
              <SidebarComp />
              <main className="content">
                <Navbar />
                <Routes>
                  <Route
                    path="/"
                    element={<Dashboard />}
                  />
                  <Route
                    path="/teams"
                    element={<Teams />}
                  />
                  <Route
                    path="/contacts"
                    element={<Contacts />}
                  />
                  <Route
                    path="/invoices"
                    element={<Invoices />}
                  />
                  <Route
                    path="/form"
                    element={<ProfileForm />}
                  />
                  <Route
                    path="/calendar"
                    element={<CalendarPage />}
                  />
                  <Route
                    path="/faq"
                    element={<Faq />}
                  />
                  <Route
                    path="/bar"
                    element={<Bar />}
                  />
                  <Route
                    path="/pie"
                    element={<Pie />}
                  />
                  <Route
                    path="/line"
                    element={<Line />}
                  />
                  <Route
                    path="/geo"
                    element={<Geo />}
                  />
                </Routes>
              </main>
            </div>
          </CssBaseline>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ClerkProvider>
  )
}

export default App
