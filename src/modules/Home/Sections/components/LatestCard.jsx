import { Box, CardMedia, Grid, styled } from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";

import { Button, Typography } from "../../../../components";

const LatestCard = ({ type, title, img, date }) => {
    return (
        <ArticleBox>
            <GridCard sx={{ border: "none" }} direction="column" container>
                <Grid item xs={7} sx={{ width: "100%" }}>
                    <StyledCardMedia image={img} title="" />
                </Grid>
                <Grid item xs={5} sx={{ color: "#000" }}>
                    <Typography component="h1" size="small" weight="bold">
                        {type}
                    </Typography>
                    <Typography component="h1" size="h6" weight="bold">
                        {title}
                    </Typography>
                </Grid>
            </GridCard>
        </ArticleBox>
    );
};

export default LatestCard;

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "10px"
}));

const ArticleBox = styled("div")(({ theme }) => ({
    marginTop: "3rem",
    width: "100%",
    color: "var(--palette-02)",
    [theme.breakpoints.down("sm")]: {
        width: "50%"
    },
    [theme.breakpoints.down("md")]: {
        width: "80%"
    }
}));

const GridCard = styled(Grid)(({ theme }) => ({
    height: "21rem",
    backgroundColor: "var(--palette-06)",
    boxSizing: "border-box",
    userSelect: "none",
    borderRadius: "10px",
    boxShadow: "8px 8px 20px rgba(40, 165, 203, 0.3)",
    transition: "all 0.3s ease-in-out",
    padding: "0.7rem",
    "&:hover": {
        cursor: "pointer",
        backgroundColor: "var(--palette-02)",
        color: "var(--palette-06)"
    },
    [theme.breakpoints.between("sm", "md")]: {
        height: "28rem",
        width: "20rem"
    }
}));
