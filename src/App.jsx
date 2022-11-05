import Footer from "./components/Footer";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ptBR } from '@mui/material/locale';
import Home from "./pages/Home";


function App() {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      background: {
        default: '#FFF',
        paper: '#F5F6F9',
      },
      primary: {
        main: '#1065bb',
        darker: '#3b0304',

      },
      neutral: {
        main: '#1065bb',
        contrastText: '#fff',
      },
    },
  }, ptBR);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header />
        <Home />
        <Footer />
    </ThemeProvider>
  );
}

export default App;