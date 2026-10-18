import { NavLink } from 'react-router-dom';
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
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 border-r border-slate-200 bg-white shrink-0 z-20">
        {/* Header */}
        <div className="flex items-center gap-3 h-16 px-4 border-b border-slate-200 bg-white">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
            <GraduationCap className="w-4.5 h-4.5 text-white" strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-sm font-semibold text-slate-900 leading-tight">
              N.M Interview Preparation
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Full-Stack Edition
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navItems.map(item => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors select-none group
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 font-semibold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}
                `}
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4.5 h-4.5 ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} strokeWidth={2} />
                      <span>{item.label}</span>
                    </div>

                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} strokeWidth={2} />
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Card - Featured 135 Questions */}
        <div className="p-3 border-t border-slate-200 shrink-0">
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs font-semibold text-slate-800">
                  Interview Ready
                </span>
              </div>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white text-slate-600 border border-slate-200">
                135 Qs
              </span>
            </div>
            <p className="text-xs font-medium text-slate-700 mb-0.5">
              Core Java, DSA & SQL
            </p>
            <p className="text-[11px] text-slate-500 leading-normal">
              65 Core Java • 30 DSA • 40 SQL Queries with solutions.
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden"
              onClick={onClose}
              aria-hidden="true"
            />

            {/* Sliding Drawer */}
            <motion.aside
              key="mobile-drawer-container"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] bg-white border-r border-slate-200 shadow-xl lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between h-16 px-4 border-b border-slate-200 bg-white shrink-0">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
                    <GraduationCap className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-semibold text-slate-900 leading-tight">
                      N.M Interview Preparation
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Full-Stack Edition
                    </p>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={onClose} 
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0 ml-2"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
                {navItems.map(item => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) => `
                        flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer select-none group
                        ${isActive 
                          ? 'bg-blue-50 text-blue-600 font-semibold' 
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}
                      `}
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                            <Icon className={`w-4.5 h-4.5 ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} strokeWidth={2} />
                            <span>{item.label}</span>
                          </div>

                          <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} strokeWidth={2} />
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </nav>

              {/* Mobile Footer Card */}
              <div className="p-3 border-t border-slate-200 shrink-0">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-xs font-semibold text-slate-800">
                        Interview Ready
                      </span>
                    </div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white text-slate-600 border border-slate-200">
                      135 Qs
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-700 mb-0.5">
                    Core Java, DSA & SQL
                  </p>
                  <p className="text-[11px] text-slate-500 leading-normal">
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
