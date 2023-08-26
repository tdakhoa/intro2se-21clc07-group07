import Hero from "./Sections/Hero";
import Layout from "../Layout";
import LatestEpisodes from "./Sections/LatestEpisodes";
import Hosts from "./Sections/Hosts";
import Trending from "./Sections/Trending";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <LatestEpisodes />
            <Trending />
            <Hosts />
        </Layout>
    );
};

export default Home;
