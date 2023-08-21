import React from "react";
import Head from "next/head";
import Premium from "../src/modules/Premium/Premium";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Podaholic</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <Premium />
            </main>
        </div>
    );
}
