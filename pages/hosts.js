import React from "react";
import Head from "next/head";
import Hosts from "../src/modules/Hosts/Hosts";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Podaholic</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <Hosts />
            </main>
        </div>
    );
}
