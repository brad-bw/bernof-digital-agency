
import { Button } from "@/components/ui/button";

interface CountryHeroActionsProps {
  ctaSecondary: string;
  onSecondaryAction: () => void;
}

export const CountryHeroActions = ({ ctaSecondary, onSecondaryAction }: CountryHeroActionsProps) => {
  return (
    <div className="mt-16 pt-8 border-t border-white/20">
      <div className="text-center mb-8">
        <Button 
          onClick={onSecondaryAction}
          variant="outline"
          className="border-2 border-white/30 text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl text-lg h-auto transition-all duration-300"
        >
          {ctaSecondary}
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-gray-300">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="font-medium">Free consultation & quote</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="font-medium">No upfront payment required</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="font-medium">100% money-back guarantee</span>
        </div>
      </div>
    </div>
  );
};
