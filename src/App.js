import React from 'react';
import {SplashScreen} from './screens/index';
import {ThemeProvider} from 'styled-components';
import { theme } from './styles/theme';
import StoryBook from '../storybook';

const App = () => {
    return (
      <ThemeProvider theme={theme}>
        <StoryBook />
      </ThemeProvider>
   
  );
};

export default App;
