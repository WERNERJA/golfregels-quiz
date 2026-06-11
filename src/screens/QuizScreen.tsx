import React, { useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Diagram from '../components/Diagram';
import { theme } from '../theme';
import { AnswerRecord, Question, RULE_TITLES } from '../types';

interface Props {
  questions: Question[];
  onFinish: (answers: AnswerRecord[]) => void;
  onQuit: () => void;
}

export default function QuizScreen({ questions, onFinish, onQuit }: Props) {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const scrollRef = useRef<ScrollView>(null);

  const q = questions[index];
  const answered = chosen !== null;
  const isLast = index === questions.length - 1;

  function choose(i: number) {
    if (answered) return;
    setChosen(i);
    setAnswers([...answers, { questionId: q.id, chosenIndex: i, correct: i === q.correctIndex }]);
    // scroll de uitleg in beeld zodra die gerenderd is
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 150);
  }

  function next() {
    if (isLast) {
      onFinish(answers);
    } else {
      setIndex(index + 1);
      setChosen(null);
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={onQuit} hitSlop={12}>
          <Text style={styles.quit}>✕</Text>
        </Pressable>
        <Text style={styles.progress}>
          Vraag {index + 1} / {questions.length}
        </Text>
        <Text style={styles.score}>
          ✓ {answers.filter((a) => a.correct).length}
        </Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${((index + (answered ? 1 : 0)) / questions.length) * 100}%` }]} />
      </View>

      <ScrollView ref={scrollRef} style={{ flex: 1 }} contentContainerStyle={styles.content}>
        <Text style={styles.ruleTag}>
          Regel {q.rule} — {RULE_TITLES[q.rule]}
        </Text>
        <Text style={styles.question}>{q.question}</Text>
        {q.diagram ? <Diagram id={q.diagram} /> : null}

        {q.options.map((opt, i) => {
          const optionStyle: object[] = [styles.option];
          let mark = '';
          if (answered) {
            if (i === q.correctIndex) {
              optionStyle.push(styles.optionCorrect);
              mark = ' ✓';
            } else if (i === chosen) {
              optionStyle.push(styles.optionWrong);
              mark = ' ✗';
            }
          }
          return (
            <Pressable
              key={i}
              style={({ pressed }) => [...optionStyle, pressed && !answered && styles.optionPressed]}
              onPress={() => choose(i)}
            >
              <Text style={styles.optionLetter}>{String.fromCharCode(65 + i)}</Text>
              <Text style={styles.optionText}>
                {opt}
                {mark}
              </Text>
            </Pressable>
          );
        })}

        {answered ? (
          <View style={styles.explainBox}>
            <Text style={styles.explainTitle}>
              {chosen === q.correctIndex ? '✅ Juist!' : '❌ Helaas, fout.'}
            </Text>
            <Text style={styles.explainText}>{q.explanation}</Text>
          </View>
        ) : null}
      </ScrollView>

      {answered ? (
        <View style={styles.footer}>
          <Pressable style={({ pressed }) => [styles.nextButton, pressed && { opacity: 0.8 }]} onPress={next}>
            <Text style={styles.nextLabel}>{isLast ? 'Bekijk resultaat' : 'Volgende vraag →'}</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.bg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 8,
  },
  quit: { color: theme.textDim, fontSize: 22, fontWeight: '600' },
  progress: { color: theme.text, fontSize: 15, fontWeight: '700' },
  score: { color: theme.accent, fontSize: 15, fontWeight: '700' },
  progressBar: { height: 5, backgroundColor: theme.card, marginHorizontal: 20, borderRadius: 3 },
  progressFill: { height: 5, backgroundColor: theme.accent, borderRadius: 3 },
  content: { padding: 20, paddingBottom: 50 },
  ruleTag: {
    color: theme.gold,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  question: { color: theme.text, fontSize: 19, fontWeight: '700', lineHeight: 27, marginBottom: 16 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.card,
    borderColor: theme.border,
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    gap: 12,
  },
  optionPressed: { backgroundColor: theme.cardLight },
  optionCorrect: { borderColor: theme.correct, backgroundColor: '#1d4a2a' },
  optionWrong: { borderColor: theme.wrong, backgroundColor: '#4a1d1d' },
  optionLetter: {
    color: theme.accent,
    fontWeight: '800',
    fontSize: 15,
    width: 22,
    textAlign: 'center',
  },
  optionText: { color: theme.text, fontSize: 15, lineHeight: 21, flex: 1 },
  explainBox: {
    backgroundColor: theme.cardLight,
    borderRadius: 14,
    borderLeftWidth: 4,
    borderLeftColor: theme.gold,
    padding: 16,
    marginTop: 6,
  },
  explainTitle: { color: theme.text, fontSize: 16, fontWeight: '800', marginBottom: 6 },
  explainText: { color: theme.text, fontSize: 14.5, lineHeight: 22 },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 6,
    backgroundColor: theme.bg,
    borderTopWidth: 1,
    borderTopColor: theme.border,
  },
  nextButton: {
    backgroundColor: theme.accent,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  nextLabel: { color: '#0d2818', fontSize: 16, fontWeight: '800' },
});
