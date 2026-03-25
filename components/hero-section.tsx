import Link from "next/link";
import {
  ArrowRight,
  FileCheck,
  Globe,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";
import ScrollReveal from "./ScrollReveal";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const services = [
  {
    icon: Ship,
    title: "Sea Freight",
    desc: "Full and less-than-container load shipments through Mombasa Port to global destinations.",
  },
  {
    icon: Truck,
    title: "Road Transport",
    desc: "Reliable inland haulage connecting the port to Uganda, Rwanda, DRC, and beyond.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Secure, climate-controlled storage facilities strategically located near the port.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    desc: "Expert documentation and clearance to ensure smooth, delay-free imports and exports.",
  },
  {
    icon: Globe,
    title: "Freight Forwarding",
    desc: "End-to-end coordination of your cargo from origin to final destination.",
  },
  {
    icon: ArrowRight,
    title: "Project Cargo",
    desc: "Specialized handling for oversized, heavy-lift, and high-value shipments.",
  },
];

const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "200+", label: "Shipments Annually" },
  { value: "7", label: "Countries Served" },
  { value: "99.4%", label: "On-Time Delivery" },
];

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
            >
              <Image
                src="/elkin_container.png"
                alt="background"
                className="hidden size-full dark:block"
                width="3276"
                height="4095"
              />

              <Image
                src="/hero-port.jpg"
                alt="background"
                className="size-full dark:block"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>

            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">
                      Transport · Logistics · Freight · Forwarding
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                >
                  Global Logistics & Transport Solutions
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                >
                  We provide efficient and reliable transport and logistics
                  services across East Africa, connecting businesses to the
                  world through road, rail, sea, and air freight solutions.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  {/* First child */}
                  <div
                    key="consultation"
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                    >
                      <span className="text-white dark:text-black text-sm">
                        Book a 15-Minute Consultation ↗
                      </span>
                    </Link>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
                    >
                      <span className="text-foreground text-sm">
                        Learn More
                      </span>
                    </Link>
                  </div>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <Image
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="/container3.jpg"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <Image
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="/container3.jpg"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-card py-16 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                      {s.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
                  About Us
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A leading logistics company committed to fast, safe delivery —
                  free from damage and delay.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Based in Mombasa, Kenya&apos;s gateway to the Indian Ocean,
                  Elkin Group has built a reputation for reliability in freight
                  forwarding, customs brokerage, and inland transport. We
                  connect businesses across East Africa to the world.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <span className="text-white dark:text-black text-sm">
                    LET&apos;S GET STARTED ↗
                  </span>
                </Link>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-2xl p-8 flex flex-col justify-end min-h-[200px]">
                    <div className="font-display text-3xl font-bold text-accent mb-2">
                      Professional and experienced staff, always ready to assist
                      you.{" "}
                    </div>
                  </div>
                  <Image
                    src="/cargo-ship.jpg"
                    alt="Cargo Ship"
                    loading="lazy"
                    width={800}
                    height={600}
                    className="rounded-2xl object-cover w-full h-full min-h-[200px]"
                  />
                  <Image
                    src="/elkin-truck.png"
                    alt="Road Freight"
                    loading="lazy"
                    width={800}
                    height={600}
                    className="rounded-2xl object-cover w-full h-full min-h-[200px]"
                  />
                  <Image
                    src="/port-operations.jpg"
                    alt="Port Operations"
                    loading="lazy"
                    width={800}
                    height={600}
                    className="rounded-2xl object-cover w-full h-full min-h-[200px]"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
                  Our Services
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Comprehensive Logistics Solutions
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.08}>
                  <div className="group p-8 rounded-2xl border border-border bg-background hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                    <s.icon
                      className="w-10 h-10 text-accent mb-5"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Move Your Cargo?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Let&apos;s discuss your logistics needs. Book a free 15-minute
                consultation with our team of experts.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                <span className="text-white dark:text-black text-sm">
                  Book a Consultation ↗
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
