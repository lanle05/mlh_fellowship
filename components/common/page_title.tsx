import React from 'react'
import Head from 'next/head';

interface ComponentProps {
    title: string,
}

export default function PageTitle(props: ComponentProps) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="Penstack LMS" />
            <link rel="icon" href="../favicon/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="../favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="../favicon/favicon-32x32.png" />
            <link rel="manifest" href="../favicon/site.webmanifest" />
            <link rel="mask-icon" href="../favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    )
}