import React from "react";
import Head from "next/head";
import Podcasts from "../src/modules/Podcasts/Podcasts";
import AllPodcasts from "../src/modules/Podcasts/AllPodcasts";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Podaholic</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <AllPodcasts />
            </main>
        </div>
    );
}
