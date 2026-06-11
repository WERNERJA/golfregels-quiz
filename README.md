# ⛳️ Golfregels Quiz

iOS-quiz-app over de Rules of Golf, gebaseerd op de officiële Nederlandse regelteksten van de R&A:
https://www.randa.org/nl-NL/rog/the-rules-of-golf

## Functies

- **72 multiple-choice-vragen** verdeeld over Regel 1 t/m 23, elk met uitleg en regelverwijzing na het antwoorden
- **20 vragen met tekening** — situatieschetsen (SVG) zoals in het regelboekje: rode/gele hindernissen, buiten de baan, droppen, dichtstbijzijnde punt, bunker, vlaggenstok…
- **Quizmodi**: 10 vragen, 25 vragen, alleen tekening-vragen, of probleemvragen herhalen
- **Historiek** van elke quizrun (datum, score, gemiddelde, beste score) — lokaal opgeslagen
- **Probleemvragen**: elke fout beantwoorde vraag komt in je herhaallijst en verdwijnt pas als je hem weer goed beantwoordt
- Na elke quiz: direct de fout beantwoorde vragen opnieuw oefenen

## Lokaal testen (Expo Go)

```bash
cd ~/Projects/GolfRegelsQuiz
npx expo start
```

Scan de QR-code met de **Expo Go**-app op je iPhone (App Store).

## Op je iPhone zetten via EAS Build

Eenmalig:

```bash
npm install -g eas-cli
eas login                  # Expo-account (gratis aan te maken)
eas init                   # koppelt het project aan je Expo-account
```

Build voor installatie op je eigen toestel (ad-hoc, vereist Apple Developer-account):

```bash
eas build --platform ios --profile preview
```

EAS vraagt je in te loggen met je Apple ID (werner.janssens@gmail.com), maakt automatisch certificaten en provisioning profile aan en registreert je iPhone (via een link op je toestel). Na de build krijg je een installatielink/QR-code.

Voor de App Store / TestFlight:

```bash
eas build --platform ios --profile production
eas submit --platform ios
```

## Structuur

```
App.tsx                    — navigatie-state-machine (home / quiz / resultaat / historiek)
src/types.ts               — datamodel en regelnamen
src/data/questions.ts      — vragenbank (72 vragen, bron: randa.org nl-NL)
src/components/Diagram.tsx — SVG-situatieschetsen per vraag
src/storage.ts             — AsyncStorage: historiek + probleemvragen
src/screens/               — Home, Quiz, Resultaat, Historiek
```

## Vragen toevoegen

Voeg een object toe aan `src/data/questions.ts` met een uniek `id`, `rule`, `question`, `options` (4), `correctIndex`, `explanation` en optioneel `diagram` (bestaand diagram-id uit `src/types.ts`).
