import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#345CCE',
      text: '#FFFFFF',
    },
    secondary: {
      main: '#919FC7',
      text: '#FFFFFF',
    },
    darkGrey: {
      main: '#8B8F94',
    },
    error: {
      main: red.A400,
    },
  },
  overrides: {
    MuiFormControl: {
      root: {
        height: '48px',
      },
    },
    MuiInputBase: {
      root: {
        height: '48px',
      },
    },
  },
});

export default theme;
