
import React from 'react';

const FeaturedWork = () => {
  const projects = [
    {
      name: "Project Alpha",
      tags: [
        { label: "Website Development", color: "bg-blue-100 text-blue-800" },
        { label: "UI/UX Design", color: "bg-green-100 text-green-800" }
      ],
      description: "We partnered with this fintech startup to design and build their marketing website from the ground up, resulting in a 200% increase in demo requests.",
      mockup: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
    },
    {
      name: "Project Beta",
      tags: [
        { label: "Software Development", color: "bg-purple-100 text-purple-800" },
        { label: "Platform Rescue", color: "bg-red-100 text-red-800" }
      ],
      description: "We re-architected this SaaS company's MVP, improving performance by 10x and enabling them to successfully close their Series A funding round.",
      mockup: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section id="work" className="bg-off-white py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-16">
          Our Work
        </h2>
        
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 ${index < projects.length - 1 ? 'mb-20' : ''}`}
          >
            <div className="md:w-1/2">
              <img
                src={project.mockup}
                alt={`${project.name} Mockup`}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-charcoal mb-2">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`${tag.color} text-sm font-medium px-2.5 py-0.5 rounded`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                {project.description}
              </p>
              <a
                href="#"
                className="text-brand-teal font-bold text-lg hover:underline"
              >
                View Case Study →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
