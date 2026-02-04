import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhatWeOffer from '@/components/WhatWeOffer'
import HowItWorks from '@/components/HowItWorks'
import PricingSnapshot from '@/components/PricingSnapshot'
import WhyChooseUs from '@/components/WhyChooseUs'
import Trust from '@/components/Trust'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <WhatWeOffer />
      <HowItWorks />
      <PricingSnapshot />
      <WhyChooseUs />
      <Trust />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  )
}
