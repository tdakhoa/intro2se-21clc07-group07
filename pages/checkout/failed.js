import React from "react";
import Head from "next/head";
import Failed from "../../src/modules/Premium/components/Failed";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Podaholic</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <Failed />
            </main>
        </div>
    );
}
