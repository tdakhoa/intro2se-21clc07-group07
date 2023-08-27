import React, { useState } from "react";
import { styled, Box, Grid, Dialog, Pagination, useMediaQuery, useTheme } from "@mui/material";
import { Button, Typography } from "../../../components";
import { ArrowForwardOutlined, HighlightOff } from "@mui/icons-material";

const Contact = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [data, setData] = useState({ image: "", name: "", description: " ", position: "" });

    const handleOpenDialog = (item) => {
        setData(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <Root id="specialists">
                <Typography size="h1" color="#fff" sx={{ fontFamily: "Playfair Display", marginBottom: "2rem" }}>
                    Contributors
                </Typography>

                <Grid container spacing={4}>
                    {ImageData.map((item, i) => (
                        <ContentGrid key={i} item xs={12} md={3}>
                            <Box className="media-container" sx={{ borderRadius: "60px 0 0 60px" }}>
                                <Box className="media-overlay" />
                                <Box className="media-text">
                                    <Typography size="h5" weight="bold" align="center">
                                        {item.name}
                                    </Typography>
                                    <Box className="media-subText">
                                        <Typography sx={{ py: 1 }} size="p" align="center">
                                            {item.position}
                                        </Typography>
                                        <Button
                                            bgcolor="white"
                                            sx={{ color: "var(--palette-01)" }}
                                            onClick={() => handleOpenDialog(item)}
                                            endIcon={
                                                <ArrowForwardOutlined
                                                    sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }}
                                                />
                                            }>
                                            <Typography size="p" weight="medium">
                                                Đọc thêm
                                            </Typography>
                                        </Button>
                                    </Box>
                                </Box>
                                <img className="media-image" src={item.image} />
                            </Box>
                        </ContentGrid>
                    ))}
                </Grid>
            </Root>

            <StyledDialog maxWidth="md" open={open} onClose={handleClose}>
                <img className="media-image" src={data.image} />
                <Box
                    sx={{
                        height: "100%",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        padding: "2rem"
                    }}>
                    <Typography
                        size={{ lg: "h3", md: "h4" }}
                        weight="bold"
                        align="center"
                        sx={{ color: "var(--palette-02)" }}>
                        {data.name}
                    </Typography>
                    <Typography
                        size={{ lg: "h5", md: "h6" }}
                        weight="bold"
                        align="center"
                        sx={{ color: "var(--palette-02)" }}>
                        {data.position}
                    </Typography>
                    <Box
                        sx={{
                            overflowY: "scroll",
                            overflowX: "hidden",
                            flexGrow: 1,
                            pr: "1rem",
                            marginTop: "1rem",
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "#f2f2f2"
                            }
                        }}>
                        <Typography size="p" align="justify">
                            {data.description}
                        </Typography>
                    </Box>
                </Box>

                <HighlightOff
                    sx={{
                        cursor: "pointer",
                        color: "var(--palette-02)",
                        position: "absolute",
                        top: "15px",
                        right: "15px"
                    }}
                    onClick={handleClose}
                />
            </StyledDialog>
        </>
    );
};

export default Contact;

