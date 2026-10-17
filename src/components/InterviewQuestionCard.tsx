import { useState } from 'react';
import { Eye, EyeOff, HelpCircle } from 'lucide-react';
import type { InterviewQuestion } from '../types';
import CodeBlock from './CodeBlock';

interface InterviewQuestionCardProps {
  topicId: string;
  conceptId: string;
  question: InterviewQuestion;
  index: number;
  total: number;
}

export default function InterviewQuestionCard({
  question,
  index,
  total,
}: InterviewQuestionCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const difficultyColors = {
    Essential: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Common: 'bg-blue-50 text-blue-700 border-blue-200',
    Advanced: 'bg-purple-50 text-purple-700 border-purple-200',
  };

  return (
    <div className="glass-panel p-5 sm:p-6 transition-all hover:border-slate-300">
      {/* Header with question count and difficulty */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
            Q{index + 1} of {total}
          </span>
          {question.difficulty && (
            <span
              className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${
                difficultyColors[question.difficulty] || 'bg-slate-50 text-slate-700'
              }`}
            >
              {question.difficulty}
            </span>
          )}
        </div>
      </div>

      {/* Question Text */}
      <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug mb-4">
        {question.question}
      </h3>

      {/* Reveal Answer Toggle */}
      <div className="mt-2">
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            isRevealed
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              : 'bg-primary text-white shadow-sm hover:bg-primary-dark'
          }`}
        >
          {isRevealed ? (
            <>
              <EyeOff className="w-4 h-4" />
              <span>Hide Answer</span>
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              <span>Show Answer</span>
            </>
          )}
        </button>
      </div>

      {/* Answer Content (when revealed) */}
      {isRevealed && (
        <div className="mt-4 pt-4 border-t border-slate-100 animate-fade-in space-y-4">
          <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/60">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
              <span>Recommended Answer</span>
            </h4>
            <div className="text-sm leading-relaxed text-slate-700 whitespace-pre-line font-sans">
              {question.answer}
            </div>
          </div>

          {question.codeExample && (
            <CodeBlock code={question.codeExample} language="java" title="Code Solution" />
          )}

          {question.example && (
            <div className="bg-amber-50/50 rounded-xl p-3.5 border border-amber-200/60 text-xs sm:text-sm text-slate-700">
              <span className="font-semibold text-amber-800">Example Scenario: </span>
              {question.example}
            </div>
          )}

          {question.followUp && question.followUp.length > 0 && (
            <div className="bg-indigo-50/50 rounded-xl p-3.5 border border-indigo-200/60">
              <h5 className="text-xs font-semibold text-indigo-900 flex items-center gap-1.5 mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                Interviewer Follow-up Questions:
              </h5>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                {question.followUp.map((fu, idx) => (
                  <li key={idx}>{fu}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
