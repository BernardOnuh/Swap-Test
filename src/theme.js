import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
      primary: {
        main: "#ff0000",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#9e9e9e",
        contrastText: "#ffffff",
      },
    },
  });

export default theme;