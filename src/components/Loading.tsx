
import { Skeleton } from '@/components/ui/skeleton';

interface LoadingProps {
  type?: 'page' | 'section' | 'card' | 'text';
  className?: string;
}

const Loading = ({ type = 'section', className = '' }: LoadingProps) => {
  switch (type) {
    case 'page':
      return (
        <div className={`space-y-8 p-6 ${className}`}>
          <Skeleton className="h-12 w-3/4" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-40 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      );

    case 'card':
      return (
        <div className={`space-y-3 ${className}`}>
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      );

    case 'text':
      return (
        <div className={`space-y-2 ${className}`}>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      );

    default:
      return (
        <div className={`space-y-4 p-6 ${className}`}>
          <Skeleton className="h-8 w-1/2" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      );
  }
};

export default Loading;
