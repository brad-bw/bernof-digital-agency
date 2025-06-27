
import { MapPin, X } from "lucide-react";
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {selectedCase && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900 font-inter flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    {selectedCase.title}
                    <Badge className="bg-brand-teal text-white">
                      {selectedCase.category}
                    </Badge>
                  </div>
                  <div className="text-lg text-brand-teal font-medium mt-1">
                    {selectedCase.company}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {selectedCase.location} • {selectedCase.year}
                  </div>
                </div>
              </DialogTitle>
              <DialogClose className="absolute right-4 top-4" />
            </DialogHeader>

            <div className="space-y-6">
              {/* Hero Image */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <OptimizedImage
                  src={selectedCase.thumbnail}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedCase.gradient} opacity-60`}></div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed font-inter">
                      {selectedCase.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Challenge</h3>
                    <p className="text-gray-600 leading-relaxed font-inter">
                      {selectedCase.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Solution</h3>
                    <p className="text-gray-600 leading-relaxed font-inter">
                      {selectedCase.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Impact</h3>
                    <p className="text-gray-600 leading-relaxed font-inter">
                      {selectedCase.impact}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Project Stats */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-inter">Duration</span>
                        <span className="text-sm font-medium text-gray-900 font-inter">{selectedCase.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-inter">Team Size</span>
                        <span className="text-sm font-medium text-gray-900 font-inter">{selectedCase.team}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-inter">Year</span>
                        <span className="text-sm font-medium text-gray-900 font-inter">{selectedCase.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCase.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-brand-sage-light/30 text-brand-teal-dark font-inter"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-brand-sage-light/20 to-brand-sage-light/10 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-brand-teal-dark mb-2 font-inter">Key Results</h3>
                    <p className="text-brand-teal font-semibold font-inter">{selectedCase.results}</p>
                  </div>
                </div>
              </div>

              {/* Additional Images */}
              {selectedCase.images.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCase.images.map((image, index) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                        <OptimizedImage
                          src={image}
                          alt={`${selectedCase.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
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
