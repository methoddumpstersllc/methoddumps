export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '🚫',
      title: 'No Double Booking',
      description: 'Your trailer is reserved exclusively for you. No sharing, no surprises.',
    },
    {
      icon: '⚡',
      title: 'Fast Response',
      description: 'Same-day and next-day delivery available. We respond within hours, not days.',
    },
    {
      icon: '👨‍💼',
      title: 'Professional Scheduling',
      description: 'Flexible pickup and drop-off times that work with your schedule.',
    },
    {
      icon: '📋',
      title: 'Clear Rules',
      description: 'No hidden fees. Transparent pricing. You know exactly what you\'re paying for.',
    },
    {
      icon: '🏗️',
      title: 'Heavy Materials OK',
      description: 'We accept concrete, brick, dirt, and other heavy materials others won\'t take.',
    },
    {
      icon: '🏠',
      title: 'Locally Owned',
      description: 'Michigan-based and operated. Supporting local families and contractors.',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,82,204,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Why Choose <span className="text-method-blue">Method</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're not just renting trailers—we're making your project easier
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 hover:border-method-blue/50 hover:bg-white/10 transition-all"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
