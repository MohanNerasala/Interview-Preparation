import { useMemo } from 'react';
import { Sparkles } from 'lucide-react';

interface FormattedDefinitionBoxProps {
  definition: string;
  interviewAnswer?: string;
}

interface DefinitionItem {
  title: string;
  body: string;
}

export default function FormattedDefinitionBox({ definition, interviewAnswer }: FormattedDefinitionBoxProps) {
  // Parse definition string into structured individual questions & answers
  const items = useMemo<DefinitionItem[]>(() => {
    if (!definition) return [];

    const isMajorHeading = (line: string): boolean => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.length > 80) return false;
      // Numbered heading: "1. What is ...?" or "1. STRING VS ..."
      if (/^[0-9]+\.\s+/.test(trimmed)) return true;
      // Question mark heading: "WHAT IS AN EXCEPTION?" or "What is an Exception?"
      if (trimmed.endsWith('?')) return true;
      // All uppercase ending with colon or uppercase category title
      const isAllUpper = trimmed.toUpperCase() === trimmed && /[A-Z]/.test(trimmed);
      if (isAllUpper && (trimmed.endsWith(':') || trimmed.length < 50)) return true;
      // Method signature names ending with (): e.g. "getMessage():" or "printStackTrace():"
      if (/^[a-zA-Z0-9_]+\(\):?$/.test(trimmed)) return true;
      return false;
    };

    const lines = definition.trim().split('\n');
    const sections: { title: string; bodyLines: string[] }[] = [];
    let currentSection: { title: string; bodyLines: string[] } | null = null;
    let foundAnyMajorHeading = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (isMajorHeading(trimmed)) {
        foundAnyMajorHeading = true;
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = {
          title: trimmed.replace(/^[0-9]+\.\s*/, '').replace(/:$/, ''),
          bodyLines: [],
        };
      } else if (currentSection) {
        currentSection.bodyLines.push(line);
      } else {
        currentSection = {
          title: '',
          bodyLines: [line],
        };
      }
    }

    if (currentSection) {
      sections.push(currentSection);
    }

    // If no major headings were detected, fall back to standard block parsing
    if (!foundAnyMajorHeading) {
      const rawBlocks = definition.trim().split(/\n\s*\n/);
      return rawBlocks
        .map(block => {
          const blkLines = block.trim().split('\n');
          const firstLine = blkLines[0].trim();
          const isHeading =
            firstLine.endsWith('?') ||
            firstLine.endsWith(':') ||
            (firstLine.toUpperCase() === firstLine && firstLine.length < 80);

          if (blkLines.length > 1 && isHeading) {
            return {
              title: firstLine.replace(/^[0-9]+\.\s*/, '').replace(/:$/, ''),
              body: blkLines.slice(1).join('\n').trim(),
            };
          }
          return {
            title: '',
            body: block.trim(),
          };
        })
        .filter(item => item.body.length > 0 || item.title.length > 0);
    }

    return sections
      .map(s => ({
        title: s.title,
        body: s.bodyLines.join('\n').trim(),
      }))
      .filter(item => item.body.length > 0 || item.title.length > 0);
  }, [definition]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.04)] overflow-hidden">
      {/* Box Header */}
      <div className="px-4 sm:px-6 py-3.5 bg-gradient-to-r from-blue-50/70 via-slate-50 to-white border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-primary shrink-0" />
          <span>Interview Definition & Key Points</span>
        </div>
        <span className="text-[10px] font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
          {items.length} {items.length === 1 ? 'Topic' : 'Key Topics'}
        </span>
      </div>

      {/* Box Body: Each one in its own clean answer box */}
      <div className="p-3.5 sm:p-5 space-y-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-50/80 rounded-xl p-3.5 sm:p-4 border border-slate-200/80 space-y-2 hover:border-slate-300 transition-colors"
          >
            {item.title ? (
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary bg-blue-50/90 px-2.5 py-0.5 rounded-md border border-blue-100/90 inline-block">
                  {item.title}
                </span>
              </div>
            ) : null}
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal whitespace-pre-line pl-0.5">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      {/* Model Interview Answer Summary at the bottom */}
      {interviewAnswer && (
        <div className="px-4 sm:px-6 py-3.5 bg-blue-50/40 border-t border-blue-100/70">
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
            How to Frame in Interview:
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium whitespace-pre-line">
            {interviewAnswer}
          </p>
        </div>
      )}
    </div>
  );
}
