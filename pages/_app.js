import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Crea un tema de MUI personalizado (colores neutros)
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul suave
    },
    background: {
      default: '#f5f5f5', // Fondo gris claro
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Gestión Estudiantes y Cursos</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
