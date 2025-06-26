
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";

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
  index
}: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 bg-white h-full">
      <CardHeader className="text-center pb-6">
        <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-2xl w-fit">
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
          {description}
        </CardDescription>
        <p className="text-sm text-gray-500 leading-relaxed">
          {detailedDescription}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0 flex flex-col flex-grow">
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">What We Deliver</h4>
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-800">{feature.name}</div>
                  <div className="text-gray-600 text-sm">{feature.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="text-center">
                <span className="text-gray-500 text-sm block">Investment</span>
                <span className="font-bold text-lg text-primary">{priceRange}</span>
              </div>
              <div className="text-center">
                <span className="text-gray-500 text-sm block">Timeline</span>
                <span className="font-bold text-lg text-accent">{timeline}</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-sm block">Includes:</span>
                  <span className="text-sm text-gray-700 font-medium">{deliverables}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
