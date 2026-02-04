'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-method-dark to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-method-blue rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-method-blue/20 border border-method-blue/50 rounded-full px-6 py-2 mb-8 slide-up">
            <div className="w-2 h-2 bg-method-blue rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-method-blue">Michigan's Trusted Dumpster Rental</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 slide-up-delay">
            <span className="text-white">Dumpster Trailer</span>
            <br />
            <span className="text-white">Rentals Made </span>
            <span className="bg-gradient-to-r from-method-blue to-blue-400 text-transparent bg-clip-text">Simple</span>
            <span className="text-white">.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-semibold mb-4 max-w-3xl mx-auto slide-up-delay-2">
            Fast delivery. Transparent pricing. Heavy materials accepted.
          </p>

          {/* Same-day delivery notice */}
          <p className="text-sm sm:text-base text-gray-400 mb-12 slide-up-delay-2">
            ⚡ Same-day and next-day delivery available (when open)
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 slide-up-delay-2">
            <a
              href="tel:[PHONE]"
              className="w-full sm:w-auto bg-method-blue hover:bg-blue-600 text-white font-black text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-2xl shadow-method-blue/50 flex items-center justify-center space-x-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now</span>
            </a>
            <a
              href="sms:[TEXT NUMBER]"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black font-black text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-2xl flex items-center justify-center space-x-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span>Text for Quote</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto slide-up-delay-2">
            {[
              { icon: '✓', text: 'No Double Booking' },
              { icon: '⚡', text: 'Fast Response' },
              { icon: '📋', text: 'Clear Rules' },
              { icon: '🏠', text: 'Locally Owned' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold text-gray-300">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
