export default function WhatWeOffer() {
  const services = [
    {
      title: 'Junk Removal',
      description: 'Household items, furniture, appliances, and general cleanup',
      icon: '🗑️',
    },
    {
      title: 'Construction Debris',
      description: 'Wood, drywall, roofing, siding, and renovation waste',
      icon: '🏗️',
    },
    {
      title: 'Heavy Materials',
      description: 'Concrete, brick, dirt, asphalt, and stone (separate pricing)',
      icon: '🧱',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-black to-method-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            What We <span className="text-method-blue">Accept</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Dumpster trailer rentals for homeowners and contractors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-method-blue/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-method-blue/10 border border-method-blue/30 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <span className="text-2xl mr-3">💡</span>
            Pricing Based On
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="text-method-blue font-bold">•</span>
              <span>Dumpster size</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-method-blue font-bold">•</span>
              <span>Material type</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-method-blue font-bold">•</span>
              <span>Rental duration</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-method-blue font-bold">•</span>
              <span>Add-ons & extras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
