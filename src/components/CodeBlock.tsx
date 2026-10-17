import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, Maximize2, Minimize2 } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = 'java', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isBig, setIsBig] = useState(false);

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

  const defaultTitle = language === 'sql' ? 'Tested MySQL Query' : 'Complete Runnable Java Code';

  return (
    <>
      {/* Clean Inline Code Box */}
      <div className="rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900 shadow-md my-4">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/80 border-b border-slate-700/60 text-xs text-slate-300">
          <span className="font-mono text-xs text-slate-300 font-medium truncate mr-2">
            {title || defaultTitle}
          </span>

          <div className="flex items-center gap-2 shrink-0">
            {/* Big Button */}
            <button
              onClick={() => setIsBig(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-700/60 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer text-xs font-medium"
              title="Expand to Big View"
            >
              <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Big</span>
            </button>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-700/60 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer text-xs font-medium"
              title="Copy code"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied</span>
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

        {/* Code Content */}
        <div className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-slate-100">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>

      {/* ======================================================== */}
      {/* BIG FULLSCREEN VIEW */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isBig && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center animate-fade-in"
            onClick={() => setIsBig(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="w-full max-w-5xl h-[88vh] bg-slate-900 border border-slate-700 rounded-2xl flex flex-col shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Big Header */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-slate-800/90 border-b border-slate-700/80 shrink-0">
                <div className="flex items-center gap-2.5 min-w-0">
                  <h3 className="font-semibold text-slate-100 text-sm sm:text-base truncate font-mono">
                    {title || defaultTitle}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-700 text-slate-300 uppercase">
                    {language}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-100 text-xs font-medium transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-300" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setIsBig(false)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-100 text-xs font-medium transition-colors cursor-pointer"
                    title="Exit Big View (Esc)"
                  >
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>Exit Big</span>
                  </button>
                </div>
              </div>

              {/* Big Code Content */}
              <div className="flex-1 overflow-auto p-5 sm:p-7 text-xs sm:text-sm md:text-base font-mono leading-relaxed text-slate-100 bg-slate-950">
                <pre>
                  <code>{code}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
