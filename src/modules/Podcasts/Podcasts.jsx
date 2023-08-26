import React from "react";
import { Box, Avatar, Link,TextField } from "@mui/material";

import Layout from "../Layout";
import { Button, QuestionAccordion, Typography,  } from "../../components";
import smallAva from "../../../public/avatar_for_detail.jpg"
import guest from "../../../public/guest.jpg"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Podcasts = () => {
    return (
        <Layout>      
            <Box sx={{ background:"linear-gradient(to bottom, #F9E0BB, #212121)", padding: { xs: "3rem 1rem", md: "8% 4% 4% 4%" } }}>
                <Box sx={{background:"#F9E0BB", width:"6.372rem",height:"2.375rem", borderRadius:"62.4375rem",fontSize:"1rem", textAlign:"center",paddingTop:"0.5rem"}}>Life Style</Box>
                <Typography
                    component="h1"
                    size="38px"
                    color="white"
                    weight="extraBold"
                    sx={{ fontFamily: "Playfair Display", lineHeight: "1.1", size:"86px", marginTop:"20px" }}>
                    Embrace Life Journey Podcast
                </Typography>
                <Box sx={{display:"flex",flexDirection:"row", marginTop:"20px",alignContent:"center",justifyContent:"space-between", width:"300px"}}>
                    <Avatar src={{smallAva}} sx={{height:40, width:40}}/>
                    <Typography weight="thin" color="white" paddingTop="4px">Jane Anderson</Typography>
                    <Typography weight="thin" color="white" paddingTop="4px">August 15, 2023</Typography>
                </Box>
                <Box sx={{display:"flex", flexDirection:"row", marginTop:"20px",justifyContent:"space-between", width:"300px" }}>
                    <Button bgcolor="#F9E0BB"><PlayArrowIcon/>Listen now</Button>
                    <Link href="#" marginTop ><Typography color="#F9E0BB">+ Add to playlist</Typography></Link>
                </Box>

            </Box>
            {/* Section 2 */}
            <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between", backgroundColor: "#212121", color: "#fff", padding: { xs: "0rem 1rem", md: "0% 4%" } }}>
                {/* left section  */}
                <Box sx={{display: "flex", flexDirection:"column", width:"60%"}}>
                    {/* Intro paragraph  */}
                    <Box sx={{display:"flex", flexDirection:"row", width:"100%"}}>
                    <Typography component="h1" size="70px">J</Typography>
                    <Typography paddingTop="20px">oin host Jane Anderson on the Embrace Life Journey Podcast as we dive deep into the art of living fully. Explore captivating conversations and insightful narratives that inspire you to embrace every facet of life with intention, gratitude, and resilience. Discover practical strategies, heartwarming stories, and thought-provoking insights that empower you to make the most of your unique life journey.</Typography>
                    </Box>
                    {/* Timeline  */}
                    <Box sx={{width:"100%", background:"linear-gradient(134deg, rgba(249, 224, 187, 0.80) 0%, rgba(255, 251, 246, 0.30) 100%)",borderRadius:"0.5rem", padding:"1rem"}}>
                        <Typography component="h2" size="34px" color="#884A39">Timeline</Typography>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"8px", marginBottom:"8px"}}>
                            <Box sx={{background:"#F9E0BB", width:"3.5rem",height:"1.75rem", borderRadius:"62.4375rem",fontSize:"0.8rem", textAlign:"center",paddingTop:"0.2rem", color:"#884A39"}}>00:00</Box>
                            <Typography paddingLeft="10px">Introduction</Typography>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"8px", marginBottom:"8px"}}>
                            <Box sx={{background:"#F9E0BB", width:"3.5rem",height:"1.75rem", borderRadius:"62.4375rem",fontSize:"0.8rem", textAlign:"center",paddingTop:"0.2rem", color:"#884A39"}}>01:00</Box>
                            <Typography paddingLeft="10px">Begin Episode with Host Jane Anderson</Typography>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"8px", marginBottom:"8px"}}>
                            <Box sx={{background:"#F9E0BB", width:"3.5rem",height:"1.75rem", borderRadius:"62.4375rem",fontSize:"0.8rem", textAlign:"center",paddingTop:"0.2rem", color:"#884A39"}}>10:25</Box>
                            <Typography paddingLeft="10px">Sarah Miller's Journey: Overcoming Adversity</Typography>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"8px", marginBottom:"8px"}}>
                            <Box sx={{background:"#F9E0BB", width:"3.5rem",height:"1.75rem", borderRadius:"62.4375rem",fontSize:"0.8rem", textAlign:"center",paddingTop:"0.2rem", color:"#884A39"}}>23:40</Box>
                            <Typography paddingLeft="10px">Insights from Dr. Michael Collins on Positive Thinking</Typography>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"8px", marginBottom:"8px"}}>
                            <Box sx={{background:"#F9E0BB", width:"3.5rem",height:"1.75rem", borderRadius:"62.4375rem",fontSize:"0.8rem", textAlign:"center",paddingTop:"0.2rem", color:"#884A39"}}>35:15</Box>
                            <Typography paddingLeft="10px">Practical Straegies for Embracing Life with Intention</Typography>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"8px", marginBottom:"8px"}}>
                            <Box sx={{background:"#F9E0BB", width:"3.5rem",height:"1.75rem", borderRadius:"62.4375rem",fontSize:"0.8rem", textAlign:"center",paddingTop:"0.2rem", color:"#884A39"}}>46:55</Box>
                            <Typography paddingLeft="10px">Listener Questions and Reflections</Typography>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"8px", marginBottom:"8px"}}>
                            <Box sx={{background:"#F9E0BB", width:"3.5rem",height:"1.75rem", borderRadius:"62.4375rem",fontSize:"0.8rem", textAlign:"center",paddingTop:"0.2rem", color:"#884A39"}}>56:30</Box>
                            <Typography paddingLeft="10px">Wrapping up the Episode and Preview of Next Week</Typography>
                        </Box>
                    </Box> 
                    {/* Guess */}
                    <Box sx={{marginTop:"3rem"}}>
                        <Typography
                        component="h1"
                        size="38px"
                        color="white"
                        weight="extraBold"
                        sx={{ fontFamily: "Playfair Display", lineHeight: "1.1", size:"86px", marginTop:"20px" }}>
                        Guests
                        </Typography>
                        <Typography paddingTop="20px">We extend our heartfelt gratitude to our exceptional guest, Sarah Miller, for sharing her transformative journey of overcoming adversity and finding joy in life's smallest moments. Sarah's resilience and wisdom have left an indelible mark on our listeners. </Typography>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"50px"}}>
                            <Avatar src={{guest}} sx={{width:180, height:180}}/>
                            <Box sx={{paddingLeft:"30px"}}>
                                <Typography component="h2" size="30px" weight="extraBold" paddingBottom="10px">Sarah Miller</Typography>
                                <Typography>SENIOR ART DIRECTOR</Typography>
                                <Typography>A motivational speaker, best-selling author, and survivor, Sarah's story is a testament to the human spirit's ability to rise above challenges and create a life filled with purpose.</Typography>
                                <Box sx={{display: "flex", flexDirection:"reverse-row"}}>
                                    <FacebookIcon/>
                                    <InstagramIcon/>
                                    <LinkedInIcon/>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"50px"}}>
                            <Avatar src={{guest}} sx={{width:180, height:180}}/>
                            <Box sx={{paddingLeft:"30px"}}>
                                <Typography component="h2" size="30px" weight="extraBold" paddingBottom="10px">Sarah Miller</Typography>
                                <Typography>SENIOR ART DIRECTOR</Typography>
                                <Typography>A motivational speaker, best-selling author, and survivor, Sarah's story is a testament to the human spirit's ability to rise above challenges and create a life filled with purpose.</Typography>
                                <Box sx={{display: "flex", flexDirection:"reverse-row"}}>
                                    <FacebookIcon/>
                                    <InstagramIcon/>
                                    <LinkedInIcon/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* Separator */}
                    <Box
                        sx={{
                            borderTop: "1px solid white",
                            backgroundColor:"#212121" ,
                            height: "1rem",
                            width: "100%",
                            mx: "auto",
                            marginTop: "5rem"
                        }}>
                    </Box>
                    {/* Author */}
                    <Box sx={{display:"flex",flexDirection:"row", marginTop:"20px",alignContent:"center",justifyContent:"space-between", width:"100%"}}>
                        <Box sx={{display:"flex",flexDirection:"row"}}>
                            <Avatar src={{smallAva}} sx={{height:40, width:40}}/>
                            <Typography weight="thin" color="white" paddingTop="4px" paddingLeft="20px">Jane Anderson</Typography>
                            <Typography weight="thin" color="white" paddingTop="4px" paddingLeft="20px">August 15, 2023</Typography>
                        </Box>
                        <Box sx={{display:"flex",flexDirection:"row" ,justifyContent:"space-between"}}>
                            <Typography paddingRight="8px">Sharing this episode on</Typography>
                            <FacebookIcon/>
                            <InstagramIcon/>
                            <LinkedInIcon/>
                        </Box>
                    </Box>
                    {/* Commenting */}
                    <Box>
                        <Typography
                            component="h1"
                            size="35px"
                            color="white"
                            weight="extraBold"
                            sx={{ fontFamily: "Playfair Display", lineHeight: "1.1", size:"86px", marginTop:"20px" }}>
                            Comment
                        </Typography>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"10px", backgroundColor:"#F9E0BB", justifyContent:"space-between", borderRadius:"0.5rem"}}>
                            <Box sx={{display:"flex",flexDirection:"row"}}>
                                <Avatar src={{smallAva}} sx={{height:30, width:30, margin:1} }/>
                                <Typography color="black" marginLeft="10px"paddingTop="12px">Share your thoughts about this podcast</Typography>
                            </Box >
                            <SendIcon sx={{height:"2rem", color:"black", margin:"5px"}}/>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"15px", justifyContent:"space-between", border:"1px solid white", borderRadius:"0.5rem"}}>
                            <Avatar src={{smallAva}} sx={{height:30, width:30, margin:1} }/>
                            <Box>
                                <Typography color="white">Emily 123</Typography>
                                <Typography color="white">This podcast came into my life at just the right time. Jane and her guests have this incredible way of making you see the beauty in everyday moments. Truly uplifting!</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"15px", justifyContent:"space-between", border:"1px solid white", borderRadius:"0.5rem"}}>
                            <Avatar src={{smallAva}} sx={{height:30, width:30, margin:1} }/>
                            <Box>
                                <Typography color="white">Emily 123</Typography>
                                <Typography color="white">This podcast came into my life at just the right time. Jane and her guests have this incredible way of making you see the beauty in everyday moments. Truly uplifting!</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"row", marginTop:"15px", justifyContent:"space-between", border:"1px solid white", borderRadius:"0.5rem"}}>
                            <Avatar src={{smallAva}} sx={{height:30, width:30, margin:1} }/>
                            <Box>
                                <Typography color="white">Emily 123</Typography>
                                <Typography color="white">This podcast came into my life at just the right time. Jane and her guests have this incredible way of making you see the beauty in everyday moments. Truly uplifting!</Typography>
                            </Box>
                        </Box>
                        <Typography paddingTop="20px" sx={{textAlign:"center"}} >See more</Typography>
                    </Box>
                </Box>
                {/* Right section */}
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center", marginLeft:"50px", width:"30%"}}>
                    <Avatar src={{smallAva}} sx={{height:250, width:250, }}/>
                    <Typography sx={{fontSize:"1.75rem",fontFamily:"Playfair Display", marginTop:"20px"}}>Jane Andrson</Typography>
                    <Typography sx={{fontSize:"1rem",weight:"400", textAlign:"center"}}>Life is an intricate tapestry of moments waiting to be woven together with purpose.</Typography>
                    <Box sx={{display:"flex",flexDirection:"row", marginTop:"10px"}}>
                        <FacebookIcon/>
                        <   InstagramIcon/>
                        <LinkedInIcon/>
                    </Box>
                    {/* Tag */}
                    <Box sx={{textAlign:"left", width:"100%"}}>
                        <Typography sx={{textAlign:"left",fontSize:"1.75rem",fontFamily:"Playfair Display",weight:"700"}}>Tags</Typography>
                        <Box sx={{display:"flex", flexDirection:"row", flexWrap:"wrap", }}>
                            <Typography sx={{border:"1px solid white", borderRadius:"62.43rem", padding:"10px", marginTop:"10px", marginLeft:"10px", marginRight:"10px" }}>Life</Typography>
                            <Typography sx={{border:"1px solid white", borderRadius:"62.43rem", padding:"10px", marginTop:"10px", marginLeft:"10px", marginRight:"10px" }}>Personal Grow</Typography>
                            <Typography sx={{border:"1px solid white", borderRadius:"62.43rem", padding:"10px", marginTop:"10px", marginLeft:"10px", marginRight:"10px" }}>Resilience</Typography>
                            <Typography sx={{border:"1px solid white", borderRadius:"62.43rem", padding:"10px", marginTop:"10px", marginLeft:"10px", marginRight:"10px" }}>Positive</Typography>
                            <Typography sx={{border:"1px solid white", borderRadius:"62.43rem", padding:"10px", marginTop:"10px", marginLeft:"10px", marginRight:"10px" }}>Inspiration</Typography>
                            <Typography sx={{border:"1px solid white", borderRadius:"62.43rem", padding:"10px", marginTop:"10px", marginLeft:"10px", marginRight:"10px" }}>Gratitude</Typography>
                            <Typography sx={{border:"1px solid white", borderRadius:"62.43rem", padding:"10px", marginTop:"10px", marginLeft:"10px", marginRight:"10px" }}>Self-discovery</Typography>
                        </Box>
                    </Box>
                    {/* Interesting */}
                    <Box sx={{marginTop:"15px", textAlign:"left",width:"100%"}}>
                        <Typography sx={{fontFamily:"Playfair Display", fontSize:"1.75rem"}}>Maybe you interested</Typography>
                        <Box sx={{display:"flex",flexDirection:"row", marginTop:"10px"}}>
                            <PlayCircleIcon/>
                            <Typography sx={{fontSize:"0.875rem"}}>Unleasing Your Creative Potential</Typography>
                        </Box>
                        <Box sx={{display:"flex",flexDirection:"row", marginTop:"10px"}}>
                            <PlayCircleIcon/>
                            <Typography sx={{fontSize:"0.875rem"}}>Forging Stronger Relationships Through Communication</Typography>
                        </Box>
                        <Box sx={{display:"flex",flexDirection:"row", marginTop:"10px"}}>
                            <PlayCircleIcon/>
                            <Typography sx={{fontSize:"0.875rem"}}>Exploring the Mind-Body Connection for Well-being</Typography>
                        </Box>
                        <Box sx={{display:"flex",flexDirection:"row", marginTop:"10px"}}>
                            <PlayCircleIcon/>
                            <Typography sx={{fontSize:"0.875rem"}}>Embracing Change: Thriving in Times of Transition</Typography>
                        </Box>
                        <Box sx={{display:"flex",flexDirection:"row", marginTop:"10px"}}>
                            <PlayCircleIcon/>
                            <Typography sx={{fontSize:"0.875rem"}}>The Art of Mindful Living: Finding Peace in the Present</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            

        </Layout>
    );
};

export default Podcasts;
