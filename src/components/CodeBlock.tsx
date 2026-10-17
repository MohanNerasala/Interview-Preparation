import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, Maximize2, Minimize2, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = 'java', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isBig, setIsBig] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');

  const lines = code.trim().split('\n');

  const handleCopy = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  // Close Big view with Escape key
  useEffect(() => {
    if (!isBig) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsBig(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBig]);

  const fontClasses = {
    sm: 'text-xs',
    base: 'text-xs sm:text-sm',
    lg: 'text-sm sm:text-base',
  };

  return (
    <>
      {/* Standard Inline Code Box */}
      <div className="rounded-xl overflow-hidden border border-slate-700/70 bg-slate-950 shadow-md my-4">
        {/* Header Bar with Big and Copy buttons */}
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <Terminal className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="font-semibold text-slate-200 truncate text-[11px] sm:text-xs">
              {title || (language === 'sql' ? 'Tested SQL Query' : 'Java Source Code')}
            </span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 shrink-0 uppercase">
              {language}
            </span>
            <span className="text-[10px] text-slate-500 font-mono hidden md:inline shrink-0">
              ({lines.length} lines)
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* BIG / FULLSCREEN BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setIsBig(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] sm:text-xs transition-colors shadow-xs cursor-pointer select-none"
              title="Open in Big view"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Big</span>
            </motion.button>

            {/* COPY BUTTON */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-[11px] sm:text-xs transition-colors border border-slate-700/80 cursor-pointer select-none"
              title="Copy code to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Inline Code Lines with Line Numbers */}
        <div className="p-2 sm:p-3 overflow-x-auto max-h-[360px] overflow-y-auto text-[11px] sm:text-xs font-mono leading-tight sm:leading-snug text-slate-100">
          <table className="border-collapse w-full">
            <tbody>
              {lines.map((line, idx) => (
                <tr key={idx} className="hover:bg-slate-900/60 transition-colors">
                  <td className="pr-2 sm:pr-3 text-right text-slate-600 select-none text-[10px] font-mono w-6 sm:w-8 align-top py-0.5">
                    {idx + 1}
                  </td>
                  <td className="whitespace-pre font-mono text-slate-200 pl-2 sm:pl-2.5 border-l border-slate-800/80 py-0.5">
                    {line}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================== */}
      {/* BIG FULLSCREEN MODAL VIEW */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isBig && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md p-2 sm:p-5 flex items-center justify-center animate-fade-in"
            onClick={() => setIsBig(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 380 }}
              className="w-full max-w-5xl h-[92vh] sm:h-[88vh] bg-slate-950 border border-slate-700 rounded-2xl flex flex-col shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Big Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900 border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-primary border border-blue-500/20 shrink-0">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-100 text-sm sm:text-base truncate">
                        {title || (language === 'sql' ? 'Tested SQL Query' : 'Java Source Code')}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-blue-300 border border-slate-700 shrink-0 uppercase">
                        {language}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                      {lines.length} lines • Fullscreen Code View
                    </p>
                  </div>
                </div>

                {/* Right controls: Font zoom, Copy, Exit */}
                <div className="flex items-center gap-2 shrink-0">
                  {/* Font Size Selector */}
                  <div className="hidden sm:flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
                    <button
                      onClick={() => setFontSize('sm')}
                      className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
                        fontSize === 'sm' ? 'bg-primary text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title="Small font"
                    >
                      A-
                    </button>
                    <button
                      onClick={() => setFontSize('base')}
                      className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
                        fontSize === 'base' ? 'bg-primary text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title="Medium font"
                    >
                      A
                    </button>
                    <button
                      onClick={() => setFontSize('lg')}
                      className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
                        fontSize === 'lg' ? 'bg-primary text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title="Large font"
                    >
                      A+
                    </button>
                  </div>

                  {/* Copy Button */}
                  <motion.button
                    whileTap={{ scale: 0.94 }}
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700 cursor-pointer select-none"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </motion.button>

                  {/* Exit Big Button */}
                  <motion.button
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setIsBig(false)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors border border-slate-700 cursor-pointer select-none"
                    title="Exit Big view (Esc)"
                  >
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>Exit Big</span>
                    <kbd className="hidden sm:inline text-[10px] bg-slate-900 px-1 py-0.5 rounded text-slate-400 border border-slate-700">
                      Esc
                    </kbd>
                  </motion.button>
                </div>
              </div>

              {/* Big Code Scroll Area with Line Numbers */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-950">
                <table className={`border-collapse w-full font-mono ${fontClasses[fontSize]}`}>
                  <tbody>
                    {lines.map((line, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/60 transition-colors">
                        <td className="pr-3 sm:pr-4 text-right text-slate-600 select-none font-mono w-8 sm:w-12 align-top py-0.5">
                          {idx + 1}
                        </td>
                        <td className="whitespace-pre font-mono text-slate-200 pl-3 sm:pl-4 border-l border-slate-800 py-0.5">
                          {line}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
