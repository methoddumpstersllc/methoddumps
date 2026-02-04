export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Pick Size + Material',
      description: 'Tell us what you need to haul and we'll recommend the right trailer size',
      icon: '📏',
    },
    {
      number: '02',
      title: 'Schedule Drop-off',
      description: 'Choose your delivery date and time that works best for your schedule',
      icon: '📅',
    },
    {
      number: '03',
      title: 'We Pick Up & Dispose',
      description: 'When you're done, we handle pickup and proper disposal of all materials',
      icon: '♻️',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-method-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-method-blue/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            How It <span className="text-method-blue">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three simple steps to get your dumpster trailer
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-method-blue to-transparent -translate-x-1/2"></div>
                )}
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/0 border border-white/20 rounded-2xl p-8 hover:border-method-blue transition-all hover:scale-105">
                  {/* Step Number */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-method-blue rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shadow-method-blue/50">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-6xl mb-6 mt-4">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-black text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center space-x-3 bg-white text-black hover:bg-gray-100 font-black text-lg px-10 py-5 rounded-xl transition-all hover:scale-105"
          >
            <span>Get Started Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
