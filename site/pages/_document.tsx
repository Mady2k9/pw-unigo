/* eslint-disable @next/next/no-sync-scripts */
import Document, {Head, Html, Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <body className="loading">
                <Main/>
                <NextScript/>
                </body>

                <script src="https://public.releases.juspay.in/hyper-sdk-web/HyperServices.js"/>
            </Html>
        )
    }
}

export default MyDocument