const ImageData = [
    {
        image: "https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Trịnh Hạnh",
        position: "Business Analyst Leader",
        description: `
        In the heart of Creston, a nondescript office buzzed with purpose as a team of skilled analysts, led by the visionary Sarah, embarked on a new dimension of business analysis. Beyond the traditional realm of data crunching, they sought to become architects of change, transforming raw numbers into narratives that could shape the future. Their gaze was fixed on the growing wave of sustainable technology, a burgeoning movement that promised to redefine industries and consumer behaviors alike.
        
        Diving deep into research, the team's dedication bore fruit as insights coalesced into a captivating panorama of what lay ahead. Sarah's leadership fostered an environment where data wasn't just examined; it was a canvas on which a landscape of possibilities was painted. As weeks turned into months, a vivid image emerged: industries pivoting towards eco-friendly practices, powered not solely by regulations, but by a genuine commitment to the planet.
        
        The moment arrived to present their revelations, and the response was electric. Business leaders, once hesitant to embrace change, now saw the roadmap laid out before them. The analysts' vision had kindled a spark of transformation, setting in motion a paradigm shift towards sustainability. Their story resonated as a testament to the potent fusion of analysis and foresight, underscoring how understanding data was more than a skill – it was a catalyst for molding a better tomorrow.
        `
    },
    {
        image: "https://images.unsplash.com/photo-1467010234262-77bada75a47d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80",
        name: "Nguyễn Khánh Hoàng",
        position: "Tester Leader / Secretary",
        description: `
        In the realm of software development, within the bustling digital landscape, there was a tester extraordinaire named Alex. As a leader, Alex went beyond the conventional boundaries of testing. The mission was clear: not just to identify bugs, but to ensure an experience that was flawless, intuitive, and transformative.
        
        Guiding the testing team, Alex instilled a culture of curiosity. It wasn't enough to follow test scripts; they explored the software like uncharted territory. Alex believed that every bug found was a step closer to enhancing the product. With a discerning eye, they dissected intricate codes, unraveling complex puzzles and transforming the abstract into the tangible.
        
        Alex's leadership extended beyond the technical realm. They understood the art of communication, translating tech jargon into plain language. This ability united developers, designers, and testers under a shared vision. Meetings weren't just about bug reports; they were storytelling sessions where everyone collaborated to weave a narrative of software quality.
        
        The impact of Alex's approach was unmistakable. Projects that once stumbled towards completion now flowed seamlessly. Stakeholders marveled at the newfound efficiency and elevated user satisfaction. Through their leadership, Alex had elevated the role of a tester from that of a bug hunter to an orchestrator of digital excellence.
        `
    },
    {
        image: "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/304257938_1124622164825306_1328508658117405127_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=uWwmBwJa5KMAX8NCuQ8&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDYLaUzzomSUIOYANHmk45yV-t4S3wjzwbFAi_C2BY7dg&oe=64EF3ED1",
        name: "Trần Đỗ Anh Khoa",
        position: "Project Manager",
        description: `
        In the dynamic realm of project management, there existed a maestro named Emily. With a symphony of tasks and timelines to conduct, Emily's leadership transformed chaos into harmony. Her role wasn't just about managing projects; it was about orchestrating a synchronized dance of teams, goals, and milestones.
        
        Emily's approach was like that of a seasoned conductor. She didn't merely assign tasks; she curated roles that suited each team member's strengths. Through her guidance, developers, designers, and stakeholders played their instruments in unison, creating a melody of progress. Emily understood that a well-structured team was the foundation for a successful project.
        
        Communication was Emily's baton. She orchestrated regular meetings that weren't just status updates, but opportunities for collaboration. Her skill in translating technical jargon into layman's terms bridged the gap between developers and stakeholders. It was her ability to craft a shared vision that kept everyone in harmony, moving towards a common crescendo.
        
        As projects reached their finale, the applause for Emily's leadership echoed. Deadlines met, objectives achieved – her projects stood as testimonials to her mastery. Stakeholders admired her seamless navigation through challenges, transforming uncertainties into opportunities. Emily, the project manager, wasn't just a conductor of tasks; she was a virtuoso of achievement, transforming the business landscape one project at a time.
        `
    },
    {
        image: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/185802493_988151148610517_6648683473304386037_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=ywV01I56_zsAX-9DZhs&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfA1tSTVVtTxq4jd_xsnJoIunsq2evlNo0qdIMqNbHTKhg&oe=651209E1",
        name: "Nguyễn Nhật Truyền",
        position: "Security Architect / Designer",
        description: `
        Amid the canvas of creativity, a designer named Maya painted her artistry. Her world was a palette of pixels, where every stroke and shade told a story. Maya wasn't just a designer; she was a storyteller, crafting narratives through visuals that spoke louder than words.
        
        In her studio, Maya would immerse herself in projects, not as tasks but as chapters in a visual novel. Her designs weren't just aesthetically pleasing; they were emotive experiences that resonated with viewers. Maya believed that design could stir feelings, ignite inspiration, and provoke thought.
        
        Maya's creative process was a dance between innovation and empathy. She delved into the hearts of clients, understanding their dreams and aspirations. Each design was a manifestation of their vision, seamlessly intertwined with Maya's ingenuity. Her designs weren't just art; they were bridges connecting aspirations to reality.
        
        As Maya's designs graced billboards, screens, and packaging, a trail of admiration followed. Her work didn't just capture attention; it held it captive. Maya, the designer, wasn't merely crafting visuals; she was weaving connections, one design at a time.
        `
    }
];

const Root = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "5% 10%",
    gap: "7%",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        marginBottom: "6rem"
    }
}));

const ContentGrid = styled(Grid)(({ theme }) => ({
    cursor: "pointer",
    "& .media-container": {
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        color: "var(--palette-06)",
        height: "32rem",
        width: "100%",
        "& .media-image": {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        },
        "& .media-overlay": {
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "50%",
            background: "linear-gradient(180deg, rgba(7, 27, 33, 0) 0%, #071B21 88.54%)",
            transition: "all .4s ease-in-out",
            transformOrigin: "bottom center",
            zIndex: "10000"
        },
        "& .media-text": {
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "end",
            flexDirection: "column",
            transition: "all .4s ease-in-out",
            padding: "1.5rem",
            zIndex: "10000",
            animation: "slideOut1 0.4s forwards",
            "@keyframes slideOut1": {
                "0%": { transform: "translateY(-20%)" }
            },
            "& .media-subText": {
                display: "none"
            }
        }
    },
    "&:hover": {
        "& .media-overlay": {
            transform: "scaleY(2)"
        },
        "& .media-text": {
            animation: "slideIn1 0.4s forwards",
            "@keyframes slideIn1": {
                "0%": { transform: "translateY(20%)" }
            },
            "& .media-subText": {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                animation: "slideIn2 0.4s forwards",
                "@keyframes slideIn2": {
                    "0%": { transform: "translateY(20%)" }
                }
            }
        }
    }
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
    zIndex: "100000",
    borderRadius: "30px !important",
    "& .MuiPaper-root": {
        height: "70vh",
        borderRadius: "30px !important",
        boxShadow: "0px 0px 40px rgba(255, 255, 255, 0.25)",
        flexDirection: "row",
        position: "relative"
    },
    "& img": {
        height: "inherit",
        width: "40%",
        objectFit: "cover"
    },
    [theme.breakpoints.down("md")]: {
        "& img": {
            display: "none"
        }
    }
}));

const PaginationBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    padding: "3% 0",
    [theme.breakpoints.down("md")]: {
        padding: "2rem 0"
    }
}));
