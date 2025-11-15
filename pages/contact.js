// pages/contact.js
import { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { MapPin, Phone, Mail, Factory, Building } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 2000)
  }

  return (
    <Layout>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-plum mb-4">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-primary-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Get in touch with us for inquiries, bulk orders, export, and white labeling opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-semibold text-primary-plum mb-8">
                Get In Touch
              </h2>
              
              {/* Business Info */}
              <div className="mb-8 p-6 bg-primary-cream rounded-2xl">
                <p className="text-primary-plum font-semibold text-lg mb-4">
                  Contact us for bulk orders, export and white labeling of our products for your brand. 
                  We also ship to different parts of the world and deal B2B.
                </p>
              </div>

              {/* Addresses */}
              <div className="space-y-6">
                {/* Manufacturing Unit */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center">
                    <Factory className="w-6 h-6 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary-plum mb-2">
                      Our Unit
                    </h3>
                    <p className="text-gray-700">
                      Plot No. 32, Nimrani, MP
                    </p>
                  </div>
                </div>

                {/* Corporate Office */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary-plum mb-2">
                      Corporate Address
                    </h3>
                    <p className="text-gray-700">
                      C-3 803, Aravali Parisar,<br />
                      Manavta Nagar, Indore 452016
                    </p>
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary-plum mb-2">
                      Phone Numbers
                    </h3>
                    <div className="space-y-1">
                      <a href="tel:+919752709795" className="block text-gray-700 hover:text-primary-plum transition-colors">
                        +91 97527 09795
                      </a>
                      <a href="tel:+918619696860" className="block text-gray-700 hover:text-primary-plum transition-colors">
                        +91 86196 96860
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-gold/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary-plum mb-2">
                      Email
                    </h3>
                    <a href="mailto:contact@swedhaessentials.com" className="text-gray-700 hover:text-primary-plum transition-colors">
                      contact@swedhaessentials.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-primary-cream rounded-2xl p-8">
              <h2 className="text-3xl font-serif font-semibold text-primary-plum mb-6">
                Send Enquiry
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  Thank you for your enquiry! We'll get back to you soon.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="bulk-order">Bulk Order</option>
                      <option value="export">Export Inquiry</option>
                      <option value="white-labeling">White Labeling</option>
                      <option value="b2b">B2B Partnership</option>
                      <option value="general">General Inquiry</option>
                      <option value="product-info">Product Information</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-colors"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-gold text-primary-plum px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-200 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}