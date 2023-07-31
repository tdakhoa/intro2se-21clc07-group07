import React from "react";
import {
  Box,
  Typography,
  Link,
} from "@mui/material";
import logo from "../../../public/logo_footer.png";
import Image from "next/image";
import social from "../../../public/SocialMediaButtons.png"

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        padding: "3rem",
        justifyContent: "space-between",
        width: "500",
      }}
    >
      {/* Top */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1.5rem",
          backgroundColor: "black",
        }}
      >
        {/* Company section */}
        <Box sx={{ width: 300 }}>
          <Image src={logo} width={300}></Image>
          <Typography color="white" paddingLeft={1}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil odio
            eum hic.
          </Typography>
        </Box>
        {/* Link section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10rem",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          marginTop: "5rem",
        }}
      ></Box>
      {/* Bottom */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft:"1"
        }}
      >
        <Typography color="white">@Copyright by </Typography>
        <Box sx={{display:"flex",gap:"1.5rem"}}>
          <Link href="https://www.facebook.com/"><Image src={social}></Image></Link>
          <Link href="#"><Image src={social}></Image></Link>
          <Link href="#"><Image src={social}></Image></Link>
        </Box>
      </Box>
    </Box>
  );
};


export default Footer;
