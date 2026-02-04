import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Method Dumpsters | Dumpster Trailer Rentals in Michigan',
  description: 'Fast, transparent dumpster trailer rentals in Michigan. We accept junk, construction debris, concrete, brick, and dirt. Same-day and next-day delivery available.',
  keywords: 'dumpster rental Michigan, dumpster trailer, construction debris, concrete disposal, junk removal',
  openGraph: {
    title: 'Method Dumpsters | Dumpster Trailer Rentals in Michigan',
    description: 'Fast, transparent dumpster trailer rentals. Same-day delivery available.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Method Dumpsters",
              "description": "Dumpster trailer rentals for homeowners and contractors in Michigan",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "MI",
                "addressCountry": "US"
              },
              "telephone": "[PHONE]",
              "priceRange": "$$",
              "areaServed": {
                "@type": "State",
                "name": "Michigan"
              },
              "serviceType": "Dumpster Rental Service"
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
