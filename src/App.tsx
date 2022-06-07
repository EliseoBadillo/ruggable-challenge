import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import RepoSearchForm from "./components/RepoSearchForm";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <RepoSearchForm />
  </ThemeProvider>
);

export default App;
