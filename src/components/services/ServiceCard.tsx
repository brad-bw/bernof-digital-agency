
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
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
  return (
    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white relative overflow-hidden h-full">
      <ServicePatternElement pattern={pattern} index={index} />
      
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="text-center pb-6 relative z-10">
        <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl w-fit group-hover:scale-110 transition-transform duration-500 relative">
          {icon}
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent/30 rounded-full"></div>
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
          {description}
        </CardDescription>
        <p className="text-sm text-gray-500 leading-relaxed">
          {detailedDescription}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0 relative z-10 flex flex-col flex-grow">
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <CheckCircle className="w-4 h-4 text-primary mr-2" />
            What We Deliver
          </h4>
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="text-sm">
                <div className="font-medium text-gray-800">{feature.name}</div>
                <div className="text-gray-600 text-xs mt-1">{feature.description}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="border-t pt-4 space-y-3 bg-gradient-to-r from-gray-50/80 to-white/80 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500 block">Investment</span>
                <span className="font-bold text-primary">{priceRange}</span>
              </div>
              <div>
                <span className="text-gray-500 block">Timeline</span>
                <span className="font-bold text-primary">{timeline}</span>
              </div>
            </div>
            <div className="pt-2 border-t border-gray-100">
              <span className="text-gray-500 text-xs block mb-1">Includes:</span>
              <span className="text-xs text-gray-700">{deliverables}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
