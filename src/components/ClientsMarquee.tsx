"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const clients = [
  { name: "Dr. Reddy's", domain: "drreddys.com", color: "#E41E26" },
  { name: "Cipla", domain: "cipla.com", color: "#00529B" },
  { name: "Aurobindo", domain: "aurobindo.com", color: "#1E4D8C" },
  { name: "Biocon", domain: "biocon.com", color: "#0072BB" },
  { name: "Hetero", domain: "hetero.com", color: "#00A859" },
  { name: "Ipca Labs", domain: "ipcalabs.com", color: "#003F87" },
  { name: "Lixil", domain: "lixil.com", color: "#FF6600" },
  { name: "Sanzyme Biologics", domain: "sanzyme.com", color: "#2E3192" },
  { name: "MSN Laboratories", domain: "msnlabs.com", color: "#0054A6" },
  { name: "Sid's Farm", domain: "sidsfarm.com", color: "#00A651" },
  { name: "Eugia Pharma", domain: "eugiapharma.com", color: "#005A9C" },
  { name: "Granules India", domain: "granulesindia.com", color: "#EE3124" },
  { name: "QBD Laboratories", domain: "qbdresearch.com", color: "#1B365D" },
    { name: "Nuclear Fuel Complex", domain: "dae.gov.in", color: "#2B3990" },
  { name: "Akron Healthcare", domain: "akronhealthcare.com", color: "#0072BC" },
  { name: "The Andhra Sugars", domain: "theandhrasugars.com", color: "#00539C" },
];

function ClientLogo({ client }: { client: (typeof clients)[0] }) {
  const [imgError, setImgError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const initials = client.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Using logo.dev API for reliable logo fetching with HD resolution (size=256)
  const logoUrl = `https://img.logo.dev/${client.domain}?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ&size=256`;

  if (imgError) {
    return (
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300"
        style={{ backgroundColor: `${client.color}15` }}
      >
        <span
          className="text-xl font-bold"
          style={{ color: client.color }}
        >
          {initials}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted/50 rounded-xl animate-pulse" />
      )}
      <Image
        src={logoUrl}
        alt={`${client.name} logo`}
        width={64}
        height={64}
        className={`object-contain transition-all duration-500 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onError={() => setImgError(true)}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        unoptimized
      />
    </div>
  );
}

export default function ClientsMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 lg:py-20 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7F9DB1]/10 border border-[#7F9DB1]/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#7F9DB1] animate-pulse" />
            <span className="text-sm font-medium text-[#7F9DB1] tracking-wide uppercase">
              Trusted by Industry Leaders
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Powering <span className="text-[#7F9DB1]">500+</span> Pharmaceutical Companies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leading pharmaceutical manufacturers across India trust our precision instruments
            for their quality control laboratories
          </p>
        </div>
      </div>

      {/* First row - scrolling left */}
      <div className="relative mb-6">
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-scroll-marquee">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`row1-${index}`}
                className="group flex items-center gap-4 min-w-[220px] h-20 px-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-lg hover:border-[#7F9DB1]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <ClientLogo client={client} />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground group-hover:text-[#7F9DB1] transition-colors whitespace-nowrap">
                    {client.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Verified Partner
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 lg:w-48 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      {/* Second row - scrolling right */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-scroll-marquee-reverse">
            {[...clients.slice().reverse(), ...clients.slice().reverse(), ...clients.slice().reverse()].map(
              (client, index) => (
                <div
                  key={`row2-${index}`}
                  className="group flex items-center gap-4 min-w-[220px] h-20 px-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-lg hover:border-[#7F9DB1]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <ClientLogo client={client} />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground group-hover:text-[#7F9DB1] transition-colors whitespace-nowrap">
                      {client.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Verified Partner
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 lg:w-48 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      {/* Stats bar */}
      <div
        className={`container mx-auto px-4 lg:px-8 mt-12 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
              { value: "1000+", label: "Units/Year" },
              { value: "15+", label: "Countries" },
            ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-[#7F9DB1]">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}