
export const ServicesBackground = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-accent/5 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-primary/5 transform rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-6 h-6 bg-accent/5 rounded-tl-full"></div>
      </div>
    </div>
  );
};
