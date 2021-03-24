import React from 'react';
import {SplashScreen} from './screens/index';
import {ThemeProvider} from 'styled-components';
import { theme } from './styles/theme';

const App = () => {
    return (
      <ThemeProvider theme={theme}>
        <SplashScreen />
      </ThemeProvider>
   
  );
};

export default App;
