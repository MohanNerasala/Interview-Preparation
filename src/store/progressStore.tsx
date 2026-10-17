import { createContext, useContext, useCallback, useState, useEffect, type ReactNode } from 'react';
import type { AppProgress, ConceptStatus, QuestionResult, TopicProgress, ConceptProgress, QuestionProgress } from '../types';

const STORAGE_KEY = 'interview-prep-progress';

const defaultProgress: AppProgress = {
  topics: {},
  totalQuestionsAttempted: 0,
};

function loadProgress(): AppProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return { ...defaultProgress };
}

function saveProgress(progress: AppProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
}

interface ProgressContextType {
  progress: AppProgress;
  getTopicProgress: (topicId: string) => TopicProgress;
  getConceptProgress: (topicId: string, conceptId: string) => ConceptProgress;
  getQuestionProgress: (topicId: string, conceptId: string, questionId: string) => QuestionProgress;
  setConceptStatus: (topicId: string, conceptId: string, status: ConceptStatus) => void;
  setQuestionResult: (topicId: string, conceptId: string, questionId: string, result: QuestionResult) => void;
  toggleBookmark: (topicId: string, conceptId: string, questionId: string) => void;
  toggleRevision: (topicId: string, conceptId: string, questionId: string) => void;
  markAnswerRevealed: (topicId: string, conceptId: string, questionId: string) => void;
  getTopicCompletionPercent: (topicId: string, totalConcepts: number) => number;
  getCompletedConceptsCount: (topicId: string) => number;
  getTotalQuestionsAttempted: () => number;
  getBookmarkedQuestions: () => Array<{topicId: string; conceptId: string; questionId: string}>;
  getRevisionQuestions: () => Array<{topicId: string; conceptId: string; questionId: string}>;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<AppProgress>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const getTopicProgress = useCallback((topicId: string): TopicProgress => {
    return progress.topics[topicId] || { topicId, conceptsProgress: {} };
  }, [progress]);

  const getConceptProgress = useCallback((topicId: string, conceptId: string): ConceptProgress => {
    const topic = progress.topics[topicId];
    if (!topic) return { conceptId, status: 'not-started', questionsProgress: {} };
    return topic.conceptsProgress[conceptId] || { conceptId, status: 'not-started', questionsProgress: {} };
  }, [progress]);

  const getQuestionProgress = useCallback((topicId: string, conceptId: string, questionId: string): QuestionProgress => {
    const concept = getConceptProgress(topicId, conceptId);
    return concept.questionsProgress[questionId] || {
      questionId, result: 'not-attempted', bookmarked: false, needsRevision: false, answerRevealed: false
    };
  }, [getConceptProgress]);

  const updateProgress = useCallback((updater: (prev: AppProgress) => AppProgress) => {
    setProgress(prev => {
      const next = updater(prev);
      return next;
    });
  }, []);

  const ensureStructure = (prev: AppProgress, topicId: string, conceptId: string): AppProgress => {
    const copy = { ...prev, topics: { ...prev.topics } };
    if (!copy.topics[topicId]) {
      copy.topics[topicId] = { topicId, conceptsProgress: {} };
    } else {
      copy.topics[topicId] = { ...copy.topics[topicId], conceptsProgress: { ...copy.topics[topicId].conceptsProgress } };
    }
    if (!copy.topics[topicId].conceptsProgress[conceptId]) {
      copy.topics[topicId].conceptsProgress[conceptId] = { conceptId, status: 'not-started', questionsProgress: {} };
    } else {
      copy.topics[topicId].conceptsProgress[conceptId] = {
        ...copy.topics[topicId].conceptsProgress[conceptId],
        questionsProgress: { ...copy.topics[topicId].conceptsProgress[conceptId].questionsProgress }
      };
    }
    return copy;
  };

  const setConceptStatus = useCallback((topicId: string, conceptId: string, status: ConceptStatus) => {
    updateProgress(prev => {
      const copy = ensureStructure(prev, topicId, conceptId);
      copy.topics[topicId].conceptsProgress[conceptId].status = status;
      copy.topics[topicId].conceptsProgress[conceptId].lastStudied = Date.now();
      copy.lastStudied = `${topicId}/${conceptId}`;
      return copy;
    });
  }, [updateProgress]);

