import React from "react";
import Head from "next/head";
import Playlists from "../src/modules/Playlists/Playlists";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Podaholic</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <Playlists />
            </main>
        </div>
    );
}
