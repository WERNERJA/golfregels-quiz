import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { QUESTIONS } from './src/data/questions';
import HistoryScreen from './src/screens/HistoryScreen';
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import ResultScreen from './src/screens/ResultScreen';
import { clearHistory, loadHistory, loadProblemIds, saveRun, updateProblems } from './src/storage';
import { theme } from './src/theme';
import { AnswerRecord, Question, QuizMode, QuizRun } from './src/types';

type Screen =
  | { name: 'home' }
  | { name: 'quiz'; mode: QuizMode; questions: Question[] }
  | { name: 'result'; run: QuizRun }
  | { name: 'history' };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' });
  const [history, setHistory] = useState<QuizRun[]>([]);
  const [problemIds, setProblemIds] = useState<string[]>([]);

  const refresh = useCallback(async () => {
    setHistory(await loadHistory());
    setProblemIds(await loadProblemIds());
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  function startQuiz(mode: QuizMode) {
    let pool: Question[];
    switch (mode) {
      case 'problems':
        pool = QUESTIONS.filter((q) => problemIds.includes(q.id));
        break;
      case 'diagrams':
        pool = QUESTIONS.filter((q) => q.diagram);
        break;
      default:
        pool = QUESTIONS;
    }
    const count = mode === 'random25' ? 25 : mode === 'random10' ? 10 : pool.length;
    const questions = shuffle(pool).slice(0, Math.min(count, pool.length));
    if (questions.length === 0) return;
    setScreen({ name: 'quiz', mode, questions });
  }

  function startRetry(questionIds: string[]) {
    const questions = shuffle(QUESTIONS.filter((q) => questionIds.includes(q.id)));
    if (questions.length === 0) return;
    setScreen({ name: 'quiz', mode: 'problems', questions });
  }

  async function finishQuiz(mode: QuizMode, answers: AnswerRecord[]) {
    const run: QuizRun = {
      date: new Date().toISOString(),
      mode,
      total: answers.length,
      score: answers.filter((a) => a.correct).length,
      answers,
    };
    await saveRun(run);
    await updateProblems(run);
    await refresh();
    setScreen({ name: 'result', run });
  }

  async function handleClearHistory() {
    await clearHistory();
    await refresh();
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      {screen.name === 'home' && (
        <HomeScreen
          problemCount={problemIds.length}
          runCount={history.length}
          onStart={startQuiz}
          onHistory={() => setScreen({ name: 'history' })}
        />
      )}
      {screen.name === 'quiz' && (
        <QuizScreen
          questions={screen.questions}
          onFinish={(answers) => finishQuiz(screen.mode, answers)}
          onQuit={() => setScreen({ name: 'home' })}
        />
      )}
      {screen.name === 'result' && (
        <ResultScreen
          run={screen.run}
          onHome={() => setScreen({ name: 'home' })}
          onRetryWrong={startRetry}
        />
      )}
      {screen.name === 'history' && (
        <HistoryScreen history={history} onBack={() => setScreen({ name: 'home' })} onClear={handleClearHistory} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.bg },
});
