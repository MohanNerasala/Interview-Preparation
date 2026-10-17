import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Search, ChevronDown, ChevronRight, ChevronUp, 
  ChevronsUpDown, Clock, HelpCircle, Copy, Check,
  Lightbulb, X, Terminal, CheckCircle2, ExternalLink
} from 'lucide-react';
import { allTopics, getTotalConcepts, getTotalQuestions } from '../data';
import type { CodeProgram } from '../types';
import FormattedDefinitionBox from '../components/FormattedDefinitionBox';
import CodeBlock from '../components/CodeBlock';

type FilterCategory = 'all' | 'core-java' | 'sql' | 'frontend' | 'backend' | 'hr-round';

const categoryTabs: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'core-java', label: 'CORE JAVA' },
  { id: 'sql', label: 'SQL' },
  { id: 'frontend', label: 'FRONTEND' },
  { id: 'backend', label: 'BACKEND' },
  { id: 'hr-round', label: 'HR ROUND' },
];

const categoryMap: Record<Exclude<FilterCategory, 'all'>, string[]> = {
  'core-java': ['core-java'],
  'sql': ['sql-database', 'sql-db'],
  'frontend': ['frontend-basics', 'reactjs', 'typescript'],
  'backend': ['spring-boot', 'hibernate', 'microservices', 'testing', 'git'],
  'hr-round': ['self-introduction', 'hr', 'project-explanation'],
};

// Self-Introduction divided paragraph-wise exactly as requested
// Self-Introduction in separate paragraphs inside a single box
const selfIntroParagraphs = [
  "Good morning, sir/madam. My name is Mohan, and I completed my Bachelor's degree in Computer Science and Engineering in 2026 from Audisankara College of Engineering and Technology.",
  "I have a strong interest in full-stack web development. My technical skills include Java, HTML, CSS, JavaScript, and SQL. I enjoy learning new technologies and building real-world applications.",
  "To gain practical experience, I have developed multiple full-stack projects from development to deployment. One of my major projects is Menvy, a full-stack e-commerce application. It includes features such as user authentication, product management, shopping cart, and database integration. One of its key highlights is an AI-powered Outfit Preview feature that allows users to combine shirts and pants to visualize complete outfit combinations before purchasing, with a smooth and responsive experience across both desktop and mobile devices.",
  "Currently, I am strengthening my Java and Data Structures & Algorithms skills to improve my coding and problem-solving abilities.",
  "I am a quick learner, adaptable to new technologies, and passionate about building software that solves real-world problems. As a fresher, I am excited to start my career where I can contribute, learn from experienced professionals, and continue growing as a software developer.",
  "Thank you, sir."
];

// Menvy Project — Best Interview Answer in separate paragraphs inside a single box
const menvyProjectParagraphs = [
  "Sir, my project name is Menvy – AI-Powered Men's Fashion E-Commerce Platform.",
  "The main objective of this project is to provide users with a better online shopping experience for men's fashion.",
  "I developed the frontend using React.js and TypeScript, the backend using Java and Spring Boot, and used Supabase PostgreSQL for database management.",
  "The main features include product browsing, product search, product details, shopping cart functionality, user authentication, and Google OAuth2 login.",
  "The most interesting feature is AI Outfit Preview, which helps users visualize outfit combinations and make better fashion choices.",
  "In this project, the frontend communicates with the backend through REST APIs, and Spring Boot handles business logic and database operations.",
  "This project helped me improve my understanding of full-stack development, REST API integration, authentication, and database connectivity.",
  "Thank you, sir."
];

const fullSelfIntroSpeech = selfIntroParagraphs.join('\n\n');
const fullMenvySpeech = menvyProjectParagraphs.join('\n\n');

// Clean code viewer with Big fullscreen view, line numbers, and copy button
function CleanCodeViewer({ code, title }: { code: string; title?: string }) {
  return <CodeBlock code={code} language="java" title={title || "Java Source Code"} />;
}

