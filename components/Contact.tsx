'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    materialType: 'junk',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Create SMS message
      const smsBody = `NEW QUOTE REQUEST
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Material: ${formData.materialType}
Message: ${formData.message}`

      // Send via SMS link (this will open the user's SMS app)
      window.location.href = `sms:[TEXT NUMBER]?body=${encodeURIComponent(smsBody)}`
      
      setStatus('success')
      setFormData({ name: '', phone: '', email: '', materialType: 'junk', message: '' })
      
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-method-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                Get Your <span className="text-method-blue">Quote</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Call, text, or fill out the form. We'll respond fast.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-12">
                <a
                  href="tel:[PHONE]"
                  className="flex items-center space-x-4 bg-gradient-to-r from-method-blue/20 to-transparent border border-method-blue/30 rounded-xl p-6 hover:border-method-blue transition-all group"
                >
                  <div className="w-14 h-14 bg-method-blue rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Call Us</div>
                    <div className="text-xl font-bold text-white">[PHONE]</div>
                  </div>
                </a>

                <a
                  href="sms:[TEXT NUMBER]"
                  className="flex items-center space-x-4 bg-gradient-to-r from-white/10 to-transparent border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Text Us</div>
                    <div className="text-xl font-bold text-white">[TEXT NUMBER]</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-xl p-6">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <div className="text-xl font-bold text-white">[EMAIL]</div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-method-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white font-semibold">7 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white font-semibold">8 AM - 4 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/0 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-white mb-6">
                Request a Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-method-blue focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-method-blue focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-method-blue focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Material Type *
                  </label>
                  <select
                    required
                    value={formData.materialType}
                    onChange={(e) => setFormData({ ...formData, materialType: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-method-blue focus:outline-none transition-colors"
                  >
                    <option value="junk">General Junk</option>
                    <option value="construction">Construction Debris</option>
                    <option value="heavy">Heavy Materials (Concrete/Brick/Dirt)</option>
                    <option value="unsure">Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-method-blue focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-method-blue hover:bg-blue-600 text-white font-black text-lg py-4 rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Sent!' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-green-400 text-sm text-center">
                    Message sent! We'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please call or text us directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
