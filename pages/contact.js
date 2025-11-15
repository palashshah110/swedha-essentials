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
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) setError('')
  }

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  setError('')

  try {
    const response = await fetch('https://skin-sugar.vercel.app/api/contactUs/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        company: 'Swedha Essentials',
        source: 'Website Contact Form'
      })
    })

    // Check if response is JSON
    const contentType = response.headers.get('content-type')
    let data
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json()
    } else {
      // If not JSON, get the text to see what's returned
      const text = await response.text()
      console.warn('Non-JSON response:', text)
      
      // If it's an HTML error page, treat as server error
      if (text.includes('<!DOCTYPE') || text.includes('<html')) {
        throw new Error('Server error. Please try again later.')
      } else {
        // If it's some other text, use it as message
        data = { message: text || 'Email sent successfully' }
      }
    }

    if (response.ok) {
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } else {
      throw new Error(data.message || `Server error: ${response.status}`)
    }
  } catch (err) {
    console.error('Email sending error:', err)
    
    // User-friendly error messages
    if (err.message.includes('Failed to fetch') || err.message.includes('Network')) {
      setError('Network error. Please check your connection and try again.')
    } else if (err.message.includes('404')) {
      setError('Service temporarily unavailable. Please contact us directly at contact@swedhaessentials.com')
    } else if (err.message.includes('500')) {
      setError('Server error. Please try again later or contact us directly.')
    } else {
      setError(err.message || 'Something went wrong. Please try again.')
    }
  } finally {
    setIsSubmitting(false)
  }
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
              
              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  <strong>Thank you!</strong> Your enquiry has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                  <strong>Error:</strong> {error}
                </div>
              )}

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
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-colors disabled:opacity-50"
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
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-colors disabled:opacity-50"
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
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-colors disabled:opacity-50"
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
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-colors disabled:opacity-50"
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
                    disabled={isSubmitting}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-colors disabled:opacity-50"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-gold text-primary-plum px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-200 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-plum" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Enquiry'
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}