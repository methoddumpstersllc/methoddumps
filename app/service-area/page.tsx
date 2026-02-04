import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ServiceAreaPage() {
  const serviceAreas = [
    'Ann Arbor',
    'Detroit',
    'Dearborn',
    'Livonia',
    'Warren',
    'Sterling Heights',
    'Farmington Hills',
    'Troy',
    'Novi',
    'Royal Oak',
    'Southfield',
    'Westland',
    'Rochester Hills',
    'Bloomfield Hills',
    'Birmingham',
    '[ADD MORE CITIES]',
  ]

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-method-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Serving All of <span className="text-method-blue">Michigan</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Fast dumpster trailer delivery across the state
            </p>
            <div className="inline-flex items-center space-x-2 bg-method-blue/20 border border-method-blue/50 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-method-blue rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-method-blue">Don't see your city? Call us—we likely deliver there!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-method-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-black text-white mb-4">
                Cities We <span className="text-method-blue">Serve</span>
              </h2>
              <p className="text-gray-400">
                Same-day and next-day delivery available in these areas
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((city, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/0 border border-white/10 rounded-xl p-4 hover:border-method-blue/50 hover:bg-white/10 transition-all text-center"
                >
                  <div className="text-lg font-bold text-white">{city}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/0 border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-white mb-4">
                  Not Sure If We <span className="text-method-blue">Deliver</span> to You?
                </h2>
                <p className="text-gray-400">
                  We're expanding constantly. Give us a call to check availability in your area.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-method-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Metro Detroit Coverage</h3>
                      <p className="text-sm text-gray-400">Primary service area with fastest delivery times</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-method-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Southeast Michigan</h3>
                      <p className="text-sm text-gray-400">Extended coverage with flexible scheduling</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-method-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Statewide Service</h3>
                      <p className="text-sm text-gray-400">Ask about delivery to your Michigan location</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="font-bold text-white mb-4 text-center">Delivery Times</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Metro Detroit</span>
                      <span className="text-method-blue font-bold">Same/Next Day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Southeast MI</span>
                      <span className="text-method-blue font-bold">1-2 Days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Other Areas</span>
                      <span className="text-method-blue font-bold">2-3 Days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-method-dark to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-6">
              Call to Confirm <span className="text-method-blue">Delivery</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We're happy to check if we service your area
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:[PHONE]"
                className="w-full sm:w-auto bg-method-blue hover:bg-blue-600 text-white font-black text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 flex items-center justify-center space-x-3"
              >
                <span>📞</span>
                <span>Call Now</span>
              </a>
              <a
                href="sms:[TEXT NUMBER]"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black font-black text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 flex items-center justify-center space-x-3"
              >
                <span>💬</span>
                <span>Text Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
