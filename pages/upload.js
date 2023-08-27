import React from "react";
import Head from "next/head";
import Upload from "../src/modules/Upload/Upload";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Podaholic</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <Upload />
            </main>
        </div>
    );
}
