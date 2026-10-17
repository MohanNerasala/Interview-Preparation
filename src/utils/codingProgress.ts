import type { CodingUserProgress } from '../types/codingQuestion';

const CODING_STORAGE_KEY = 'dsa_coding_progress_v1';

export function loadCodingProgress(): CodingUserProgress {
  try {
    const raw = localStorage.getItem(CODING_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {}
  return { completed: {}, bookmarked: {}, revision: {} };
}

export function saveCodingProgress(progress: CodingUserProgress): void {
  try {
    localStorage.setItem(CODING_STORAGE_KEY, JSON.stringify(progress));
  } catch {}
}
