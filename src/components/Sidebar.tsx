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
  },
  { 
    path: '/coding', 
    icon: Code2, 
    label: 'Core Java, DSA & SQL',
  },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 border-r border-slate-200/90 bg-white shrink-0 z-20">
        <div className="flex items-center gap-3 h-20 px-5 border-b border-slate-100 bg-linear-to-r from-slate-50/80 via-white to-blue-50/30">
          <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0 ring-4 ring-blue-50">
            <GraduationCap className="w-5.5 h-5.5 text-white" strokeWidth={2.2} />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-[14.5px] font-black text-slate-900 tracking-tight leading-none truncate" title="N.M Interview Preparation">
              N.M Interview Preparation
            </h2>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10.5px] font-bold text-blue-600 tracking-wide uppercase">
                Full-Stack Edition
              </span>
            </div>
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
                      ? 'bg-blue-50/90 text-blue-700 border border-blue-200/90 shadow-2xs font-bold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`p-2 rounded-xl transition-colors ${
                      isActive ? 'bg-linear-to-br from-blue-600 to-indigo-600 text-white shadow-xs' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800'
                    }`}>
                      <Icon className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                    <span className="tracking-tight">{item.label}</span>
                  </div>

                  <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 relative z-10 ${
                    isActive ? 'text-blue-500 translate-x-0.5' : 'text-slate-400 group-hover:translate-x-1'
                  }`} />
                </motion.div>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Card - Featured 135 Questions */}
        <motion.div 
          whileHover={{ y: -2 }}
          className="p-4 m-3 rounded-2xl bg-linear-to-br from-slate-900 to-slate-800 text-white shadow-md relative overflow-hidden cursor-default select-none border border-slate-800"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">
                Interview Ready
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-blue-300 border border-slate-700">
              135 Qs
            </span>
          </div>
          <p className="text-xs font-semibold text-white mb-0.5">
            Core Java, DSA & SQL
          </p>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            65 Core Java • 30 DSA • 40 SQL Queries with solutions.
          </p>
        </motion.div>
      </aside>

      {/* Mobile Sidebar with Silky Smooth 120 FPS Framer Motion Animations */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Dimming Overlay with Smooth Fade */}
            <motion.div
              key="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 bg-slate-950/45 backdrop-blur-[2px] z-40 lg:hidden"
              onClick={onClose}
              aria-hidden="true"
            />

            {/* Sliding Drawer Container with Native iOS Cubic-Bezier Deceleration */}
            <motion.aside
              key="mobile-drawer-container"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                type: 'tween', 
                ease: [0.16, 1, 0.3, 1], 
                duration: 0.28 
              }}
              style={{ willChange: 'transform' }}
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] bg-white border-r border-slate-200/90 shadow-2xl lg:hidden flex flex-col"
            >
              {/* Executive Drawer Header with Single-Line Title & Gradient Badge */}
              <div className="flex items-center justify-between h-20 px-5 border-b border-slate-100 bg-linear-to-r from-slate-50/80 via-white to-blue-50/30 shrink-0">
                <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                  <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0 ring-4 ring-blue-50">
                    <GraduationCap className="w-5.5 h-5.5 text-white" strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-[15px] font-black text-slate-900 tracking-tight leading-none truncate" title="N.M Interview Preparation">
                      N.M Interview Preparation
                    </h2>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[11px] font-bold text-blue-600 tracking-wide uppercase">
                        Full-Stack Edition
                      </span>
                    </div>
                  </div>
                </div>

                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  onClick={onClose} 
                  className="w-9 h-9 rounded-xl border border-slate-200/90 bg-white/90 hover:bg-slate-100 hover:border-slate-300 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all shadow-2xs active:scale-95 cursor-pointer shrink-0"
                  aria-label="Close menu"
                >
                  <X className="w-4.5 h-4.5" strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 py-5 px-3 space-y-2 overflow-y-auto">
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
                        whileTap={{ scale: 0.98 }}
                        className={`relative flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer select-none group border ${
                          isActive 
                            ? 'bg-blue-50/90 text-blue-700 border-blue-200/90 shadow-2xs font-bold' 
                            : 'bg-white hover:bg-slate-50/80 text-slate-700 border-slate-200/70 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-xl transition-all ${
                            isActive 
                              ? 'bg-linear-to-br from-blue-600 to-indigo-600 text-white shadow-xs' 
                              : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800'
                          }`}>
                            <Icon className="w-4.5 h-4.5" strokeWidth={2.2} />
                          </div>
                          <span className="tracking-tight text-[13.5px]">{item.label}</span>
                        </div>

                        <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                          isActive ? 'text-blue-500 translate-x-0.5' : 'text-slate-400 group-hover:translate-x-1'
                        }`} />
                      </motion.div>
                    </NavLink>
                  );
                })}
              </nav>

              {/* Mobile Footer Card */}
              <div className="p-3 border-t border-slate-100 shrink-0">
                <div className="p-4 rounded-2xl bg-linear-to-br from-slate-900 to-slate-800 text-white shadow-md relative overflow-hidden select-none border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">
                        Interview Ready
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-blue-300 border border-slate-700">
                      135 Qs
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-white mb-0.5">
                    Core Java, DSA & SQL
                  </p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    65 Core Java • 30 DSA • 40 SQL Queries with solutions.
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
