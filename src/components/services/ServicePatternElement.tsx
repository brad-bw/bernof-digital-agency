
interface ServicePatternElementProps {
  pattern: string;
  index: number;
}

export const ServicePatternElement = ({ pattern, index }: ServicePatternElementProps) => {
  switch (pattern) {
    case 'angular':
      return (
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/10 transform rotate-45 rounded-tl-lg"></div>
      );
    case 'curved':
      return (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/10 rounded-full"></div>
      );
    case 'geometric':
      return (
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent/10 clip-path-polygon-[0_0,100%_0,50%_100%]"></div>
      );
    default:
      return null;
  }
};
