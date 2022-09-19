import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

function App() {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}
export default App;