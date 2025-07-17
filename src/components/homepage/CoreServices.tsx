
import React, { useEffect } from 'react';

const CoreServices = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "New Website & Software Builds",
      description: "Launching a new idea? We architect and engineer your platform from the ground up, built with a resilient foundation for future growth.",
      delay: "0s"
    },
    {
      title: "Existing Platform Upgrades & Modernization",
      description: "Is your current site outdated or underperforming? We execute complete overhauls, implementing modern design and technology to boost performance and conversions.",
      delay: "0.1s"
    },
    {
      title: "From MVP to Scalable Product",
      description: "Stuck with a fragile product that can't scale? Our senior engineers perform technical rescues, re-architecting your platform for market readiness and investment.",
      delay: "0.2s"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12">
          Your Trusted Development Partner for Startups & Small Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ '--delay': service.delay } as React.CSSProperties}
            >
              <h3 className="text-2xl font-bold text-brand-teal mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
