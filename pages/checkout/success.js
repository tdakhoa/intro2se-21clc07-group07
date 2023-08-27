import React from "react";
import Head from "next/head";
import Success from "../../src/modules/Premium/components/Success";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Podaholic</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <Success />
            </main>
        </div>
    );
}
