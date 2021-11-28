import store from "store";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { NoSsr, ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import Theme from './styles/Theme';

import './index.css'
import Spinner from "components/Spinner";


const App = lazy(() =>
  Promise.all([
    import('./App'),
    new Promise(resolve => setTimeout(resolve, 1200))
  ]).then(([moduleExports]) => moduleExports));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NoSsr>
        <MuiThemeProvider theme={Theme}>
          <ThemeProvider theme={Theme}>
            <Suspense fallback={<Spinner loading />}>
              <App />
            </Suspense>
          </ThemeProvider>
        </MuiThemeProvider>
      </NoSsr>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
