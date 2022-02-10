import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#648813',
    },
    secondary: {
      main: '#a90409',
    },
    background: {
      default: '#ede5cc',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
