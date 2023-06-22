import { Box, Button, Checkbox, FormControlLabel, FormLabel, Grid, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Carousel, Typography } from "../../components";
import logo from "../../../public/logo.png";
import { Controller, useForm } from "react-hook-form";
import { AccountCircleOutlined, LockOutlined, MailOutlineOutlined } from "@mui/icons-material";

const Register = () => {
    const [error, setError] = useState("");
    const [userData, setUserData] = useState({
        gender: "",
        birthday: "",
        username: "",
        email: "",
        password: ""
    });
    const [togglePassword, setTogglePassword] = useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({});

    return (
        <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>
            <Logo>
                <Link href="/">
                    <Image priority src={logo} alt="logo" width={200} />
                </Link>
            </Logo>
            <Overlay />
            <Box sx={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ position: "absolute", zIndex: -999, height: "100%", width: "50%" }}>
                    <Carousel listData={dataList} />
                </Box>
                <Box sx={{ width: "65%", textAlign: "center" }}>
                    <Typography component="h6" size="h6" color="white" weight="semiBold">
                        New journey is waiting for you
                    </Typography>
                    <Typography
                        component="h1"
                        size="h1"
                        color="white"
                        weight="extraBold"
                        sx={{ fontFamily: "Fairplay", lineHeight: "4.5rem" }}>
                        Nice To Meet You
                    </Typography>
                    <Typography component="h6" size="h6" color="white" weight="semiBold" sx={{ marginTop: "1.5rem" }}>
                        Whether you're seeking inspiration, seeking answers to life's big questions, or simply looking
                        to expand your horizons, our podcast is your gateway to a world of fascinating discoveries.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ width: "50%", backgroundColor: "#212121", padding: "6% 8%" }}>
                <Typography
                    size="h2"
                    weight="extraBold"
                    color="#fff"
                    align="center"
                    sx={{ fontFamily: "Fairplay", marginBottom: "1rem" }}>
                    Register
                </Typography>
                <Grid container spacing={2}>
                    <Grid container item xs={12}>
                        <Grid
                            item
                            xs={1.5}
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: "8px 0 0 8px",
                                height: "100%"
                            }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%"
                                }}>
                                <AccountCircleOutlined />
                            </Box>
                        </Grid>
                        <Grid item xs={10.5}>
                            <StyledTextField
                                required
                                id="username"
                                name="username"
                                label="Enter your username"
                                variant="outlined"
                                fullWidth
                                {...register("username")}
                                error={errors.username ? true : false}
                                value={userData.username}
                                onChange={(e) => {
                                    setUserData({ ...userData, username: e.target.value });
                                }}
                                InputLabelProps={{
                                    style: { color: "rgba(255, 255, 255, 0.70)" }
                                }}
                            />
                        </Grid>
                        <StyledTypo variant="inherit" color="error">
                            {errors.username?.message}
                        </StyledTypo>
                    </Grid>

                    <Grid container item xs={12}>
                        <Grid
                            item
                            xs={1.5}
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: "8px 0 0 8px",
                                height: "100%"
                            }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%"
                                }}>
                                <MailOutlineOutlined />
                            </Box>
                        </Grid>
                        <Grid item xs={10.5}>
                            <StyledTextField
                                required
                                id="email"
                                name="email"
                                label="Enter your email"
                                variant="outlined"
                                fullWidth
                                {...register("email")}
                                error={errors.email ? true : false}
                                value={userData.email}
                                onChange={(e) => {
                                    setUserData({ ...userData, email: e.target.value });
                                }}
                                InputLabelProps={{
                                    style: { color: "rgba(255, 255, 255, 0.70)" }
                                }}
                            />
                        </Grid>
                        <StyledTypo variant="inherit" color="error">
                            {errors.email?.message}
                        </StyledTypo>
                    </Grid>

                    <Grid container item xs={12}>
                        <Grid
                            item
                            xs={1.5}
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: "8px 0 0 8px",
                                height: "100%"
                            }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%"
                                }}>
                                <LockOutlined />
                            </Box>
                        </Grid>

                        <Grid item xs={10.5}>
                            <StyledTextField
                                required
                                id="password"
                                name="password"
                                label="Enter your password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                {...register("password")}
                                error={errors.password ? true : false}
                                value={userData.password}
                                onChange={(e) => {
                                    setUserData({ ...userData, password: e.target.value });
                                }}
                                InputLabelProps={{
                                    style: { color: "rgba(255, 255, 255, 0.70)" }
                                }}
                            />
                        </Grid>
                        <StyledTypo variant="inherit" color="error">
                            {errors.password?.message}
                        </StyledTypo>
                    </Grid>

                    <Grid container item xs={12}>
                        <Grid
                            item
                            xs={1.5}
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: "8px 0 0 8px",
                                height: "100%"
                            }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%"
                                }}>
                                <LockOutlined />
                            </Box>
                        </Grid>
                        <Grid item xs={10.5}>
                            <StyledTextField
                                required
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Re-enter your password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                {...register("confirmPassword")}
                                error={errors.confirmPassword ? true : false}
                                InputLabelProps={{
                                    style: { color: "rgba(255, 255, 255, 0.70)" }
                                }}
                            />
                        </Grid>
                        <StyledTypo variant="inherit" color="error">
                            {errors.confirmPassword?.message}
                        </StyledTypo>
                    </Grid>

                    <Grid item xs={12}>
                        <StyledSignUpButton variant="contained" onClick={() => handleSubmit(onSubmit(data))}>
                            Register
                        </StyledSignUpButton>
                    </Grid>

                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "0.5rem",
                                gap: "0.5rem"
                            }}>
                            <Typography sx={{ color: "#fff" }}>Already have an account?</Typography>
                            <Link href="/signin">
                                <Typography sx={{ color: "var(--palette-02)", fontWeight: "700" }}>Sign In</Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Register;

const imgLinks = [
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1567596296091-0a257a028e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1567596275753-92607c3ce1ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1567596388756-f6d710c8fc07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
];

const CarouselItem = styled(Box)(({ theme }) => ({
    height: "100%",
    display: "flex",
    alignItems: "stretch",
    backgroundColor: "red",
    "& img": {
        objectFit: "cover !important"
    }
}));

const dataList = imgLinks.map((link, i) => (
    <CarouselItem key={i}>
        <img alt="" src={link} />
    </CarouselItem>
));

const Overlay = styled(Box)(({ theme }) => ({
    background: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%",
    height: "inherit",
    textAlign: "center",
    zIndex: "-998"
}));

const Logo = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "5%",
    left: "2%"
}));

const StyledSignUpButton = styled(Button)(({ theme }) => ({
    padding: "1rem 1.5rem",
    marginTop: "0.5rem",
    width: "100%",
    backgroundColor: "var(--palette-01)",
    "&:hover": {
        backgroundColor: "var(--palette-02)"
    }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    color: "white",
    "& label.Mui-focused": {
        color: "white"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#000"
    },
    "& .MuiOutlinedInput-root": {
        borderRadius: "0 8px 8px 0",
        "& fieldset": {
            borderColor: "white"
        },
        "& ::placeholder": {
            color: "white"
        },
        "&:hover fieldset": {
            borderColor: "var(--palette-02)"
        },
        "&.Mui-focused fieldset": {
            borderColor: "white"
        }
    }
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
    fontSize: "0.8rem"
}));
