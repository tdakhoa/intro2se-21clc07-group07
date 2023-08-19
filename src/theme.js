import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#176076"
        },
        secondary: {
            main: "#176076"
        },
        error: {
            main: "#FF9494"
        },
        mode: "light"
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "Open Sans"
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontFamily: "Open Sans"
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    fontFamily: "Open Sans"
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {}
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiInputLabel-root": {
                        color: "rgba(255, 255, 255, 0.70)"
                    }
                }
            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    "&.Mui-checked": {
                        color: "var(--palette-03)"
                    }
                }
            }
        }
    }
});

export default theme;
