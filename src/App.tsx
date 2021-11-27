import React from "react";
import { Paper, StylesProvider, ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import Theme from './styles/Theme';
import styled, { ThemeProvider } from "styled-components";



const StyledPaper = styled(Paper)`
${({ theme }) => `
  background-color: ${theme.palette.primary.main};
  padding: 20px;
`}`

const App = () => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={Theme}>
        <ThemeProvider theme={Theme}>
          <div>
            <p>Prueba técnica de LaLiga</p>
            <StyledPaper />
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
