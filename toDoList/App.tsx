import React from 'react';

import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from '@/config/styles/theme';

import HomeScreen from '@/presentational/screens/HomeScreen';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
