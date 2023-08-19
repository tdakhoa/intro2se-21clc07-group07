import React from "react";
import { styled, Typography as MuiTypography } from "@mui/material";

const StyledTypography = styled(MuiTypography)(({ theme, color, size, weight, transform, align }) => ({
    margin: 0,
    textTransform: transform === "uppercase" ? "uppercase" : "none",
    color: color === "primary" ? "var(--palette-01)" : color === "secondary" ? "var(--palette-02)" : color,
    fontSize:
        size === "h1"
            ? "var(--text-h1)"
            : size === "h2"
            ? "var(--text-h2)"
            : size === "h3"
            ? "var(--text-h3)"
            : size === "h4"
            ? "var(--text-h4)"
            : size === "h5"
            ? "var(--text-h5)"
            : size === "h6"
            ? "var(--text-h6)"
            : size === "p"
            ? "var(--text-para)"
            : size === "small"
            ? "var(--text-small)"
            : size === "tiny"
            ? "var(--text-tiny)"
            : size,
    fontWeight:
        weight === "extraBold"
            ? 800
            : weight === "bold"
            ? 700
            : weight === "semiBold"
            ? 600
            : weight === "medium"
            ? 500
            : weight === "regular"
            ? 400
            : weight === "light"
            ? 300
            : 300,
    textAlign:
        align === "left"
            ? "left"
            : align === "center"
            ? "center"
            : align === "right"
            ? "right"
            : align === "justify"
            ? "justify"
            : "inherit",
    [theme.breakpoints.down("lg")]: {
        fontSize:
            size === "h1"
                ? "var(--text-h1)"
                : size === "h2"
                ? "var(--text-h2)"
                : size === "h3"
                ? "var(--text-h3)"
                : size === "h4"
                ? "var(--text-h4)"
                : size === "h5"
                ? "var(--text-h5)"
                : size === "h6"
                ? "var(--text-h6)"
                : size === "p"
                ? "var(--text-para)"
                : size === "small"
                ? "var(--text-small)"
                : size === "tiny"
                ? "var(--text-tiny)"
                : "inherit",
        fontWeight:
            weight === "extraBold"
                ? 800
                : weight === "bold"
                ? 700
                : weight === "semiBold"
                ? 600
                : weight === "medium"
                ? 500
                : weight === "regular"
                ? 400
                : weight === "light"
                ? 300
                : "inherit",
        textAlign:
            align === "left"
                ? "left"
                : align === "center"
                ? "center"
                : align === "right"
                ? "right"
                : align === "justify"
                ? "justify"
                : "inherit"
    },
    [theme.breakpoints.down("md")]: {
        fontSize:
            size === "h1"
                ? "var(--text-h1)"
                : size === "h2"
                ? "var(--text-h2)"
                : size === "h3"
                ? "var(--text-h3)"
                : size === "h4"
                ? "var(--text-h4)"
                : size === "h5"
                ? "var(--text-h5)"
                : size === "h6"
                ? "var(--text-h6)"
                : size === "p"
                ? "var(--text-para)"
                : size === "small"
                ? "var(--text-small)"
                : size === "tiny"
                ? "var(--text-tiny)"
                : "inherit",
        fontWeight:
            weight === "extraBold"
                ? 800
                : weight === "bold"
                ? 700
                : weight === "semiBold"
                ? 600
                : weight === "medium"
                ? 500
                : weight === "regular"
                ? 400
                : weight === "light"
                ? 300
                : "inherit",
        textAlign:
            align === "left"
                ? "left"
                : align === "center"
                ? "center"
                : align === "right"
                ? "right"
                : align === "justify"
                ? "justify"
                : "inherit"
    }
}));

const Typography = ({
    component = "p",
    color = "inherit",
    size,
    weight = "regular",
    transform = "none",
    align,
    sx = {},
    children,
    ...props
}) => {
    return (
        <StyledTypography
            component={component}
            color={color}
            size={size}
            weight={weight}
            transform={transform}
            align={align}
            sx={sx}
            {...props}>
            {children}
        </StyledTypography>
    );
};

export default Typography;
