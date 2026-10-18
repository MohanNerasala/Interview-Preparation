import { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Search, ChevronDown, ChevronRight, ChevronUp, 
  ChevronsUpDown, Clock, HelpCircle, Copy, Check,
  Lightbulb, X, ExternalLink,
  Edit3, Save, RotateCcw, Sparkles
} from 'lucide-react';
import { allTopics, getTotalConcepts, getTotalQuestions } from '../data';
import type { CodeProgram } from '../types';
import FormattedDefinitionBox from '../components/FormattedDefinitionBox';
import CodeBlock from '../components/CodeBlock';
import TerminalBox from '../components/TerminalBox';

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
// Self-Introduction in separate paragraphs (Max 200 words, 60-90s)
const selfIntroParagraphs = [
  "Good morning, sir/madam. My name is Mohan, and I completed my Bachelor's degree in Computer Science and Engineering in 2026 from Audisankara College of Engineering and Technology.",
  "I have a strong interest in full-stack web development. My technical skills include Java, HTML, CSS, JavaScript, and SQL. I enjoy learning new technologies and building real-world applications.",
  "To gain practical experience, I developed Menvy, a full-stack e-commerce application. It includes user authentication, product management, shopping cart, and database integration. A key highlight is an AI-powered Outfit Preview feature that allows users to combine shirts and pants to visualize complete outfit combinations before purchasing.",
  "Currently, I am strengthening my Core Java and Data Structures & Algorithms to improve my problem-solving abilities.",
  "I am a quick learner, adaptable to new technologies, and passionate about building software that solves real-world problems. As a fresher, I am eager to contribute, learn from experienced mentors, and grow as a software developer.",
  "Thank you, sir."
];

// Menvy Project — Best Interview Answer in separate paragraphs (Max 200 words, 60-90s)
const menvyProjectParagraphs = [
  "Sir, my project name is Menvy – AI-Powered Men's Fashion E-Commerce Platform.",
  "The main objective of this project is to provide users with a better, more interactive online shopping experience for men's fashion.",
  "I developed the frontend using React.js and TypeScript, the backend using Java and Spring Boot, and used Supabase PostgreSQL for database management.",
  "Key features include product browsing, search, product details, shopping cart functionality, user authentication, and Google OAuth2 login.",
  "The standout feature is AI Outfit Preview, which helps users visualize complete outfit combinations and make confident fashion choices.",
  "In this project, the frontend communicates with the backend through REST APIs, and Spring Boot handles business logic, security, and database operations.",
  "This project gave me valuable practical experience in full-stack development, REST API integration, authentication, and database connectivity.",
  "Thank you, sir."
];

const fullSelfIntroSpeech = selfIntroParagraphs.join('\n\n');
const fullMenvySpeech = menvyProjectParagraphs.join('\n\n');
const SELF_INTRO_STORAGE_KEY = 'chakri_custom_self_intro';
const PROJECT_EXPLANATION_STORAGE_KEY = 'chakri_custom_project_explanation';

// Clean code viewer with Big fullscreen view, line numbers, and copy button
function CleanCodeViewer({ code, title }: { code: string; title?: string }) {
  return <CodeBlock code={code} language="java" title={title || "Java Source Code"} />;
}

