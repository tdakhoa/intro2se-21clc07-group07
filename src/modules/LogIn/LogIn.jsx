import React, { useState } from "react";
import { Alert, Box, Checkbox, FormControlLabel, FormGroup, Grid, Snackbar, TextField, styled } from "@mui/material";
import { LockOutlined, MailOutlineOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { collection, getDocs } from "firebase/firestore";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";

import { db } from "../../firebase/firebaseConfig";
import logo from "../../../public/logo.png";
import { Button, Carousel, Typography } from "../../components";
import { userData as userDataRedux } from "../../redux/features/userSlice";
import { snackbarData } from "../../redux/features/snackbarSlice";

const Login = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [tick, setTick] = useState(false);
    const [valid, setValid] = useState(null);
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const handleTick = () => {
        setTick(!tick);
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(validationSchema) });

    const onSubmit = async () => {
        const ref = collection(db, "users");
        const docSnap = await getDocs(ref);
        let exist = false;
        let username = false;
        let uid = "";

        docSnap.forEach((doc) => {
            let i = doc.data();
            if (i.email === userData.email || i.username === userData.email) {
                username = true;
                if (i.password === userData.password) {
                    uid = doc.id;
                    exist = true;
                }
            }
        });

        if (!username) setValid("Email/Username is not existed");
        else if (!exist) setValid("Password is not correct");
        else {
            dispatch(snackbarData("Login successfully!"));
            setValid(null);
            setTimeout(function () {
                router.push("/");
            }, 1000);
            if (tick) Cookies.set("uid", uid, { expires: 7 });
            else dispatch(userDataRedux(uid));
        }
    };

    const uid = useSelector((state) => state.user.value);
    if (uid) router.push("/");

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
                    <Typography component="h6" size="h6" color="white" weight="regular">
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
                    <Typography component="h6" size="h6" color="white" weight="regular" sx={{ marginTop: "1.5rem" }}>
                        Whether you've been keeping up with our latest episodes or it's been a while since you last
                        visited, we're excited to have you back in our podcasting community.
                    </Typography>
                </Box>
            </Box>

            <FormBox>
                <Typography
                    size="h2"
                    weight="extraBold"
                    color="#fff"
                    align="center"
                    sx={{ fontFamily: "Fairplay", marginBottom: "1rem" }}>
                    Log In
                </Typography>
                <Grid container sx={{ gap: "0.5rem" }}>
                    <Grid container item xs={12}>
                        <IconGrid item xs={1.5}>
                            <IconBox>
                                <MailOutlineOutlined />
                            </IconBox>
                        </IconGrid>

                        <Grid item xs={10.5}>
                            <StyledTextField
                                required
                                label="Enter your email"
                                variant="outlined"
                                fullWidth
                                {...register("email")}
                                error={errors.email || valid ? true : false}
                                value={userData.email}
                                onChange={(e) => {
                                    setUserData({ ...userData, email: e.target.value });
                                }}
                            />
                        </Grid>
                    </Grid>
                    <StyledTypo variant="inherit" color="error">
                        {errors.email?.message}
                    </StyledTypo>

                    <Grid container item xs={12}>
                        <IconGrid item xs={1.5}>
                            <IconBox>
                                <LockOutlined />
                            </IconBox>
                        </IconGrid>

                        <Grid item xs={10.5}>
                            <StyledTextField
                                required
                                label="Enter your password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                {...register("password")}
                                error={errors.password || valid ? true : false}
                                value={userData.password}
                                onChange={(e) => {
                                    setUserData({ ...userData, password: e.target.value });
                                }}
                            />
                        </Grid>
                    </Grid>
                    <StyledTypo variant="inherit" color="error">
                        {errors.password?.message || valid}
                    </StyledTypo>

                    <Grid item xs={12}>
                        <TickBox>
                            <FormGroup>
                                <FormControlLabel
                                    control={<PWTick value={tick} onChange={handleTick} />}
                                    label={<Typography size="14px">Remember me</Typography>}
                                />
                            </FormGroup>
                            <Typography size="14px">Forgot password?</Typography>
                        </TickBox>
                    </Grid>

                    <Grid item xs={12}>
                        <StyledSignUpButton variant="contained" onClick={handleSubmit(onSubmit)}>
                            Log In
                        </StyledSignUpButton>
                    </Grid>

                    <Grid item xs={12}>
                        <ButtonBox>
                            <Typography sx={{ color: "#fff" }}>Don’t have an account?</Typography>
                            <Link href="/register">
                                <Typography component="h2" weight="semiBold" sx={{ color: "var(--palette-02)" }}>
                                    Register
                                </Typography>
                            </Link>
                        </ButtonBox>
                    </Grid>
                </Grid>
            </FormBox>
        </Box>
    );
};

export default Login;

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("Username/Email is required")
        .min(6, "Username/Email must be at least 6 characters")
        .max(30, "Username/Email must not exceed 30 characters"),
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

const StyledTextField = styled(TextField, {
    shouldForwardProp: (prop) => prop !== "error"
})(({ theme, error }) => ({
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
    },
    position: error ? "relative" : "",
    animation: error ? "shake .1s linear" : "initial",
    animationIterationCount: error ? "3" : "initial",
    "@keyframes shake": {
        "0%": { left: "-5px" },
        "100%": { right: "-5px" }
    }
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
    fontSize: "0.8rem"
}));

const ButtonBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0.5rem",
    gap: "0.5rem"
}));

const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
}));

const IconGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: "#fff",
    borderRadius: "8px 0 0 8px",
    height: "100%"
}));

const FormBox = styled(Box)(({ theme }) => ({
    width: "50%",
    backgroundColor: "#212121",
    padding: "6% 8%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}));

const PWTick = styled(Checkbox)(({ theme }) => ({
    color: "rgba(255, 255, 255, 0.70)",
    "&.Mui-checked": {
        color: "rgba(255, 255, 255, 0.70)"
    }
}));

const TickBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "rgba(255, 255, 255, 0.70)"
}));
