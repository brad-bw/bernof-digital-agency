
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index === 0 && <Home className="w-4 h-4 mr-1" />}
            {index < items.length - 1 ? (
              <>
                <Link 
                  to={item.url} 
                  className="hover:text-brand-teal transition-colors font-inter"
                >
                  {item.name}
                </Link>
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              </>
            ) : (
              <span className="text-gray-900 font-medium font-inter">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
