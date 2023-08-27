import Hero from "./Sections/Hero";
import Layout from "../Layout";
import LatestEpisodes from "./Sections/LatestEpisodes";
import Hosts from "./Sections/Hosts";

const Home = () => {
    return (
        //responsive moblie
        <Layout>
            <Hero />
            <LatestEpisodes />
            <Hosts />
        </Layout>
    );
};

export default Home;
