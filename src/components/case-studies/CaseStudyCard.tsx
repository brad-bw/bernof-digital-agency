
import { ExternalLink, Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/OptimizedImage";

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  company: string;
  location: string;
  description: string;
  category: string;
  technologies: string[];
  duration: string;
  team: string;
  results: string;
  thumbnail: string;
  gradient: string;
  year: string;
}

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  onClick: (study: CaseStudy) => void;
}

const CaseStudyCard = ({ study, index, onClick }: CaseStudyCardProps) => {
  return (
    <div
      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-teal/30 animate-fade-in cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onClick(study)}
    >
      {/* Image Header */}
      <div className="h-48 relative overflow-hidden">
        <OptimizedImage
          src={study.thumbnail}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-80`}></div>
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-gray-800 border-white/30">
            {study.category.charAt(0).toUpperCase() + study.category.slice(1)}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/20 text-white border-white/30">
            {study.year}
          </Badge>
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 font-inter group-hover:text-brand-teal transition-colors">
            {study.title}
          </h3>
          <p className="text-sm text-brand-teal font-medium font-inter">
            {study.company}
          </p>
          <p className="text-xs text-gray-500 font-inter flex items-center mt-1">
            <MapPin className="w-3 h-3 mr-1" />
            {study.location}
          </p>
        </div>

        <p className="text-gray-600 text-sm font-inter leading-relaxed">
          {study.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {study.technologies.slice(0, 3).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-brand-sage-light/30 text-brand-teal-dark text-xs font-inter"
            >
              {tech}
            </Badge>
          ))}
          {study.technologies.length > 3 && (
            <Badge
              variant="secondary"
              className="bg-gray-100 text-gray-600 text-xs font-inter"
            >
              +{study.technologies.length - 3} more
            </Badge>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-brand-teal" />
            <span className="text-xs text-gray-600 font-inter">{study.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-brand-teal" />
            <span className="text-xs text-gray-600 font-inter">{study.team}</span>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-r from-brand-sage-light/20 to-brand-sage-light/10 rounded-lg p-3">
          <div className="text-xs text-brand-teal-dark font-medium font-inter">Results:</div>
          <div className="text-sm font-semibold text-brand-teal font-inter">{study.results}</div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
