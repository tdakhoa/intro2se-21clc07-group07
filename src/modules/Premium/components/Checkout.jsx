import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, styled, RadioGroup, FormControlLabel, Radio, Checkbox, TextField } from "@mui/material";
import { CheckBoxOutlined, WorkspacePremiumOutlined } from "@mui/icons-material";

import Layout from "../../Layout";
import { Button, Typography } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { userData } from "../../../redux/features/userSlice";

const Checkout = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { uid } = useSelector((state) => state.user);

    const [option, setOption] = useState(0);
    const [data, setData] = useState({
        first: "",
        second: ""
    });
    const [code, setCode] = useState("");
    const [discount, setDiscount] = useState(0);

    const handleFirstData = (e) => {
        setData({ ...data, first: e.target.value });
    };

    const handleSecondData = (e) => {
        if ((e.target.value.length < 4 && option == 0) || option != 0) setData({ ...data, second: e.target.value });
    };

    const handleApply = () => {
        if (code == "PODAHOLIC") {
            setDiscount(0.1);
        } else setCode("INVALID");
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value.toUpperCase());
        setDiscount(0);
    };

    const handleSubmit = async () => {
        if (data.first == "" || data.second == "") router.push("/checkout/failed");
        else {
            const ref = doc(db, "users", uid);
            await updateDoc(ref, { premium: true });
            router.push("/checkout/success");
            dispatch(userData({ uid: uid, premium: true }));
        }
    };

    let plan;
    switch (router.asPath.slice(10, router.asPath.length)) {
        case plans[0].title.toLowerCase():
            plan = plans[0];
            break;
        case plans[1].title.toLowerCase():
            plan = plans[1];
            break;
        case plans[2].title.toLowerCase():
            plan = plans[2];
            break;
    }

    useEffect(() => {
        setData({
            first: "",
            second: ""
        });
    }, [option]);

    return (
        <Layout>
            <Box sx={{ display: "flex", padding: "8% 10%", backgroundColor: "#212121", gap: "10%" }}>
                <Box sx={{ width: "50%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <Typography weight="semiBold" size="h5" color="#fff">
                        Payment
                    </Typography>
                    <Box sx={{ width: "100%", borderBottom: "1px solid #fff", margin: "1rem 0" }} />
                    <Box sx={{ color: "#fff" }}>
                        <Typography weight="regular" color="#fff">
                            Pay With:
                        </Typography>
                        <RadioGroup row>
                            {Genders.map((gender, i) => (
                                <FormControlLabel
                                    key={i}
                                    value={option}
                                    checked={option == i}
                                    control={<Radio sx={{ color: "#fff" }} />}
                                    label={gender}
                                    onChange={() => setOption(i)}
                                />
                            ))}
                        </RadioGroup>
                    </Box>
                    {option == 0 ? (
                        <>
                            <Box>
                                <Typography weight="regular" color="#fff" sx={{ marginBottom: "0.5rem" }}>
                                    Card number
                                </Typography>
                                <StyledTextField
                                    required
                                    type="number"
                                    variant="outlined"
                                    fullWidth
                                    value={data.first}
                                    placeholder="1234 5678 0101 1121"
                                    onChange={handleFirstData}
                                />
                            </Box>

                            <Box sx={{ display: "flex", width: "100%", gap: "2rem" }}>
                                <Box sx={{ width: "100%" }}>
                                    <Typography weight="regular" color="#fff" sx={{ marginBottom: "0.5rem" }}>
                                        Expiration Date
                                    </Typography>
                                    <StyledTextField type="date" required variant="outlined" fullWidth />
                                </Box>

                                <Box>
                                    <Typography weight="regular" color="#fff" sx={{ marginBottom: "0.5rem" }}>
                                        CVV
                                    </Typography>
                                    <StyledTextField
                                        required
                                        variant="outlined"
                                        type="number"
                                        value={data.second}
                                        placeholder="000"
                                        onChange={handleSecondData}
                                    />
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Checkbox
                                    checkedIcon={<CheckBoxOutlined sx={{ color: "#fff" }} />}
                                    sx={{ color: "#fff" }}
                                />
                                <Typography weight="regular" color="#fff">
                                    Save card detail
                                </Typography>
                            </Box>

                            <CheckoutButton variant="contained" onClick={handleSubmit}>
                                Pay ${(plan.price * (1 - discount) * 1.1).toFixed(2)}
                            </CheckoutButton>
                        </>
                    ) : (
                        <></>
                    )}

                    {option == 1 ? (
                        <>
                            <Box>
                                <Typography weight="regular" color="#fff" sx={{ marginBottom: "0.5rem" }}>
                                    Bank number
                                </Typography>
                                <StyledTextField
                                    required
                                    variant="outlined"
                                    fullWidth
                                    value={data.first}
                                    placeholder="1234 5678 0101 1121"
                                    onChange={handleFirstData}
                                />
                            </Box>

                            <Box>
                                <Typography weight="regular" color="#fff" sx={{ marginBottom: "0.5rem" }}>
                                    Bank name
                                </Typography>
                                <StyledTextField
                                    required
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Vietcombank"
                                    value={data.second}
                                    onChange={handleSecondData}
                                />
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Checkbox
                                    checkedIcon={<CheckBoxOutlined sx={{ color: "#fff" }} />}
                                    onChange={(e) => {}}
                                    sx={{ color: "#fff" }}
                                />
                                <Typography weight="regular" color="#fff">
                                    Save bank detail
                                </Typography>
                            </Box>

                            <CheckoutButton variant="contained" onClick={handleSubmit}>
                                Pay ${(plan.price * (1 - discount) * 1.1).toFixed(2)}
                            </CheckoutButton>
                        </>
                    ) : (
                        <></>
                    )}

                    {option == 2 ? (
                        <>
                            <Typography weight="semiBold" size="h5" color="#fff">
                                Transfer Detail
                            </Typography>
                            <Box sx={{ margin: "0.5rem 0" }}>
                                <Typography weight="regular" color="#fff">
                                    Bank Account: 0123 4567 890
                                </Typography>
                                <Typography weight="regular" color="#fff">
                                    Bank Name: Vietcombank
                                </Typography>
                                <Typography weight="regular" color="#fff">
                                    Description: Podaholic {"<plan-chosen>"} {"<email>"}
                                </Typography>
                            </Box>
                            <Typography weight="regular" color="#fff" sx={{ fontStyle: "italic" }}>
                                Account's Premium Status will be updated after 5-10 minutes after the transaction
                                completed
                            </Typography>
                            <CheckoutButton variant="contained" onClick={handleSubmit}>
                                Finish Checkout
                            </CheckoutButton>
                        </>
                    ) : (
                        <></>
                    )}

                    <Typography color="#fff" size="small" sx={{ marginTop: "0.5rem" }}>
                        Your personal data will be used to process your order, support your experience throughout this
                        website, and for other purposes described in our privacy policy.
                    </Typography>
                </Box>
                <Box sx={{ width: "50%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <Typography weight="semiBold" size="h5" color="#fff">
                        Order Summary
                    </Typography>
                    <Box sx={{ width: "100%", borderBottom: "1px solid #fff", margin: "1rem 0" }} />
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", alignItems: "start", gap: "1rem" }}>
                            <WorkspacePremiumOutlined
                                sx={{
                                    fontSize: "5rem",
                                    color: "#fff",
                                    border: "2px solid #fff",
                                    padding: "0.2rem",
                                    borderRadius: "10px"
                                }}
                            />
                            <Box>
                                <Typography weight="semiBold" size="h5" color="#fff">
                                    Premium membership
                                </Typography>
                                <Typography weight="regular" color="#fff">
                                    {plan.title}
                                </Typography>
                            </Box>
                        </Box>
                        <Typography weight="regular" color="#fff" size="h5">
                            ${plan.price}
                        </Typography>
                    </Box>
                    <Box sx={{ width: "100%", borderBottom: "1px solid #fff", margin: "1rem 0" }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <StyledTextField
                            fullWidth
                            value={code}
                            onChange={handleCodeChange}
                            placeholder="Enter your discount code"
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px 0 0 10px" } }}
                        />
                        <Button
                            onClick={handleApply}
                            sx={{
                                borderRadius: "0 10px 10px 0",
                                height: "100%",
                                width: "30%",
                                "&:hover": {
                                    backgroundColor: "#995542",
                                    borderColor: "#995542",
                                    color: "#fff"
                                }
                            }}>
                            Apply
                        </Button>
                    </Box>
                    <Box sx={{ width: "100%", borderBottom: "1px solid #fff", margin: "1rem 0" }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography weight="semiBold" size="h6" color="#fff">
                            Subtotal
                        </Typography>
                        <Box>
                            <Typography
                                sx={discount > 0 ? { textDecoration: "line-through" } : {}}
                                weight="regular"
                                size="h6"
                                color="#fff">
                                ${plan.price}
                            </Typography>
                            {discount > 0 ? (
                                <Typography weight="regular" size="h6" color="#fff">
                                    ${(plan.price * (1 - discount)).toFixed(2)}
                                </Typography>
                            ) : (
                                <></>
                            )}
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", borderBottom: "1px solid #fff", margin: "1rem 0" }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box>
                            <Typography weight="semiBold" color="#fff">
                                Total
                            </Typography>
                            <Typography color="#fff">
                                Including ${(plan.price * (1 - discount) * 0.1).toFixed(2)} in taxes
                            </Typography>
                        </Box>
                        <Typography weight="regular" size="h6" color="#fff">
                            ${(plan.price * (1 - discount) * 1.1).toFixed(2)}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default Checkout;

const CheckoutButton = styled(Button)(({ theme }) => ({
    padding: "1rem 1.5rem",
    marginTop: "0.5rem",
    width: "100%",
    backgroundColor: "var(--palette-01)",
    "&:hover": {
        backgroundColor: "#995542",
        borderColor: "#995542",
        color: "#fff"
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
        borderRadius: "8px",
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
    "& ::-webkit-calendar-picker-indicator": {
        filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(35deg) brightness(102%) contrast(101%)"
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        display: "none"
    }
}));

const Genders = ["Card", "Bank", "Transfer"];

const plans = [
    { title: "One-month", price: "7.00" },
    { title: "Six-month", price: "33.00" },
    { title: "One-year", price: "48.00" }
];