export default function Dashboard() {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIntro, setCopiedIntro] = useState(false);
  const [copiedMenvy, setCopiedMenvy] = useState(false);
  
  // Track expanded concepts
  const [expandedConceptIds, setExpandedConceptIds] = useState<Set<string>>(new Set());

  // Synchronize URL query parameters (?search= / ?q= / ?concept=)
  useEffect(() => {
    const q = searchParams.get('search') || searchParams.get('q');
    if (q) {
      setSearchQuery(q);
    }
    const cId = searchParams.get('concept');
    if (cId) {
      setExpandedConceptIds(prev => new Set([...prev, cId]));
    }
  }, [searchParams]);

  // Track expanded question IDs (tap arrow to open answer)
  const [expandedQuestionIds, setExpandedQuestionIds] = useState<Set<string>>(new Set());

  // Track active 3-box code modal (Code, Input, Output)
  const [activeCodeModal, setActiveCodeModal] = useState<{
    title: string;
    code: string;
    input?: string;
    output?: string;
    programs?: CodeProgram[];
    activeProgramIndex?: number;
  } | null>(null);

  // Track active code program tab per concept (e.g. for Collections 1, 2, 3)
  const [activeCodeTabByConcept, setActiveCodeTabByConcept] = useState<Record<string, number>>({});

  // Toggle individual concept expansion (preserves other open concepts to prevent page jumping to the top)
  const toggleConcept = (conceptId: string) => {
    setExpandedConceptIds(prev => {
      const next = new Set(prev);
      if (next.has(conceptId)) {
        next.delete(conceptId);
      } else {
        next.add(conceptId);
      }
      return next;
    });
  };

  // Toggle individual question answer expansion (preserves other open questions)
  const toggleQuestion = (questionId: string) => {
    setExpandedQuestionIds(prev => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  const copyFullIntro = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(fullSelfIntroSpeech);
    setCopiedIntro(true);
    setTimeout(() => setCopiedIntro(false), 2000);
  };

  const copyMenvySpeech = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(fullMenvySpeech);
    setCopiedMenvy(true);
    setTimeout(() => setCopiedMenvy(false), 2000);
  };

  // Filter topics and concepts
  const filteredTopics = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    const topics = allTopics.filter(topic => {
      if (activeFilter !== 'all') {
        const allowedIds = categoryMap[activeFilter];
        if (!allowedIds || !allowedIds.includes(topic.id)) {
          return false;
        }
      }
      return true;
    });

    // If HR ROUND is active, ensure self-introduction and HR questions appear first
    if (activeFilter === 'hr-round') {
      const hrOrder = ['self-introduction', 'hr', 'project-explanation'];
      topics.sort((a, b) => hrOrder.indexOf(a.id) - hrOrder.indexOf(b.id));
    }

    if (!q) return topics;

    return topics
      .map(topic => {
        const matchesTopic =
          topic.title.toLowerCase().includes(q) ||
          topic.description.toLowerCase().includes(q) ||
          topic.number.includes(q);

        if (matchesTopic) return topic;

        const filteredSubtopics = topic.subtopics
          .map(st => ({
            ...st,
            concepts: st.concepts.filter(
              c =>
                c.title.toLowerCase().includes(q) ||
                c.description.toLowerCase().includes(q) ||
                c.definition.toLowerCase().includes(q) ||
                c.questions.some(qu => qu.question.toLowerCase().includes(q) || qu.answer.toLowerCase().includes(q))
            ),
          }))
          .filter(st => st.concepts.length > 0);

        return {
          ...topic,
          subtopics: filteredSubtopics,
        };
      })
      .filter(topic => topic.subtopics.some(st => st.concepts.length > 0));
  }, [activeFilter, searchQuery]);

  // All concept IDs across filtered topics for Expand All / Collapse All
  const allFilteredConceptIds = useMemo(() => {
    const ids: string[] = [];
    for (const t of filteredTopics) {
      for (const st of t.subtopics) {
        for (const c of st.concepts) {
          ids.push(c.id);
        }
      }
    }
    return ids;
  }, [filteredTopics]);

  const allAreExpanded =
    allFilteredConceptIds.length > 0 &&
    allFilteredConceptIds.every(id => expandedConceptIds.has(id));

  const toggleExpandAll = () => {
    if (allAreExpanded) {
      setExpandedConceptIds(new Set());
    } else {
      setExpandedConceptIds(new Set(allFilteredConceptIds));
    }
  };

  const difficultyColors = {
    Essential: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Common: 'bg-blue-50 text-blue-700 border-blue-200',
    Advanced: 'bg-purple-50 text-purple-700 border-purple-200',
  };

  return (
    <div className="space-y-6 animate-fade-in pb-16">
      {/* Top Banner — Centered Title in Perfect Middle, ONE Single Box Below */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs flex flex-col items-center justify-center text-center space-y-3">
        {/* Title strictly in ONE single line in the perfect middle */}
        <h1 className="text-sm xs:text-base sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis text-center">
          Java Full Stack Interview Preparation
        </h1>

        {/* Below: ONE Single Box (Java Coding & SQL Queries) */}
        <div className="flex justify-center w-full">
          <Link
            to="/coding"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all"
          >
            <Code className="w-4 h-4 shrink-0" />
            <span>Java Coding & SQL Queries</span>
          </Link>
        </div>
      </div>

      {/* Filter, Search & Expand Controls Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 sm:p-4 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Category Filter Pills: ALL, CORE JAVA, SQL, FRONTEND, BACKEND, HR ROUND */}
        <div className="flex items-center gap-1 p-1 bg-slate-100/90 rounded-xl overflow-x-auto scrollbar-none relative">
          {categoryTabs.map(tab => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveFilter(tab.id);
                  if (tab.id === 'hr-round') {
                    setExpandedConceptIds(prev => new Set([...prev, 'self-intro-speech', 'hr-common']));
                  }
                }}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap tracking-wide select-none transition-colors duration-150 cursor-pointer ${
                  isSelected
                    ? 'text-primary'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/40'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryTabPill"
                    className="absolute inset-0 bg-white rounded-lg shadow-2xs border border-slate-200/90 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Controls: Search & Expand All */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search concepts or questions..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-primary transition-colors"
            />
          </div>

          <button
            onClick={toggleExpandAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors shrink-0"
            title={allAreExpanded ? 'Collapse all concepts' : 'Expand all concepts'}
          >
            {allAreExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline">Collapse All</span>
              </>
            ) : (
              <>
                <ChevronsUpDown className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline">Expand All</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Concepts Flow Down One by One */}
      <motion.div
        key={activeFilter}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="space-y-8 sm:space-y-10"
      >
        {filteredTopics.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3 shadow-2xs">
            <Search className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-700">No matching concepts found</h3>
            <p className="text-xs text-slate-400">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        ) : (
          filteredTopics.map(topic => {
            const conceptsCount = getTotalConcepts(topic);
            const questionsCount = getTotalQuestions(topic);

            return (
              <section key={topic.id} className="space-y-4">
                {/* Section Header (Always shown outside the box, perfect mobile alignment) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 px-1 pt-1">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-primary px-2 py-0.5 rounded-md bg-blue-50 border border-blue-100 shrink-0 whitespace-nowrap">
                      MODULE {topic.number}
                    </span>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {topic.title}
                    </h2>
                  </div>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-400 pl-8 sm:pl-0 shrink-0 whitespace-nowrap">
                    {conceptsCount} {conceptsCount === 1 ? 'Concept' : 'Concepts'} • {questionsCount} Questions
                  </span>
                </div>

                {/* Concepts flowing down directly */}
                <div className="space-y-3.5 sm:space-y-4">
                  {topic.subtopics.flatMap(st =>
                    st.concepts.map(concept => {
                      const isExpanded = expandedConceptIds.has(concept.id);
                      const isSelfIntro = concept.id === 'self-intro-speech';
                      const isMenvyProject = concept.id === 'pe-project-name';

                      return (
                        <div
                          key={concept.id}
                          className={`bg-white rounded-2xl border transition-[border-color,box-shadow] duration-200 overflow-hidden ${
                            isExpanded
                              ? 'border-slate-300 shadow-[0_6px_20px_-4px_rgba(15,23,42,0.06)]'
                              : 'border-slate-200/80 hover:border-slate-300 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.03)] hover:shadow-[0_6px_18px_-3px_rgba(15,23,42,0.06)]'
                          }`}
                        >
                          {/* Concept Header Row — Tap here to expand directly right in place! */}
                          <div
                            onClick={() => toggleConcept(concept.id)}
                            className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/70 transition-colors select-none"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                isExpanded ? 'bg-primary text-white shadow-xs' : 'bg-blue-50 text-primary'
                              }`}>
                                {isExpanded ? (
                                  <ChevronDown className="w-4 h-4" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                  <span
                                    className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md border shrink-0 ${
                                      difficultyColors[concept.difficulty]
                                    }`}
                                  >
                                    {concept.difficulty}
                                  </span>
                                  <span className="text-[11px] text-slate-400 flex items-center gap-1 shrink-0">
                                    <Clock className="w-3 h-3" />
                                    {concept.studyTime.replace(' minutes', 'm').replace(' minute', 'm')}
                                  </span>
                                  <span className="text-[11px] text-slate-400 flex items-center gap-1 shrink-0">
                                    <HelpCircle className="w-3 h-3" />
                                    {concept.questions.length} Qs
                                  </span>
                                </div>

                                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                                  {isSelfIntro ? 'Self-Introduction' : isMenvyProject ? 'Menvy Project Overview' : concept.title}
                                </h3>
                              </div>
                            </div>

                            <button
                              onClick={e => {
                                e.stopPropagation();
                                toggleConcept(concept.id);
                              }}
                              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                                isExpanded
                                  ? 'bg-slate-800 text-white hover:bg-slate-900 shadow-xs'
                                  : 'bg-primary text-white hover:bg-primary-dark shadow-xs hover:shadow'
                              }`}
                            >
                              {isExpanded ? (
                                'Hide'
                              ) : (
                                <>
                                  <span>View</span>
                                  <span className="hidden sm:inline">
                                    {isSelfIntro ? ' Pitch' : isMenvyProject ? ' Answer' : ' Questions'}
                                  </span>
                                </>
                              )}
                            </button>
                          </div>

                          {/* Expanded Content — Directly shown right here, spacious & smooth! */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden border-t border-slate-100"
                              >
                                <div className="p-5 sm:p-7 bg-gradient-to-b from-slate-50/50 via-white/50 to-white space-y-6 sm:space-y-7">
                              
                              {isSelfIntro ? (
                                <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] space-y-5">
                                  {/* Clean 2-Line Header with Perfect Alignment */}
                                  <div className="pb-3 border-b border-slate-100 space-y-1">
                                    <div className="flex items-center justify-between gap-3">
                                      <h4 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                                        Tell me about yourself.
                                      </h4>

                                      <button
                                        onClick={copyFullIntro}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-all shadow-2xs shrink-0 cursor-pointer"
                                        title="Copy full speech to clipboard"
                                      >
                                        {copiedIntro ? (
                                          <>
                                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                                            <span className="text-emerald-700 font-semibold">Copied!</span>
                                          </>
                                        ) : (
                                          <>
                                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                                            <span>Copy Pitch</span>
                                          </>
                                        )}
                                      </button>
                                    </div>

                                    <p className="text-xs text-slate-500">
                                      Say this in the interview (60–90 seconds):
                                    </p>
                                  </div>

                                  {/* Single box with separate paragraphs */}
                                  <div className="space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed sm:leading-7 font-sans bg-slate-50/60 p-5 sm:p-6 rounded-xl border border-slate-100">
                                    {selfIntroParagraphs.map((para, idx) => (
                                      <p
                                        key={idx}
                                        className={idx === selfIntroParagraphs.length - 1 ? "font-semibold text-slate-900 pt-1" : ""}
                                      >
                                        {para}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              ) : isMenvyProject ? (
                                /* SPECIAL SINGLE BOX WITH SEPARATE PARAGRAPHS FOR MENVY PROJECT */
                                <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] space-y-5">
                                  {/* Clean 2-Line Header with Perfect Alignment */}
                                  <div className="pb-3 border-b border-slate-100 space-y-1">
                                    <div className="flex items-center justify-between gap-3">
                                      <h4 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                                        Q1. Tell me about your project.
                                      </h4>

                                      <button
                                        onClick={copyMenvySpeech}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-all shadow-2xs shrink-0 cursor-pointer"
                                        title="Copy answer to clipboard"
                                      >
                                        {copiedMenvy ? (
                                          <>
                                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                                            <span className="text-emerald-700 font-semibold">Copied!</span>
                                          </>
                                        ) : (
                                          <>
                                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                                            <span>Copy Answer</span>
                                          </>
                                        )}
                                      </button>
                                    </div>

                                    <p className="text-xs text-slate-500">
                                      Say this in the interview (60–90 seconds):
                                    </p>
                                  </div>

                                  {/* Single box with separate paragraphs */}
                                  <div className="space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed sm:leading-7 font-sans bg-slate-50/60 p-5 sm:p-6 rounded-xl border border-slate-100">
                                    {menvyProjectParagraphs.map((para, idx) => (
                                      <p
                                        key={idx}
                                        className={idx === menvyProjectParagraphs.length - 1 ? "font-semibold text-slate-900 pt-1" : ""}
                                      >
                                        {para}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <FormattedDefinitionBox 
                                  definition={concept.definition} 
                                  interviewAnswer={concept.interviewAnswer} 
                                />
                              )}

                              {/* Real-World Simple Example in Words */}
                              {concept.realWorldExample && (
                                <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-1.5">
                                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                                    <Lightbulb className="w-4 h-4 text-amber-500" />
                                    <span>Real-World Example (Simple Words)</span>
                                  </div>
                                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal whitespace-pre-line">
                                    {concept.realWorldExample}
                                  </p>
                                </div>
                              )}

                              {/* Interactive Code Section: Multi-Program 1-2-3 Switcher or Single Walkthrough */}
                              {concept.codePrograms && concept.codePrograms.length > 0 ? (
                                <div className="bg-slate-900/95 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-sm space-y-4">
                                  {/* Tab Header with 1, 2, 3 Switcher Buttons */}
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60">
                                          3 Java Programs
                                        </span>
                                        <span className="text-xs text-slate-400 font-medium">Select to shift code program:</span>
                                      </div>
                                      <h4 className="text-sm font-bold text-slate-100 mt-1">
                                        {concept.codePrograms[activeCodeTabByConcept[concept.id] || 0]?.title}
                                      </h4>
                                    </div>

                                    {/* 1, 2, 3 Switcher Buttons */}
                                    <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 self-start sm:self-auto">
                                      {concept.codePrograms.map((prog, idx) => {
                                        const currentIdx = activeCodeTabByConcept[concept.id] || 0;
                                        const isSelected = currentIdx === idx;
                                        return (
                                          <button
                                            key={prog.id}
                                            onClick={() => setActiveCodeTabByConcept(prev => ({ ...prev, [concept.id]: idx }))}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                                              isSelected
                                                ? 'bg-primary text-white shadow-xs font-bold'
                                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                                            }`}
                                          >
                                            <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-mono ${
                                              isSelected ? 'bg-white text-primary font-bold' : 'bg-slate-800 text-slate-300'
                                            }`}>
                                              {idx + 1}
                                            </span>
                                            <span>{prog.label}</span>
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {/* Input & Output for the selected program */}
                                  {(() => {
                                    const currentIdx = activeCodeTabByConcept[concept.id] || 0;
                                    const currentProg = concept.codePrograms[currentIdx];
                                    return (
                                      <div className="space-y-3">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                          {/* Input */}
                                          <div className="space-y-1">
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                                              <Terminal className="w-3.5 h-3.5 text-blue-400" />
                                              1. Input / Parameters
                                            </span>
                                            <div className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs font-mono text-slate-200 break-words min-h-[46px]">
                                              {currentProg.input || "None (Standard JVM execution)"}
                                            </div>
                                          </div>

                                          {/* Output */}
                                          <div className="space-y-1">
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                              2. Console Output
                                            </span>
                                            <div className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs font-mono text-emerald-400 whitespace-pre-line overflow-x-auto min-h-[46px]">
                                              {currentProg.output || "Program executed successfully"}
                                            </div>
                                          </div>
                                        </div>

                                        {/* Code */}
                                        <div className="space-y-1 pt-1">
                                          <div className="flex items-center justify-between">
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                                              <Code className="w-3.5 h-3.5 text-primary" />
                                              3. Java Source Code
                                            </span>
                                            <button
                                              onClick={() => {
                                                setActiveCodeModal({
                                                  title: currentProg.title,
                                                  code: currentProg.code,
                                                  input: currentProg.input || "None (Standard JVM execution)",
                                                  output: currentProg.output || "Program executed successfully",
                                                  programs: concept.codePrograms,
                                                  activeProgramIndex: currentIdx
                                                });
                                              }}
                                              className="text-[11px] font-semibold text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1 cursor-pointer"
                                            >
                                              <span>Open Fullscreen</span>
                                              <ExternalLink className="w-3 h-3" />
                                            </button>
                                          </div>
                                          <CleanCodeViewer code={currentProg.code} title={currentProg.title} />
                                        </div>
                                      </div>
                                    );
                                  })()}
                                </div>
                              ) : (concept.codeSnippet || concept.codeExample) && (
                                <div className="pt-1">
                                  <button
                                    onClick={() => {
                                      const snippet = concept.codeSnippet;
                                      setActiveCodeModal({
                                        title: `${concept.title}`,
                                        code: snippet?.code || concept.codeExample || "",
                                        input: snippet?.input || "None (Standard JVM execution)",
                                        output: snippet?.output || "Program executed successfully"
                                      });
                                    }}
                                    className="w-full flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-blue-50/40 border border-blue-200/90 hover:border-primary/80 hover:shadow-xs transition-all cursor-pointer group select-none text-left"
                                  >
                                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                                        <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                                          <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                                            View Code Walkthrough
                                          </span>
                                          <span className="text-[9px] sm:text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-blue-100 text-primary border border-blue-200 shrink-0 whitespace-nowrap">
                                            INPUT • OUTPUT • CODE
                                          </span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 truncate">
                                          Tap to view Input, Output & Java code
                                        </p>
                                      </div>
                                    </div>

                                    <div className="px-2.5 sm:px-3 py-1 rounded-xl bg-white border border-slate-200 text-[11px] sm:text-xs font-semibold text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-2xs shrink-0 ml-2">
                                      Open Code
                                    </div>
                                  </button>
                                </div>
                              )}

                              {/* Curated Questions & Answers flowing down */}
                              {(() => {
                                const displayQuestions = isSelfIntro
                                  ? concept.questions.filter(q => q.id !== 'si-q1')
                                  : isMenvyProject
                                  ? concept.questions.filter(q => q.id !== 'pe-q1')
                                  : concept.questions;

                                if (displayQuestions.length === 0) return null;

                                return (
                                  <div className="space-y-4 pt-1">
                                    <div className="flex items-center justify-between gap-2 px-1">
                                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                                        <HelpCircle className="w-4 h-4 text-primary" />
                                        <span>
                                          {isSelfIntro || isMenvyProject
                                            ? 'Follow-up Interview Questions & Answers'
                                            : 'Curated Interview Questions & Answers'}{' '}
                                          ({displayQuestions.length})
                                        </span>
                                      </h4>
                                    </div>

                                    <div className="space-y-3">
                                      {displayQuestions.map((q, qIdx) => {
                                        const questionNumber = isSelfIntro || isMenvyProject ? qIdx + 2 : qIdx + 1;
                                        const qKey = q.id || `${concept.id}-q-${qIdx}`;
                                        const isQExpanded = expandedQuestionIds.has(qKey);

                                        return (
                                          <div
                                            key={qKey}
                                            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                                              isQExpanded
                                                ? 'border-slate-300 shadow-sm'
                                                : 'border-slate-200/80 hover:border-slate-300 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.03)] hover:shadow-[0_4px_14px_-2px_rgba(15,23,42,0.05)]'
                                            }`}
                                          >
                                            {/* Question Header Row — Two-Tier Layout (Full width question, perfectly aligned badges) */}
                                            <div
                                              onClick={() => toggleQuestion(qKey)}
                                              className="p-4 sm:p-5 cursor-pointer hover:bg-slate-50/70 transition-colors select-none"
                                            >
                                              <div className="flex items-start gap-3 sm:gap-3.5">
                                                {/* Arrow Icon aligned to top */}
                                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                                  isQExpanded ? 'bg-primary text-white shadow-xs' : 'bg-blue-50 text-primary'
                                                }`}>
                                                  {isQExpanded ? (
                                                    <ChevronDown className="w-4 h-4" />
                                                  ) : (
                                                    <ChevronRight className="w-4 h-4" />
                                                  )}
                                                </div>

                                                {/* Question Content taking all horizontal space */}
                                                <div className="flex-1 min-w-0 space-y-1.5">
                                                  {/* Badges on top row */}
                                                  <div className="flex items-center gap-2">
                                                    <span className="text-[11px] font-mono font-bold text-primary bg-blue-50/80 border border-blue-100 px-2 py-0.5 rounded-md shrink-0">
                                                      Q{questionNumber < 10 ? `0${questionNumber}` : questionNumber}
                                                    </span>

                                                    {q.difficulty && (
                                                      <span
                                                        className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border shrink-0 ${
                                                          difficultyColors[q.difficulty]
                                                        }`}
                                                      >
                                                        {q.difficulty}
                                                      </span>
                                                    )}
                                                  </div>

                                                  {/* Full-width Question Title */}
                                                  <h5 className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug">
                                                    {q.question}
                                                  </h5>
                                                </div>
                                              </div>
                                            </div>

                                            {/* Answer Content — ONLY opens when arrow is tapped! */}
                                            {isQExpanded && (
                                              <div className="border-t border-slate-100 p-5 sm:p-6 bg-slate-50/40 space-y-4 animate-fade-in">
                                                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed sm:leading-7 whitespace-pre-line bg-white p-5 sm:p-6 rounded-xl border border-slate-200/80 shadow-2xs font-normal">
                                                  {q.answer}
                                                </div>

                                                {q.codeExample && (
                                                  <CleanCodeViewer
                                                    code={q.codeExample}
                                                    title="Code Solution"
                                                  />
                                                )}

                                                {q.followUp && q.followUp.length > 0 && (
                                                  <div className="text-xs text-slate-700 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 space-y-1.5">
                                                    <span className="font-semibold text-slate-900 block">
                                                      Follow-up Questions:
                                                    </span>
                                                    <ul className="list-disc list-inside space-y-1 text-slate-600 leading-relaxed">
                                                      {q.followUp.map((fu, fIdx) => (
                                                        <li key={fIdx}>{fu}</li>
                                                      ))}
                                                    </ul>
                                                  </div>
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                );
                              })()}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })
                  )}
                </div>
              </section>
            );
          })
        )}
      </motion.div>

      {/* 3-BOX POP-UP CODE MODAL (CODE • INPUT • OUTPUT) */}
      {activeCodeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-xs animate-fade-in"
          onClick={() => setActiveCodeModal(null)}
        >
          <div 
            className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl sm:max-w-3xl w-full max-h-[88vh] flex flex-col overflow-hidden animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/90 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                  <Code className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base truncate">
                    {activeCodeModal.title}
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Code Walkthrough • 3 Boxes (Code, Input & Output)
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActiveCodeModal(null)}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer shrink-0 ml-2"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Multi-Program Switcher Tabs if multiple programs exist */}
            {activeCodeModal.programs && activeCodeModal.programs.length > 0 && (
              <div className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-slate-100 border-b border-slate-200 overflow-x-auto shrink-0">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mr-1 shrink-0">
                  Shift Program:
                </span>
                {activeCodeModal.programs.map((prog, pIdx) => {
                  const isSelected = (activeCodeModal.activeProgramIndex ?? 0) === pIdx;
                  return (
                    <button
                      key={prog.id}
                      onClick={() => {
                        setActiveCodeModal({
                          ...activeCodeModal,
                          title: prog.title,
                          code: prog.code,
                          input: prog.input || "None (Standard JVM execution)",
                          output: prog.output || "Program executed successfully",
                          activeProgramIndex: pIdx
                        });
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                        isSelected
                          ? 'bg-primary text-white shadow-xs font-bold'
                          : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-mono ${
                        isSelected ? 'bg-white text-primary font-bold' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {pIdx + 1}
                      </span>
                      <span>{prog.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Modal Scrollable Body — Input & Output ABOVE, Code BELOW */}
            <div className="p-3.5 sm:p-5 overflow-y-auto space-y-3 max-h-[calc(88vh-110px)] overflow-x-hidden">
              {/* TOP: Input & Output Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* BOX 1: Input */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      1. Input / Parameters
                    </span>
                    <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-blue-100 text-blue-700">
                      Input
                    </span>
                  </div>
                  <div className="bg-blue-50/70 border border-blue-200/90 rounded-xl p-2.5 sm:p-3 text-[11px] sm:text-xs font-mono text-slate-800 leading-relaxed break-words min-h-[50px]">
                    {activeCodeModal.input || "None (Standard JVM execution)"}
                  </div>
                </div>

                {/* BOX 2: Output */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      2. Console Output
                    </span>
                    <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-slate-800 text-emerald-400">
                      Output
                    </span>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 sm:p-3 text-[11px] sm:text-xs font-mono text-emerald-400 whitespace-pre-line leading-relaxed shadow-inner overflow-x-auto min-h-[50px]">
                    {activeCodeModal.output || "Execution completed successfully with no output."}
                  </div>
                </div>
              </div>

              {/* BOX 3: Code (Below Input & Output, with reduced font size) */}
              <div className="space-y-1 pt-0.5">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-primary shrink-0" />
                  3. Java Implementation Code
                </span>
                <CleanCodeViewer code={activeCodeModal.code} title={activeCodeModal.title} />
              </div>
            </div>

            {/* Modal Bottom Footer */}
            <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-end shrink-0">
              <button
                onClick={() => setActiveCodeModal(null)}
                className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
