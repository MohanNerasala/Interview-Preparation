import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import type { BreadcrumbItem } from '../types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-text-muted mb-4 overflow-x-auto py-1">
      <Link 
        to="/" 
        className="flex items-center gap-1 hover:text-primary transition-colors shrink-0"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Home</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center gap-1.5 shrink-0">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            {isLast || !item.path ? (
              <span className="font-medium text-text-primary truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.path} 
                className="hover:text-primary transition-colors truncate max-w-[150px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
