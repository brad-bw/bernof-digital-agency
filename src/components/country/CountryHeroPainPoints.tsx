
interface CountryHeroPainPointsProps {
  countryName: string;
  painPoints: string[];
}

export const CountryHeroPainPoints = ({ countryName, painPoints }: CountryHeroPainPointsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-300 mb-4">The Reality in {countryName}:</h3>
      {painPoints.slice(0, 2).map((point, index) => (
        <div key={index} className="flex items-start space-x-3 p-4 bg-red-900/20 rounded-xl border border-red-800/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
          <span className="text-gray-200 leading-relaxed">{point}</span>
        </div>
      ))}
    </div>
  );
};
