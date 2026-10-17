export * from './coreJavaPrep';
export * from './dsaPrep';
export * from './sqlPrep';

import { coreJavaTopics } from './coreJavaPrep';
import { dsaProblems } from './dsaPrep';
import { sqlPrepCategories } from './sqlPrep';

export interface SectionMeta {
  id: 'core-java' | 'dsa' | 'sql';
  title: string;
  shortDesc: string;
  topicCount: number;
  questionCount: number;
  icon: string;
  accentColor: string;
}

export const prepSections: SectionMeta[] = [
  {
    id: 'core-java',
    title: 'CORE JAVA',
    shortDesc: 'Arrays, Strings, Collections, Exception Handling, and Multithreading with interview answers & runnable Java programs.',
    topicCount: coreJavaTopics.length, // 5 topics
    questionCount: coreJavaTopics.reduce((acc, t) => acc + t.questions.length, 0), // 65 questions
    icon: 'Coffee',
    accentColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'dsa',
    title: 'DSA & CODING',
    shortDesc: 'Curated high-frequency coding patterns across 10 categories with clean Java logic and sample inputs & outputs.',
    topicCount: 10, // 10 categories
    questionCount: dsaProblems.length, // 30 problems
    icon: 'Code2',
    accentColor: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'sql',
    title: 'SQL QUERIES',
    shortDesc: 'Master SQL Joins, Subqueries, Aggregates, Normalization, Indexes, and common real-world interview queries.',
    topicCount: sqlPrepCategories.length, // 8 categories
    questionCount: sqlPrepCategories.reduce((acc, c) => acc + c.questions.length, 0), // 43 questions
    icon: 'Database',
    accentColor: 'from-emerald-600 to-teal-600',
  },
];

export const TOTAL_QUESTIONS_COUNT = 
  prepSections.reduce((acc, s) => acc + s.questionCount, 0); // 138 total
