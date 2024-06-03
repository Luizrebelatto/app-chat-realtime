import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './src/routes';
import { ThemeProvider } from "styled-components/native"
import theme from './src/globals/theme';
import { AuthContextProvider } from './src/context/authContext';

export default function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    </AuthContextProvider>
  );
}