'use client'

import heroPort from "../../public/hero-port.webp";
import cargoShip from "../../public/cargo-ship.webp";
import trucks from "../../public/elkin-trucks.webp";
import warehouse from "../../public/warehouse.webp";
import containers from "../../public/image7.webp";
import portOps from "../../public/port-operations.webp";
import aerialPort from "../../public/aerial-port.webp";
import image6 from "../../public/image10.webp"
import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal";

const images = [
  { src: heroPort, title: "Mombasa Port Operations", category: "Port", w: 1920, h: 1080 },
  { src: cargoShip, title: "Sea Freight", category: "Shipping", w: 800, h: 600 },
  { src: trucks, title: "Road Transport Fleet", category: "Transport", w: 800, h: 600 },
  { src: warehouse, title: "Warehousing Facilities", category: "Storage", w: 800, h: 600 },
  { src: containers, title: "Container Yard", category: "Port", w: 800, h: 600 },
  { src: portOps, title: "Loading Operations", category: "Port", w: 800, h: 600 },
  { src: image6, title: "Customs & Documentation", category: "Services", w: 800, h: 600 },
  { src: aerialPort, title: "Aerial Port View", category: "Port", w: 800, h: 600 },
];

const Gallery = () => (
  <div className="pt-16">
    <section className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Gallery</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Operations</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A visual journey through our logistics infrastructure — from the Port of Mombasa to warehouses and beyond.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <ScrollReveal key={img.title} delay={i * 0.06} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
              <div className="group relative rounded-2xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  width={img.w}
                  height={img.h}
                  className="w-full h-full object-cover aspect-4/3 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{img.category}</span>
                  <h3 className="font-display text-lg font-bold text-background">{img.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
