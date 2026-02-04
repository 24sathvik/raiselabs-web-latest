"use client"

import { motion } from "framer-motion"
import { ArrowRight, Beaker, Award, Shield, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
      {/* Background Video - optimized loading */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/34123594-b699-4877-9161-c2dbdbf01968/generated_videos/professional-laboratory-equipment-manufa-07476dc1-20251206130035.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f3a]/90 via-[#1a1f3a]/80 to-[#1a1f3a]/90" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 border border-[#7F9DB1]/30"
            style={{ backgroundColor: 'rgba(127, 157, 177, 0.15)' }}
          >
            <Beaker className="h-4 w-4" style={{ color: '#7F9DB1' }} />
            <span className="text-sm font-medium text-white">ISO Certified Precision Instruments</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6"
          >
            Raise Lab Equipment
            <br />
            <span style={{ color: '#7F9DB1' }}>
              Excellence in Testing
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            Premier manufacturer of pharmaceutical testing instruments including tablet hardness testers, 
            dissolution apparatus, and friability testers. Trusted by leading pharmaceutical companies.
          </motion.p>

          {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/90">
                <Shield className="h-4 w-4" style={{ color: '#7F9DB1' }} />
                <span>USP/EP/IP Compliant</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/products">
                <Button 
                  size="lg" 
                  className="group text-base px-8 text-white border-2 border-[#7F9DB1] bg-transparent hover:bg-[#7F9DB1]/20 transition-all shadow-lg w-full sm:w-auto"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/customization">
                <Button
                  size="lg"
                  className="text-base px-8 text-white border-2 border-[#7F9DB1]/50 bg-white/5 hover:bg-[#7F9DB1]/20 transition-all shadow-lg w-full sm:w-auto"
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Customization
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="text-base px-8 text-white border-2 border-[#7F9DB1] bg-transparent hover:bg-[#7F9DB1]/20 transition-all shadow-lg w-full sm:w-auto"
                >
                  Request Quote
                </Button>
              </Link>
            </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 gap-8 pt-16 mt-16 border-t border-white/20"
          >
              {[
                { value: "1000+", label: "Machines/Year" },
                { value: "10+", label: "Years Experience" },
                { value: "500+", label: "Happy Clients" },
              ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl lg:text-4xl font-bold" style={{ color: '#7F9DB1' }}>{stat.value}</div>
                <div className="text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}