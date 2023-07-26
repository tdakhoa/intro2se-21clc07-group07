import React from "react";
import { Alert, Snackbar as MuiSnackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { snackbarData } from "../../redux/features/snackbarSlice";

const Snackbar = () => {
    const dispatch = useDispatch();
    const handleCloseSuccess = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(snackbarData(""));
    };

    const open = useSelector((state) => state.snackbar.value);

    return (
        <MuiSnackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleCloseSuccess}>
            <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: "100%" }}>
                {open}
            </Alert>
        </MuiSnackbar>
    );
};

export default Snackbar;
