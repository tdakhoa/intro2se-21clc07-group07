import React from "react";
import Head from "next/head";
import Register from "../src/modules/Register/Register";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Podaholic</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <Register />
            </main>
        </div>
    );
}
