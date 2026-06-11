import AsyncStorage from '@react-native-async-storage/async-storage';
import { QuizRun } from './types';

const HISTORY_KEY = '@golfquiz/history';
const PROBLEMS_KEY = '@golfquiz/problems';

export async function loadHistory(): Promise<QuizRun[]> {
  try {
    const raw = await AsyncStorage.getItem(HISTORY_KEY);
    return raw ? (JSON.parse(raw) as QuizRun[]) : [];
  } catch {
    return [];
  }
}

export async function saveRun(run: QuizRun): Promise<void> {
  const history = await loadHistory();
  history.unshift(run);
  await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 200)));
}

export async function clearHistory(): Promise<void> {
  await AsyncStorage.removeItem(HISTORY_KEY);
}

// Probleemvragen: vraag-id's die fout zijn beantwoord. Een vraag verdwijnt
// pas uit de lijst wanneer hij weer eens goed wordt beantwoord.
export async function loadProblemIds(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(PROBLEMS_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export async function updateProblems(run: QuizRun): Promise<void> {
  const current = new Set(await loadProblemIds());
  for (const a of run.answers) {
    if (a.correct) {
      current.delete(a.questionId);
    } else {
      current.add(a.questionId);
    }
  }
  await AsyncStorage.setItem(PROBLEMS_KEY, JSON.stringify([...current]));
}
