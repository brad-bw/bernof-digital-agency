
import { MapPin, X, Calendar, Users, Clock, Sparkles, Zap, Target } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/OptimizedImage";
import { CaseStudy } from "./types";

interface CaseStudyModalProps {
  selectedCase: CaseStudy | null;
  onClose: () => void;
}

const CaseStudyModal = ({ selectedCase, onClose }: CaseStudyModalProps) => {
  return (
    <Dialog open={!!selectedCase} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-gray-50 to-white border-0 shadow-2xl">
        {selectedCase && (
          <>
            {/* Header */}
            <div className="relative -m-6 mb-8">
              <div className="h-80 relative overflow-hidden">
                <OptimizedImage
                  src={selectedCase.thumbnail}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedCase.gradient} opacity-85`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating close button */}
                <DialogClose className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10">
                  <X className="w-5 h-5 text-white" />
                </DialogClose>

                {/* Hero content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-sm px-4 py-2">
                        {selectedCase.category.toUpperCase()}
                      </Badge>
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-sm px-4 py-2">
                        {selectedCase.year}
                      </Badge>
                    </div>
                    <h1 className="text-5xl font-bold mb-2 font-inter">{selectedCase.title}</h1>
                    <p className="text-xl font-medium mb-2 text-white/90">{selectedCase.company}</p>
                    <div className="flex items-center text-white/80 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {selectedCase.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* Project Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-teal to-brand-teal-dark rounded-full flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 font-inter">Project Overview</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-inter text-lg">
                      {selectedCase.fullDescription}
                    </p>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-brand-teal to-brand-teal-dark rounded-2xl p-6 text-white shadow-lg">
                    <h3 className="text-lg font-semibold mb-6 font-inter flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Project Details
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-white/80" />
                          <span className="text-sm text-white/80">Duration</span>
                        </div>
                        <span className="text-sm font-medium">{selectedCase.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-white/80" />
                          <span className="text-sm text-white/80">Team Size</span>
                        </div>
                        <span className="text-sm font-medium">{selectedCase.team}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-white/80" />
                          <span className="text-sm text-white/80">Year</span>
                        </div>
                        <span className="text-sm font-medium">{selectedCase.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white shadow-lg">
                    <h3 className="text-lg font-semibold mb-4 font-inter flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Key Results
                    </h3>
                    <p className="text-white/90 font-medium leading-relaxed">{selectedCase.results}</p>
                  </div>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-inter">Technologies & Services</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {selectedCase.technologies.map((tech, index) => (
                    <Badge
                      key={tech}
                      className="bg-gradient-to-r from-brand-sage-light/30 to-brand-sage-light/20 text-brand-teal-dark border border-brand-sage-light/40 hover:from-brand-sage-light/40 hover:to-brand-sage-light/30 transition-all duration-300 transform hover:scale-105 px-4 py-2 text-center justify-center"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Challenge, Solution, Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Challenge</h3>
                  <p className="text-gray-600 leading-relaxed font-inter">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Solution</h3>
                  <p className="text-gray-600 leading-relaxed font-inter">
                    {selectedCase.solution}
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Impact</h3>
                  <p className="text-gray-600 leading-relaxed font-inter">
                    {selectedCase.impact}
                  </p>
                </div>
              </div>

              {/* Project Gallery */}
              {selectedCase.images.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 font-inter">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedCase.images.map((image, index) => (
                      <div key={index} className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <OptimizedImage
                          src={image}
                          alt={`${selectedCase.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
