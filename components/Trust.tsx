export default function Trust() {
  const reviews = [
    {
      name: 'John Martinez',
      role: 'Homeowner',
      rating: 5,
      text: 'Fast delivery, clear pricing, and they picked up exactly when they said they would. Made my renovation project so much easier.',
    },
    {
      name: 'Sarah Thompson',
      role: 'Contractor',
      rating: 5,
      text: 'We use Method for all our job sites. Professional, reliable, and they handle heavy materials without issues. Highly recommend.',
    },
    {
      name: 'Mike Chen',
      role: 'Property Manager',
      rating: 5,
      text: 'No double booking means I can actually plan my cleanouts. These guys are the real deal. Best rental service in Michigan.',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-method-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Trusted by <span className="text-method-blue">Michigan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-method-blue/50 transition-all"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{review.text}"
              </p>
              
              {/* Reviewer */}
              <div className="flex items-center space-x-3 border-t border-white/10 pt-4">
                <div className="w-12 h-12 bg-method-blue rounded-full flex items-center justify-center font-black text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">⭐</div>
            <div className="text-2xl font-black text-white mb-1">4.9/5</div>
            <div className="text-sm text-gray-400">Google Rating</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <div className="text-2xl font-black text-white mb-1">Insured</div>
            <div className="text-sm text-gray-400">Fully Licensed</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🏘️</div>
            <div className="text-2xl font-black text-white mb-1">Local</div>
            <div className="text-sm text-gray-400">Michigan Owned</div>
          </div>
        </div>
      </div>
    </section>
  )
}
