import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from "@material-ui/core";

const themeOptions: ThemeOptions = {
    palette: {
        type: 'dark'
    },
    overrides: {
        MuiPaper: {
            rounded: {
                borderRadius: 0
            }
        },
        MuiTypography: {
            colorPrimary: {
                fontSize: '2rem',
                color: 'white',
                fontWeight: 'bold'
            }
        },
        MuiTextField: {

        }
    }
}


let theme: Theme = createTheme(themeOptions);

export default theme; 