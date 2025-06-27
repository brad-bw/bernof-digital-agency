
import { ExternalLink, Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/OptimizedImage";
import { CaseStudy } from "./types";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  onClick: (study: CaseStudy) => void;
}

const CaseStudyCard = ({ study, index, onClick }: CaseStudyCardProps) => {
  return (
    <div
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-brand-teal/30 animate-fade-in cursor-pointer transform hover:scale-[1.02]"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onClick(study)}
    >
      {/* Image Header */}
      <div className="h-56 relative overflow-hidden">
        <OptimizedImage
          src={study.thumbnail}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>
        
        {/* Floating badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge className="bg-white/95 text-gray-800 border-white/30 backdrop-blur-sm">
            {study.category.charAt(0).toUpperCase() + study.category.slice(1)}
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
            {study.year}
          </Badge>
        </div>
        
        {/* Action button */}
        <div className="absolute bottom-4 right-4">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
            <ExternalLink className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 font-inter group-hover:text-brand-teal transition-colors duration-300">
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

        <p className="text-gray-600 text-sm font-inter leading-relaxed line-clamp-3">
          {study.description}
        </p>

        {/* All Technologies - No hiding */}
        <div className="space-y-3">
          <div className="text-xs text-gray-500 font-medium">Technologies & Services:</div>
          <div className="flex flex-wrap gap-1.5">
            {study.technologies.map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-gradient-to-r from-brand-sage-light/30 to-brand-sage-light/20 text-brand-teal-dark text-xs font-inter border border-brand-sage-light/40 hover:from-brand-sage-light/40 hover:to-brand-sage-light/30 transition-all duration-200"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-teal/10 rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-brand-teal" />
            </div>
            <span className="text-xs text-gray-600 font-inter font-medium">{study.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-teal/10 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-brand-teal" />
            </div>
            <span className="text-xs text-gray-600 font-inter font-medium">{study.team}</span>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-r from-brand-sage-light/20 via-brand-sage-light/10 to-transparent rounded-lg p-4 border border-brand-sage-light/30">
          <div className="text-xs text-brand-teal-dark font-medium font-inter mb-1">Key Results:</div>
          <div className="text-sm font-semibold text-brand-teal font-inter">{study.results}</div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
