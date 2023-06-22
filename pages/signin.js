import React from "react";
import Head from "next/head";
import SignIn from "../src/modules/SignIn/SignIn";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Podaholic</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <SignIn />
            </main>
        </div>
    );
}
