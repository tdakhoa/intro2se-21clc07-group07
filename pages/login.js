import React from "react";
import Head from "next/head";
import LogIn from "../src/modules/LogIn/LogIn";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Podaholic</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <LogIn />
            </main>
        </div>
    );
}
