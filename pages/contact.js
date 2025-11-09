// pages/contact.js
import Layout from '../components/Layout/Layout'

export default function ContactPage() {
  return (
    <Layout>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-primary-plum mb-8">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-8">
            We'd love to hear from you! Get in touch with us.
          </p>
          <div className="space-y-4 text-lg">
            <p>📧 Email: contact@swedhaessentials.com</p>
            <p>📍 Location: India</p>
            <p>🌐 Website: www.swedhaessentials.com</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}