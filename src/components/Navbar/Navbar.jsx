import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    styled,
    Box,
    AppBar,
    useScrollTrigger,
    IconButton,
    Backdrop,
    Fade,
    Drawer,
    Switch,
    Tooltip,
    Avatar,
    Menu,
    MenuItem
} from "@mui/material";
import {
    SearchOutlined,
    KeyboardArrowUp,
    LogoutOutlined,
    Diamond,
    FileUploadOutlined,
    UploadFileOutlined
} from "@mui/icons-material";
import Cookies from "js-cookie";

import logo from "../../../public/logo.png";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { themePreferences } from "../../redux/features/themeSlice";
import { userData } from "../../redux/features/userSlice";

const homeData = [
    { title: "Home", link: "/" },
    { title: "Premium", link: "/premium" },
    { title: "Podcasts", link: "/allpodcasts" },
    // { title: "Playlists", link: "/playlists" },
    // { title: "Hosts", link: "/hosts" },
    { title: "About Us", link: "/aboutus" },
    { title: "FAQ", link: "/faq" }
];

const NavBar = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const { asPath } = useRouter();
    const [prior, setPrior] = useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200
    });

    const mode = useSelector((state) => state.theme.value);
    const { uid, premium } = useSelector((state) => state.user);

    useEffect(() => {
        if (open) setPrior(true);
        else
            setTimeout(function () {
                setPrior(false);
            }, 500);
    }, [open]);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const openUser = Boolean(anchorElUser);

    const handleLogout = () => {
        setAnchorElUser(null);
        Cookies.remove("uid");
        dispatch(userData(""));
        router.push("/login");
    };

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
                        <NavItem trigger={trigger} key={i} content={item} asPath={asPath} uid={uid}></NavItem>
                    ))}
                    <StyledNavItem trigger={trigger} sx={{ "&:before": { bottom: "-10px" } }}>
                        <SearchOutlined sx={{ "&:hover": { color: "var(--palette-03)" } }} />
                    </StyledNavItem>
                </StyledNavContainer>

                {!uid ? (
                    <Box sx={{ display: "flex" }}>
                        <Link href="/register">
                            <Button
                                bgcolor="transparent"
                                sx={{
                                    borderColor: "transparent",
                                    color: "var(--palette-03)",
                                    fontSize: "16px",
                                    "&:hover": { borderColor: "transparent", color: "var(--palette-02)" }
                                }}>
                                Register
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button
                                bgcolor="transparent"
                                sx={{
                                    borderColor: "var(--palette-03)",
                                    color: "var(--palette-03)",
                                    minWidth: "6rem",
                                    fontSize: "16px",
                                    "&:hover": { borderColor: "var(--palette-02)", color: "var(--palette-02)" }
                                }}>
                                Log In
                            </Button>
                        </Link>
                    </Box>
                ) : (
                    <>
                        {premium ? (
                            <Tooltip title="You're premium user">
                                <Diamond sx={{ color: "yellow" }} />
                            </Tooltip>
                        ) : (
                            <></>
                        )}

                        <Tooltip title="Profile">
                            <Avatar src={null} alt="Avatar" onClick={handleOpenUserMenu} sx={{ cursor: "pointer" }} />
                        </Tooltip>

                        <StyledUserMenu
                            keepMounted
                            anchorEl={anchorElUser}
                            open={openUser}
                            onClick={handleCloseUserMenu}
                            onClose={handleCloseUserMenu}>
                            <MenuItem onClick={() => router.push("/upload")}>
                                <UploadFileOutlined />
                                Upload
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                <LogoutOutlined />
                                Logout
                            </MenuItem>
                        </StyledUserMenu>
                    </>
                )}
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

const NavItem = ({ content = { title: "", link: "" }, sx = {}, trigger, asPath, uid, ...props }) => {
    return (
        <StyledNavItem trigger={trigger} {...props}>
            <Link href={content.title == "Premium" && !uid ? "/login" : content.link}>
                <Typography
                    component="h1"
                    weight="semiBold"
                    size="16px !important"
                    sx={{
                        color: asPath === content.link ? "var(--palette-03)" : "#fff",
                        "&:hover": { color: "var(--palette-03)" }
                    }}>
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

const ScrollTop = styled(IconButton)(() => ({
    color: "var(--palette-06)",
    backgroundColor: "#000",
    position: "fixed",
    bottom: 75,
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
        fontSize: "18px",
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

const ThemeSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(6px)",
        "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(22px)",
            "& .MuiSwitch-thumb:before": {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    "#fff"
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"
            }
        }
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
        width: 32,
        height: 32,
        "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                "#fff"
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
        }
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        borderRadius: 20 / 2
    }
}));

const StyledUserMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "left"
        }}
        disableScrollLock={true}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: "15px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
        "& .MuiMenu-list": {
            padding: "0.5rem 0",
            width: "180px"
        }
    },
    marginTop: "1.25rem",
    [theme.breakpoints.down("md")]: {
        marginTop: "0.5rem"
    }
}));
