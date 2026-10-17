// ==================== Core Types ====================

export interface CodeSnippet {
  code: string;
  input?: string;
  output?: string;
}

export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  difficulty?: 'Essential' | 'Common' | 'Advanced';
  example?: string;
  codeExample?: string;
  codeSnippet?: CodeSnippet;
  followUp?: string[];
}

export interface CodeProgram {
  id: string;
  title: string;
  label: string;
  code: string;
  input?: string;
  output?: string;
}

export interface Concept {
  id: string;
  title: string;
  description: string;
  difficulty: 'Essential' | 'Common' | 'Advanced';
  studyTime: string;
  definition: string;
  interviewAnswer: string;
  explanation: string;
  realWorldExample?: string;
  codeExample?: string;
  codeSnippet?: CodeSnippet;
  codePrograms?: CodeProgram[];
  commonMistakes?: string[];
  followUpQuestions?: string[];
  questions: InterviewQuestion[];
}

export interface Subtopic {
  id: string;
  title: string;
  description: string;
  concepts: Concept[];
}

export interface Topic {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  subtopics: Subtopic[];
}

// ==================== Progress Types ====================

export type ConceptStatus = 'not-started' | 'in-progress' | 'completed' | 'needs-revision';
export type QuestionResult = 'not-attempted' | 'correct' | 'partial' | 'incorrect';

export interface QuestionProgress {
  questionId: string;
  result: QuestionResult;
  bookmarked: boolean;
  needsRevision: boolean;
  answerRevealed: boolean;
  lastAttempted?: number;
}

export interface ConceptProgress {
  conceptId: string;
  status: ConceptStatus;
  questionsProgress: Record<string, QuestionProgress>;
  lastStudied?: number;
}

export interface TopicProgress {
  topicId: string;
  conceptsProgress: Record<string, ConceptProgress>;
}

export interface AppProgress {
  topics: Record<string, TopicProgress>;
  lastStudied?: string;
  totalQuestionsAttempted: number;
}

// ==================== Search Types ====================

export interface SearchResult {
  type: 'topic' | 'subtopic' | 'concept' | 'question';
  topicId: string;
  subtopicId?: string;
  conceptId?: string;
  questionId?: string;
  title: string;
  description: string;
  breadcrumb: string;
}

// ==================== UI Types ====================

export type ViewMode = 'learning' | 'practice';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}
