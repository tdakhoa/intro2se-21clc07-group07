import React from "react";
import { styled, Button as MuiButton } from "@mui/material";

const Button = ({
    onClick,
    txcolor = "primary",
    bgcolor = "primary",
    borderradius = "30px",
    disabled,
    children,
    startIcon,
    endIcon,
    sx = {},
    ...props
}) => {
    return (
        <MyButton
            txcolor={txcolor}
            bgcolor={bgcolor}
            borderradius={borderradius}
            disabled={disabled}
            sx={sx}
            onClick={onClick}
            {...props}>
            {startIcon}
            {children}
            {endIcon}
        </MyButton>
    );
};

export default Button;

const MyButton = styled(MuiButton)((props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: props.borderradius,
    cursor: "pointer",
    padding: "0.5rem 1rem",
    minWidth: "0",
    color: "white",
    textTransform: "initial",
    backgroundColor:
        props.bgcolor === "primary"
            ? "var(--palette-01)"
            : props.bgcolor === "secondary"
            ? "var(--palette-02)"
            : props.bgcolor === "white"
            ? "var(--palette-06)"
            : props.bgcolor,
    border:
        props.txcolor === "primary"
            ? "2px solid var(--palette-01)"
            : props.txcolor === "secondary"
            ? "2px solid var(--palette-02)"
            : props.txcolor === "white"
            ? "2px solid var(--palette-06)"
            : `2px solid ${props.txcolor}`,
    fontFamily: "Nunito",
    "&:hover": {
        backgroundColor: "transparent",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor:
            props.bgcolor === "primary"
                ? "var(--palette-01)"
                : props.bgcolor === "secondary"
                ? "var(--palette-02)"
                : props.bgcolor === "white"
                ? "var(--palette-06)"
                : "inherit",
        color:
            props.bgcolor === "primary"
                ? "var(--palette-01)"
                : props.bgcolor === "secondary"
                ? "var(--palette-02)"
                : props.bgcolor === "white"
                ? "var(--palette-06)"
                : props.bgcolor
    }
}));
