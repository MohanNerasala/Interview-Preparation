import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  HelpCircle,
  Lightbulb,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { getTopicById, findConceptInTopic, getAllConcepts } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';
import CodeBlock from '../components/CodeBlock';
import InterviewQuestionCard from '../components/InterviewQuestionCard';
import FormattedDefinitionBox from '../components/FormattedDefinitionBox';
import TerminalBox from '../components/TerminalBox';

export default function ConceptViewPage() {
  const { topicId, conceptId } = useParams<{ topicId: string; conceptId: string }>();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'study' | 'questions'>('study');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [activeProgramIndex, setActiveProgramIndex] = useState(0);
  const [prevConceptId, setPrevConceptId] = useState(conceptId);

  if (prevConceptId !== conceptId) {
    setPrevConceptId(conceptId);
    setCurrentQuestionIndex(0);
    setActiveProgramIndex(0);
    setActiveTab('study');
  }

  const topic = getTopicById(topicId || '');
  const lookup = topic && conceptId ? findConceptInTopic(topic, conceptId) : null;
  const subtopic = lookup?.subtopic;
  const concept = lookup?.concept;

  // Find previous and next concepts in topic
  const allTopicConcepts = topic ? getAllConcepts(topic) : [];
  const conceptIndex = conceptId ? allTopicConcepts.findIndex(c => c.id === conceptId) : -1;
  const prevConcept = conceptIndex > 0 ? allTopicConcepts[conceptIndex - 1] : null;
  const nextConcept = conceptIndex >= 0 && conceptIndex < allTopicConcepts.length - 1 ? allTopicConcepts[conceptIndex + 1] : null;

  if (!topic || !concept || !subtopic) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-bold text-slate-800">Concept Not Found</h2>
        <p className="text-sm text-slate-500 mt-2">The requested concept could not be found.</p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-primary text-white text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Concepts</span>
        </button>
      </div>
    );
  }

  const difficultyColors = {
    Essential: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Common: 'bg-blue-50 text-blue-700 border-blue-200',
    Advanced: 'bg-purple-50 text-purple-700 border-purple-200',
  };

  const currentQuestion = concept.questions[currentQuestionIndex];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Concepts', path: '/' },
          { label: topic.title, path: `/topic/${topic.id}` },
          { label: subtopic.title },
          { label: concept.title },
        ]}
      />

      {/* Header Panel */}
      <div className="glass-panel p-6 sm:p-7 border border-slate-200/90 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                  difficultyColors[concept.difficulty]
                }`}
              >
                {concept.difficulty}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                {concept.studyTime}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                <HelpCircle className="w-3.5 h-3.5" />
                {concept.questions.length} Questions
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {concept.title}
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
              {concept.description}
            </p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex border-b border-slate-200/80 pt-2 gap-6 relative">
          <button
            type="button"
            onClick={() => setActiveTab('study')}
            className={`relative pb-3 text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer select-none ${
              activeTab === 'study'
                ? 'text-primary'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Concept Study & Explanation</span>
            {activeTab === 'study' && (
              <motion.div
                layoutId="activeConceptTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('questions')}
            className={`relative pb-3 text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer select-none ${
              activeTab === 'questions'
                ? 'text-primary'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Interview Q&A ({concept.questions.length})</span>
            {activeTab === 'questions' && (
              <motion.div
                layoutId="activeConceptTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'study' ? (
        <div className="space-y-6">
          {/* Quick Interview Answer Highlight */}
          <div className="glass-panel p-5 sm:p-6 border-l-4 border-l-primary bg-gradient-to-r from-blue-50/40 via-white to-white">
            <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>
                  {concept.id === 'self-intro-speech' && typeof window !== 'undefined' && localStorage.getItem('chakri_custom_self_intro')
                    ? 'Your Custom Self-Introduction'
                    : concept.id === 'pe-project-name' && typeof window !== 'undefined' && localStorage.getItem('chakri_custom_project_explanation')
                    ? 'Your Custom Project Explanation'
                    : 'Model Interview Answer (How to answer in 60 seconds)'}
                </span>
              </div>
              {((concept.id === 'self-intro-speech' && typeof window !== 'undefined' && localStorage.getItem('chakri_custom_self_intro')) ||
                (concept.id === 'pe-project-name' && typeof window !== 'undefined' && localStorage.getItem('chakri_custom_project_explanation'))) && (
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Saved on this device
                </span>
              )}
            </div>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium whitespace-pre-line">
              {concept.id === 'self-intro-speech' && typeof window !== 'undefined' && localStorage.getItem('chakri_custom_self_intro')
                ? localStorage.getItem('chakri_custom_self_intro')
                : concept.id === 'pe-project-name' && typeof window !== 'undefined' && localStorage.getItem('chakri_custom_project_explanation')
                ? localStorage.getItem('chakri_custom_project_explanation')
                : `"${concept.interviewAnswer}"`}
            </p>
          </div>

          {/* Definition with separate answer cards */}
          <FormattedDefinitionBox definition={concept.definition} />

          {/* Detailed Technical Explanation */}
          <div className="glass-panel p-5 sm:p-6">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>In-Depth Technical Explanation</span>
            </h3>
            <div className="text-sm leading-relaxed text-slate-700 whitespace-pre-line font-sans space-y-3">
              {concept.explanation}
            </div>
          </div>

          {/* 3-Box Code Walkthrough: Multi-Program 1-2-3 Switcher or Single Code Snippet */}
          {concept.codePrograms && concept.codePrograms.length > 0 ? (
            <div className="glass-panel p-5 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      3 Java Programs
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    {concept.codePrograms[activeProgramIndex]?.title || concept.codePrograms[0].title}
                  </h3>
                </div>

                {/* 1, 2, 3 Switcher Buttons */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start sm:self-auto overflow-x-auto max-w-full">
                  {concept.codePrograms.map((prog, idx) => {
                    const cleanLabel = prog.label.replace(/^\d+\.\s*/, '');
                    return (
                      <button
                        key={prog.id}
                        onClick={() => setActiveProgramIndex(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                          activeProgramIndex === idx
                            ? 'bg-white text-primary shadow-xs font-bold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-mono shrink-0 ${
                          activeProgramIndex === idx ? 'bg-primary text-white' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {idx + 1}
                        </span>
                        <span className="whitespace-nowrap">{cleanLabel}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* TOP: Input Box & Output Box (Stacked One Over the Other — Full Width & Perfect Font) */}
              <div className="space-y-3">
                <TerminalBox
                  title="1. Input Parameters"
                  badge="Input"
                  content={concept.codePrograms[activeProgramIndex]?.input}
                  placeholder="None (Standard JVM execution)"
                />

                <TerminalBox
                  title="2. Console Output"
                  badge="Output"
                  content={concept.codePrograms[activeProgramIndex]?.output}
                  placeholder="Program executed successfully with no errors."
                />
              </div>

              {/* BOX 3: Code (Below Input & Output) */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  3. Java Implementation Code
                </span>
                <div className="text-xs sm:text-[13px]">
                  <CodeBlock 
                    code={concept.codePrograms[activeProgramIndex]?.code || ''} 
                    language="java" 
                    title={`${concept.codePrograms[activeProgramIndex]?.title || concept.title} Demo`} 
                  />
                </div>
              </div>
            </div>
          ) : (concept.codeSnippet || concept.codeExample) && (
            <div className="glass-panel p-5 sm:p-6 space-y-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    3 Boxes: Input • Output • Code
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  Interactive Code Walkthrough & Execution
                </h3>
                <p className="text-xs text-slate-500">
                  Parameter inputs, console output, and Java implementation
                </p>
              </div>

              {/* TOP: Input Box & Output Box (Stacked One Over the Other — Full Width & Perfect Font) */}
              <div className="space-y-3">
                <TerminalBox
                  title="1. Input / Parameters"
                  badge="Input"
                  content={concept.codeSnippet?.input}
                  placeholder="None (Standard JVM execution)"
                />

                <TerminalBox
                  title="2. Console Output"
                  badge="Output"
                  content={concept.codeSnippet?.output}
                  placeholder="Program executed successfully with no errors."
                />
              </div>

              {/* BOX 3: Code (Below Input & Output) */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  3. Java Implementation Code
                </span>
                <div className="text-xs sm:text-[13px]">
                  <CodeBlock 
                    code={concept.codeSnippet?.code || concept.codeExample || ''} 
                    language="java" 
                    title={`${concept.title} Demo`} 
                  />
                </div>
              </div>
            </div>
          )}

          {/* Real-World Analogy/Example */}
          {concept.realWorldExample && (
            <div className="glass-panel p-5 sm:p-6 bg-amber-50/40 border border-amber-200/60">
              <h3 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Real-World Analogy & Industry Scenario</span>
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {concept.realWorldExample}
              </p>
            </div>
          )}

          {/* Common Mistakes */}
          {concept.commonMistakes && concept.commonMistakes.length > 0 && (
            <div className="glass-panel p-5 sm:p-6 bg-rose-50/40 border border-rose-200/60">
              <h3 className="text-sm font-bold text-rose-900 flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>Common Interview Traps & Mistakes to Avoid</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {concept.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">•</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interview Follow-up Questions */}
          {concept.followUpQuestions && concept.followUpQuestions.length > 0 && (
            <div className="glass-panel p-5 sm:p-6 bg-indigo-50/40 border border-indigo-200/60">
              <h3 className="text-sm font-bold text-indigo-900 flex items-center gap-2 mb-3">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                <span>Probable Follow-Up Questions Asked by Interviewers</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {concept.followUpQuestions.map((fq, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-500 font-semibold shrink-0">Q{idx + 1}:</span>
                    <span>{fq}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Switch to Q&A CTA */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-800">
                Ready to test yourself on this concept?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Practice {concept.questions.length} interview questions with hidden answers and instant self-evaluations.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('questions')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm shrink-0"
            >
              <span>Practice Questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Questions Tab: Step-by-step or all questions */
        <div className="space-y-6">
          {concept.questions.length === 0 ? (
            <div className="glass-panel p-8 text-center text-slate-500 text-sm">
              No specific questions added yet for this concept.
            </div>
          ) : (
            <>
              {/* Question Navigation Bar */}
              <div className="glass-panel p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                  {concept.questions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                        currentQuestionIndex === idx
                          ? 'bg-primary text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 shrink-0 justify-between sm:justify-end">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex(i => Math.max(0, i - 1))}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    disabled={currentQuestionIndex === concept.questions.length - 1}
                    onClick={() => setCurrentQuestionIndex(i => Math.min(concept.questions.length - 1, i + 1))}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Active Question Card */}
              {currentQuestion && (
                <InterviewQuestionCard
                  topicId={topic.id}
                  conceptId={concept.id}
                  question={currentQuestion}
                  index={currentQuestionIndex}
                  total={concept.questions.length}
                />
              )}
            </>
          )}
        </div>
      )}

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevConcept ? (
          <button
            onClick={() => navigate(`/topic/${topic.id}/concept/${prevConcept.id}`)}
            className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-primary transition-colors order-2 sm:order-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="truncate max-w-[200px]">Previous: {prevConcept.title}</span>
          </button>
        ) : <div className="hidden sm:block order-1" />}

        {nextConcept && (
          <button
            onClick={() => navigate(`/topic/${topic.id}/concept/${nextConcept.id}`)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-semibold transition-all shadow-sm order-1 sm:order-2"
          >
            <span className="truncate max-w-[200px]">Next: {nextConcept.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
