import { Search, Menu, GraduationCap } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export default function Header({ onMenuClick, onSearchClick }: HeaderProps) {
  return (
    <header className="h-16 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl flex items-center justify-between px-3.5 sm:px-6 shrink-0 z-10">
      {/* Mobile Left & Brand */}
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
        <button 
          type="button"
          onClick={onMenuClick} 
          className="lg:hidden w-10 h-10 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all cursor-pointer shadow-2xs active:scale-95 shrink-0"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5 text-slate-700" strokeWidth={2} />
        </button>

        {/* Brand Title (Mobile only, on Desktop sidebar shows it) */}
        <div className="lg:hidden flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
            <GraduationCap className="w-4.5 h-4.5 text-primary" strokeWidth={2} />
          </div>
          <span className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight truncate">
            N.M Interview Preparation
          </span>
        </div>
      </div>

      {/* Right Search Button */}
      <div className="flex items-center gap-2 shrink-0 ml-2">
        <button
          type="button"
          onClick={onSearchClick}
          className="h-10 px-3 sm:px-4 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 hover:border-primary/40 
                     text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-medium transition-all shadow-2xs active:scale-95 flex items-center gap-2 cursor-pointer group"
          aria-label="Open search"
        >
          <Search className="w-4.5 h-4.5 text-slate-500 group-hover:text-primary transition-colors shrink-0" strokeWidth={2} />
          <span className="hidden sm:inline text-slate-500 group-hover:text-slate-700">Search topics, concepts...</span>
          <kbd className="hidden md:inline-flex items-center text-[10.5px] font-mono font-semibold text-slate-400 bg-slate-100 
                          px-1.5 py-0.5 rounded border border-slate-200 ml-1.5">⌘K</kbd>
        </button>
      </div>
    </header>
  );
}
