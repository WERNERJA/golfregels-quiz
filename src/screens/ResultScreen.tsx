import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { QUESTIONS } from '../data/questions';
import { theme } from '../theme';
import { MODE_LABELS, QuizRun } from '../types';

interface Props {
  run: QuizRun;
  onHome: () => void;
  onRetryWrong: (questionIds: string[]) => void;
}

function verdict(pct: number): string {
  if (pct === 100) return '🏆 Perfect! Klaar voor het referee-examen.';
  if (pct >= 80) return '🥇 Uitstekend! Je kent de regels goed.';
  if (pct >= 60) return '🥈 Goed bezig, maar er valt nog wat te leren.';
  if (pct >= 40) return '🥉 De basis is er — herhaal je probleemvragen!';
  return '📖 Tijd om het regelboekje nog eens open te slaan…';
}

export default function ResultScreen({ run, onHome, onRetryWrong }: Props) {
  const pct = Math.round((run.score / run.total) * 100);
  const wrongIds = run.answers.filter((a) => !a.correct).map((a) => a.questionId);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Resultaat</Text>
      <Text style={styles.mode}>{MODE_LABELS[run.mode]}</Text>

      <View style={styles.scoreCircle}>
        <Text style={styles.scoreBig}>
          {run.score}/{run.total}
        </Text>
        <Text style={styles.scorePct}>{pct}%</Text>
      </View>
      <Text style={styles.verdict}>{verdict(pct)}</Text>

      <Text style={styles.sectionTitle}>Jouw antwoorden</Text>
      {run.answers.map((a, i) => {
        const q = QUESTIONS.find((qq) => qq.id === a.questionId);
        if (!q) return null;
        return (
          <View key={i} style={[styles.answerRow, a.correct ? styles.rowCorrect : styles.rowWrong]}>
            <Text style={styles.answerMark}>{a.correct ? '✅' : '❌'}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.answerQuestion} numberOfLines={2}>
                {q.question}
              </Text>
              {!a.correct ? (
                <Text style={styles.answerCorrection}>
                  Juist: {q.options[q.correctIndex]}
                </Text>
              ) : null}
            </View>
          </View>
        );
      })}

      {wrongIds.length > 0 ? (
        <Pressable style={({ pressed }) => [styles.retryButton, pressed && { opacity: 0.8 }]} onPress={() => onRetryWrong(wrongIds)}>
          <Text style={styles.retryLabel}>🔁 Foute vragen direct herhalen ({wrongIds.length})</Text>
        </Pressable>
      ) : null}
      <Pressable style={({ pressed }) => [styles.homeButton, pressed && { opacity: 0.8 }]} onPress={onHome}>
        <Text style={styles.homeLabel}>Naar het hoofdmenu</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.bg },
  content: { padding: 20, paddingTop: 30, paddingBottom: 50 },
  title: { fontSize: 28, fontWeight: '800', color: theme.text, textAlign: 'center' },
  mode: { fontSize: 14, color: theme.textDim, textAlign: 'center', marginTop: 4 },
  scoreCircle: {
    alignSelf: 'center',
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: theme.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    backgroundColor: theme.card,
  },
  scoreBig: { fontSize: 32, fontWeight: '800', color: theme.text },
  scorePct: { fontSize: 16, color: theme.accent, fontWeight: '700' },
  verdict: { textAlign: 'center', color: theme.text, fontSize: 16, marginTop: 16, marginBottom: 10 },
  sectionTitle: { color: theme.gold, fontSize: 13, fontWeight: '800', textTransform: 'uppercase', marginTop: 16, marginBottom: 10 },
  answerRow: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: theme.card,
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
  },
  rowCorrect: { borderLeftColor: theme.correct },
  rowWrong: { borderLeftColor: theme.wrong },
  answerMark: { fontSize: 16 },
  answerQuestion: { color: theme.text, fontSize: 13.5, lineHeight: 19 },
  answerCorrection: { color: theme.accent, fontSize: 13, marginTop: 4, fontStyle: 'italic' },
  retryButton: {
    backgroundColor: theme.gold,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginTop: 18,
  },
  retryLabel: { color: '#3e2f00', fontSize: 15, fontWeight: '800' },
  homeButton: {
    backgroundColor: theme.accent,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  homeLabel: { color: '#0d2818', fontSize: 15, fontWeight: '800' },
});
