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
                    fontFamily: "Nunito"
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontFamily: "Nunito"
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    fontFamily: "Nunito"
                }
            }
        },
        MuiPagination: {
            styleOverrides: {
                root: {}
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
        }
    }
});

export default theme;
