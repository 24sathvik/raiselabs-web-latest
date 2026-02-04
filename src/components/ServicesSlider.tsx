"use client"

import { useEffect, useRef, useState } from "react"
import { Beaker, FileCheck, Gauge, Microscope, Package, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: Microscope,
    title: "Quality Control Testing",
    description: "Comprehensive pharmaceutical testing services ensuring product quality and compliance with international standards."
  },
  {
    icon: FileCheck,
    title: "Validation Services",
    description: "Complete instrument qualification and validation documentation for regulatory compliance and quality assurance."
  },
  {
    icon: Gauge,
    title: "Calibration Services",
    description: "Precise calibration and maintenance services to ensure accuracy and reliability of your testing instruments."
  },
  {
    icon: ShieldCheck,
    title: "Technical Support",
    description: "Expert technical support and training to maximize the efficiency and lifespan of your laboratory equipment."
  },
  {
    icon: Package,
    title: "Installation & Setup",
    description: "Professional installation and setup services with complete operational training for your laboratory team."
  },
  {
    icon: Beaker,
    title: "Custom Solutions",
    description: "Tailored testing solutions designed to meet your specific laboratory requirements and workflows."
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = service.icon

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`group relative bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg transition-all duration-700 overflow-hidden
        ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 -rotate-1'}
      `}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(135deg, rgba(127, 157, 177, 0.08) 0%, transparent 50%, rgba(127, 157, 177, 0.05) 100%)' }}
      />
      
      <div className="relative z-10">
        <div 
          className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{ background: 'linear-gradient(135deg, rgba(127, 157, 177, 0.2) 0%, rgba(127, 157, 177, 0.05) 100%)' }}
        >
          <Icon className="h-7 w-7 sm:h-8 sm:w-8 transition-colors duration-300" style={{ color: '#7F9DB1' }} />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-[#7F9DB1]">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
          {service.description}
        </p>
      </div>

      <div 
        className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
        style={{ background: 'linear-gradient(90deg, #7F9DB1 0%, #1a1f3a 100%)' }}
      />
      
      <div 
        className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl group-hover:scale-150"
        style={{ backgroundColor: '#7F9DB1' }}
      />
    </div>
  )
}

export default function ServicesSlider() {
  return (
    <section className="py-12 lg:py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div 
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4 sm:mb-6 border"
            style={{ backgroundColor: 'rgba(127, 157, 177, 0.1)', borderColor: 'rgba(127, 157, 177, 0.2)' }}
          >
            <ShieldCheck className="h-4 w-4" style={{ color: '#7F9DB1' }} />
            <span className="text-sm font-medium" style={{ color: '#7F9DB1' }}>Complete Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            Comprehensive support services to ensure optimal performance and compliance of your laboratory instruments.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={`service-${index}`} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}