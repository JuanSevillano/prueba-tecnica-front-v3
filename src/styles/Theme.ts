// eslint-disable-next-line
import type from '@material-ui/lab/themeAugmentation';
import { createTheme, Theme, ThemeOptions } from "@material-ui/core";

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
        MuiOutlinedInput: {
            root: {
                borderRadius: 0,
                borderColor: 'white',
                color: 'white',
                margin: '10px 0px',
                "&$focused": {
                    "color": "white"
                }
            }
        },
        MuiFormLabel: {
            root: {
                color: 'white'
            }
        }
    }
}


let theme: Theme = createTheme(themeOptions);

export default theme; 