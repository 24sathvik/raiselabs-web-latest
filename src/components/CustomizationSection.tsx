"use client"

import { motion } from "framer-motion"
import { Settings, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CustomizationSection() {
  return (
    <section className="py-12 lg:py-20 bg-[#1a1f3a] text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-[#7F9DB1]/20 px-4 py-2 rounded-full mb-6 border border-[#7F9DB1]/30">
              <Settings className="h-4 w-4 text-[#7F9DB1]" />
              <span className="text-sm font-medium text-[#7F9DB1]">Tailored For You</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Bespoke Lab Solutions
            </h2>
            <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-xl">
              Need specific dimensions, specialized materials, or custom software integration? 
              Our engineering team specializes in modifying our premium instruments to meet your unique laboratory requirements.
            </p>
            <Link href="/customization">
              <Button size="lg" className="bg-[#7F9DB1] hover:bg-[#7F9DB1]/90 text-white px-8 h-14 text-lg rounded-xl shadow-xl">
                Explore Customization Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {[
                { label: "Dimensions", icon: "📏" },
                { label: "Materials", icon: "🔬" },
                { label: "Software", icon: "💻" },
                { label: "Sensors", icon: "📡" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="font-semibold text-[#7F9DB1]">{item.label}</div>
                </div>
              ))}
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#7F9DB1]/20 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
