import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PricingPage() {
  const packages = [
    {
      name: 'Standard Junk Load',
      size: '12ft or 16ft Trailer',
      description: 'Perfect for household cleanouts, furniture, and general junk',
      included: [
        'Up to [X] days rental',
        '[X] ton weight limit',
        'Standard disposal included',
        'Same/next-day delivery',
        'No sorting required',
      ],
      basePrice: '[PRICE]',
      notes: 'Additional weight: [PRICE] per ton',
    },
    {
      name: 'Construction Debris',
      size: '12ft or 16ft Trailer',
      description: 'For renovation projects, demolition, and building materials',
      included: [
        'Up to [X] days rental',
        '[X] ton weight limit',
        'Construction disposal',
        'Flexible pickup scheduling',
        'Accepts wood, drywall, roofing',
      ],
      basePrice: '[PRICE]',
      notes: 'Additional weight: [PRICE] per ton',
      popular: true,
    },
    {
      name: 'Heavy Materials',
      size: '12ft or 16ft Trailer',
      description: 'Concrete, brick, dirt, asphalt, and stone',
      included: [
        'Up to [X] days rental',
        'Weight-based pricing',
        'Specialized disposal',
        'Heavy-duty trailer',
        'Professional handling',
      ],
      basePrice: '[PRICE]',
      notes: 'Priced per ton - call for exact quote',
    },
  ]

  const addOns = [
    { name: 'Extra Day', price: '[PRICE]/day' },
    { name: 'Weight Overage', price: '[PRICE]/ton' },
    { name: 'After-Hours Delivery', price: '[PRICE]' },
    { name: 'Extended Rental (7+ days)', price: 'Custom Quote' },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-method-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Transparent <span className="text-method-blue">Pricing</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              No hidden fees. No surprises. Just honest pricing.
            </p>
            <div className="inline-flex items-center space-x-2 bg-method-blue/20 border border-method-blue/50 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-method-blue rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-method-blue">Call or text for exact quote based on your project</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-method-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${
                  pkg.popular 
                    ? 'from-method-blue/20 to-method-blue/5 border-method-blue' 
                    : 'from-white/5 to-white/0 border-white/10'
                } border-2 rounded-2xl p-8`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-method-blue px-4 py-1 rounded-full text-sm font-black">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-sm text-method-blue font-semibold mb-2">
                    {pkg.size}
                  </div>
                  <p className="text-sm text-gray-400">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="text-4xl font-black text-white mb-1">
                    {pkg.basePrice}
                  </div>
                  <div className="text-sm text-gray-500">
                    Base price
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-white mb-3">Included:</h4>
                  <ul className="space-y-2">
                    {pkg.included.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                        <svg className="w-5 h-5 text-method-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-3 mb-6">
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold text-white">Note:</span> {pkg.notes}
                  </p>
                </div>

                <a
                  href="tel:[PHONE]"
                  className={`block w-full text-center font-bold py-3 rounded-lg transition-all ${
                    pkg.popular
                      ? 'bg-method-blue hover:bg-blue-600 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-8 text-center">
              Add-Ons & <span className="text-method-blue">Additional Fees</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-between hover:border-method-blue/50 transition-all"
                >
                  <span className="font-semibold text-white">{addon.name}</span>
                  <span className="text-method-blue font-black">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Price */}
      <section className="py-20 bg-method-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-8 text-center">
              What Affects Your <span className="text-method-blue">Price?</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: '📏', title: 'Trailer Size', desc: '12ft or 16ft trailer options' },
                { icon: '⚖️', title: 'Material Weight', desc: 'Heavier loads cost more to dispose' },
                { icon: '🗓️', title: 'Rental Duration', desc: 'Standard rental includes [X] days' },
                { icon: '🏗️', title: 'Material Type', desc: 'Concrete/brick costs more than junk' },
              ].map((factor, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/0 border border-white/10 rounded-xl p-6"
                >
                  <div className="text-4xl mb-3">{factor.icon}</div>
                  <h3 className="text-xl font-black text-white mb-2">{factor.title}</h3>
                  <p className="text-gray-400 text-sm">{factor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-black to-method-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-6">
              Ready for an <span className="text-method-blue">Exact Quote?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Call or text us with your project details
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:[PHONE]"
                className="w-full sm:w-auto bg-method-blue hover:bg-blue-600 text-white font-black text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 flex items-center justify-center space-x-3"
              >
                <span>📞</span>
                <span>Call [PHONE]</span>
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
