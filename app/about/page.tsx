'use client'

import ScrollReveal from "../../components/ScrollReveal";
import aerialPort from "../../public/aerial-port.webp";
import warehouse from "../../public/warehouse.webp";
import Image from "next/image";

const About = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">About Elkin Group</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Connecting East Africa to the World Since 2009
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in Mombasa, Kenya — the largest port in East Africa — Elkin Group has grown from a small customs brokerage firm into a comprehensive logistics provider serving 28 countries across Africa, the Middle East, and Asia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our strategic location at the Port of Mombasa gives us unparalleled access to the Northern Corridor, serving landlocked nations like Uganda, Rwanda, Burundi, and the Democratic Republic of Congo.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <Image src={aerialPort} alt="Aerial view of Mombasa Port" loading="lazy" width={800} height={600} className="rounded-2xl w-full object-cover aspect-4/3" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0}>
            <div className="p-10 rounded-2xl border border-border bg-background">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide reliable, efficient, and cost-effective logistics solutions that empower businesses across East Africa to compete on the global stage. We are committed to ensuring every shipment — whether by sea, road, or air — arrives safely, on time, and intact.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="p-10 rounded-2xl border border-border bg-background">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted logistics partner in East Africa — the first name businesses think of when they need to move goods across borders. We envision a connected continent where trade flows as freely as the waters of the Indian Ocean.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Why Mombasa */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <Image src={warehouse} alt="Elkin Group Warehouse" loading="lazy" width={800} height={600} className="rounded-2xl w-full object-cover aspect-4/3" />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Strategic Advantage</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Mombasa Is Our Home
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span>East Africa&apos;s largest and busiest port, handling over 30 million tonnes of cargo annually</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span>Gateway to the Northern Corridor serving 5+ landlocked nations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span>Direct shipping routes to Asia, Europe, and the Middle East</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span>Connected to the Standard Gauge Railway for efficient inland distribution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span>Well-established free trade zones and bonded warehousing facilities</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
);

export default About;