import { createContext, useMemo, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navar';
import { ThemeProvider, createTheme } from '@mui/material/styles'
export const ColorModeContext = createContext({ toggleColorMode: () => { } });
function App() {

  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>s
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
