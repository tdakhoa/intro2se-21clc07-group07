import Hero from "./Sections/Hero";
import Layout from "../Layout";
import LatestEpisodes from "./Sections/LatestEpisodes";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <LatestEpisodes />
        </Layout>
    );
};

export default Home;
