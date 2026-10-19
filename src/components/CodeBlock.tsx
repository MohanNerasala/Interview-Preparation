import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Copy, Maximize2, Minimize2, X, ZoomIn, ZoomOut, Moon, Sun
} from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export type CodeThemeId = 'vscode-dark' | 'eclipse' | 'vscode-light';

interface Token {
  text: string;
  type: 
    | 'control' 
    | 'declaration' 
    | 'primitive' 
    | 'literal' 
    | 'type' 
    | 'method' 
    | 'variable' 
    | 'string' 
    | 'comment' 
    | 'number' 
    | 'annotation' 
    | 'default';
}

const JAVA_CONTROL_KEYWORDS = new Set([
  'return', 'if', 'else', 'switch', 'case', 'break', 'continue', 'default', 
  'do', 'while', 'for', 'try', 'catch', 'finally', 'throw', 'throws', 
  'assert', 'yield'
]);

const JAVA_DECLARATION_KEYWORDS = new Set([
  'class', 'interface', 'extends', 'implements', 'public', 'private', 'protected',
  'static', 'final', 'abstract', 'synchronized', 'native', 'transient', 'volatile',
  'package', 'import', 'new', 'this', 'super', 'instanceof', 'record', 'sealed',
  'permits', 'var', 'enum', 'strictfp'
]);

const JAVA_PRIMITIVES = new Set([
  'void', 'boolean', 'byte', 'char', 'short', 'int', 'long', 'float', 'double'
]);

const JAVA_LITERALS = new Set([
  'true', 'false', 'null'
]);

const SQL_KEYWORDS = new Set([
  'SELECT', 'FROM', 'WHERE', 'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET',
  'DELETE', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER', 'FULL', 'CROSS', 'ON',
  'GROUP', 'BY', 'HAVING', 'ORDER', 'ASC', 'DESC', 'LIMIT', 'OFFSET', 'AND',
  'OR', 'NOT', 'IN', 'BETWEEN', 'LIKE', 'IS', 'NULL', 'AS', 'CREATE', 'TABLE',
  'DROP', 'ALTER', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'UNIQUE', 'CHECK',
  'DEFAULT', 'INDEX', 'VIEW', 'DATABASE', 'DISTINCT', 'COUNT', 'SUM', 'AVG',
  'MAX', 'MIN', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END', 'UNION', 'ALL', 'EXISTS'
]);

const JAVA_BUILTIN_TYPES = new Set([
  'String', 'System', 'Integer', 'Double', 'Boolean', 'Long', 'Short', 'Byte',
  'Character', 'Float', 'Object', 'Class', 'Math', 'List', 'ArrayList', 'LinkedList',
  'Map', 'HashMap', 'TreeMap', 'LinkedHashMap', 'Set', 'HashSet', 'TreeSet',
  'Arrays', 'Collections', 'Scanner', 'Exception', 'RuntimeException', 'Throwable',
  'Error', 'StringBuilder', 'StringBuffer', 'Thread', 'Runnable', 'Comparable',
  'Comparator', 'Optional', 'Stream', 'Collectors', 'Iterator', 'Override',
  'FunctionalInterface', 'Deprecated', 'SuppressWarnings'
]);

