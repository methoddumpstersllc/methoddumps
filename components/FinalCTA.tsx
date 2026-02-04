export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-method-dark to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-method-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Ready to Get <span className="text-method-blue">Started?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Call or text now for a quote. Same-day delivery available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="tel:[PHONE]"
              className="w-full sm:w-auto bg-method-blue hover:bg-blue-600 text-white font-black text-xl px-12 py-6 rounded-xl transition-all hover:scale-105 shadow-2xl shadow-method-blue/50 flex items-center justify-center space-x-3"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call [PHONE]</span>
            </a>
            <a
              href="sms:[TEXT NUMBER]"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black font-black text-xl px-12 py-6 rounded-xl transition-all hover:scale-105 shadow-2xl flex items-center justify-center space-x-3"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span>Text Us</span>
            </a>
          </div>

          {/* Service highlights */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-white">Fast Delivery</div>
              <div className="text-sm text-gray-400">Same/next-day available</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-bold text-white">Clear Pricing</div>
              <div className="text-sm text-gray-400">No hidden fees</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">🏗️</div>
              <div className="font-bold text-white">Heavy Materials</div>
              <div className="text-sm text-gray-400">We accept everything</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
