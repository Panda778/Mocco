
import { createTheme } from "@mui/material";


export const defaultTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3374ED',
            black: '#33333'
        },
        secondary: {
            main: '#9E8C8C'
        },
        success: {
            main: '#5DF888',
            dark: '#333333'
        }
       
   }
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        
        primary: {
            main: '#3374ED',
            black: '#33333'
        },
        secondary: {
            main: '#fff'
        },
        success: {
            main: '#5DF888',
            dark: '#333333'
        }
       
   }
})

export const backgroundColorAppBar = createTheme({
    palette: {

    }
})