function tokenizeLine(
  line: string, 
  initialInBlockComment: boolean,
  isSql: boolean
): { tokens: Token[]; endInBlockComment: boolean } {
  const tokens: Token[] = [];
  let inBlockComment = initialInBlockComment;
  let i = 0;

  while (i < line.length) {
    if (inBlockComment) {
      const endIdx = line.indexOf('*/', i);
      if (endIdx !== -1) {
        tokens.push({ text: line.slice(i, endIdx + 2), type: 'comment' });
        i = endIdx + 2;
        inBlockComment = false;
      } else {
        tokens.push({ text: line.slice(i), type: 'comment' });
        break;
      }
      continue;
    }

    // Check for block comment /*
    if (line.slice(i, i + 2) === '/*') {
      const endIdx = line.indexOf('*/', i + 2);
      if (endIdx !== -1) {
        tokens.push({ text: line.slice(i, endIdx + 2), type: 'comment' });
        i = endIdx + 2;
      } else {
        tokens.push({ text: line.slice(i), type: 'comment' });
        inBlockComment = true;
        break;
      }
      continue;
    }

    // Check for single-line comment (// in Java, -- in SQL)
    if (line.slice(i, i + 2) === '//' || (isSql && line.slice(i, i + 2) === '--')) {
      tokens.push({ text: line.slice(i), type: 'comment' });
      break;
    }

    // Check for string literal ("..." or '...')
    if (line[i] === '"' || line[i] === "'") {
      const quote = line[i];
      let j = i + 1;
      let escaped = false;
      while (j < line.length) {
        if (!escaped && line[j] === quote) {
          j++;
          break;
        }
        if (line[j] === '\\') {
          escaped = !escaped;
        } else {
          escaped = false;
        }
        j++;
      }
      tokens.push({ text: line.slice(i, j), type: 'string' });
      i = j;
      continue;
    }

    // Check for annotation @Name
    if (line[i] === '@' && /[a-zA-Z_]/.test(line[i + 1] || '')) {
      let j = i + 1;
      while (j < line.length && /[a-zA-Z0-9_]/.test(line[j])) {
        j++;
      }
      tokens.push({ text: line.slice(i, j), type: 'annotation' });
      i = j;
      continue;
    }

    // Check for word (keyword, type, method, variable, identifier)
    if (/[a-zA-Z_$]/.test(line[i])) {
      let j = i;
      while (j < line.length && /[a-zA-Z0-9_$]/.test(line[j])) {
        j++;
      }
      const word = line.slice(i, j);

      if (isSql) {
        if (SQL_KEYWORDS.has(word.toUpperCase())) {
          tokens.push({ text: word, type: 'declaration' });
        } else {
          tokens.push({ text: word, type: 'default' });
        }
      } else {
        // Look ahead to check if followed by `(` (ignoring whitespace)
        let k = j;
        while (k < line.length && (line[k] === ' ' || line[k] === '\t')) {
          k++;
        }
        const isFollowedByParen = k < line.length && line[k] === '(';

        if (JAVA_CONTROL_KEYWORDS.has(word)) {
          tokens.push({ text: word, type: 'control' });
        } else if (JAVA_DECLARATION_KEYWORDS.has(word)) {
          tokens.push({ text: word, type: 'declaration' });
        } else if (JAVA_PRIMITIVES.has(word)) {
          tokens.push({ text: word, type: 'primitive' });
        } else if (JAVA_LITERALS.has(word)) {
          tokens.push({ text: word, type: 'literal' });
        } else if (JAVA_BUILTIN_TYPES.has(word) || /^[A-Z][a-zA-Z0-9_$]*$/.test(word)) {
          tokens.push({ text: word, type: 'type' });
        } else if (isFollowedByParen) {
          tokens.push({ text: word, type: 'method' });
        } else {
          tokens.push({ text: word, type: 'variable' });
        }
      }
      i = j;
      continue;
    }

    // Check for number
    if (/[0-9]/.test(line[i])) {
      let j = i;
      while (j < line.length && /[0-9.xXfFdDlLbB]/.test(line[j])) {
        j++;
      }
      tokens.push({ text: line.slice(i, j), type: 'number' });
      i = j;
      continue;
    }

    // Default symbol, operator, or whitespace
    tokens.push({ text: line[i], type: 'default' });
    i++;
  }

  return { tokens, endInBlockComment: inBlockComment };
}

const CODE_THEME_KEY = 'app_code_editor_theme';

export function getCodeTheme(): CodeThemeId {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(CODE_THEME_KEY) || localStorage.getItem('eclipse_code_theme');
    if (saved === 'vscode-dark' || saved === 'eclipse' || saved === 'vscode-light') {
      return saved;
    }
    if (saved === 'dark') return 'vscode-dark';
    if (saved === 'light') return 'eclipse';
  }
  return 'vscode-dark'; // Default to real VS Code Dark theme
}

