import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-method-blue rounded-lg flex items-center justify-center font-black text-2xl">
                M
              </div>
              <div>
                <div className="text-xl font-black text-white">METHOD DUMPSTERS</div>
                <div className="text-xs font-semibold text-method-blue tracking-wider">MICHIGAN</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Fast, transparent dumpster trailer rentals for homeowners and contractors across Michigan.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="tel:[PHONE]"
                className="text-method-blue hover:text-blue-400 font-semibold transition-colors"
              >
                [PHONE]
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="mailto:[EMAIL]"
                className="text-method-blue hover:text-blue-400 font-semibold transition-colors"
              >
                [EMAIL]
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/service-area" className="text-gray-400 hover:text-white transition-colors">
                  Service Area
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Junk Removal</li>
              <li>Construction Debris</li>
              <li>Heavy Materials</li>
              <li>Concrete Disposal</li>
              <li>Dirt & Brick Removal</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Method Dumpsters. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <span>Locally owned and operated in Michigan</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
