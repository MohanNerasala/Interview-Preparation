import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, Maximize2, X } from 'lucide-react';

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

  // Clean short title that never gets squished or truncated into "Comp..."
  const displayTitle = title && !title.toLowerCase().includes('complete runnable')
    ? title 
    : (language === 'sql' ? 'SQL Query' : 'Java Solution');

  return (
    <>
      {/* Clean Inline Code Box */}
      <div className="rounded-xl overflow-hidden border border-slate-700/70 bg-slate-900 shadow-md my-4">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 bg-slate-800/90 border-b border-slate-700/60 text-xs">
          {/* Left Title: Clean & Compact */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="font-mono text-xs text-slate-200 font-semibold truncate">
              {displayTitle}
            </span>
          </div>

          {/* Right Buttons: Matching & Sleek */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setIsBig(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs font-medium"
              title="Expand code to Big view"
            >
              <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Big</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs font-medium"
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

        {/* Code Body */}
        <div className="p-3.5 sm:p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-slate-100">
          <pre className="whitespace-pre">
            <code>{code}</code>
          </pre>
        </div>
      </div>

      {/* ======================================================== */}
      {/* BIG FULLSCREEN MODAL VIEW */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isBig && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center animate-fade-in"
            onClick={() => setIsBig(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="w-full max-w-4xl max-h-[88vh] bg-slate-900 border border-slate-700 rounded-2xl flex flex-col shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Big Header: Clean & Spacious */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-800/95 border-b border-slate-700/80 shrink-0">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                  <h3 className="font-bold text-slate-100 text-sm sm:text-base font-mono truncate">
                    {displayTitle}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-300" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsBig(false)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-rose-500/20 hover:text-rose-300 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                    title="Close (Esc)"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Close</span>
                  </button>
                </div>
              </div>

              {/* Big Code Scrollable Body */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 text-xs sm:text-sm font-mono leading-relaxed text-slate-100 bg-slate-950">
                <pre className="whitespace-pre">
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
