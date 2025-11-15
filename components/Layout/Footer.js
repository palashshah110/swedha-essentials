// components/Layout/Footer.js
import Link from 'next/link'
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary-plum text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 relative mt-4">
                <Image
                  src="/logo.jpeg"
                  alt="Swedha Essentials"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">Swedha Essentials</h3>
                <p className="text-sm text-primary-gold">Essence of Purity</p>
              </div>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Bringing nature's healing touch into everyday living through pure, herbal, 
              and organic personal care and home fragrance products.
            </p>
            <p className="text-primary-gold font-semibold mb-4">
              Contact us for bulk orders, export and white labeling of our products for your brand. 
              We also ship to different parts of the world and deal B2B.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-primary-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:contact@swedhaessentials.com" className="text-white/70 hover:text-primary-gold transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/70 hover:text-primary-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-primary-gold transition-colors">About</Link></li>
              <li><Link href="/products" className="text-white/70 hover:text-primary-gold transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-primary-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:contact@swedhaessentials.com" className="flex items-center space-x-2 text-white/70 hover:text-primary-gold transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@swedhaessentials.com</span>
              </a>
              <a href="tel:+919752709795" className="flex items-center space-x-2 text-white/70 hover:text-primary-gold transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 97527 09795</span>
              </a>
              <a href="tel:+918619696860" className="flex items-center space-x-2 text-white/70 hover:text-primary-gold transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 86196 96860</span>
              </a>
              <div className="flex items-start space-x-2 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Plot No. 32, Nimrani, MP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Swedha Essentials LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}