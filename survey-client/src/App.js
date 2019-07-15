import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import HeaderAppBar from "./components/header/headerAppBar"
import theme from "./styles/customMuiTheme";
import AppRouter from "./config";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderAppBar appTitle="Suvery Papers" />
      <Container>
        <BrowserRouter>
          <Route path="/survey/*" exact component={AppRouter} />
          <Redirect from="/" to="/survey/home" />
        </BrowserRouter>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
