"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Target, Users, Zap, Globe, Heart, CheckCircle, Factory, Microscope, Shield } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"

const values = [
  {
    title: "We Follow Manufacturing Practices",
    description: "Adhering to industry-leading manufacturing standards for consistent quality and reliability."
  },
  {
    title: "Customer Centric",
    description: "We approach every client interaction as a partnership, delivering unparalleled service and support."
  },
  {
    title: "CFR-21 Part-211 Guidance",
    description: "Compliant with FDA CFR-21 Part-211 regulations for pharmaceutical manufacturing equipment."
  },
  {
    title: "Integrity",
    description: "Honesty, transparency, and ethical practices guide our every business decision."
  },
  {
    title: "Pharmaceutical Norms",
    description: "Following established pharmaceutical industry norms and international quality standards."
  },
  {
    title: "Quality Assured",
    description: "ISO certified manufacturing ensuring every instrument meets international pharmacopoeia standards."
  }
]

const milestones = [
  { year: "2000", event: "DEVI Group founded with vision for excellence in manufacturing" },
  { year: "2010", event: "Expanded into pharmaceutical laboratory equipment segment" },
  { year: "2018", event: "Achieved 500+ machines annual production capacity" },
  { year: "2022", event: "Raise Lab Equipment established as dedicated pharma division" }
]

const capabilities = [
  "Tablet Hardness Testers",
  "Tablet Friability Testers", 
  "Disintegration Testers",
  "Dissolution Testing Apparatus",
  "Powder Testing Instruments",
  "Leak Test Equipment",
  "Antibiotic Zone Readers",
  "Melting & Boiling Point Apparatus"
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1a1f3a]/5 via-background to-[#7F9DB1]/5">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 border bg-[#7F9DB1]/10 border-[#7F9DB1]/20">
                <Factory className="h-4 w-4 text-[#7F9DB1]" />
                <span className="text-sm font-medium text-[#7F9DB1]">Part of DEVI Group</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                About Raise Lab Equipment
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                A name synonymous with excellence and innovation in pharmaceutical laboratory testing instruments for over two decades.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  Our Story
                </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Raise Lab Equipment is part of the prestigious DEVI Group, a name that has been synonymous with 
                      excellence and innovation for over two decades. Based in Moula Ali Industrial Park, Hyderabad, 
                      we have established ourselves as a leading manufacturer of pharmaceutical laboratory testing instruments.
                    </p>
                    <p>
                      Our journey has been marked by continuous innovation and an unwavering commitment to quality. 
                      Today, we manufacture and sell over 1,000 precision machines annually, setting industry benchmarks 
                      in pharmaceutical testing instruments.
                    </p>
                    <p>
                      Our team comprises pharmaceutical domain experts who understand the critical nature of quality 
                      control in drug manufacturing. We deliver innovative, tailored solutions that meet the exacting 
                      standards of USP, EP, and IP pharmacopoeia requirements.
                    </p>
                  </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[#7F9DB1]/20"
              >
                <Image
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80"
                  alt="Raise Lab Equipment - Pharmaceutical Testing Laboratory"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <p className="font-semibold text-[#1a1f3a]">Hyderabad Manufacturing Facility</p>
                    <p className="text-sm text-muted-foreground">State-of-the-art production with ISO certification</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl border border-[#7F9DB1]/20 hover:border-[#7F9DB1]/40 transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#7F9DB1]" />
                      <span className="font-medium">{capability}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4 border bg-[#7F9DB1]/10 border-[#7F9DB1]/20">
                  <Microscope className="h-4 w-4 text-[#7F9DB1]" />
                  <span className="text-sm font-medium text-[#7F9DB1]">Our Expertise</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  Product Capabilities
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We manufacture a comprehensive range of pharmaceutical testing instruments designed to meet 
                  the rigorous quality control requirements of modern drug manufacturing facilities.
                </p>
                  <p className="text-muted-foreground">
                    Every instrument is engineered for precision, reliability, and compliance with international 
                    pharmacopoeia standards including USP, EP, and IP requirements.
                  </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Our Values
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-card p-8 rounded-2xl border border-[#7F9DB1]/20 shadow-lg hover:shadow-2xl hover:border-[#7F9DB1]/40 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-3 text-[#1a1f3a]">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                { value: "10+", label: "Years of Excellence" },
                { value: "1000+", label: "Machines Annually" },
                { value: "500+", label: "Happy Clients" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl lg:text-7xl font-bold mb-4 text-[#7F9DB1]">
                    {stat.value}
                  </div>
                  <div className="text-lg text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Our Journey
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Key milestones in our path to excellence
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-lg bg-[#1a1f3a] text-white">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-card p-6 rounded-2xl border border-[#7F9DB1]/20 hover:border-[#7F9DB1]/40 transition-colors">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center bg-card p-12 lg:p-16 rounded-3xl border border-[#7F9DB1]/20 shadow-xl"
            >
              <Shield className="h-12 w-12 mx-auto mb-6 text-[#7F9DB1]" />
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Partner with Excellence
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Join hundreds of pharmaceutical companies who trust Raise Lab Equipment for their quality control needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center px-8 py-4 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity bg-[#1a1f3a]">
                    Get in Touch
                  </button>
                </Link>
                <Link href="/products">
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-background border-2 border-[#7F9DB1]/30 text-[#1a1f3a] rounded-lg font-semibold hover:border-[#7F9DB1] hover:bg-[#7F9DB1]/5 transition-colors">
                    View Products
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}