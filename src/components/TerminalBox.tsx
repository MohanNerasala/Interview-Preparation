import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

interface TerminalBoxProps {
  title: string;
  badge?: string;
  content?: string;
  placeholder?: string;
  className?: string;
}

export default function TerminalBox({
  title,
  badge,
  content,
  placeholder = "None (Standard JVM execution)",
  className = ""
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

  return (
    <div className={`space-y-1.5 w-full ${className}`}>
      {/* Terminal Box Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <Terminal className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-200 whitespace-nowrap">
            {title}
          </span>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          {badge && (
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-blue-300 border border-slate-700 whitespace-nowrap">
              {badge}
            </span>
          )}
          <button
            type="button"
            onClick={handleCopy}
            className="w-[62px] justify-center inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer border border-transparent hover:border-slate-700 active:scale-95 shrink-0"
            title={`Copy ${title}`}
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="text-emerald-400 font-semibold text-[10px]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="text-[10px]">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Crisp White Terminal Content with Black Text */}
      <div className="bg-white border border-slate-300 rounded-xl p-3 sm:p-3.5 text-[13px] sm:text-[13.5px] font-mono font-semibold text-slate-900 leading-relaxed whitespace-pre overflow-x-auto min-h-[48px] select-text">
        {textToShow}
      </div>
    </div>
  );
}
