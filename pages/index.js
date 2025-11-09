// pages/index.js
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Products from '../components/Products/Products'
export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Products />
    </Layout>
  )
}