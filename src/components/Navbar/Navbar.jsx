import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled, Box, AppBar, useScrollTrigger, IconButton, Backdrop, Divider, Fade, Drawer } from "@mui/material";
import { SearchOutlined, KeyboardArrowUp } from "@mui/icons-material";

import logo from "../../../public/logo.png";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

const homeData = [
    { title: "Home", link: "/" },
    { title: "Podcasts", link: "/podcasts" },
    { title: "Playlists", link: "/playlists" },
    { title: "Hosts", link: "/hosts" },
    { title: "About Us", link: "/aboutus" },
    { title: "FAQ", link: "/faq" }
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const { asPath } = useRouter();
    const [prior, setPrior] = useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200
    });

    useEffect(() => {
        if (open) setPrior(true);
        else
            setTimeout(function () {
                setPrior(false);
            }, 500);
    }, [open]);

    return (
        <>
            <AppBarDesktop trigger={trigger} prior={prior}>
                <Link href="/">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Image priority src={logo} alt="logo" width={200} />
                    </Box>
                </Link>

                <StyledNavContainer>
                    {homeData.map((item, i) => (
                        <NavItem trigger={trigger} key={i} content={item} asPath={asPath}></NavItem>
                    ))}
                    <StyledNavItem trigger={trigger} sx={{ "&:before": { bottom: "-10px" } }}>
                        <SearchOutlined />
                    </StyledNavItem>
                </StyledNavContainer>

                <Box sx={{ display: "flex" }}>
                    <Link href="/register">
                        <Button
                            bgcolor="transparent"
                            sx={{
                                borderColor: "transparent",
                                color: "var(--palette-03)",
                                "&:hover": { borderColor: "transparent", color: "var(--palette-03)" }
                            }}>
                            Register
                        </Button>
                    </Link>
                    <Link href="/signin">
                        <Button
                            bgcolor="transparent"
                            sx={{
                                borderColor: "var(--palette-03)",
                                color: "var(--palette-03)",
                                minWidth: "6rem",
                                "&:hover": { borderColor: "var(--palette-03)", color: "var(--palette-03)" }
                            }}>
                            Sign In
                        </Button>
                    </Link>
                </Box>
            </AppBarDesktop>

            <Fade in={trigger && !open}>
                <ScrollTop size="small" onClick={() => window.scrollTo(0, 0)}>
                    <KeyboardArrowUp />
                </ScrollTop>
            </Fade>
        </>
    );
};
export default NavBar;

const NavItem = ({ content = { title: "", link: "" }, sx = {}, trigger, asPath, ...props }) => {
    return (
        <StyledNavItem trigger={trigger} {...props}>
            <Link href={content.link}>
                <Typography
                    component="h1"
                    weight="semiBold"
                    sx={{ color: asPath === content.link ? "var(--palette-03)" : "#fff" }}>
                    {content.title}
                </Typography>
            </Link>
        </StyledNavItem>
    );
};

const drawerWidth = 280;

const AppBarDesktop = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== "prior" && prop !== "trigger"
})(({ theme, trigger, prior }) => ({
    position: "fixed",
    width: "100%",
    transition: "all .4s ease-in-out",
    background: "transparent",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4rem",
    boxShadow: trigger ? "4px 4px 25px rgba(255, 255, 255, 0.6)" : "none",
    backgroundColor: trigger ? "#000" : "transparent",
    zIndex: prior ? "10001" : "10002",
    padding: "1rem 3rem",
    [theme.breakpoints.down("sm")]: {
        padding: "1rem",
        paddingLeft: "2rem"
    }
}));

const StyledNavContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    padding: "0 4rem",
    [theme.breakpoints.down("md")]: {
        padding: "2rem 0"
    }
}));

const AppBarMobile = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "prior" && prop !== "trigger"
})(({ prior }) => ({
    position: "fixed",
    zIndex: prior ? 10002 : 0,
    height: "100vh",
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box"
    }
}));

const AppBarMobileHeader = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem"
}));

const ScrollTop = styled(IconButton)(() => ({
    color: "var(--palette-06)",
    backgroundColor: "#000",
    position: "fixed",
    bottom: 25,
    right: 25,
    zIndex: 100000,
    boxShadow: "0px 0px 15px rgba(255,255,255,0.6)",
    transition: "all .4s ease-in-out !important",
    border: "2px solid transparent",
    "&:hover": {
        color: "#000",
        backgroundColor: "#fff"
    }
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: "var(--palette-06)",
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "inline-flex"
    }
}));

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
    color: "var(--palette-06)",
    zIndex: 10002,
    position: "fixed",
    height: "100vh"
}));

const StyledNavItem = styled(Box, {
    shouldForwardProp: (prop) => prop !== "trigger"
})(({ theme, trigger }) => ({
    position: "relative",
    cursor: "pointer",
    flexGrow: "1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "10rem",
    padding: "1rem 0",
    "& .MuiTypography-root": {
        textTransform: "uppercase",
        fontSize: "1rem",
        whiteSpace: "pre-line",
        textAlign: "center",
        height: "100%",
        display: "flex",
        alignItems: "center"
    },
    "&:hover": {
        "& .MuiBox-root": {
            display: "block"
        },
        "& #shadow": {
            animation: "shadow 0.3s ease-in-out forwards",
            animationDelay: `0.5s`,
            "@keyframes shadow": {
                "0%": { boxShadow: "none" },
                "100%": { boxShadow: "0px 15px 25px rgba(255, 255, 255, 0.35)" }
            }
        }
    },
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}));

const NavContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: "4.7rem",
    minWidth: 200,
    position: "absolute",
    left: 0,
    top: 0,
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}));

const NavItemBox =
    styled(Box, {
        shouldForwardProp: (prop) => prop !== "trigger"
    }) <
    (({ theme, trigger, i = 0, length }) => ({
        display: "none",
        padding: "0.6rem 1rem",
        opacity: 0,
        backgroundColor: trigger ? "var(--palette-03)" : "var(--palette-06)",
        color: trigger ? "var(--palette-06) !important" : "var(--palette-01)",
        transformOrigin: "top center",
        transition: "all 0.3s ease-in-out",
        animation: "animate 0.3s ease-in-out forwards",
        "@keyframes animate": {
            "0%": { transform: "rotateX(-90deg)", opacity: 0 },
            "50%": { transform: "rotateX(20deg)" },
            "100%": { transform: "rotate(0deg)", opacity: 1 }
        },
        borderRadius: i === length ? "0px 0px 6px 6px" : i === 0 ? "0px 6px 0px 0px" : "none",
        animationDelay: `${i * 0.05}s`,
        "&:hover": {
            backgroundColor: trigger ? "#34BEE8" : "#E8E6E6"
        }
    }));
