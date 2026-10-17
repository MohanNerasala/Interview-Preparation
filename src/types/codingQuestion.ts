export type CodingDifficulty = 'Easy' | 'Medium' | 'Hard';

export type CodingCategory =
  | 'Numbers'
  | 'Strings'
  | 'Arrays'
  | 'Arrays & HashMaps'
  | 'Searching & Sorting'
  | 'Stack & Queue'
  | 'Recursion'
  | 'Linked Lists & Advanced';

export interface CodingQuestion {
  id: string;
  number: number;
  title: string;
  category: CodingCategory;
  difficulty: CodingDifficulty;
  problem: string;
  input: string;
  output: string;
  approach?: string;
  javaSolution: string;
  dryRun?: string;
  timeComplexity: string;
  spaceComplexity: string;
}

export interface CodingUserProgress {
  completed: Record<string, boolean>;
  bookmarked: Record<string, boolean>;
  revision: Record<string, boolean>;
}
