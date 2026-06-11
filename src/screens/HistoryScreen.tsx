import React from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';
import { MODE_LABELS, QuizRun } from '../types';

interface Props {
  history: QuizRun[];
  onBack: () => void;
  onClear: () => void;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('nl-BE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function HistoryScreen({ history, onBack, onClear }: Props) {
  const totalQuestions = history.reduce((s, r) => s + r.total, 0);
  const totalCorrect = history.reduce((s, r) => s + r.score, 0);
  const avg = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const best = history.reduce((b, r) => Math.max(b, Math.round((r.score / r.total) * 100)), 0);

  function confirmClear() {
    Alert.alert('Historiek wissen', 'Weet je zeker dat je alle resultaten wilt wissen?', [
      { text: 'Annuleren', style: 'cancel' },
      { text: 'Wissen', style: 'destructive', onPress: onClear },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={onBack} hitSlop={12}>
          <Text style={styles.back}>← Terug</Text>
        </Pressable>
        {history.length > 0 ? (
          <Pressable onPress={confirmClear} hitSlop={12}>
            <Text style={styles.clear}>Wissen</Text>
          </Pressable>
        ) : null}
      </View>
      <Text style={styles.title}>📊 Historiek</Text>

      {history.length === 0 ? (
        <Text style={styles.empty}>Nog geen quizzen gespeeld. Tijd voor je eerste ronde!</Text>
      ) : (
        <>
          <View style={styles.statsRow}>
            <Stat label="Quizzen" value={String(history.length)} />
            <Stat label="Gemiddeld" value={`${avg}%`} />
            <Stat label="Beste" value={`${best}%`} />
          </View>
          <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
            {history.map((run, i) => {
              const pct = Math.round((run.score / run.total) * 100);
              return (
                <View key={i} style={styles.runRow}>
                  <View style={[styles.pctBadge, { borderColor: pct >= 80 ? theme.correct : pct >= 50 ? theme.gold : theme.wrong }]}>
                    <Text style={styles.pctText}>{pct}%</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.runMode}>{MODE_LABELS[run.mode]}</Text>
                    <Text style={styles.runDate}>{formatDate(run.date)}</Text>
                  </View>
                  <Text style={styles.runScore}>
                    {run.score}/{run.total}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </>
      )}
    </View>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.bg, padding: 20, paddingTop: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  back: { color: theme.accent, fontSize: 16, fontWeight: '700' },
  clear: { color: theme.wrong, fontSize: 14, fontWeight: '700' },
  title: { fontSize: 26, fontWeight: '800', color: theme.text, marginTop: 14, marginBottom: 16 },
  empty: { color: theme.textDim, fontSize: 15, marginTop: 20, textAlign: 'center' },
  statsRow: { flexDirection: 'row', gap: 10, marginBottom: 18 },
  stat: {
    flex: 1,
    backgroundColor: theme.card,
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.border,
  },
  statValue: { color: theme.text, fontSize: 20, fontWeight: '800' },
  statLabel: { color: theme.textDim, fontSize: 12, marginTop: 2 },
  runRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.card,
    borderRadius: 14,
    padding: 12,
    marginBottom: 8,
    gap: 12,
  },
  pctBadge: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pctText: { color: theme.text, fontWeight: '800', fontSize: 13 },
  runMode: { color: theme.text, fontSize: 15, fontWeight: '700' },
  runDate: { color: theme.textDim, fontSize: 12.5, marginTop: 2 },
  runScore: { color: theme.accent, fontSize: 16, fontWeight: '800' },
});