export default function Dashboard() {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [copiedIntro, setCopiedIntro] = useState(false);
  const [copiedMenvy, setCopiedMenvy] = useState(false);

  // Global Escape key listener to smoothly clear and close search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && searchQuery) {
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchQuery]);
  
  // Custom Self-Introduction stored locally on this device/mobile
  const [customSelfIntro, setCustomSelfIntro] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem(SELF_INTRO_STORAGE_KEY) || '';
      } catch {
        return '';
      }
    }
    return '';
  });
  const [showSelfIntroModal, setShowSelfIntroModal] = useState(false);
  const [selfIntroEditText, setSelfIntroEditText] = useState('');
  const [savedToast, setSavedToast] = useState<string | null>(null);

  // Custom Project Explanation stored locally on this device/mobile
  const [customProjectExplanation, setCustomProjectExplanation] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem(PROJECT_EXPLANATION_STORAGE_KEY) || '';
      } catch {
        return '';
      }
    }
    return '';
  });
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [projectEditText, setProjectEditText] = useState('');

  const activeSelfIntroParagraphs = useMemo(() => {
    if (customSelfIntro && customSelfIntro.trim()) {
      const blocks = customSelfIntro.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
      if (blocks.length > 0) return blocks;
      return customSelfIntro.split('\n').map(p => p.trim()).filter(Boolean);
    }
    return selfIntroParagraphs;
  }, [customSelfIntro]);

  const fullActiveSelfIntroSpeech = useMemo(() => {
    return activeSelfIntroParagraphs.join('\n\n');
  }, [activeSelfIntroParagraphs]);

  const activeProjectParagraphs = useMemo(() => {
    if (customProjectExplanation && customProjectExplanation.trim()) {
      const blocks = customProjectExplanation.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
      if (blocks.length > 0) return blocks;
      return customProjectExplanation.split('\n').map(p => p.trim()).filter(Boolean);
    }
    return menvyProjectParagraphs;
  }, [customProjectExplanation]);

  const fullActiveProjectSpeech = useMemo(() => {
    return activeProjectParagraphs.join('\n\n');
  }, [activeProjectParagraphs]);

  const openSelfIntroModal = () => {
    setSelfIntroEditText(customSelfIntro || fullSelfIntroSpeech);
    setShowSelfIntroModal(true);
  };

  const handleSaveSelfIntro = () => {
    const trimmed = selfIntroEditText.trim();
    if (trimmed) {
      try {
        localStorage.setItem(SELF_INTRO_STORAGE_KEY, trimmed);
      } catch (err) {
        console.error('Failed to save to localStorage:', err);
      }
      setCustomSelfIntro(trimmed);
      setSavedToast('Your custom self-introduction has been saved!');
    } else {
      try {
        localStorage.removeItem(SELF_INTRO_STORAGE_KEY);
      } catch (err) {
        console.error('Failed to remove from localStorage:', err);
      }
      setCustomSelfIntro('');
      setSavedToast('Back to default self-introduction!');
    }
    setShowSelfIntroModal(false);
    setTimeout(() => setSavedToast(null), 3000);
    setExpandedConceptIds(prev => new Set([...prev, 'self-intro-speech']));
  };

  const handleResetSelfIntro = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      localStorage.removeItem(SELF_INTRO_STORAGE_KEY);
    } catch (err) {
      console.error('Failed to remove from localStorage:', err);
    }
    setCustomSelfIntro('');
    setSelfIntroEditText(fullSelfIntroSpeech);
    setShowSelfIntroModal(false);
    setSavedToast('Back to default self-introduction!');
    setTimeout(() => setSavedToast(null), 3000);
  };

  const openProjectModal = () => {
    setProjectEditText(customProjectExplanation || fullMenvySpeech);
    setShowProjectModal(true);
  };

  const handleSaveProject = () => {
    const trimmed = projectEditText.trim();
    if (trimmed) {
      try {
        localStorage.setItem(PROJECT_EXPLANATION_STORAGE_KEY, trimmed);
      } catch (err) {
        console.error('Failed to save to localStorage:', err);
      }
      setCustomProjectExplanation(trimmed);
      setSavedToast('Your custom project explanation has been saved!');
    } else {
      try {
        localStorage.removeItem(PROJECT_EXPLANATION_STORAGE_KEY);
      } catch (err) {
        console.error('Failed to remove from localStorage:', err);
      }
      setCustomProjectExplanation('');
      setSavedToast('Back to default project explanation!');
    }
    setShowProjectModal(false);
    setTimeout(() => setSavedToast(null), 3000);
    setExpandedConceptIds(prev => new Set([...prev, 'pe-project-name']));
  };

  const handleResetProject = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      localStorage.removeItem(PROJECT_EXPLANATION_STORAGE_KEY);
    } catch (err) {
      console.error('Failed to remove from localStorage:', err);
    }
    setCustomProjectExplanation('');
    setProjectEditText(fullMenvySpeech);
    setShowProjectModal(false);
    setSavedToast('Back to default project explanation!');
    setTimeout(() => setSavedToast(null), 3000);
  };

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

  const copyFullIntro = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(fullActiveSelfIntroSpeech);
    setCopiedIntro(true);
    setTimeout(() => setCopiedIntro(false), 2000);
  };

  const copyMenvySpeech = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(fullActiveProjectSpeech);
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
          {/* Smooth Search Bar with Clear 'X' and Esc Key shortcut */}
          <div className="relative flex-1 sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Escape') {
                  setSearchQuery('');
                  searchInputRef.current?.blur();
                }
              }}
              placeholder="Search concepts or questions..."
              className="w-full pl-9 pr-14 py-2 bg-white hover:bg-slate-50/70 focus:bg-white rounded-xl border border-slate-200 hover:border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs sm:text-sm outline-none transition-all duration-200 shadow-2xs font-normal"
            />
            {searchQuery ? (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    searchInputRef.current?.focus();
                  }}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-center active:scale-95"
                  title="Clear search (Esc)"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono text-slate-400 bg-slate-100 border border-slate-200 rounded font-semibold select-none">
                  Esc
                </kbd>
              </div>
            ) : (
              <kbd className="hidden sm:inline-block absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 border border-slate-200 rounded select-none pointer-events-none">
                /
              </kbd>
            )}
          </div>

          {/* Smooth Collapse / Expand All Button with Hand Cursor */}
          <button
            type="button"
            onClick={toggleExpandAll}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100 text-slate-700 text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-150 shrink-0 cursor-pointer active:scale-95 select-none"
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
      <div className="space-y-8 sm:space-y-10">
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
                        <div key={concept.id} className="space-y-2">
                          {/* Quick Action ABOVE Self-Introduction Card — Tactile Clickable UI */}
                          {isSelfIntro && (
                            <div className="flex items-center justify-end gap-2 pt-1 pb-1">
                              {Boolean(customSelfIntro) && (
                                <button
                                  type="button"
                                  onClick={handleResetSelfIntro}
                                  className="btn-action-danger shrink-0"
                                  title="Back to default self-introduction"
                                >
                                  <RotateCcw className="w-3.5 h-3.5 text-rose-500" strokeWidth={2.2} />
                                  <span>Back to Default</span>
                                </button>
                              )}

                              <button
                                type="button"
                                onClick={openSelfIntroModal}
                                className="btn-action-lg shrink-0"
                                title="Add your self-introduction"
                              >
                                <Edit3 className="w-3.5 h-3.5 text-slate-600" strokeWidth={2.2} />
                                <span>{customSelfIntro ? 'Edit Your Self Intro' : 'Add Your Self Intro'}</span>
                              </button>
                            </div>
                          )}

                          {/* Quick Action ABOVE Project Explanation Card — Tactile Clickable UI */}
                          {isMenvyProject && (
                            <div className="flex items-center justify-end gap-2 pt-1 pb-1">
                              {Boolean(customProjectExplanation) && (
                                <button
                                  type="button"
                                  onClick={handleResetProject}
                                  className="btn-action-danger shrink-0"
                                  title="Back to default project explanation"
                                >
                                  <RotateCcw className="w-3.5 h-3.5 text-rose-500" strokeWidth={2.2} />
                                  <span>Back to Default</span>
                                </button>
                              )}

                              <button
                                type="button"
                                onClick={openProjectModal}
                                className="btn-action-lg shrink-0"
                                title="Add your project explanation"
                              >
                                <Edit3 className="w-3.5 h-3.5 text-slate-600" strokeWidth={2.2} />
                                <span>{customProjectExplanation ? 'Edit Your Project Explanation' : 'Add Your Project Explanation'}</span>
                              </button>
                            </div>
                          )}

                          <div
                            className={`bg-white rounded-2xl border transition-[border-color,box-shadow] duration-200 overflow-hidden ${
                              isExpanded
                                ? 'border-slate-300 shadow-[0_6px_20px_-4px_rgba(15,23,42,0.06)]'
                                : 'border-slate-200/80 hover:border-slate-300 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.03)] hover:shadow-[0_6px_18px_-3px_rgba(15,23,42,0.06)]'
                            }`}
                          >
                            {/* Concept Header Row — Tap here to expand directly right in place! */}
                            <div
                              onClick={() => toggleConcept(concept.id)}
                              className="p-3.5 sm:p-5 flex items-center justify-between gap-2.5 sm:gap-3 cursor-pointer hover:bg-slate-50/70 transition-colors select-none"
                            >
                              <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
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
                                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5 flex-wrap">
                                    <span
                                      className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md border shrink-0 ${
                                        difficultyColors[concept.difficulty]
                                      }`}
                                    >
                                      {concept.difficulty}
                                    </span>
                                    <span className="text-[10px] sm:text-[11px] text-slate-400 flex items-center gap-1 shrink-0">
                                      <Clock className="w-3 h-3" />
                                      {concept.studyTime.replace(' minutes', 'm').replace(' minute', 'm')}
                                    </span>
                                    <span className="text-[10px] sm:text-[11px] text-slate-400 flex items-center gap-1 shrink-0">
                                      <HelpCircle className="w-3 h-3" />
                                      {concept.questions.length} Qs
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2 min-w-0">
                                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug truncate">
                                      {isSelfIntro ? 'Self-Introduction' : isMenvyProject ? (customProjectExplanation ? 'Project Explanation' : 'Menvy Project Overview') : concept.title}
                                    </h3>
                                    {isSelfIntro && Boolean(customSelfIntro) && (
                                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 sm:px-2 py-0.5 rounded-full inline-flex items-center gap-1 shrink-0">
                                        <Check className="w-2.5 h-2.5" />
                                        Custom
                                      </span>
                                    )}
                                    {isMenvyProject && Boolean(customProjectExplanation) && (
                                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 sm:px-2 py-0.5 rounded-full inline-flex items-center gap-1 shrink-0">
                                        <Check className="w-2.5 h-2.5" />
                                        Custom
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center shrink-0">
                                <button
                                  type="button"
                                  onClick={e => {
                                    e.stopPropagation();
                                    toggleConcept(concept.id);
                                  }}
                                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer ${
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
                            </div>

                          {/* Expanded Content — Directly shown right here, spacious & smooth! */}
                          {isExpanded && (
                            <div className="border-t border-slate-100 animate-fade-in">
                              <div className="p-5 sm:p-7 bg-gradient-to-b from-slate-50/50 via-white/50 to-white space-y-6 sm:space-y-7">
                              
                              {isSelfIntro ? (
                                <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-2xs space-y-4">
                                  {/* Clean Header with Structured Alignment */}
                                  <div className="pb-3 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div className="space-y-1 min-w-0">
                                      <div className="flex items-center gap-2 flex-wrap">
                                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                                          Tell me about yourself.
                                        </h4>
                                        <span className="text-[10.5px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/80 shrink-0">
                                          Max 200 Words (60–90s)
                                        </span>
                                        {Boolean(customSelfIntro) && (
                                          <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full inline-flex items-center gap-1 shrink-0">
                                            <Check className="w-2.5 h-2.5" />
                                            Custom
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-slate-500">
                                        Say this in the interview with confidence:
                                      </p>
                                    </div>

                                    {/* Action Buttons — Tactile Clickable UI */}
                                    <div className="flex items-center gap-2 shrink-0 flex-wrap">
                                      {Boolean(customSelfIntro) && (
                                        <button
                                          type="button"
                                          onClick={handleResetSelfIntro}
                                          className="btn-action-danger"
                                          title="Back to default self-introduction"
                                        >
                                          <RotateCcw className="w-3.5 h-3.5 text-rose-500" strokeWidth={2.2} />
                                          <span>Back to Default</span>
                                        </button>
                                      )}

                                      <button
                                        type="button"
                                        onClick={openSelfIntroModal}
                                        className="btn-action"
                                        title="Add or edit your personal self-introduction"
                                      >
                                        <Edit3 className="w-3.5 h-3.5 text-slate-600" strokeWidth={2.2} />
                                        <span>{customSelfIntro ? 'Edit Your Self Intro' : 'Add Your Self Intro'}</span>
                                      </button>

                                      <button
                                        type="button"
                                        onClick={copyFullIntro}
                                        className="btn-action"
                                        title="Copy full speech to clipboard"
                                      >
                                        {copiedIntro ? (
                                          <>
                                            <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2.5} />
                                            <span className="text-emerald-700 font-bold">Copied!</span>
                                          </>
                                        ) : (
                                          <>
                                            <Copy className="w-3.5 h-3.5 text-slate-600" strokeWidth={2.2} />
                                            <span>Copy Pitch</span>
                                          </>
                                        )}
                                      </button>
                                    </div>
                                  </div>

                                  {/* Single box with separate paragraphs */}
                                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-800 leading-relaxed sm:leading-7 font-sans bg-slate-50/70 p-4 sm:p-6 rounded-xl border border-slate-200/80 border-l-4 border-l-slate-400/80 shadow-2xs">
                                    {activeSelfIntroParagraphs.map((para, idx) => (
                                      <p
                                        key={idx}
                                        className={idx === activeSelfIntroParagraphs.length - 1 ? "font-semibold text-slate-900 pt-1" : ""}
                                      >
                                        {para}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              ) : isMenvyProject ? (
                                /* SPECIAL SINGLE BOX WITH SEPARATE PARAGRAPHS FOR MENVY PROJECT */
                                <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-2xs space-y-4">
                                  {/* Clean Header with Structured Alignment */}
                                  <div className="pb-3 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div className="space-y-1 min-w-0">
                                      <div className="flex items-center gap-2 flex-wrap">
                                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                                          Q1. Tell me about your project.
                                        </h4>
                                        <span className="text-[10.5px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/80 shrink-0">
                                          Max 200 Words (60–90s)
                                        </span>
                                        {Boolean(customProjectExplanation) && (
                                          <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full inline-flex items-center gap-1 shrink-0">
                                            <Check className="w-2.5 h-2.5" />
                                            Custom
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-slate-500">
                                        Say this in the interview with confidence:
                                      </p>
                                    </div>

                                    {/* Action Buttons — Tactile Clickable UI */}
                                    <div className="flex items-center gap-2 shrink-0 flex-wrap">
                                      {Boolean(customProjectExplanation) && (
                                        <button
                                          type="button"
                                          onClick={handleResetProject}
                                          className="btn-action-danger"
                                          title="Back to default project explanation"
                                        >
                                          <RotateCcw className="w-3.5 h-3.5 text-rose-500" strokeWidth={2.2} />
                                          <span>Back to Default</span>
                                        </button>
                                      )}

                                      <button
                                        type="button"
                                        onClick={openProjectModal}
                                        className="btn-action"
                                        title="Add or edit your personal project explanation"
                                      >
                                        <Edit3 className="w-3.5 h-3.5 text-slate-600" strokeWidth={2.2} />
                                        <span>{customProjectExplanation ? 'Edit Your Project Explanation' : 'Add Your Project Explanation'}</span>
                                      </button>

                                      <button
                                        type="button"
                                        onClick={copyMenvySpeech}
                                        className="btn-action"
                                        title="Copy answer to clipboard"
                                      >
                                        {copiedMenvy ? (
                                          <>
                                            <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2.5} />
                                            <span className="text-emerald-700 font-bold">Copied!</span>
                                          </>
                                        ) : (
                                          <>
                                            <Copy className="w-3.5 h-3.5 text-slate-600" strokeWidth={2.2} />
                                            <span>Copy Answer</span>
                                          </>
                                        )}
                                      </button>
                                    </div>
                                  </div>

                                  {/* Single box with separate paragraphs */}
                                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-800 leading-relaxed sm:leading-7 font-sans bg-slate-50/70 p-4 sm:p-6 rounded-xl border border-slate-200/80 border-l-4 border-l-slate-400/80 shadow-2xs">
                                    {activeProjectParagraphs.map((para, idx) => (
                                      <p
                                        key={idx}
                                        className={idx === activeProjectParagraphs.length - 1 ? "font-semibold text-slate-900 pt-1" : ""}
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
                                        {/* Input Box over Output Box — Full Width & Perfect Font */}
                                        <TerminalBox
                                          title="1. Input / Parameters"
                                          badge="Input"
                                          content={currentProg.input}
                                          placeholder="None (Standard JVM execution)"
                                        />

                                        <TerminalBox
                                          title="2. Console Output"
                                          badge="Output"
                                          content={currentProg.output}
                                          placeholder="Program executed successfully with no errors."
                                        />

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
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </section>
            );
          })
        )}
      </div>

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
              {/* TOP: Input Box & Output Box (Stacked One Over the Other — Full Width & Perfect Font) */}
              <div className="space-y-3">
                <TerminalBox
                  title="1. Input / Parameters"
                  badge="Input"
                  content={activeCodeModal.input}
                  placeholder="None (Standard JVM execution)"
                />

                <TerminalBox
                  title="2. Console Output"
                  badge="Output"
                  content={activeCodeModal.output}
                  placeholder="Execution completed successfully with no output."
                />
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

      {/* Self-Introduction Customization Modal Popup */}
      <AnimatePresence>
        {showSelfIntroModal && (
          <div 
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5"
            onClick={() => setShowSelfIntroModal(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header — Clean Neutral CSS */}
              <div className="px-5 py-4 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {customSelfIntro ? 'Edit Your Self-Introduction' : 'Add Your Self-Introduction'}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Personalize your 60–90 second interview speech (max 200 words). Tap "Back to Default" anytime.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSelfIntroModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 flex-1">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <label className="font-semibold text-slate-800">
                    Your Self-Introduction:
                  </label>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded font-medium border ${
                    (selfIntroEditText.trim() ? selfIntroEditText.trim().split(/\s+/).filter(Boolean).length : 0) > 200 
                      ? 'bg-rose-50 text-rose-600 border-rose-200 font-bold' 
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {selfIntroEditText.trim() ? selfIntroEditText.trim().split(/\s+/).filter(Boolean).length : 0} / 200 words max
                  </span>
                </div>

                <textarea
                  value={selfIntroEditText}
                  onChange={e => setSelfIntroEditText(e.target.value)}
                  placeholder="Good morning sir/madam. My name is... Type or paste your self-introduction here (max 200 words)..."
                  rows={10}
                  className="w-full rounded-xl border border-slate-300 p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all font-sans resize-y min-h-[220px]"
                />

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-start gap-2.5 text-[11px] sm:text-xs text-slate-700 leading-relaxed">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Max 200 Words:</strong> Keep your speech concise (under 200 words) so you can deliver it smoothly within 60–90 seconds. Separate paragraphs with empty lines.
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 shrink-0">
                {Boolean(customSelfIntro) ? (
                  <button
                    type="button"
                    onClick={handleResetSelfIntro}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-200 bg-white hover:bg-rose-50 text-rose-600 text-xs font-semibold transition-colors cursor-pointer active:scale-95 shadow-2xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Back to Default</span>
                  </button>
                ) : (
                  <div />
                )}

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={() => setShowSelfIntroModal(false)}
                    className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveSelfIntro}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer active:scale-95"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Self Intro</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Project Explanation Customization Modal Popup */}
      <AnimatePresence>
        {showProjectModal && (
          <div 
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5"
            onClick={() => setShowProjectModal(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header — Clean Neutral CSS */}
              <div className="px-5 py-4 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {customProjectExplanation ? 'Edit Your Project Explanation' : 'Add Your Project Explanation'}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Personalize your 60–90 second project answer (max 200 words). Tap "Back to Default" anytime.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowProjectModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 flex-1">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <label className="font-semibold text-slate-800">
                    Your Project Explanation:
                  </label>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded font-medium border ${
                    (projectEditText.trim() ? projectEditText.trim().split(/\s+/).filter(Boolean).length : 0) > 200 
                      ? 'bg-rose-50 text-rose-600 border-rose-200 font-bold' 
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {projectEditText.trim() ? projectEditText.trim().split(/\s+/).filter(Boolean).length : 0} / 200 words max
                  </span>
                </div>

                <textarea
                  value={projectEditText}
                  onChange={e => setProjectEditText(e.target.value)}
                  placeholder="Sir, my project name is... Type or paste your project explanation here (max 200 words)..."
                  rows={10}
                  className="w-full rounded-xl border border-slate-300 p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-all font-sans resize-y min-h-[220px]"
                />

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-start gap-2.5 text-[11px] sm:text-xs text-slate-700 leading-relaxed">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Max 200 Words:</strong> Keep your explanation concise (under 200 words) so you can deliver it smoothly within 60–90 seconds. Separate paragraphs with empty lines.
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 shrink-0">
                {Boolean(customProjectExplanation) ? (
                  <button
                    type="button"
                    onClick={handleResetProject}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-200 bg-white hover:bg-rose-50 text-rose-600 text-xs font-semibold transition-colors cursor-pointer active:scale-95 shadow-2xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Back to Default</span>
                  </button>
                ) : (
                  <div />
                )}

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={() => setShowProjectModal(false)}
                    className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveProject}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer active:scale-95"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Explanation</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Save Toast Notification */}
      <AnimatePresence>
        {Boolean(savedToast) && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 text-xs sm:text-sm font-medium"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span>{savedToast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
