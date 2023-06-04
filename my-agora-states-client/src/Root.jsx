import { StrictMode } from 'react';
import ThemeProvider from './context/ThemeProvider.jsx';
import { GlobalStyle } from './styles/globalStyle';
import { NormalizeStyle } from './styles/normalizeStyle';
import Home from './pages/Home.jsx';

function Root() {
  return (
    <StrictMode>
      <ThemeProvider>
        <GlobalStyle />
        <NormalizeStyle />
        <Home />
      </ThemeProvider>
    </StrictMode>
  );
}

export default Root;