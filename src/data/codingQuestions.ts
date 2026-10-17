import type { CodingQuestion, CodingCategory } from '../types/codingQuestion';
import { numberQuestions } from './coding/numbers';
import { stringQuestions } from './coding/strings';
import { arrayQuestions } from './coding/arrays';
import { hashmapQuestions } from './coding/hashmaps';
import { searchSortQuestions } from './coding/searchSort';
import { stackQueueQuestions } from './coding/stackQueue';
import { recursionQuestions } from './coding/recursion';
import { linkedListQuestions } from './coding/linkedLists';

export const allCodingQuestions: CodingQuestion[] = [
  ...numberQuestions,
  ...stringQuestions,
  ...arrayQuestions,
  ...hashmapQuestions,
  ...searchSortQuestions,
  ...stackQueueQuestions,
  ...recursionQuestions,
  ...linkedListQuestions,
];

export function getCodingQuestionById(id: string): CodingQuestion | undefined {
  return allCodingQuestions.find(q => q.id === id);
}

export function getCodingQuestionsByCategory(category: CodingCategory): CodingQuestion[] {
  return allCodingQuestions.filter(q => q.category === category);
}