export function setCodeThemeGlobal(theme: CodeThemeId) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CODE_THEME_KEY, theme);
    localStorage.setItem('eclipse_code_theme', theme === 'vscode-dark' ? 'dark' : 'light');
    window.dispatchEvent(new CustomEvent('code-theme-change', { detail: theme }));
  }
}

export default function CodeBlock({ code, language = 'java', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isBig, setIsBig] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fontSize, setFontSize] = useState<number>(13.5);
  const [theme, setTheme] = useState<CodeThemeId>(getCodeTheme);

  const isSql = language.toLowerCase() === 'sql';

  // Listen for global code theme switch so all blocks sync instantly
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<CodeThemeId>;
      if (customEvent.detail) {
        setTheme(customEvent.detail);
      }
    };
    window.addEventListener('code-theme-change', handler);
    return () => window.removeEventListener('code-theme-change', handler);
  }, []);

  const handleToggleTheme = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const nextTheme: CodeThemeId = isDark ? 'vscode-light' : 'vscode-dark';
    setTheme(nextTheme);
    setCodeThemeGlobal(nextTheme);
  };

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

  // Clean short title
  const displayTitle = title && !title.toLowerCase().includes('complete runnable')
    ? title 
    : (isSql ? 'SQL Query' : 'Java Implementation');

  const rawLines = code.split('\n');

  // Tokenize lines for syntax highlighting
  const parsedLines: Token[][] = [];
  let inBlockComment = false;
  for (const line of rawLines) {
    const res = tokenizeLine(line, inBlockComment, isSql);
    parsedLines.push(res.tokens);
    inBlockComment = res.endInBlockComment;
  }

  // Token Color Renderer for authentic VS Code and Eclipse themes
  const renderToken = (token: Token, idx: number) => {
    let color = '#D4D4D4';
    let fontWeight: number | string = 400;
    let fontStyle: 'normal' | 'italic' = 'normal';

    if (theme === 'vscode-dark') {
      // 100% REAL VS CODE DARK+ PALETTE
      switch (token.type) {
        case 'control':
          color = '#C586C0'; // Purple control keywords (return, if, while)
          break;
        case 'declaration':
        case 'primitive':
        case 'literal':
          color = '#569CD6'; // Blue keywords (class, public, int, void, new)
          break;
        case 'type':
          color = '#4EC9B0'; // Teal classes / types (String, Pizza, ParentPizza)
          break;
        case 'method':
          color = '#DCDCAA'; // Warm yellow methods & constructors (println, super, this)
          break;
        case 'variable':
          color = '#9CDCFE'; // Light blue variables & fields (crust, topping, size)
          break;
        case 'string':
          color = '#CE9178'; // Soft terracotta / orange string literals
          break;
        case 'comment':
          color = '#6A9955'; // Clean forest green comments
          fontStyle = 'italic';
          break;
        case 'number':
          color = '#B5CEA8'; // Pale mint numbers (10, 0, 3.14)
          break;
        case 'annotation':
          color = '#DCDCAA'; // Yellow annotations
          break;
        default:
          color = '#D4D4D4'; // Light gray brackets, semicolons, operators
      }
    } else if (theme === 'eclipse') {
      // 100% REAL ECLIPSE IDE PALETTE
      switch (token.type) {
        case 'control':
        case 'declaration':
        case 'primitive':
        case 'literal':
          color = '#7F0055'; // Iconic Eclipse bold maroon/purple
          fontWeight = 700;
          break;
        case 'type':
        case 'method':
        case 'variable':
          color = '#000000'; // In genuine Eclipse, types and variables are sharp black
          fontWeight = token.type === 'type' ? 600 : 400;
          break;
        case 'string':
          color = '#2A00FF'; // Iconic Eclipse royal blue strings
          break;
        case 'comment':
          color = '#3F7F5F'; // Iconic Eclipse forest green comments
          fontStyle = 'italic';
          break;
        case 'number':
          color = '#000000'; // Numbers in Eclipse are standard black
          break;
        case 'annotation':
          color = '#646464'; // Gray annotations
          break;
        default:
          color = '#000000'; // Standard black
      }
    } else {
      // 100% REAL VS CODE LIGHT+ PALETTE
      switch (token.type) {
        case 'control':
          color = '#AF00DB'; // Purple control keywords
          break;
        case 'declaration':
        case 'primitive':
        case 'literal':
          color = '#0000FF'; // Blue keywords
          break;
        case 'type':
          color = '#267F99'; // Teal classes / types
          break;
        case 'method':
          color = '#795E26'; // Brown methods
          break;
        case 'variable':
          color = '#001080'; // Navy variables & fields
          break;
        case 'string':
          color = '#A31515'; // Crimson red strings
          break;
        case 'comment':
          color = '#008000'; // Green comments
          fontStyle = 'italic';
          break;
        case 'number':
          color = '#098658'; // Forest green numbers
          break;
        case 'annotation':
          color = '#267F99';
          break;
        default:
          color = '#000000'; // Black
      }
    }

    return (
      <span key={idx} style={{ color, fontWeight, fontStyle }}>
        {token.text}
      </span>
    );
  };

  // Editor container style tokens based on theme
  const isDark = theme === 'vscode-dark';
  const containerBg = isDark ? 'bg-[#1E1E1E]' : 'bg-[#FFFFFF]';
  const containerBorder = isDark ? 'border-[#333333]' : (theme === 'eclipse' ? 'border-slate-300' : 'border-slate-200');
  const headerBg = isDark ? 'bg-[#252526]' : (theme === 'eclipse' ? 'bg-[#F3F4F6]' : 'bg-[#F8FAFC]');
  const headerBorder = isDark ? 'border-[#333333]' : 'border-slate-200';
  const headerText = isDark ? 'text-slate-200' : 'text-slate-800';
  const gutterBg = isDark ? 'bg-[#1E1E1E]' : (theme === 'eclipse' ? 'bg-[#FAFAFA]' : 'bg-[#F8FAFC]');
  const gutterText = isDark ? 'text-[#858585]' : 'text-[#787878]';
  const gutterBorder = isDark ? 'border-[#2B2B2B]' : 'border-slate-200';

  const modalContent = isBig && typeof document !== 'undefined' ? (
    createPortal(
      <AnimatePresence>
        <div
          className="fixed inset-0 z-9999 bg-black/80 p-2 sm:p-5 flex items-center justify-center animate-fade-in"
          onClick={() => {
            setIsFullscreen(false);
            setIsBig(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={`border flex flex-col shadow-2xl overflow-hidden ${containerBg} ${containerBorder} ${
              isFullscreen
                ? 'fixed inset-0 w-screen h-screen rounded-none z-100'
                : 'w-[96vw] max-w-6xl h-[88vh] max-h-[92vh] rounded-2xl'
            }`}
            onClick={e => e.stopPropagation()}
          >
            {/* Big Modal Header Bar */}
            <div className={`flex items-center justify-between px-4 sm:px-6 py-2.5 border-b shrink-0 ${headerBg} ${headerBorder} ${headerText}`}>
              <div className="flex items-center gap-2.5 min-w-0 flex-1 mr-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 shadow-xs shadow-emerald-500/50" />
                <h3 className="font-bold text-sm sm:text-base font-mono truncate">
                  {displayTitle}
                </h3>
                <span className={`hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-md uppercase font-semibold border ${
                  isDark 
                    ? 'bg-[#1E1E1E] text-slate-300 border-[#3C3C3C]' 
                    : 'bg-white text-slate-700 border-slate-300'
                }`}>
                  {language}
                </span>
              </div>

              {/* Action Buttons: Zoom, Fullscreen, Copy, Close - Rock Solid Alignment so Close NEVER moves! */}
              <div className="flex items-center gap-2 shrink-0 ml-auto">
                {/* Font Size Adjusters */}
                <div className={`hidden sm:flex items-center rounded-lg p-0.5 border ${
                  isDark ? 'bg-[#181818] border-[#3C3C3C]' : 'bg-white border-slate-300'
                }`}>
                  <button
                    type="button"
                    onClick={() => setFontSize(prev => Math.max(11, prev - 1))}
                    className={`p-1 rounded transition-colors ${
                      isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Decrease font size"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className={`text-[11px] font-mono px-1.5 select-none ${
                    isDark ? 'text-slate-300 font-semibold' : 'text-slate-700 font-semibold'
                  }`}>
                    {fontSize}px
                  </span>
                  <button
                    type="button"
                    onClick={() => setFontSize(prev => Math.min(22, prev + 1))}
                    className={`p-1 rounded transition-colors ${
                      isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Increase font size"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Theme Toggle Button (Black & White Theme) */}
                <button
                  type="button"
                  onClick={handleToggleTheme}
                  className={`min-w-[34px] sm:min-w-[76px] justify-center inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer border active:scale-95 ${
                    isDark 
                      ? 'bg-[#1E1E1E] hover:bg-[#2A2D2E] text-slate-200 border-[#3C3C3C]' 
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-2xs'
                  }`}
                  title={isDark ? "Switch to White (Light) Theme" : "Switch to Black (Dark) Theme"}
                  aria-label="Toggle Black/White Theme"
                >
                  {isDark ? (
                    <>
                      <Moon className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20 shrink-0" />
                      <span className="hidden sm:inline">Dark</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="hidden sm:inline">Light</span>
                    </>
                  )}
                </button>

                {/* Fullscreen Toggle */}
                <button
                  type="button"
                  onClick={() => setIsFullscreen(prev => !prev)}
                  className={`w-[96px] justify-center hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                    isDark 
                      ? 'bg-[#1E1E1E] hover:bg-[#2A2D2E] text-slate-200 border-[#3C3C3C]' 
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-2xs'
                  }`}
                  title={isFullscreen ? 'Exit Fullscreen' : 'Expand to Fullscreen'}
                >
                  {isFullscreen ? (
                    <>
                      <Minimize2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Contract</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Maximize</span>
                    </>
                  )}
                </button>

                {/* Copy Button - Fixed width so "Copied" never expands or pushes the Close button! */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`w-[84px] justify-center inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                    isDark 
                      ? 'bg-[#1E1E1E] hover:bg-[#2A2D2E] text-slate-200 border-[#3C3C3C]' 
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-2xs'
                  }`}
                  title="Copy code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-emerald-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                {/* Close Button - Firmly anchored, fixed width, NEVER shifts or moves */}
                <button
                  type="button"
                  onClick={() => {
                    setIsFullscreen(false);
                    setIsBig(false);
                  }}
                  className={`w-[84px] justify-center inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                    isDark 
                      ? 'bg-[#1E1E1E] hover:bg-rose-500/20 hover:text-rose-300 hover:border-rose-500/40 text-slate-200 border-[#3C3C3C]' 
                      : 'bg-white hover:bg-rose-50 hover:text-rose-600 text-slate-700 border-slate-300'
                  }`}
                  title="Close (Esc)"
                >
                  <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Close</span>
                </button>
              </div>
            </div>

            {/* Big Code Scrollable Body with Line Numbers */}
            <div className={`flex-1 overflow-auto p-4 sm:p-6 font-mono leading-[1.65] flex ${containerBg}`}>
              {/* Line Numbers */}
              <div 
                className={`select-none text-right pr-4 border-r mr-4 font-mono shrink-0 ${gutterBg} ${gutterText} ${gutterBorder}`}
                style={{ fontSize: `${fontSize}px` }}
              >
                {parsedLines.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {/* Highlighted Code Content */}
              <pre 
                className="whitespace-pre overflow-x-auto flex-1 font-mono"
                style={{ fontSize: `${fontSize}px` }}
              >
                <code>
                  {parsedLines.map((lineTokens, lineIdx) => (
                    <div key={lineIdx}>
                      {lineTokens.length === 0 ? (
                        '\n'
                      ) : (
                        lineTokens.map((t, tIdx) => renderToken(t, tIdx))
                      )}
                    </div>
                  ))}
                </code>
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
      {/* Inline Code Box with Real VS Code & Eclipse Highlighting and Segmented Theme Switcher */}
      <div className={`rounded-xl overflow-hidden border my-3.5 transition-all shadow-sm ${containerBg} ${containerBorder}`}>
        {/* Header Bar */}
        <div className={`flex items-center justify-between px-3 sm:px-4 py-2 border-b text-xs ${headerBg} ${headerBorder} ${headerText}`}>
          {/* Left Title: Clean & Compact */}
          <div className="flex items-center gap-2 min-w-0 flex-1 mr-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-mono text-xs font-bold truncate">
              {displayTitle}
            </span>
            <span className={`hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded uppercase font-semibold border ${
              isDark 
                ? 'bg-[#181818] text-slate-400 border-[#333333]' 
                : 'bg-white text-slate-600 border-slate-200'
            }`}>
              {language}
            </span>
          </div>

          {/* Right Controls: Theme Toggle, Big Button, Copy Button - Rock Solid Fixed Widths */}
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            {/* Theme Toggle Button (Black & White Theme with Half Moon Icon) */}
            <button
              type="button"
              onClick={handleToggleTheme}
              className={`min-w-[34px] sm:min-w-[76px] justify-center inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer border active:scale-95 ${
                isDark 
                  ? 'bg-[#1E1E1E] hover:bg-[#2A2D2E] text-slate-200 border-[#3C3C3C]' 
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-2xs'
              }`}
              title={isDark ? "Switch to White (Light) Theme" : "Switch to Black (Dark) Theme"}
              aria-label="Toggle Black/White Theme"
            >
              {isDark ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20 shrink-0" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="hidden sm:inline">Light</span>
                </>
              )}
            </button>

            {/* Big Button */}
            <button
              type="button"
              onClick={() => setIsBig(true)}
              className="w-[68px] justify-center inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all cursor-pointer text-xs font-semibold shadow-xs active:scale-95"
              title="Expand code to Big view"
            >
              <Maximize2 className="w-3.5 h-3.5 text-blue-100 shrink-0" />
              <span>Big</span>
            </button>

            {/* Copy Button - Fixed width so "Copied" doesn't shift anything */}
            <button
              type="button"
              onClick={handleCopy}
              className={`w-[78px] justify-center inline-flex items-center gap-1.5 px-2 py-1 rounded-lg transition-colors cursor-pointer text-xs font-medium active:scale-95 border ${
                isDark 
                  ? 'bg-[#1E1E1E] hover:bg-[#2A2D2E] text-slate-300 hover:text-white border-[#3C3C3C]' 
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-2xs'
              }`}
              title="Copy code"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Body with Real Syntax Colors & Line Numbers */}
        <div className={`p-3.5 sm:p-4 overflow-x-auto text-[13px] sm:text-[13.5px] font-mono leading-[1.65] flex ${containerBg}`}>
          {/* Line Numbers */}
          <div 
            className={`select-none text-right pr-3 sm:pr-4 border-r mr-3 sm:mr-4 font-mono shrink-0 ${gutterBg} ${gutterText} ${gutterBorder}`}
          >
            {parsedLines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Highlighted Code */}
          <pre className="whitespace-pre overflow-x-auto flex-1 font-mono">
            <code>
              {parsedLines.map((lineTokens, lineIdx) => (
                <div key={lineIdx}>
                  {lineTokens.length === 0 ? (
                    '\n'
                  ) : (
                    lineTokens.map((t, tIdx) => renderToken(t, tIdx))
                  )}
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>

      {/* Render Big Fullscreen Modal in Root Portal */}
      {modalContent}
    </>
  );
}
