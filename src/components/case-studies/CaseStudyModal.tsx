
import { MapPin, X, Calendar, Users, Clock, Target, Zap, Lightbulb } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
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
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto bg-white border-0 shadow-2xl p-0">
        {selectedCase && (
          <>
            {/* Header Section - Clean and Modern */}
            <div className="relative">
              <div className="h-80 relative overflow-hidden">
                <OptimizedImage
                  src={selectedCase.thumbnail}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
                
                {/* Close Button */}
                <DialogClose className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10">
                  <X className="w-5 h-5 text-white" />
                </DialogClose>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-brand-teal text-white px-4 py-2 text-sm font-medium">
                        {selectedCase.category.toUpperCase()}
                      </Badge>
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm">
                        {selectedCase.year}
                      </Badge>
                    </div>
                    <h1 className="text-4xl font-bold mb-3">{selectedCase.title}</h1>
                    <p className="text-xl text-white/90 mb-2">{selectedCase.company}</p>
                    <div className="flex items-center text-white/70">
                      <MapPin className="w-4 h-4 mr-2" />
                      {selectedCase.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-12">
              {/* Project Overview and Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      Project Overview
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedCase.fullDescription}
                    </p>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="space-y-4">
                  <div className="bg-brand-teal rounded-xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">Duration</span>
                        </div>
                        <span className="text-sm font-medium">{selectedCase.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">Team Size</span>
                        </div>
                        <span className="text-sm font-medium">{selectedCase.team}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">Year</span>
                        </div>
                        <span className="text-sm font-medium">{selectedCase.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Key Results
                    </h3>
                    <p className="text-white/90 font-medium">{selectedCase.results}</p>
                  </div>
                </div>
              </div>

              {/* Technologies Section */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies & Services</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {selectedCase.technologies.map((tech, index) => (
                    <Badge
                      key={tech}
                      className="bg-white text-gray-700 border border-gray-200 hover:bg-brand-teal hover:text-white transition-all duration-300 px-3 py-2 text-center justify-center font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Challenge, Solution, Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Solution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedCase.impact}
                  </p>
                </div>
              </div>

              {/* Project Gallery */}
              {selectedCase.images.length > 0 && (
                <div className="bg-white rounded-xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedCase.images.map((image, index) => (
                      <div key={index} className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                        <OptimizedImage
                          src={image}
                          alt={`${selectedCase.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
