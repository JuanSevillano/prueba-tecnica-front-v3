import React from "react";
import { NoSsr, ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import Theme from './styles/Theme';
import { ThemeProvider } from "styled-components";
import Login from "pages/Login/Login";
import AppLayout from "hoc/AppLayout";


const App = () => {
  return (
    <NoSsr>
      <MuiThemeProvider theme={Theme}>
        <ThemeProvider theme={Theme}>
          <AppLayout>

            <Login />

          </AppLayout>

        </ThemeProvider>
      </MuiThemeProvider>
    </NoSsr>
  );
};

export default App;
