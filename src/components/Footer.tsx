"use client"

import Link from "next/link"
import { Linkedin, Download, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
    const quickLinks = [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/news", label: "News" },
      { href: "/blog", label: "Blogs" },
      { href: "/service", label: "Service Request" },
      { href: "/about", label: "About Us" },
    ]

  return (
    <footer className="bg-[#1a1f3a] text-white border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Office Address */}
            <div>
              <h3 className="font-semibold mb-6 text-lg flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#7F9DB1]" />
                Office Address
              </h3>
              <address className="not-italic text-white/90 leading-relaxed text-sm">
                C -6, B1,Industrial Park, Moula Ali,<br />
                Hyderabad, Secunderabad,<br />
                Telangana 500040.
              </address>
            </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+919177770365"
                  className="flex items-center gap-2 text-white/90 hover:text-[#7F9DB1] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  9177770365
                </a>
              </li>
              <li>
                <a
                  href="tel:+919177770516"
                  className="flex items-center gap-2 text-white/90 hover:text-[#7F9DB1] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  9177770516
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@raiselabequip.com"
                  className="flex items-center gap-2 text-white/90 hover:text-[#7F9DB1] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@raiselabequip.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@raiselabequip.com"
                  className="flex items-center gap-2 text-white/90 hover:text-[#7F9DB1] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  sales@raiselabequip.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-[#7F9DB1] transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
            <div>
              <h3 className="font-semibold mb-6 text-lg">Connect With Us</h3>
              <a
                href="https://in.linkedin.com/company/raise-lab-equipment-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-4 bg-white/10 hover:bg-[#7F9DB1]/30 rounded-lg transition-colors text-sm font-medium mb-8"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>

            <div>
              <h4 className="font-semibold mb-4 text-base">Download Catalogue</h4>
              <a
                href="/catalogue.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors bg-[#7F9DB1] text-white hover:bg-[#7F9DB1]/80"
              >
                <Download className="h-4 w-4" />
                English
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Raise Labs Equipment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}