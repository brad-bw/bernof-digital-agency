
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";
import { ServicePatternElement } from "./ServicePatternElement";

interface ServiceFeature {
  name: string;
  description: string;
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  detailedDescription: string;
  features: ServiceFeature[];
  technologies: string[];
  priceRange: string;
  timeline: string;
  deliverables: string;
  pattern: string;
  index: number;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  detailedDescription,
  features,
  technologies,
  priceRange,
  timeline,
  deliverables,
  pattern,
  index
}: ServiceCardProps) => {
  const getCardGradient = (idx: number) => {
    const gradients = [
      'from-primary/5 via-primary/10 to-accent/5',
      'from-accent/5 via-accent/10 to-primary/5',
      'from-primary/10 via-accent/5 to-primary/5'
    ];
    return gradients[idx % gradients.length];
  };

  const getIconGradient = (idx: number) => {
    const gradients = [
      'from-primary to-primary/80',
      'from-accent to-accent/80',
      'from-primary/80 to-accent'
    ];
    return gradients[idx % gradients.length];
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border-0 shadow-lg bg-white relative overflow-hidden h-full">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getCardGradient(index)} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
      
      {/* Abstract Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main geometric shape */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${getIconGradient(index)} opacity-5 group-hover:opacity-10 transition-opacity duration-700 rounded-full blur-xl`}></div>
        
        {/* Secondary shapes */}
        <div className="absolute top-8 right-8 w-16 h-16 border border-primary/10 group-hover:border-primary/20 transition-colors duration-500 rounded-2xl rotate-12"></div>
        <div className="absolute bottom-12 left-8 w-12 h-12 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500 rounded-full"></div>
        
        {/* Flowing elements */}
        <div className="absolute top-1/2 left-0 w-2 h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent group-hover:via-primary/40 transition-colors duration-500"></div>
        <div className="absolute bottom-0 right-1/3 w-24 h-2 bg-gradient-to-r from-transparent via-accent/20 to-transparent group-hover:via-accent/40 transition-colors duration-500"></div>
      </div>

      <ServicePatternElement pattern={pattern} index={index} />
      
      <CardHeader className="text-center pb-6 relative z-10">
        {/* Icon Container with Enhanced Design */}
        <div className="relative mx-auto mb-6 w-fit group-hover:scale-110 transition-transform duration-500">
          <div className={`p-6 bg-gradient-to-br ${getIconGradient(index)} rounded-3xl shadow-lg relative overflow-hidden`}>
            {/* Icon background effects */}
            <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-white/30 rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white/20 rounded-full"></div>
            
            {/* Icon */}
            <div className="relative z-10 text-white">
              {icon}
            </div>
          </div>
          
          {/* Floating accent */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent/80 to-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-12"></div>
        </div>

        <CardTitle className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
          {description}
        </CardDescription>
        <p className="text-sm text-gray-500 leading-relaxed">
          {detailedDescription}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0 relative z-10 flex flex-col flex-grow">
        {/* Features Section */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            What We Deliver
          </h4>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="group/item">
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50/50 group-hover:bg-white/80 transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-800 mb-1">{feature.name}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{feature.description}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <Badge 
                key={idx} 
                variant="secondary" 
                className="text-xs px-3 py-1 bg-gray-100 hover:bg-primary/10 text-gray-700 border-0 transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Pricing Card */}
        <div className="mt-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 group-hover:border-primary/20 transition-colors duration-300 p-6">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-2xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-2xl"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div className="text-center">
                  <span className="text-gray-500 text-sm block mb-1">Investment</span>
                  <span className="font-bold text-xl text-primary">{priceRange}</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-500 text-sm block mb-1">Timeline</span>
                  <span className="font-bold text-xl text-accent">{timeline}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 text-sm block mb-1">Includes:</span>
                    <span className="text-sm text-gray-700 font-medium">{deliverables}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
