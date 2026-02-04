'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-lg shadow-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-method-blue rounded-lg flex items-center justify-center font-black text-2xl transition-transform group-hover:scale-105">
              M
            </div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-black text-white">METHOD</div>
              <div className="text-xs font-semibold text-method-blue tracking-wider">DUMPSTERS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/pricing" className="text-white/80 hover:text-white font-semibold transition-colors">
              Pricing
            </Link>
            <Link href="/service-area" className="text-white/80 hover:text-white font-semibold transition-colors">
              Service Area
            </Link>
            <Link href="/faq" className="text-white/80 hover:text-white font-semibold transition-colors">
              FAQ
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <a
              href="tel:[PHONE]"
              className="hidden sm:flex items-center space-x-2 bg-method-blue hover:bg-blue-600 text-white font-bold px-5 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              <span>📞</span>
              <span>Call Now</span>
            </a>
            <a
              href="sms:[TEXT NUMBER]"
              className="flex items-center space-x-2 bg-white text-black hover:bg-gray-200 font-bold px-5 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              <span>💬</span>
              <span className="hidden sm:inline">Text</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
