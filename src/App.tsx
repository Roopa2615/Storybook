import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{width:'100%', height:'100%'}}>
      <HomePage backgroundColor='#FFFFFF'/>
    </Box>
  );
}

export default App;
