import { Search, Menu, GraduationCap } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export default function Header({ onMenuClick, onSearchClick }: HeaderProps) {
  return (
    <header className="h-16 border-b border-border bg-white/80 backdrop-blur-xl flex items-center justify-between px-4 sm:px-6 shrink-0">
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick} 
          className="lg:hidden p-2 rounded-xl hover:bg-surface-hover transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5 text-text-secondary" strokeWidth={1.8} />
        </button>
        <div className="lg:hidden flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-primary" strokeWidth={1.8} />
          <span className="font-semibold text-text-primary">Interview Prep</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onSearchClick}
          className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border hover:border-primary/30 
                     text-text-muted text-sm transition-all hover:bg-surface-hover group"
          aria-label="Open search"
        >
          <Search className="w-4 h-4 group-hover:text-primary transition-colors" strokeWidth={1.8} />
          <span className="hidden sm:inline">Search topics, concepts...</span>
          <kbd className="hidden md:inline-flex items-center text-[11px] font-medium text-text-muted bg-bg-subtle 
                          px-1.5 py-0.5 rounded border border-border ml-2">⌘K</kbd>
        </button>
      </div>
    </header>
  );
}
