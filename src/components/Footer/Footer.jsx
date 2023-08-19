import React from "react";
import { Box, Typography, Link, useMediaQuery } from "@mui/material";
import logo from "../../../public/logo_footer.png";
import Image from "next/image";
import social from "../../../public/SocialMediaButtons.png";

const Footer = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const sz = isMobile ? 250 : 400;
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "black",
                padding: "3rem",
                justifyContent: "space-between",
                width: "100%"
            }}>
            {/* Top */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", xl: "row", sm: "column" },
                    justifyContent: "space-between",
                    gap: "1.5rem",
                    backgroundColor: "black"
                }}>
                {/* Company section */}
                <Box sx={{ width: { sm: 300, xl: 400 }, position: "relative" }}>
                    <Image src={logo} width={sz}></Image>
                    <Typography color="white" paddingLeft={0.5} paddingBottom={1}>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry
                    </Typography>
                </Box>
                {/* Link section */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: { xs: "5rem", xl: "12rem", sm: "2rem" },
                        flexWrap: { xs: "wrap" }
                    }}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <Typography color={"white"}>USEFUL LINK</Typography>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 1 }}>
                        <Typography color={"white"}>USEFUL LINK</Typography>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <Typography color={"white"}>USEFUL LINK</Typography>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <Typography color={"white"}>USEFUL LINK</Typography>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                            Link
                        </Link>
                    </Box>
                </Box>
            </Box>
            {/* Line under the footer */}
            <Box
                sx={{
                    borderTop: "1px solid white",
                    backgroundColor: "black",
                    height: "1rem",
                    width: "100%",
                    mx: "auto",
                    marginTop: "5rem"
                }}></Box>
            {/* Bottom */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: "1"
                }}>
                <Typography color="white">@Copyright by Group 7 - 21CLC07 - HCMUS</Typography>
                <Box sx={{ display: "flex", gap: "1.5rem" }}>
                    <Link href="https://www.facebook.com/">
                        <Image src={social}></Image>
                    </Link>
                    <Link href="#">
                        <Image src={social}></Image>
                    </Link>
                    <Link href="#">
                        <Image src={social}></Image>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
