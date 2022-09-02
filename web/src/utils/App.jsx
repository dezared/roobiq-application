import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material';
import RouterNavigator from './RouterNavigator';
import '../styles/index.css';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="cl_application">
        <RouterNavigator />
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  // eslint-disable-next-line
  history: PropTypes.object,
};

export default App;
