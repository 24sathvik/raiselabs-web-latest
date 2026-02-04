"use client"

import { Award, Headphones, Shield, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Industry Leading Quality",
    description: "Our instruments meet international pharmacopoeia standards (USP, EP, IP) ensuring the highest quality and reliability for your laboratory."
  },
  {
    icon: Shield,
    title: "Precision Engineering",
    description: "Manufactured with precision engineering and quality materials, our equipment delivers consistent, accurate results you can trust."
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated technical support team available to assist with installation, training, troubleshooting, and maintenance services."
  },
  {
    icon: TrendingUp,
    title: "Innovation & Research",
    description: "Continuous investment in R&D to bring you the latest technology and innovative solutions for pharmaceutical testing."
  },
  {
    icon: Award,
    title: "Global Standards Compliance",
    description: "All products are designed and tested to comply with international regulatory requirements and quality standards."
  },
  {
    icon: Shield,
    title: "Proven Reliability",
    description: "Trusted by pharmaceutical companies and QC laboratories worldwide for critical quality control testing operations."
  },
]

export default function WhyChooseUs() {
  const duplicatedReasons = [...reasons, ...reasons, ...reasons]

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Why Choose
              <br />
              <span className="text-[#7F9DB1]">Raise Lab Equipment</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              We combine decades of experience, precision engineering, and unwavering commitment to quality to deliver laboratory instruments you can rely on.
            </p>
            
            {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "1000+", label: "Machines" },
                  { value: "100%", label: "Quality Assured" },
                ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-[#7F9DB1]/20 hover:border-[#7F9DB1]/40 transition-colors"
                >
                  <div className="text-3xl lg:text-4xl font-bold mb-2 text-[#1a1f3a]">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CSS-based Vertical Scroll */}
          <div className="relative h-[600px] overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
            
            <div className="space-y-6 animate-scroll-vertical-reasons">
              {duplicatedReasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <div
                    key={`reason-${index}`}
                    className="flex gap-4 p-6 rounded-xl bg-card border border-border shadow-lg hover:shadow-xl hover:border-[#7F9DB1]/40 cursor-pointer transition-all hover:translate-x-2"
                  >
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-[#7F9DB1]/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-[#7F9DB1]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#1a1f3a]">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}