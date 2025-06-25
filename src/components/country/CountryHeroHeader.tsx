
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface CountryHeroHeaderProps {
  countryFlag: string;
  countryName: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  onPrimaryAction: () => void;
}

export const CountryHeroHeader = ({ 
  countryFlag, 
  countryName, 
  title, 
  subtitle, 
  ctaPrimary, 
  onPrimaryAction 
}: CountryHeroHeaderProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          <span className="text-red-400">{countryName} Businesses</span>
          <br />
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Are Overpaying
          </span>
        </h1>
        
        <div className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
          <p className="mb-4">{subtitle}</p>
          <p className="text-accent font-semibold">
            Here's how Bernof Co solves this →
          </p>
        </div>
      </div>

      <div className="pt-4">
        <Button 
          onClick={onPrimaryAction}
          className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-5 rounded-xl text-xl h-auto transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <Calendar className="w-6 h-6 mr-3" />
          {ctaPrimary}
        </Button>
      </div>
    </div>
  );
};
