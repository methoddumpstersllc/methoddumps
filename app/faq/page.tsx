'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqCategories = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'What is a dumpster trailer?',
          answer: 'A dumpster trailer is a mobile waste container on wheels that we deliver to your location. Unlike traditional roll-off dumpsters, trailers are easier to position, cause less property damage, and can be moved if needed.',
        },
        {
          question: 'How does the rental process work?',
          answer: 'Simple: (1) Call or text us with your project details, (2) We give you an exact quote and schedule delivery, (3) We drop off the trailer, (4) You fill it up, (5) We pick it up and handle all disposal. That\'s it.',
        },
        {
          question: 'Do you offer same-day delivery?',
          answer: 'Yes! When we have trailers available and you call early enough in the day, we can often deliver same-day. Next-day delivery is always available.',
        },
      ],
    },
    {
      category: 'Pricing & Fees',
      questions: [
        {
          question: 'How much does it cost?',
          answer: 'Pricing depends on trailer size, material type, rental duration, and weight. Standard junk loads start at [PRICE], construction debris at [PRICE], and heavy materials are priced by weight. Call or text for an exact quote.',
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No. We\'re 100% transparent. The only additional charges would be for extra days ([PRICE]/day) or going over the weight limit ([PRICE]/ton). We tell you everything upfront.',
        },
        {
          question: 'What if I need it longer than the rental period?',
          answer: 'No problem! Just let us know. Extra days are [PRICE] per day. We\'re flexible and understand projects take time.',
        },
        {
          question: 'When do I pay?',
          answer: 'We collect payment when we pick up the trailer. You can pay by cash, check, or card.',
        },
      ],
    },
    {
      category: 'What You Can Put In It',
      questions: [
        {
          question: 'What materials do you accept?',
          answer: 'We accept: household junk, furniture, appliances, construction debris (wood, drywall, roofing, siding), yard waste, concrete, brick, dirt, asphalt, and stone. Basically anything except hazardous materials.',
        },
        {
          question: 'What CAN\'T I put in the dumpster?',
          answer: 'We cannot accept: hazardous materials, chemicals, paint, oil, tires, batteries, electronics, asbestos, or anything flammable/toxic. If you\'re unsure, just ask us.',
        },
        {
          question: 'Can I mix different types of materials?',
          answer: 'For standard junk and construction debris, yes. However, heavy materials (concrete, brick, dirt) must be kept separate and are priced differently due to disposal costs.',
        },
        {
          question: 'Is there a weight limit?',
          answer: 'Yes. Standard rentals include [X] tons. If you go over, it\'s [PRICE] per additional ton. We weigh the trailer when we pick it up.',
        },
      ],
    },
    {
      category: 'Delivery & Pickup',
      questions: [
        {
          question: 'Where will you place the trailer?',
          answer: 'We can place it in your driveway, yard, street (with permit if required), or anywhere accessible. We work with you to find the best spot.',
        },
        {
          question: 'Do I need to be home for delivery or pickup?',
          answer: 'Not necessarily. As long as we have clear access and you\'ve shown us where to place it, we can drop off and pick up without you being there.',
        },
        {
          question: 'How much space do I need?',
          answer: 'A 12ft trailer needs about 20 feet of length and 8 feet of width. A 16ft trailer needs about 24 feet of length. We also need clearance for our truck to maneuver.',
        },
        {
          question: 'What if the trailer damages my driveway?',
          answer: 'Our trailers are designed to minimize damage. We use protective boards if needed. Damage is extremely rare, but if it happens, we\'ll work with you to make it right.',
        },
      ],
    },
    {
      category: 'Heavy Materials (Concrete, Dirt, Brick)',
      questions: [
        {
          question: 'Why is heavy material pricing different?',
          answer: 'Concrete, brick, dirt, and asphalt are extremely heavy and require specialized disposal facilities. They\'re priced by weight rather than volume because disposal costs are much higher.',
        },
        {
          question: 'How much concrete can I put in?',
          answer: 'It depends on the weight. A 12ft trailer can typically hold 3-5 tons of heavy material. We\'ll help you estimate based on your project.',
        },
        {
          question: 'Can I put dirt and concrete together?',
          answer: 'Yes, as long as it\'s classified as heavy materials. Just know it all goes to the same disposal facility and is priced by total weight.',
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-method-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Frequently Asked <span className="text-method-blue">Questions</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Everything you need to know about renting a dumpster trailer
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-method-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-3xl font-black text-white mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = catIndex * 100 + qIndex
                    return (
                      <div
                        key={qIndex}
                        className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl overflow-hidden hover:border-method-blue/50 transition-all"
                      >
                        <button
                          onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                        >
                          <span className="text-lg font-bold text-white pr-4">
                            {faq.question}
                          </span>
                          <svg
                            className={`w-6 h-6 text-method-blue flex-shrink-0 transition-transform ${
                              openIndex === globalIndex ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openIndex === globalIndex ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-b from-black to-method-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-6">
              Still Have <span className="text-method-blue">Questions?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We're here to help. Call or text us anytime.
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
