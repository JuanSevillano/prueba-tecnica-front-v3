import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from "@material-ui/core";

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#101010'
        }
    }
}


let theme: Theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

export default theme; 