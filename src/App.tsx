import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Box, useTheme } from '@mui/material';

function App() {
  const theme = useTheme();
  return (
    <Box sx={{width:'100%', height:'100%'}}>
      <HomePage backgroundColor={theme.palette.primary.main}/>
    </Box>
  );
}

export default App;
