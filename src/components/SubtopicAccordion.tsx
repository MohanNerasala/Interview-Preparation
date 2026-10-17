import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Clock, HelpCircle } from 'lucide-react';
import type { Subtopic } from '../types';

interface SubtopicAccordionProps {
  topicId: string;
  subtopic: Subtopic;
  defaultExpanded?: boolean;
}

export default function SubtopicAccordion({
  topicId,
  subtopic,
  defaultExpanded = true,
}: SubtopicAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultExpanded);
  const navigate = useNavigate();

  const difficultyColors = {
    Essential: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    Common: 'text-blue-700 bg-blue-50 border-blue-200',
    Advanced: 'text-purple-700 bg-purple-50 border-purple-200',
  };

  return (
    <div className="glass-panel overflow-hidden transition-all duration-200 mb-4 border border-slate-200/80">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50/80 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-blue-50 text-primary">
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-800">{subtopic.title}</h3>
            {subtopic.description && (
              <p className="text-xs text-slate-500 mt-0.5">{subtopic.description}</p>
            )}
          </div>
        </div>
        <div className="text-xs font-medium text-slate-400 shrink-0">
          {subtopic.concepts.length} concept{subtopic.concepts.length === 1 ? '' : 's'}
        </div>
      </button>

      {/* Concept Items */}
      {isOpen && (
        <div className="border-t border-slate-100 divide-y divide-slate-100/80 bg-slate-50/30">
          {subtopic.concepts.map((concept) => {
            return (
              <div
                key={concept.id}
                onClick={() => navigate(`/topic/${topicId}/concept/${concept.id}`)}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-6 hover:bg-white cursor-pointer transition-colors group gap-2"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${
                        difficultyColors[concept.difficulty] || 'bg-slate-50 text-slate-600'
                      }`}
                    >
                      {concept.difficulty}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {concept.studyTime}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <HelpCircle className="w-3 h-3" />
                      {concept.questions.length} questions
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                    {concept.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {concept.description || concept.definition}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 text-xs font-semibold text-primary">
                  <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">Study Concept</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
