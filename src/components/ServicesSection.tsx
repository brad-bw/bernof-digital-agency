
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Code, Smartphone, Rocket, Palette } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    features: ["React & Next.js", "Node.js Backend", "Database Design", "API Integration"],
    href: "/ch/web-development"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
    href: "/ch/software-development"
  },
  {
    icon: Rocket,
    title: "Startup Development",
    description: "From MVP to scale - complete startup development services",
    features: ["MVP Development", "Technical Strategy", "Product Launch", "Growth Optimization"],
    href: "/startup-development"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered design that converts",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    href: "/ch/web-development"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href={service.href}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
