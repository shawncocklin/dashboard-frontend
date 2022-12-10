import { ColorModeContext, useMode } from './theme'

// maybe add CssBaseline if moving entirely away from tailwind (or if MUI components used will not style correctly)
import { ThemeProvider, CssBaseline } from '@mui/material'

import './App.css'
import { Navbar } from './global'

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline here if needed **see comment at top** */}
        <CssBaseline>
          <div className="app">
            <Navbar />
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
