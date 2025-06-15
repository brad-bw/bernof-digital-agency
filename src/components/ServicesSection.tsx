
import { ServiceCard } from "./services/ServiceCard";
import { ServicesHeader } from "./services/ServicesHeader";
import { ServicesCallToAction } from "./services/ServicesCallToAction";
import { ServicesBackground } from "./services/ServicesBackground";
import { PaymentMethodsSection } from "./services/PaymentMethodsSection";
import { servicesData } from "./services/servicesData";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <ServicesBackground />

      <div className="container mx-auto px-6 relative z-10">
        <ServicesHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              detailedDescription={service.detailedDescription}
              features={service.features}
              technologies={service.technologies}
              priceRange={service.priceRange}
              timeline={service.timeline}
              deliverables={service.deliverables}
              pattern={service.pattern}
              index={index}
            />
          ))}
        </div>

        <PaymentMethodsSection />

        <ServicesCallToAction />
      </div>
    </section>
  );
};

export default ServicesSection;
