import { NextPageContext } from "next"

import Head from "next/head"
// import Image from "next/image"
import Header from "@components/header"

export default function Home() {

  return (
    <>
      <Head>
        <title>Friendly Mini Chat</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Header />
      </main>
    </>
  )
}

