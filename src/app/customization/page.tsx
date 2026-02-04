"use client"

import { motion } from "framer-motion"
import { Settings, Ruler, Layers, Cpu, Code, ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function CustomizationPage() {
  const examples = [
    {
      title: "Custom Dimensions",
      description: "Modify instrument sizing to fit specific laboratory space or workflow requirements.",
      icon: Ruler,
      color: "blue"
    },
    {
      title: "Custom Materials",
      description: "Alternative materials like specialized alloys or coatings for specific chemical resistance.",
      icon: Layers,
      color: "green"
    },
    {
      title: "Additional Sensors & Modules",
      description: "Integration of specialized sensors for unique data collection needs.",
      icon: Cpu,
      color: "purple"
    },
    {
      title: "Software & Reporting",
      description: "Tailored software features and reporting formats to match your internal compliance standards.",
      icon: Code,
      color: "orange"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-grow pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1a1f3a] via-[#1a1f3a] to-[#1a1f3a]/90 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#7F9DB1] blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7F9DB1] blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-[#7F9DB1]/20 px-4 py-2 rounded-full mb-6 border border-[#7F9DB1]/30 backdrop-blur-sm">
                <Settings className="h-4 w-4 text-[#7F9DB1]" />
                <span className="text-sm font-medium text-[#7F9DB1]">Custom Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                Product Customization
              </h1>
              <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                At Raise Lab Equipment, we understand that every laboratory has unique challenges. 
                Our engineering team offers comprehensive customization services to tailor our instruments 
                exactly to your operational needs.
              </p>
              
              <Link href="/contact#contact-form">
                <Button size="lg" className="bg-[#7F9DB1] hover:bg-[#7F9DB1]/90 text-white h-14 px-8 text-lg rounded-xl shadow-xl">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Request Customization
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-3xl border border-border bg-card/50 hover:bg-card hover:border-[#7F9DB1]/40 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#7F9DB1]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <example.icon className="h-7 w-7 text-[#7F9DB1]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1a1f3a]">
                    {example.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {example.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] p-8 lg:p-16 border border-border shadow-2xl relative overflow-hidden">
              <div className="relative z-10 text-center">
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-[#1a1f3a]">
                  Our Process
                </h2>
                <div className="grid sm:grid-cols-3 gap-8">
                  {[
                    { step: "01", label: "Consultation", desc: "We discuss your specific technical requirements and constraints." },
                    { step: "02", label: "Design", desc: "Our engineering team develops a tailored solution for your review." },
                    { step: "03", label: "Build", desc: "We manufacture your custom instrument with rigorous quality testing." }
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl font-bold text-[#7F9DB1]/20 mb-4">{s.step}</div>
                      <h4 className="text-xl font-bold mb-2">{s.label}</h4>
                      <p className="text-muted-foreground">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-12 border-t border-border">
                  <Link href="/contact#contact-form">
                    <Button size="lg" className="bg-[#1a1f3a] hover:bg-[#1a1f3a]/90 text-white h-14 px-10 text-lg rounded-xl">
                      Start Your Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
