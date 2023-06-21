import React from "react";
import Head from "next/head";
import AboutUs from "../src/modules/AboutUs/AboutUs";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Podaholic</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <AboutUs />
            </main>
        </div>
    );
}
