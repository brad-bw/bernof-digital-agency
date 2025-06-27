
import { ExternalLink, Clock, Users, MapPin } from "lucide-react";
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
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-brand-teal/50 cursor-pointer transform hover:scale-[1.02]"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onClick(study)}
    >
      {/* Image Header */}
      <div className="h-48 relative overflow-hidden">
        <OptimizedImage
          src={study.thumbnail}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-brand-teal text-white font-medium px-3 py-1">
            {study.category.toUpperCase()}
          </Badge>
        </div>
        
        {/* Year Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-gray-800 font-medium px-3 py-1">
            {study.year}
          </Badge>
        </div>
        
        {/* Hover Icon */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ExternalLink className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Company */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-brand-teal transition-colors duration-300">
            {study.title}
          </h3>
          <p className="text-brand-teal font-semibold text-sm">
            {study.company}
          </p>
          <div className="flex items-center text-gray-500 text-xs mt-1">
            <MapPin className="w-3 h-3 mr-1" />
            {study.location}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {study.description}
        </p>

        {/* Technologies - Show All */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
            Technologies & Services
          </div>
          <div className="flex flex-wrap gap-1">
            {study.technologies.map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 hover:bg-brand-teal hover:text-white transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-brand-teal" />
            <span className="text-xs text-gray-600 font-medium">{study.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-brand-teal" />
            <span className="text-xs text-gray-600 font-medium">{study.team}</span>
          </div>
        </div>

        {/* Results Preview */}
        <div className="bg-gradient-to-r from-brand-teal/5 to-brand-sage-light/5 rounded-lg p-3 border-l-3 border-brand-teal">
          <div className="text-xs font-semibold text-brand-teal mb-1">Key Results</div>
          <p className="text-sm text-gray-700 line-clamp-2">{study.results}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