  const setQuestionResult = useCallback((topicId: string, conceptId: string, questionId: string, result: QuestionResult) => {
    updateProgress(prev => {
      const copy = ensureStructure(prev, topicId, conceptId);
      const qp = copy.topics[topicId].conceptsProgress[conceptId].questionsProgress[questionId] || {
        questionId, result: 'not-attempted', bookmarked: false, needsRevision: false, answerRevealed: false
      };
      copy.topics[topicId].conceptsProgress[conceptId].questionsProgress[questionId] = { ...qp, result, lastAttempted: Date.now() };
      if (result !== 'not-attempted') copy.totalQuestionsAttempted = (prev.totalQuestionsAttempted || 0) + 1;
      return copy;
    });
  }, [updateProgress]);

  const toggleBookmark = useCallback((topicId: string, conceptId: string, questionId: string) => {
    updateProgress(prev => {
      const copy = ensureStructure(prev, topicId, conceptId);
      const qp = copy.topics[topicId].conceptsProgress[conceptId].questionsProgress[questionId] || {
        questionId, result: 'not-attempted', bookmarked: false, needsRevision: false, answerRevealed: false
      };
      copy.topics[topicId].conceptsProgress[conceptId].questionsProgress[questionId] = { ...qp, bookmarked: !qp.bookmarked };
      return copy;
    });
  }, [updateProgress]);

  const toggleRevision = useCallback((topicId: string, conceptId: string, questionId: string) => {
    updateProgress(prev => {
      const copy = ensureStructure(prev, topicId, conceptId);
      const qp = copy.topics[topicId].conceptsProgress[conceptId].questionsProgress[questionId] || {
        questionId, result: 'not-attempted', bookmarked: false, needsRevision: false, answerRevealed: false
      };
      copy.topics[topicId].conceptsProgress[conceptId].questionsProgress[questionId] = { ...qp, needsRevision: !qp.needsRevision };
      return copy;
    });
  }, [updateProgress]);

  const markAnswerRevealed = useCallback((topicId: string, conceptId: string, questionId: string) => {
    updateProgress(prev => {
      const copy = ensureStructure(prev, topicId, conceptId);
      const qp = copy.topics[topicId].conceptsProgress[conceptId].questionsProgress[questionId] || {
        questionId, result: 'not-attempted', bookmarked: false, needsRevision: false, answerRevealed: false
      };
      copy.topics[topicId].conceptsProgress[conceptId].questionsProgress[questionId] = { ...qp, answerRevealed: true };
      return copy;
    });
  }, [updateProgress]);

  const getTopicCompletionPercent = useCallback((topicId: string, totalConcepts: number): number => {
    const topic = progress.topics[topicId];
    if (!topic || totalConcepts === 0) return 0;
    const completed = Object.values(topic.conceptsProgress).filter(c => c.status === 'completed').length;
    return Math.round((completed / totalConcepts) * 100);
  }, [progress]);

  const getCompletedConceptsCount = useCallback((topicId: string): number => {
    const topic = progress.topics[topicId];
    if (!topic) return 0;
    return Object.values(topic.conceptsProgress).filter(c => c.status === 'completed').length;
  }, [progress]);

  const getTotalQuestionsAttempted = useCallback((): number => {
    return progress.totalQuestionsAttempted || 0;
  }, [progress]);

  const getBookmarkedQuestions = useCallback(() => {
    const results: Array<{topicId: string; conceptId: string; questionId: string}> = [];
    Object.entries(progress.topics).forEach(([topicId, topic]) => {
      Object.entries(topic.conceptsProgress).forEach(([conceptId, concept]) => {
        Object.entries(concept.questionsProgress).forEach(([questionId, qp]) => {
          if (qp.bookmarked) results.push({ topicId, conceptId, questionId });
        });
      });
    });
    return results;
  }, [progress]);

  const getRevisionQuestions = useCallback(() => {
    const results: Array<{topicId: string; conceptId: string; questionId: string}> = [];
    Object.entries(progress.topics).forEach(([topicId, topic]) => {
      Object.entries(topic.conceptsProgress).forEach(([conceptId, concept]) => {
        Object.entries(concept.questionsProgress).forEach(([questionId, qp]) => {
          if (qp.needsRevision) results.push({ topicId, conceptId, questionId });
        });
      });
    });
    return results;
  }, [progress]);

  const resetProgress = useCallback(() => {
    setProgress({ ...defaultProgress });
  }, []);

  return (
    <ProgressContext.Provider value={{
      progress, getTopicProgress, getConceptProgress, getQuestionProgress,
      setConceptStatus, setQuestionResult, toggleBookmark, toggleRevision,
      markAnswerRevealed, getTopicCompletionPercent, getCompletedConceptsCount,
      getTotalQuestionsAttempted, getBookmarkedQuestions, getRevisionQuestions, resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
