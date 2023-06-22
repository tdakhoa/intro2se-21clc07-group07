import { Box, Checkbox, FormControlLabel, FormGroup, Grid, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Carousel, Typography } from "../../components";
import logo from "../../../public/logo.png";
import { LockOutlined, MailOutlineOutlined } from "@mui/icons-material";
import { useForm } from "react-hook-form";

const Login = () => {
    const [error, setError] = useState("");
    const [userData, setUserData] = useState({
        gender: "",
        birthday: "",
        username: "",
        email: "",
        password: ""
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(validationSchema) });

    const onSubmit = async (data) => {
        console.log(data);
    };

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
                        Nice to see you again
                    </Typography>
                    <Typography
                        component="h1"
                        size="h1"
                        color="white"
                        weight="extraBold"
                        sx={{ fontFamily: "Fairplay", lineHeight: "4.5rem" }}>
                        Welcome Back
                    </Typography>
                    <Typography component="h6" size="h6" color="white" weight="semiBold" sx={{ marginTop: "1.5rem" }}>
                        Whether you've been keeping up with our latest episodes or it's been a while since you last
                        visited, we're excited to have you back in our podcasting community.
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    width: "50%",
                    backgroundColor: "#212121",
                    padding: "6% 8%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}>
                <Typography
                    size="h2"
                    weight="extraBold"
                    color="#fff"
                    align="center"
                    sx={{ fontFamily: "Fairplay", marginBottom: "1rem" }}>
                    Log In
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
                            />
                        </Grid>
                        <StyledTypo variant="inherit" color="error">
                            {errors.password?.message}
                        </StyledTypo>
                    </Grid>

                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                color: "rgba(255, 255, 255, 0.70)"
                            }}>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{
                                                color: "rgba(255, 255, 255, 0.70)",
                                                "&.Mui-checked": {
                                                    color: "rgba(255, 255, 255, 0.70)"
                                                }
                                            }}
                                        />
                                    }
                                    label="Remember password?"
                                />
                            </FormGroup>
                            <Typography>Forgot password?</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <StyledSignUpButton variant="contained" onClick={() => handleSubmit(onSubmit(userData))}>
                            Log In
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
                            <Typography sx={{ color: "#fff" }}>Don’t have an account?</Typography>
                            <Link href="/register">
                                <Typography sx={{ color: "var(--palette-02)", fontWeight: "700" }}>Register</Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Login;

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required("This field is required")
        .min(6, "Username/Email must be at least 6 characters")
        .max(30, "Username/Email must not exceed 30 characters")
        .matches(/^\w*$/, "Username must not include special chars"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must not exceed 40 characters")
});

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
    borderRadius: "10px",
    padding: "1rem 1.5rem",
    marginTop: "0.5rem",
    width: "100%",
    textTransform: "capitalize",
    backgroundColor: "var(--palette-01)",
    "&:hover": {
        backgroundColor: "var(--palette-02)"
    }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    "& label.Mui-focused": {
        color: "white"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#000"
    },
    "& .MuiOutlinedInput-root": {
        color: "white",
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
