'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What can I put in the dumpster?',
      answer: 'We accept household junk, furniture, appliances, construction debris (wood, drywall, roofing), and heavy materials like concrete, brick, and dirt. We DO NOT accept hazardous materials, chemicals, paint, tires, or electronics.',
    },
    {
      question: 'How long can I keep the dumpster trailer?',
      answer: 'Standard rentals include [X] days. Need it longer? No problem—just let us know. Extra days are charged at [PRICE] per day.',
    },
    {
      question: 'Do you accept concrete, dirt, and brick?',
      answer: 'Yes! We have separate pricing for heavy materials like concrete, brick, dirt, and asphalt. These require specialized disposal and are priced by weight.',
    },
    {
      question: 'How fast can you deliver?',
      answer: 'We offer same-day and next-day delivery when we\'re open and trailers are available. Call or text us as early as possible for fastest service.',
    },
    {
      question: 'Do I need a permit?',
      answer: 'If the trailer is placed on your private property (driveway, yard), you typically don\'t need a permit. If it needs to be on the street, your city may require a permit. We can guide you through this.',
    },
    {
      question: 'What if I go over the weight limit?',
      answer: 'Overage fees apply at [PRICE] per ton over the included weight. We\'ll let you know the weight when we pick up the trailer.',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-black to-method-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Common <span className="text-method-blue">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl overflow-hidden hover:border-method-blue/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-method-blue flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
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
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:[PHONE]"
              className="inline-flex items-center space-x-2 bg-method-blue hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-lg transition-all"
            >
              <span>Call Us</span>
            </a>
            <a
              href="sms:[TEXT NUMBER]"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-lg transition-all border border-white/20"
            >
              <span>Text Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
