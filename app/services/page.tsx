import { ArrowUpRight } from "lucide-react";
import cargoShip from "../../public/cargo-ship.webp";
import freightTruckImg from "../../public/elkin-truck.webp";
import airFreightImg from "../../public/air-freight.webp";
import warehouseImg from "../../public/warehouse.webp";
import railageImg from "../../public/railage.webp";
import heroImg from "../../public/hero-port.webp";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Transport",
    img: freightTruckImg,
    desc: "Our modern fleet of trucks and vehicles ensures your cargo moves safely across East Africa. From standard loads to oversized freight, we handle it all with precision and care.",
  },
  {
    title: "Sea Freight",
    img: cargoShip,
    desc: "Leverage our deep connections at Mombasa port for competitive ocean shipping rates. We handle FCL, LCL, and project cargo through all major global shipping routes.",
  },
  {
    title: "Air Freight",
    img: airFreightImg,
    desc: "For time-critical shipments, our air freight service offers express and standard options through major airports, with door-to-door delivery and full tracking.",
  },
  {
    title: "Warehousing",
    img: warehouseImg,
    desc: "Secure, climate-controlled storage facilities in Mombasa with inventory management, pick-and-pack services, and distribution coordination.",
  },
  {
    title: "Railage",
    img: railageImg,
    desc: "Efficient rail transport via the Standard Gauge Railway (SGR) and conventional lines for bulk and containerized cargo across Kenya.",
  },
  {
    title: "Import/Export Handling",
    img: heroImg,
    desc: "Complete customs brokerage and compliance management — from documentation and duty calculation to clearance and delivery of imported and exported goods.",
  },
];

const Services = () => (
  <div className="pt-16">
    <h1 className="text-3xl font-bold text-center mt-12">These are the services we offer</h1>
    {/* Services Grid */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div
                className="group rounded-2xl overflow-hidden bg-card border border-border h-full flex flex-col"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="overflow-hidden h-56">
                  <Image
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground font-display mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-5 hover:underline"
                  >
                    Get a Quote <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
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
  </div>
);

export default Services;
