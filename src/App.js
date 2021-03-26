import React from 'react';
import {HomeScreen} from './screens/index';
import {ThemeProvider} from 'styled-components';
import { theme } from './styles/theme';
import StoryBook from '../storybook';

const App = () => {
    return (
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
   
  );
};

export default App;
