import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Results from './pages/Results';
import { Container, CssBaseline, GlobalStyles, Switch, ThemeProvider, createTheme } from '@mui/material';
import { useMemo, useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        }
      }),
    [mode]
  );

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: "background.default" },
          }}
        />
          <Container>
            <div style={{display:'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '20px'}}>
              <b>Theme ({mode === "light" ? "☀️" : "🌚"}):</b><Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
            </div>
              <BrowserRouter>
                <Routes>
                  <Route path={"/results"} element={<Results />} />
                  <Route index path={"/"} element={<Home />} />
                </Routes>
              </BrowserRouter>
          </Container>
      </ThemeProvider>
  );
}

export default App;
