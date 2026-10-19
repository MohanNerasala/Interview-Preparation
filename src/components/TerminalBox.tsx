import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

interface TerminalBoxProps {
  title: string;
  badge?: string;
  content?: string;
  placeholder?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export default function TerminalBox({
  title,
  badge,
  content,
  placeholder = "None (Standard JVM execution)",
  className = "",
  variant = 'light'
}: TerminalBoxProps) {
  const [copied, setCopied] = useState(false);
  const textToShow = content?.trim() ? content : placeholder;

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(textToShow);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const isDark = variant === 'dark';

  return (
    <div className={`space-y-1.5 w-full ${className}`}>
      {/* Terminal Box Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <Terminal className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
          <span className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap ${
            isDark ? 'text-slate-100' : 'text-slate-900'
          }`}>
            {title}
          </span>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          {badge && (
            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md whitespace-nowrap border ${
              isDark 
                ? 'bg-slate-800 text-blue-300 border-slate-700' 
                : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}>
              {badge}
            </span>
          )}
          <button
            type="button"
            onClick={handleCopy}
            className={`w-[62px] justify-center inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer border active:scale-95 shrink-0 ${
              isDark
                ? 'text-slate-300 hover:text-white hover:bg-slate-800 border-transparent hover:border-slate-700'
                : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 border-slate-200 bg-white shadow-2xs'
            }`}
            title={`Copy ${title}`}
          >
            {copied ? (
              <>
                <Check className={`w-3 h-3 shrink-0 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className={`font-semibold text-[10px] ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Copied</span>
              </>
            ) : (
              <>
                <Copy className={`w-3 h-3 shrink-0 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                <span className={`text-[10px] ${isDark ? 'text-slate-300' : 'text-slate-700 font-semibold'}`}>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Crisp White Terminal Content with Black Text */}
      <div className={`border rounded-xl p-3 sm:p-3.5 text-[13px] sm:text-[13.5px] font-mono font-semibold text-slate-900 leading-relaxed whitespace-pre overflow-x-auto min-h-[48px] select-text ${
        isDark ? 'bg-white border-slate-300 shadow-2xs' : 'bg-slate-50/80 border-slate-200/90 shadow-2xs'
      }`}>
        {textToShow}
      </div>
    </div>
  );
}
