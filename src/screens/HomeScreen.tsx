import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { QUESTIONS } from '../data/questions';
import { theme } from '../theme';
import { QuizMode } from '../types';

interface Props {
  problemCount: number;
  runCount: number;
  onStart: (mode: QuizMode) => void;
  onHistory: () => void;
}

export default function HomeScreen({ problemCount, runCount, onStart, onHistory }: Props) {
  const diagramCount = QUESTIONS.filter((q) => q.diagram).length;
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.flag}>⛳️</Text>
      <Text style={styles.title}>Golfregels Quiz</Text>
      <Text style={styles.subtitle}>
        Multiple choice op basis van de officiële Rules of Golf (R&A) — {QUESTIONS.length} vragen
      </Text>

      <MenuButton
        emoji="🏌️"
        label="Quiz — 10 vragen"
        sub="Willekeurige selectie uit alle regels"
        onPress={() => onStart('random10')}
      />
      <MenuButton
        emoji="🏆"
        label="Grote quiz — 25 vragen"
        sub="Voor wie het écht wil weten"
        onPress={() => onStart('random25')}
      />
      <MenuButton
        emoji="📐"
        label="Vragen met tekening"
        sub={`${diagramCount} situatieschetsen: hindernissen, droppen, OB…`}
        onPress={() => onStart('diagrams')}
      />
      <MenuButton
        emoji="🔁"
        label="Probleemvragen herhalen"
        sub={
          problemCount > 0
            ? `${problemCount} vraag${problemCount === 1 ? '' : 'en'} die je eerder fout had`
            : 'Nog geen foute antwoorden — goed bezig!'
        }
        disabled={problemCount === 0}
        onPress={() => onStart('problems')}
      />
      <MenuButton
        emoji="📊"
        label="Historiek"
        sub={runCount > 0 ? `${runCount} gespeelde quiz${runCount === 1 ? '' : 'zen'}` : 'Nog geen quizzen gespeeld'}
        onPress={onHistory}
      />

      <Text style={styles.footer}>Bron: randa.org/nl-NL — Rules of Golf</Text>
    </ScrollView>
  );
}

function MenuButton({
  emoji,
  label,
  sub,
  onPress,
  disabled,
}: {
  emoji: string;
  label: string;
  sub: string;
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonEmoji}>{emoji}</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.buttonLabel}>{label}</Text>
        <Text style={styles.buttonSub}>{sub}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.bg },
  content: { padding: 20, paddingTop: 30, paddingBottom: 40 },
  flag: { fontSize: 54, textAlign: 'center' },
  title: { fontSize: 30, fontWeight: '800', color: theme.text, textAlign: 'center', marginTop: 6 },
  subtitle: { fontSize: 14, color: theme.textDim, textAlign: 'center', marginTop: 8, marginBottom: 26 },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.card,
    borderColor: theme.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    gap: 14,
  },
  buttonPressed: { backgroundColor: theme.cardLight },
  buttonDisabled: { opacity: 0.45 },
  buttonEmoji: { fontSize: 28 },
  buttonLabel: { fontSize: 17, fontWeight: '700', color: theme.text },
  buttonSub: { fontSize: 13, color: theme.textDim, marginTop: 2 },
  footer: { textAlign: 'center', color: theme.textDim, fontSize: 12, marginTop: 18 },
});
