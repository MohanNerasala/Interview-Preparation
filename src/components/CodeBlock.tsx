import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Copy, Maximize2, Minimize2, X, ZoomIn, ZoomOut 
} from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = 'java', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isBig, setIsBig] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fontSize, setFontSize] = useState<number>(14);

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

  // Close Big view with Escape key & lock body scroll
  useEffect(() => {
    if (!isBig) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) setIsFullscreen(false);
        else setIsBig(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isBig, isFullscreen]);

  // Clean short title that never gets squished or truncated into "Comp..."
  const displayTitle = title && !title.toLowerCase().includes('complete runnable')
    ? title 
    : (language === 'sql' ? 'SQL Query' : 'Java Solution');

  const codeLines = code.split('\n');

  const modalContent = isBig && typeof document !== 'undefined' ? (
    createPortal(
      <AnimatePresence>
        <div
          className="fixed inset-0 z-9999 bg-slate-950/85 backdrop-blur-md p-2 sm:p-5 flex items-center justify-center animate-fade-in"
          onClick={() => {
            setIsFullscreen(false);
            setIsBig(false);
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 380 }}
            className={`bg-slate-900 border border-slate-700/80 flex flex-col shadow-2xl overflow-hidden transition-all duration-200 ${
              isFullscreen
                ? 'fixed inset-0 w-screen h-screen rounded-none z-100'
                : 'w-[96vw] max-w-6xl h-[88vh] max-h-[92vh] rounded-2xl'
            }`}
            onClick={e => e.stopPropagation()}
          >
            {/* Big Modal Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-800/95 border-b border-slate-700/80 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 shadow-xs shadow-emerald-400/50" />
                <h3 className="font-bold text-slate-100 text-sm sm:text-base font-mono truncate">
                  {displayTitle}
                </h3>
                <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-700/70 text-slate-300 border border-slate-600/60 uppercase">
                  {language}
                </span>
              </div>

              {/* Action Buttons: Zoom, Fullscreen, Copy, Close */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Font Size Adjusters */}
                <div className="hidden sm:flex items-center bg-slate-700/60 rounded-lg p-0.5 border border-slate-600/50">
                  <button
                    type="button"
                    onClick={() => setFontSize(prev => Math.max(12, prev - 1))}
                    className="p-1 text-slate-300 hover:text-white rounded hover:bg-slate-600 transition-colors"
                    title="Decrease font size"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono px-1.5 text-slate-300 select-none">
                    {fontSize}px
                  </span>
                  <button
                    type="button"
                    onClick={() => setFontSize(prev => Math.min(22, prev + 1))}
                    className="p-1 text-slate-300 hover:text-white rounded hover:bg-slate-600 transition-colors"
                    title="Increase font size"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Fullscreen Toggle */}
                <button
                  type="button"
                  onClick={() => setIsFullscreen(prev => !prev)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700/70 hover:bg-slate-600 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                  title={isFullscreen ? 'Exit Fullscreen' : 'Expand to Fullscreen'}
                >
                  {isFullscreen ? (
                    <>
                      <Minimize2 className="w-3.5 h-3.5 text-blue-300" />
                      <span>Contract</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                      <span>Maximize</span>
                    </>
                  )}
                </button>

                {/* Copy Button */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied</span>
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
                  type="button"
                  onClick={() => {
                    setIsFullscreen(false);
                    setIsBig(false);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-rose-500/20 hover:text-rose-300 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
              </div>
            </div>

            {/* Big Code Scrollable Body with Line Numbers */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 font-mono leading-relaxed text-slate-100 bg-slate-950 flex">
              {/* Line Numbers */}
              <div 
                className="select-none text-slate-500 text-right pr-4 border-r border-slate-800/80 mr-4 font-mono shrink-0"
                style={{ fontSize: `${fontSize}px` }}
              >
                {codeLines.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {/* Code Content */}
              <pre 
                className="whitespace-pre overflow-x-auto flex-1 font-mono"
                style={{ fontSize: `${fontSize}px` }}
              >
                <code>{code}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>,
      document.body
    )
  ) : null;

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
              type="button"
              onClick={() => setIsBig(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white transition-all duration-150 cursor-pointer text-xs font-semibold shadow-xs active:scale-95"
              title="Expand code to Big view"
            >
              <Maximize2 className="w-3.5 h-3.5 text-blue-100" />
              <span>Big</span>
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs font-medium active:scale-95"
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

      {/* Render Big Fullscreen Modal in Root Portal */}
      {modalContent}
    </>
  );
}
