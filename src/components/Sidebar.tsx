import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Code2, GraduationCap, X, ChevronRight, Sparkles
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { 
    path: '/', 
    icon: LayoutDashboard, 
    label: 'Concepts',
    badge: '10 Modules',
    badgeColor: 'bg-slate-100 text-slate-700 border border-slate-200'
  },
  { 
    path: '/coding', 
    icon: Code2, 
    label: 'Core Java, DSA & SQL',
    badge: '128 Qs',
    badgeColor: 'bg-slate-900 text-white font-bold'
  },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 border-r border-border bg-white/95 backdrop-blur-xl shrink-0 z-20">
        <div className="flex items-center gap-2.5 h-16 px-6 border-b border-border/80">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="p-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs"
          >
            <GraduationCap className="w-5 h-5 text-slate-800" strokeWidth={2} />
          </motion.div>
          <div>
            <span className="text-base font-extrabold text-slate-900 tracking-tight block">
              Interview Prep
            </span>
            <span className="text-[10px] text-slate-400 font-medium block">
              Full-Stack Edition
            </span>
          </div>
        </div>

        <nav className="flex-1 py-5 px-3 space-y-1.5 overflow-y-auto">
          {navItems.map(item => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="block outline-none"
              >
                <motion.div
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className={`relative flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none group ${
                    isActive 
                      ? 'bg-slate-100/90 text-slate-900 border border-slate-300 shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`p-1.5 rounded-xl transition-colors ${
                      isActive ? 'bg-slate-900 text-white shadow-2xs' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800'
                    }`}>
                      <Icon className="w-4 h-4" strokeWidth={2} />
                    </div>
                    <span className="tracking-tight">{item.label}</span>
                  </div>

                  <div className="flex items-center gap-1.5 relative z-10">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </motion.div>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Card */}
        <motion.div 
          whileHover={{ y: -2 }}
          className="p-4 m-3 rounded-2xl bg-slate-900 text-white shadow-md relative overflow-hidden cursor-default select-none"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">Interview Ready</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            128 Core Java, DSA, and SQL queries with complete solutions.
          </p>
        </motion.div>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="fixed inset-y-0 left-0 z-50 w-72 bg-white/98 backdrop-blur-2xl border-r border-slate-200 shadow-2xl lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between h-16 px-5 border-b border-slate-200/80">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs">
                  <GraduationCap className="w-5 h-5 text-slate-800" strokeWidth={2} />
                </div>
                <div>
                  <span className="text-base font-extrabold text-slate-900 tracking-tight block">
                    Interview Prep
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium block">
                    Full-Stack Edition
                  </span>
                </div>
              </div>
              <motion.button 
                whileTap={{ scale: 0.85, rotate: 90 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                onClick={onClose} 
                className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <nav className="flex-1 py-5 px-3 space-y-2.5 overflow-y-auto">
              {navItems.map(item => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className="block outline-none"
                  >
                    <motion.div
                      whileHover={{ scale: 1.015, x: 2 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className={`relative flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer select-none group border ${
                        isActive 
                          ? 'bg-slate-100 text-slate-950 border-slate-400 shadow-xs' 
                          : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl transition-colors ${
                          isActive ? 'bg-slate-900 text-white shadow-2xs' : 'bg-slate-100 text-slate-500'
                        }`}>
                          <Icon className="w-4 h-4" strokeWidth={2} />
                        </div>
                        <span className="tracking-tight">{item.label}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </motion.div>
                  </NavLink>
                );
              })}
            </nav>

            {/* Mobile Footer Card */}
            <div className="p-4 border-t border-slate-100 m-3 rounded-2xl bg-slate-50 text-center select-none">
              <span className="text-xs font-bold text-slate-800 block">Java Full-Stack Prep</span>
              <span className="text-[11px] text-slate-400">Concepts • DSA • SQL Queries</span>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
