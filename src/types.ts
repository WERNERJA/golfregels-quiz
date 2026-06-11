export type DiagramId =
  | 'rode-hindernis'
  | 'gele-hindernis'
  | 'ob-palen'
  | 'pad-ontwijken'
  | 'bunker-onspeelbaar'
  | 'provisionele-bal'
  | 'recht-naar-achteren'
  | 'ingebedde-bal'
  | 'tijdelijk-water-green'
  | 'afslagplaats'
  | 'vlaggenstok'
  | 'green-bal-raakt-bal'
  | 'rood-vs-geel'
  | 'onspeelbaar-struik'
  | 'pad-volledig-ontwijken';

export interface Question {
  id: string;
  rule: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  diagram?: DiagramId;
}

export type QuizMode = 'random10' | 'random25' | 'problems' | 'diagrams';

export interface AnswerRecord {
  questionId: string;
  chosenIndex: number;
  correct: boolean;
}

export interface QuizRun {
  date: string; // ISO
  mode: QuizMode;
  total: number;
  score: number;
  answers: AnswerRecord[];
}

export const RULE_TITLES: Record<number, string> = {
  1: 'Het spel, gedragsnormen en de Regels',
  2: 'De baan',
  3: 'De wedstrijd',
  4: 'Uitrusting van de speler',
  5: 'De ronde spelen',
  6: 'Een hole spelen',
  7: 'Bal zoeken',
  8: 'De baan spelen zoals hij wordt aangetroffen',
  9: 'Bal spelen zoals hij ligt',
  10: 'Slag voorbereiden en doen; Advies; Caddies',
  11: 'Bal in beweging raakt iets',
  12: 'Bunkers',
  13: 'Greens',
  14: 'Markeren, opnemen, droppen en terugplaatsen',
  15: 'Losse natuurlijke voorwerpen en losse obstakels',
  16: 'Abnormale baanomstandigheden',
  17: 'Hindernissen',
  18: 'Slag en afstand; Bal verloren of buiten de baan',
  19: 'Onspeelbare bal',
  20: 'Regelkwesties oplossen',
  21: 'Andere vormen van strokeplay en matchplay',
  22: 'Foursomes',
  23: 'Four-ball',
  24: 'Teamwedstrijden',
  25: 'Spelers met een beperking',
};

export const MODE_LABELS: Record<QuizMode, string> = {
  random10: 'Quiz - 10 vragen',
  random25: 'Grote quiz - 25 vragen',
  problems: 'Probleemvragen herhalen',
  diagrams: 'Vragen met tekening',
};
