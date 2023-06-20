import { CardMedia, Chip, Grid, styled } from "@mui/material";

import { Typography } from "../../../../components";

const LatestCard = ({ type, title, img, date }) => {
    return (
        <ArticleBox>
            <GridCard sx={{ border: "none" }} direction="column" container>
                <Grid item xs={7} sx={{ width: "100%" }}>
                    <StyledCardMedia image={img} title="" />
                </Grid>
                <Grid item xs={5} sx={{ color: "#000" }}>
                    <Chip
                        sx={{
                            color: "var(--palette-01)",
                            backgroundColor: "var(--palette-04)",
                            margin: "1rem 0 0.5rem"
                        }}
                        label={type}
                        size="small"
                    />
                    <TitleTypo component="h1" size="18px" weight="extraBold">
                        {title}
                    </TitleTypo>
                    <Typography component="p" size="tiny" sx={{ marginTop: "0.4rem", color: "#929292" }}>
                        {date}
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
    borderRadius: "6px"
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
    borderRadius: "8px",
    boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.5)",
    transition: "all 0.3s ease-in-out",
    padding: "0.7rem",
    "&:hover": {
        transform: "scale(1.05)"
    },
    [theme.breakpoints.between("sm", "md")]: {
        height: "28rem",
        width: "20rem"
    }
}));

const TitleTypo = styled(Typography)(({ theme }) => ({
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    maxWidth: "100%"
}));
