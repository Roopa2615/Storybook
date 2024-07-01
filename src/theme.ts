// src/theme.ts
import { createTheme, Theme } from '@mui/material/styles';

// Define your custom theme here
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#dc004e',
    },
},
  typography: {
    h1: {
      fontSize: '2rem',
    },
  },
});

export default theme;
