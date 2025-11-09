// components/Layout/Layout.js
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Swedha Essentials - Essence of Purity</title>
        <meta name="description" content="Premium herbal, organic personal care and home fragrance products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-primary-cream">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}