import Link from 'next/link'

export default function PricingSnapshot() {
  const packages = [
    {
      name: 'Standard Junk',
      description: 'Household items, furniture, general debris',
      features: [
        'Up to [X] days rental',
        '[X] ton weight limit',
        'Standard disposal included',
        'Same/next-day delivery',
      ],
      price: '[PRICE]',
      popular: false,
    },
    {
      name: 'Construction Debris',
      description: 'Wood, drywall, roofing materials',
      features: [
        'Up to [X] days rental',
        '[X] ton weight limit',
        'Construction disposal',
        'Flexible scheduling',
      ],
      price: '[PRICE]',
      popular: true,
    },
    {
      name: 'Heavy Materials',
      description: 'Concrete, brick, dirt, asphalt',
      features: [
        'Up to [X] days rental',
        'Weight-based pricing',
        'Specialized disposal',
        'Heavy-duty trailer',
      ],
      price: '[PRICE]',
      popular: false,
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-method-dark to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Simple <span className="text-method-blue">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Choose the package that fits your project
          </p>
          <p className="text-sm text-gray-500">
            Exact quote depends on material type, weight, and rental length
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${
                pkg.popular 
                  ? 'from-method-blue/20 to-method-blue/5 border-method-blue' 
                  : 'from-white/5 to-white/0 border-white/10'
              } border-2 rounded-2xl p-8 hover:scale-105 transition-all`}
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
                <p className="text-sm text-gray-400">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-black text-white mb-1">
                  {pkg.price}
                </div>
                <div className="text-sm text-gray-500">
                  Starting price
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2 text-gray-300">
                    <svg className="w-5 h-5 text-method-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

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

        {/* Additional Fees */}
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-method-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Additional Fees
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-start space-x-2">
              <span className="text-method-blue font-bold mt-1">•</span>
              <div>
                <span className="font-semibold">Extra Days:</span> [PRICE] per day after rental period
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-method-blue font-bold mt-1">•</span>
              <div>
                <span className="font-semibold">Overage:</span> [PRICE] per ton over weight limit
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/pricing"
            className="inline-flex items-center space-x-2 text-method-blue hover:text-blue-400 font-bold transition-colors"
          >
            <span>View Full Pricing Details</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
