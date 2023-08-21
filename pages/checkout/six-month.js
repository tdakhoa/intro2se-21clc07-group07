import React from "react";
import Head from "next/head";
import Checkout from "../../src/modules/Premium/components/Checkout";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Podaholic</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <Checkout />
            </main>
        </div>
    );
}
