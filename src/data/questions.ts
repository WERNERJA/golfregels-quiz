import { Question } from '../types';

// Vragenbank gebaseerd op de officiële Rules of Golf (R&A, nl-NL):
// https://www.randa.org/nl-NL/rog/the-rules-of-golf
export const QUESTIONS: Question[] = [
  // ── Regel 1: Het spel ──────────────────────────────────────────────
  {
    id: 'r01-01',
    rule: 1,
    question:
      'Je realiseert je na je ronde dat je op hole 7 per ongeluk een regel hebt overtreden zonder dat iemand het zag. Wat hoor je te doen?',
    options: [
      'Niets, niemand heeft het gezien',
      'De straf op jezelf toepassen en het melden',
      'Alleen iets zeggen als een medespeler ernaar vraagt',
      'De hole opnieuw spelen',
    ],
    correctIndex: 1,
    explanation:
      'Regel 1.3b: golf steunt op integriteit. Spelers horen straffen eerlijk op zichzelf toe te passen, ook als niemand de overtreding heeft gezien. Wie bewust een straf negeert, kan worden gediskwalificeerd.',
  },
  {
    id: 'r01-02',
    rule: 1,
    question: 'Wat is de "algemene straf" in strokeplay?',
    options: [
      'Eén strafslag',
      'Twee strafslagen',
      'Verlies van de hole',
      'Diskwalificatie',
    ],
    correctIndex: 1,
    explanation:
      'De algemene straf is twee strafslagen in strokeplay en verlies van de hole in matchplay (Regel 1.3c).',
  },

  // ── Regel 3: De wedstrijd ─────────────────────────────────────────
  {
    id: 'r03-01',
    rule: 3,
    question:
      'In strokeplay lever je een scorekaart in met op hole 5 een 4, terwijl je daar eigenlijk een 5 had. Wat is het gevolg?',
    options: [
      'Twee strafslagen op hole 5',
      'De score wordt gewoon gecorrigeerd',
      'Diskwalificatie',
      'Eén strafslag',
    ],
    correctIndex: 2,
    explanation:
      'Regel 3.3b: een ingeleverde score die lager is dan de werkelijke score op een hole betekent diskwalificatie. Een te hóge score blijft gewoon staan.',
  },
  {
    id: 'r03-02',
    rule: 3,
    question: 'Wie is verantwoordelijk voor de juiste hole-scores op je scorekaart in strokeplay?',
    options: [
      'De marker',
      'De Commissie',
      'De speler zelf',
      'De caddie',
    ],
    correctIndex: 2,
    explanation:
      'Regel 3.3b: de marker noteert de scores en ondertekent de kaart, maar de speler is zelf verantwoordelijk voor de juistheid van zijn hole-scores en moet de kaart ook zelf ondertekenen.',
  },

  // ── Regel 4: Uitrusting ───────────────────────────────────────────
  {
    id: 'r04-01',
    rule: 4,
    question: 'Hoeveel clubs mag je maximaal bij je hebben tijdens een ronde?',
    options: ['12', '14', '15', 'Onbeperkt, zolang ze goedgekeurd zijn'],
    correctIndex: 1,
    explanation:
      'Regel 4.1b: maximaal 14 clubs. In strokeplay krijg je twee strafslagen per hole waarop de overtreding plaatsvond, met een maximum van vier strafslagen per ronde.',
  },
  {
    id: 'r04-02',
    rule: 4,
    question:
      'Je ontdekt op de 3e tee dat je 15 clubs in je tas hebt. Wat is de straf in strokeplay?',
    options: [
      'Diskwalificatie',
      'Twee strafslagen in totaal',
      'Vier strafslagen (twee per gespeelde hole, maximum vier)',
      'Geen straf als je de club niet gebruikt hebt',
    ],
    correctIndex: 2,
    explanation:
      'Regel 4.1b: twee strafslagen voor elke hole waarop de overtreding bestond, met een maximum van vier per ronde. Na twee gespeelde holes is dat dus vier strafslagen. De extra club moet direct buiten het spel worden gesteld.',
  },

  // ── Regel 5: De ronde spelen ──────────────────────────────────────
  {
    id: 'r05-01',
    rule: 5,
    question:
      'Mag je tijdens het spelen van een hole een oefenslag (naar een echte bal) doen?',
    options: [
      'Ja, zolang je niemand ophoudt',
      'Nee, tijdens het spelen van een hole mag dat niet',
      'Alleen op de fairway',
      'Alleen met een putter',
    ],
    correctIndex: 1,
    explanation:
      'Regel 5.5a: tijdens het spelen van een hole mag een speler geen oefenslag naar een bal doen. Oefenswings (zonder bal te raken) mogen wel. Straf: algemene straf.',
  },
  {
    id: 'r05-02',
    rule: 5,
    question: 'Het onweert maar de Commissie heeft het spel niet stilgelegd. Mag je zelf stoppen?',
    options: [
      'Nee, dan word je gediskwalificeerd',
      'Ja, bij gevaar door bliksem mag je altijd zelf het spel onderbreken',
      'Alleen met toestemming van je marker',
      'Alleen als de hele flight akkoord is',
    ],
    correctIndex: 1,
    explanation:
      'Regel 5.7a: een speler mag het spel zelf onderbreken als hij redelijkerwijs gelooft dat er gevaar is door bliksem. Dit moet wel aan de Commissie worden gemeld.',
  },

  // ── Regel 6: Een hole spelen ──────────────────────────────────────
  {
    id: 'r06-01',
    rule: 6,
    question:
      'In strokeplay sla je af van buiten de afslagplaats. Wat is de juiste procedure?',
    options: [
      'Geen straf, speel de bal zoals hij ligt',
      'Eén strafslag en de bal spelen zoals hij ligt',
      'Twee strafslagen en opnieuw afslaan van binnen de afslagplaats',
      'De slag telt gewoon niet, opnieuw afslaan zonder straf',
    ],
    correctIndex: 2,
    explanation:
      'Regel 6.1b: in strokeplay krijg je twee strafslagen en moet je de fout herstellen door alsnog van binnen de afslagplaats te spelen. De slag van buiten de afslagplaats telt zelf niet mee.',
    diagram: 'afslagplaats',
  },
  {
    id: 'r06-02',
    rule: 6,
    question: 'Hoe diep is de afslagplaats?',
    options: [
      'Eén clublengte',
      'Twee clublengten',
      'Drie meter',
      'Zo diep als de tee-markers breed staan',
    ],
    correctIndex: 1,
    explanation:
      'De afslagplaats is een rechthoek van twee clublengten diep, gemeten vanaf de voorkant van de tee-markers (Definitie afslagplaats, Regel 6.2).',
    diagram: 'afslagplaats',
  },
  {
    id: 'r06-03',
    rule: 6,
    question:
      'Mag je bij je afslag buiten de afslagplaats staan terwijl de bal binnen de afslagplaats ligt?',
    options: [
      'Nee, je voeten moeten binnen de afslagplaats staan',
      'Ja, alleen de bal moet binnen de afslagplaats liggen',
      'Alleen in matchplay',
      'Alleen als de tee-markers dat toelaten',
    ],
    correctIndex: 1,
    explanation:
      'Regel 6.2b: alleen de bal moet binnen de afslagplaats liggen (of geteeëd zijn). De speler mag er zelf buiten staan.',
    diagram: 'afslagplaats',
  },
  {
    id: 'r06-04',
    rule: 6,
    question: 'In strokeplay speel je per ongeluk een verkeerde bal. Wat is de straf?',
    options: [
      'Eén strafslag, daarna verder met je eigen bal',
      'Twee strafslagen en de fout herstellen met je eigen bal',
      'Geen straf als je het binnen één hole ontdekt',
      'Diskwalificatie',
    ],
    correctIndex: 1,
    explanation:
      'Regel 6.3c: het spelen van een verkeerde bal kost de algemene straf (twee strafslagen). Je moet de fout herstellen door je eigen bal te spelen; de slagen met de verkeerde bal tellen niet. Herstel je de fout niet vóór de afslag van de volgende hole, dan volgt diskwalificatie.',
  },
  {
    id: 'r06-05',
    rule: 6,
    question:
      'Je bal valt van de tee terwijl je hem adresseert, zonder dat je een slag deed. Wat nu?',
    options: [
      'Eén strafslag en opnieuw opteeën',
      'Zonder straf opnieuw opteeën',
      'De bal spelen waar hij ligt',
      'Twee strafslagen',
    ],
    correctIndex: 1,
    explanation:
      'Een bal is pas in het spel na een slag. Valt hij van de tee (of stoot je hem er per ongeluk af zonder slagintentie), dan tee je hem zonder straf gewoon opnieuw op (Regel 6.2b).',
  },
  {
    id: 'r06-06',
    rule: 6,
    question: 'Wat houdt "ready golf" in strokeplay in?',
    options: [
      'De speler met de laagste handicap slaat altijd eerst af',
      'Spelers mogen veilig en verantwoord buiten de normale volgorde spelen',
      'Je moet binnen 40 seconden spelen',
      'De bal die het dichtst bij de hole ligt wordt eerst gespeeld',
    ],
    correctIndex: 1,
    explanation:
      'Regel 6.4b: in strokeplay wordt "ready golf" aangemoedigd — spelen in een andere volgorde mag, mits het veilig en verantwoord gebeurt en niemand er voordeel mee zoekt.',
  },

  // ── Regel 7: Bal zoeken ───────────────────────────────────────────
  {
    id: 'r07-01',
    rule: 7,
    question:
      'Tijdens het zoeken beweeg je per ongeluk je eigen bal met je voet. Wat is de straf?',
    options: [
      'Eén strafslag, bal terugplaatsen',
      'Geen straf, bal terugplaatsen',
      'Geen straf, bal spelen waar hij nu ligt',
      'Twee strafslagen',
    ],
    correctIndex: 1,
    explanation:
      'Regel 7.4: wordt je bal per ongeluk bewogen tijdens het zoeken (door jou, je tegenstander of iemand anders), dan is er geen straf. De bal moet worden teruggeplaatst op de (eventueel geschatte) oorspronkelijke plek.',
  },
  {
    id: 'r07-02',
    rule: 7,
    question:
      'Je wilt je bal in het hoge gras identificeren. Wat is de juiste procedure?',
    options: [
      'Bal oppakken en bekijken, daarna terugleggen',
      'Plek markeren, bal opnemen, identificeren (niet meer schoonmaken dan nodig) en terugplaatsen',
      'Je mag de bal nooit opnemen om te identificeren',
      'Bal opnemen en droppen binnen één clublengte',
    ],
    correctIndex: 1,
    explanation:
      'Regel 7.3: je mag je bal opnemen om hem te identificeren, maar je moet de plek eerst markeren en de bal mag niet meer worden schoongemaakt dan nodig is voor identificatie. Daarna terugplaatsen.',
  },

  // ── Regel 8: De baan spelen zoals aangetroffen ────────────────────
  {
    id: 'r08-01',
    rule: 8,
    question:
      'Een tak hindert je backswing. Je breekt hem af voordat je slaat. Wat is de straf?',
    options: [
      'Geen straf, takken mogen weg',
      'Eén strafslag',
      'Algemene straf (twee strafslagen)',
      'Alleen straf als de tak nog aan de boom zat',
    ],
    correctIndex: 2,
    explanation:
      'Regel 8.1a: je mag de omstandigheden die je slag beïnvloeden niet verbeteren, zoals het afbreken van een vastzittende of groeiende tak die je swingruimte hindert. Straf: algemene straf.',
  },
  {
    id: 'r08-02',
    rule: 8,
    question:
      'Je drukt met je oefenswing per ongeluk gras plat achter je bal, waardoor je ligging verbetert. Wat geldt er?',
    options: [
      'Geen straf, een oefenswing mag altijd',
      'Algemene straf wegens het verbeteren van de omstandigheden',
      'Eén strafslag',
      'Je moet de bal verplaatsen',
    ],
    correctIndex: 1,
    explanation:
      'Regel 8.1a verbiedt het verbeteren van de ligging of de ruimte voor je stand of swing, ook als dat met een oefenswing gebeurt. Straf: algemene straf.',
  },

  // ── Regel 9: Bal spelen zoals hij ligt ────────────────────────────
  {
    id: 'r09-01',
    rule: 9,
    question:
      'Je stilliggende bal in het algemene gebied wordt door een windvlaag verplaatst. Wat doe je?',
    options: [
      'Bal terugplaatsen zonder straf',
      'Bal spelen vanaf de nieuwe plek zonder straf',
      'Bal terugplaatsen met één strafslag',
      'Opnieuw droppen',
    ],
    correctIndex: 1,
    explanation:
      'Regel 9.3: wordt een bal door natuurkrachten (wind, water) bewogen, dan speel je hem zonder straf vanaf de nieuwe plek. Uitzondering: op de green nadat de bal al was gemarkeerd en teruggeplaatst — dan terugplaatsen.',
  },
  {
    id: 'r09-02',
    rule: 9,
    question:
      'Je raakt per ongeluk je stilliggende bal in het algemene gebied met je club tijdens een oefenswing en de bal beweegt. Wat geldt er?',
    options: [
      'Geen straf, bal terugplaatsen',
      'Eén strafslag en de bal terugplaatsen',
      'Eén strafslag en de bal spelen waar hij ligt',
      'De oefenswing telt als slag',
    ],
    correctIndex: 1,
    explanation:
      'Regel 9.4b: veroorzaak je zelf dat je stilliggende bal beweegt (buiten de green en niet tijdens het zoeken), dan krijg je één strafslag en moet je de bal terugplaatsen. Een oefenswing is geen slag, want er is geen intentie de bal te raken… maar de beweging kost wél een strafslag.',
  },
  {
    id: 'r09-03',
    rule: 9,
    question: 'Wanneer is een bal officieel "bewogen" volgens de Regels?',
    options: [
      'Zodra hij ook maar een beetje trilt',
      'Als hij zijn oorspronkelijke plek verlaat en op een andere plek tot stilstand komt',
      'Als hij meer dan een clublengte rolt',
      'Alleen als een speler hem aanraakt',
    ],
    correctIndex: 1,
    explanation:
      'Definitie "bewogen": de bal moet zijn oorspronkelijke plek verlaten en op een andere plek tot stilstand komen. Wiebelen en terugkeren naar dezelfde plek telt niet als bewogen.',
  },

  // ── Regel 10: Advies, caddie ──────────────────────────────────────
  {
    id: 'r10-01',
    rule: 10,
    question:
      'Tijdens een wedstrijd vraag je een medespeler welke club hij zojuist heeft gebruikt. Wat geldt er?',
    options: [
      'Dat mag altijd',
      'Algemene straf: dit is verboden advies vragen',
      'Eén strafslag',
      'Mag alleen op par-3 holes',
    ],
    correctIndex: 1,
    explanation:
      'Regel 10.2a: je mag tijdens de ronde geen advies vragen aan een andere speler in de wedstrijd (behalve aan je partner of caddie). Clubkeuze is advies. Straf: algemene straf. Informatie over de Regels, afstanden of de positie van de vlag is géén advies.',
  },
  {
    id: 'r10-02',
    rule: 10,
    question:
      'Mag je caddie achter je staan op de verlengde speellijn terwijl jij je stand inneemt?',
    options: [
      'Ja, dat is juist zijn taak',
      'Nee, vanaf het moment dat je je stand inneemt tot de slag mag dat niet',
      'Alleen op de green niet',
      'Alleen bij putts onder de meter',
    ],
    correctIndex: 1,
    explanation:
      'Regel 10.2b: de caddie mag niet opzettelijk op of dicht bij de verlengde speellijn achter de bal staan vanaf het moment dat de speler zijn stand begint in te nemen, om te helpen bij het richten. Straf: algemene straf.',
  },
  {
    id: 'r10-03',
    rule: 10,
    question:
      'Bij je chip raak je de bal per ongeluk twee keer met één slag (dubbele raak). Wat geldt er?',
    options: [
      'Eén strafslag erbij',
      'Twee strafslagen erbij',
      'Geen straf: het telt als één slag, speel verder',
      'De slag moet worden overgespeeld',
    ],
    correctIndex: 2,
    explanation:
      'Regel 10.1a: raakt je club de bal per ongeluk meer dan eens tijdens één slag, dan telt dat gewoon als één slag en is er geen straf.',
  },
  {
    id: 'r10-04',
    rule: 10,
    question: 'Hoeveel caddies mag je tegelijk hebben?',
    options: ['Eén', 'Twee', 'Onbeperkt', 'Eén per negen holes'],
    correctIndex: 0,
    explanation:
      'Regel 10.3a: een speler mag slechts één caddie tegelijk hebben. De speler is bovendien verantwoordelijk voor de handelingen en eventuele regelovertredingen van zijn caddie.',
  },

  // ── Regel 11: Bal in beweging raakt iets ──────────────────────────
  {
    id: 'r11-01',
    rule: 11,
    question:
      'Je bal in beweging raakt per ongeluk je eigen golftas. Wat is de straf?',
    options: [
      'Eén strafslag, bal spelen zoals hij ligt',
      'Twee strafslagen',
      'Geen straf, bal spelen zoals hij ligt',
      'Slag opnieuw spelen',
    ],
    correctIndex: 2,
    explanation:
      'Regel 11.1: raakt je bal in beweging per ongeluk een persoon of voorwerp (ook jezelf of je eigen uitrusting), dan is er geen straf en speel je de bal zoals hij ligt. Uitzondering: een bal gespeeld van de green die een andere stilliggende bal op de green raakt.',
  },
  {
    id: 'r11-02',
    rule: 11,
    question:
      'In strokeplay put je vanaf de green en je bal raakt de stilliggende bal van een medespeler, ook op de green. Wat geldt er?',
    options: [
      'Geen straf voor niemand',
      'Twee strafslagen voor jou; jouw bal spelen zoals hij ligt, de andere bal terugplaatsen',
      'Eén strafslag voor jou en de putt overdoen',
      'Twee strafslagen voor de medespeler',
    ],
    correctIndex: 1,
    explanation:
      'Regel 11.1a (uitzondering): worden beide ballen vanaf de green gespeeld/gelegen en raakt jouw geputte bal een stilliggende bal op de green, dan krijg jij in strokeplay twee strafslagen. Jouw bal speel je zoals hij ligt; de bewogen bal wordt teruggeplaatst.',
    diagram: 'green-bal-raakt-bal',
  },

  // ── Regel 12: Bunkers ─────────────────────────────────────────────
  {
    id: 'r12-01',
    rule: 12,
    question:
      'Je bal ligt in een bunker. Je raakt bij je oefenswing het zand. Wat geldt er?',
    options: [
      'Geen straf, zolang je de ligging niet verbetert',
      'Eén strafslag',
      'Algemene straf (twee strafslagen)',
      'Alleen straf als de bal beweegt',
    ],
    correctIndex: 2,
    explanation:
      'Regel 12.2b: je mag het zand niet aanraken met je club bij een oefenswing, direct vóór of achter de bal, of tijdens je backswing. Straf: algemene straf.',
  },
  {
    id: 'r12-02',
    rule: 12,
    question: 'Wat mag WEL in een bunker vóór je slag?',
    options: [
      'De club grounden vlak achter de bal',
      'Met je club het zand testen',
      'Losse natuurlijke voorwerpen zoals blaadjes en steentjes verwijderen',
      'Zand wegvegen op je speellijn',
    ],
    correctIndex: 2,
    explanation:
      'Regel 12.2a: losse natuurlijke voorwerpen en losse obstakels mogen ook in een bunker worden verwijderd (volgens Regel 15.1). Ook mag je je voeten ingraven voor je stand, clubs neerleggen en op je club leunen.',
  },
  {
    id: 'r12-03',
    rule: 12,
    question:
      'Na een mislukte bunkerslag (de bal blijft in de bunker) hark je uit frustratie het zand achter je bal aan. Straf?',
    options: [
      'Algemene straf, het zand mag nooit aangeraakt worden',
      'Geen straf, mits je daarmee de omstandigheden voor je volgende slag niet verbetert',
      'Eén strafslag',
      'Geen straf, want harken is altijd toegestaan',
    ],
    correctIndex: 1,
    explanation:
      'Regel 12.2b(2): zand aanraken uit zorg voor de baan (harken) of uit frustratie in het zand slaan mag zonder straf, zolang je daarmee niet de omstandigheden voor je volgende slag verbetert.',
  },

  // ── Regel 13: Greens ──────────────────────────────────────────────
  {
    id: 'r13-01',
    rule: 13,
    question: 'Welke schade mag je op de green herstellen vóór je putt?',
    options: [
      'Alleen pitchmarks',
      'Alleen pitchmarks en oude holepluggen',
      'Vrijwel alle schade, ook spikemarks en dierensporen',
      'Niets, de green moet gespeeld worden zoals aangetroffen',
    ],
    correctIndex: 2,
    explanation:
      'Regel 13.1c: sinds 2019 mag vrijwel alle schade op de green worden hersteld: pitchmarks, schoen-/spikemarks, holepluggen, dierensporen enz. Natuurlijke oneffenheden en normale slijtage van de hole vallen er niet onder.',
  },
  {
    id: 'r13-02',
    rule: 13,
    question:
      'Je beweegt op de green per ongeluk je bal met je putter, vóór je hem had gemarkeerd. Wat geldt er?',
    options: [
      'Eén strafslag, bal terugplaatsen',
      'Geen straf, bal terugplaatsen',
      'Geen straf, bal spelen vanaf de nieuwe plek',
      'Twee strafslagen',
    ],
    correctIndex: 1,
    explanation:
      'Regel 13.1d: wordt een bal (of balmarker) op de green per ongeluk bewogen door de speler, dan is er geen straf. De bal moet worden teruggeplaatst op de oorspronkelijke plek.',
  },
  {
    id: 'r13-03',
    rule: 13,
    question:
      'Je gemarkeerde en teruggeplaatste bal wordt op de green door de wind verplaatst. Wat doe je?',
    options: [
      'Spelen vanaf de nieuwe plek',
      'Terugplaatsen op de oorspronkelijke plek, zonder straf',
      'Opnieuw droppen',
      'Terugplaatsen met één strafslag',
    ],
    correctIndex: 1,
    explanation:
      'Regel 13.1d(2): was de bal al gemarkeerd, opgenomen en teruggeplaatst, dan moet hij na beweging door natuurkrachten worden teruggeplaatst. Was hij nog níét teruggeplaatst geweest, dan speel je van de nieuwe plek (Regel 9.3).',
  },
  {
    id: 'r13-04',
    rule: 13,
    question: 'Je bal ligt op een verkeerde green. Wat moet je doen?',
    options: [
      'Spelen zoals hij ligt, dat mag',
      'Verplicht zonder straf ontwijken: droppen bij het dichtstbijzijnde punt zonder belemmering',
      'Ontwijken met één strafslag',
      'Alleen ontwijken als de greenkeeper het vraagt',
    ],
    correctIndex: 1,
    explanation:
      'Regel 13.1f: spelen van een verkeerde green is verboden. Je móét zonder straf ontwijken: de bal droppen binnen één clublengte van het dichtstbijzijnde punt zonder belemmering, niet dichter bij de hole.',
  },
  {
    id: 'r13-05',
    rule: 13,
    question: 'Mag je putten terwijl de vlaggenstok in de hole staat?',
    options: [
      'Nee, dat kost twee strafslagen als de bal de stok raakt',
      'Ja, zonder straf — ook als de bal de stok raakt',
      'Alleen als je caddie de stok bewaakt',
      'Alleen buiten de green',
    ],
    correctIndex: 1,
    explanation:
      'Regel 13.2a: sinds 2019 mag je altijd spelen met de vlaggenstok in de hole. Raakt je bal de stok, dan is er geen straf en speel je de bal zoals hij ligt (of hij is uitgeholed).',
    diagram: 'vlaggenstok',
  },
  {
    id: 'r13-06',
    rule: 13,
    question:
      'Je bal rust tegen de vlaggenstok in de hole, maar niet de hele bal is onder het oppervlak van de green. Is hij uitgeholed?',
    options: [
      'Nee, de hele bal moet onder het oppervlak zijn',
      'Ja, als een deel van de bal in de hole onder het oppervlak van de green is',
      'Nee, je moet de stok eerst verwijderen en zien of hij valt',
      'Alleen in matchplay',
    ],
    correctIndex: 1,
    explanation:
      'Regel 13.2c: rust de bal tegen de vlaggenstok in de hole en is een deel van de bal onder het oppervlak van de green, dan is de bal uitgeholed. Zo niet, dan verwijder je de stok en moet de bal alsnog worden uitgeholed.',
    diagram: 'vlaggenstok',
  },
  {
    id: 'r13-07',
    rule: 13,
    question: 'Je bal hangt op de rand van de hole. Hoe lang mag je wachten of hij valt?',
    options: [
      'Zo lang je wilt',
      'Redelijke tijd om bij de hole te komen plus 10 seconden',
      'Exact 5 seconden',
      'Eén minuut',
    ],
    correctIndex: 1,
    explanation:
      'Regel 13.3a: je krijgt een redelijke tijd om de hole te bereiken plus 10 seconden wachttijd. Valt de bal daarna alsnog, dan telt hij als uitgeholed met je vorige slag, maar krijg je één strafslag erbij.',
  },

  // ── Regel 14: Droppen, markeren, terugplaatsen ────────────────────
  {
    id: 'r14-01',
    rule: 14,
    question: 'Vanaf welke hoogte moet je een bal droppen?',
    options: [
      'Schouderhoogte',
      'Kniehoogte',
      'Heuphoogte',
      'Elke hoogte, als hij maar recht valt',
    ],
    correctIndex: 1,
    explanation:
      'Regel 14.3b: de bal moet vanaf kniehoogte recht naar beneden worden losgelaten, zonder gooien of effect. Kniehoogte = de hoogte van je knie wanneer je rechtop staat.',
  },
  {
    id: 'r14-02',
    rule: 14,
    question:
      'Je dropt correct, maar de bal rolt buiten de dropzone tot stilstand. Wat doe je?',
    options: [
      'Spelen zoals hij ligt',
      'Opnieuw droppen; rolt hij er weer uit, dan plaatsen waar de tweede drop de grond raakte',
      'Direct plaatsen',
      'Eén strafslag en spelen zoals hij ligt',
    ],
    correctIndex: 1,
    explanation:
      'Regel 14.3c: de bal moet in de dropzone tot stilstand komen. Zo niet: tweede keer droppen. Komt hij weer niet in de dropzone tot stilstand, dan plaats je de bal op de plek waar hij bij de tweede drop de grond raakte.',
  },
  {
    id: 'r14-03',
    rule: 14,
    question:
      'Je neemt je bal op de fairway op om hem te identificeren, maar vergeet eerst de plek te markeren. Straf?',
    options: ['Geen straf', 'Eén strafslag', 'Twee strafslagen', 'Verlies van de hole'],
    correctIndex: 1,
    explanation:
      'Regel 14.1a: vóór het opnemen van een bal die moet worden teruggeplaatst, moet de plek gemarkeerd worden. Vergeet je dat, dan krijg je één strafslag.',
  },
  {
    id: 'r14-04',
    rule: 14,
    question: 'In welke situatie mag je je bal NIET schoonmaken na het opnemen?',
    options: [
      'Bal opgenomen op de green',
      'Bal opgenomen om te identificeren',
      'Bal opgenomen voor het nemen van een ontwijkoptie',
      'Bal opgenomen omdat hij het spel van een ander hindert',
    ],
    correctIndex: 1,
    explanation:
      'Regel 14.1c: bij identificeren mag je slechts schoonmaken voor zover nodig om te identificeren. Ook niet schoonmaken: bal opgenomen om te zien of hij beschadigd is, of omdat hij hindert. Op de green en bij relief mag het wél.',
  },
  {
    id: 'r14-05',
    rule: 14,
    question: 'Met welke club meet je een clublengte af?',
    options: [
      'De club waarmee je de volgende slag speelt',
      'De langste club in je tas behalve de putter',
      'De driver, ook als die niet in je tas zit',
      'Elke club die je wilt',
    ],
    correctIndex: 1,
    explanation:
      'Definitie "clublengte": de lengte van de langste club in je tas tijdens de ronde, met uitzondering van de putter. Meestal is dat de driver.',
  },

  // ── Regel 15: Losse natuurlijke voorwerpen & losse obstakels ─────
  {
    id: 'r15-01',
    rule: 15,
    question:
      'Je verwijdert een blaadje naast je bal in het algemene gebied en de bal beweegt daardoor. Wat geldt er?',
    options: [
      'Geen straf, bal terugplaatsen',
      'Eén strafslag en de bal terugplaatsen',
      'Eén strafslag en spelen zoals hij ligt',
      'Algemene straf',
    ],
    correctIndex: 1,
    explanation:
      'Regel 15.1b: beweegt je bal doordat je een los natuurlijk voorwerp verwijdert (buiten de green), dan krijg je één strafslag en moet je de bal terugplaatsen. Op de green is er geen straf.',
  },
  {
    id: 'r15-02',
    rule: 15,
    question: 'Wat is het verschil tussen een los obstakel en een los natuurlijk voorwerp?',
    options: [
      'Er is geen verschil',
      'Een los obstakel is kunstmatig (hark, blikje); een los natuurlijk voorwerp is natuurlijk (blad, tak, steen)',
      'Losse obstakels liggen alleen in bunkers',
      'Losse natuurlijke voorwerpen mag je nooit verwijderen',
    ],
    correctIndex: 1,
    explanation:
      'Losse obstakels zijn kunstmatige voorwerpen (harken, flesjes, pionnen) — overal zonder straf te verwijderen, en beweegt de bal daardoor, dan plaats je hem zonder straf terug. Losse natuurlijke voorwerpen (bladeren, takjes, stenen) mag je ook overal verwijderen, maar buiten de green kost het één strafslag als de bal daardoor beweegt.',
  },
  {
    id: 'r15-03',
    rule: 15,
    question:
      'De bal van een medespeler ligt vlak bij jouw speellijn op de fairway en hindert je. Wat mag je?',
    options: [
      'Niets, spelen zoals het is',
      'Vragen dat hij zijn bal markeert en opneemt',
      'Zijn bal zelf wegleggen',
      'Jouw bal verplaatsen',
    ],
    correctIndex: 1,
    explanation:
      'Regel 15.3b: hindert een bal van een andere speler jouw spel (fysiek of mentaal), dan mag je verlangen dat die speler zijn bal markeert en opneemt. De opgenomen bal mag niet worden schoongemaakt (behalve op de green).',
  },

  // ── Regel 16: Abnormale baanomstandigheden ────────────────────────
  {
    id: 'r16-01',
    rule: 16,
    question:
      'Je bal ligt op een verhard pad (vast obstakel) in het algemene gebied. Wat zijn je opties?',
    options: [
      'Alleen spelen zoals hij ligt',
      'Spelen zoals hij ligt, of gratis ontwijken: droppen binnen één clublengte van het dichtstbijzijnde punt zonder belemmering',
      'Ontwijken met één strafslag',
      'Droppen binnen twee clublengten van het pad',
    ],
    correctIndex: 1,
    explanation:
      'Regel 16.1b: bij een belemmering door een abnormale baanomstandigheid (zoals een verhard pad) mag je zonder straf ontwijken: bepaal het dichtstbijzijnde punt zonder belemmering (niet dichter bij de hole) en drop binnen één clublengte daarvan. Spelen zoals hij ligt mag ook altijd.',
    diagram: 'pad-ontwijken',
  },
  {
    id: 'r16-02',
    rule: 16,
    question: 'Wat hoort NIET bij de abnormale baanomstandigheden?',
    options: [
      'Tijdelijk water',
      'Grond in bewerking (GUR)',
      'Een vast obstakel',
      'Een natuurlijke kale plek in de fairway',
    ],
    correctIndex: 3,
    explanation:
      'Regel 16.1: abnormale baanomstandigheden zijn tijdelijk water, grond in bewerking, vaste obstakels en gaten gemaakt door dieren. Een kale plek of slechte ligging is gewoon "rub of the green" — geen gratis ontwijken.',
  },
  {
    id: 'r16-03',
    rule: 16,
    question:
      'Je staat met je voeten in tijdelijk water maar je bal ligt droog. Mag je gratis ontwijken?',
    options: [
      'Nee, alleen als de bal zelf in het water ligt',
      'Ja, ook belemmering van je stand geeft recht op gratis ontwijken',
      'Alleen met één strafslag',
      'Alleen op de fairway, niet in de rough',
    ],
    correctIndex: 1,
    explanation:
      'Regel 16.1a: er is sprake van belemmering als de bal de omstandigheid raakt of erin/erop ligt, óf als die omstandigheid de ruimte voor je voorgenomen stand of swing fysiek belemmert. Stand in tijdelijk water geeft dus gratis relief.',
  },
  {
    id: 'r16-04',
    rule: 16,
    question:
      'Je bal is ingebed in zijn eigen pitchmark in de fairway. Wat mag je?',
    options: [
      'Gratis ontwijken: droppen binnen één clublengte achter het referentiepunt direct achter de bal',
      'Alleen spelen zoals hij ligt',
      'Ontwijken met één strafslag',
      'De bal eruit halen en plaatsen',
    ],
    correctIndex: 0,
    explanation:
      'Regel 16.3: een ingebedde bal in het algemene gebied geeft gratis relief: het referentiepunt is direct achter de bal; drop binnen één clublengte, niet dichter bij de hole. Geen relief als de bal is ingebed in zand op een niet kortgemaaid deel.',
    diagram: 'ingebedde-bal',
  },
  {
    id: 'r16-05',
    rule: 16,
    question:
      'Tijdelijk water op de green ligt tussen je bal (ook op de green) en de hole. Wat mag je?',
    options: [
      'Niets, spelen zoals het is',
      'Gratis ontwijken: bal plaatsen op het dichtstbijzijnde punt zonder belemmering, eventueel buiten de green',
      'Alleen droppen met één strafslag',
      'De vlag laten bewaken',
    ],
    correctIndex: 1,
    explanation:
      'Regel 16.1d: op de green geeft ook tijdelijk water op je speellijn recht op gratis ontwijken. Je plaatst (niet droppen!) de bal op het dichtstbijzijnde punt zonder belemmering — dat mag ook net buiten de green zijn, maar niet dichter bij de hole.',
    diagram: 'tijdelijk-water-green',
  },
  {
    id: 'r16-06',
    rule: 16,
    question: 'Je bal ligt in GUR ín een bunker. Welke gratis optie heb je?',
    options: [
      'Droppen buiten de bunker, recht naar achteren',
      'Droppen in de bunker binnen één clublengte van het dichtstbijzijnde punt zonder belemmering',
      'Plaatsen waar je wilt in de bunker',
      'Er is geen gratis optie in een bunker',
    ],
    correctIndex: 1,
    explanation:
      'Regel 16.1c: in een bunker mag je gratis ontwijken binnen de bunker (dichtstbijzijnde punt + één clublengte). Buiten de bunker droppen (recht naar achteren) mag ook, maar dat kost één strafslag.',
  },

  // ── Regel 17: Hindernissen ────────────────────────────────────────
  {
    id: 'r17-01',
    rule: 17,
    question:
      'Je bal ligt in een rode hindernis. Hoeveel ontwijkopties met straf heb je?',
    options: [
      'Eén: slag en afstand',
      'Twee: slag en afstand of recht naar achteren',
      'Drie: slag en afstand, recht naar achteren, of zijwaarts binnen twee clublengten',
      'Vier, inclusief droppen aan de overkant',
    ],
    correctIndex: 2,
    explanation:
      'Regel 17.1d: bij een rode hindernis heb je drie opties (elk één strafslag): (1) slag en afstand, (2) recht naar achteren op de lijn hole–kruisingspunt, (3) zijwaarts droppen binnen twee clublengten van het punt waar de bal het laatst de hindernisgrens kruiste, niet dichter bij de hole.',
    diagram: 'rode-hindernis',
  },
  {
    id: 'r17-02',
    rule: 17,
    question: 'Welke ontwijkoptie bestaat NIET bij een gele hindernis?',
    options: [
      'Slag en afstand',
      'Recht naar achteren ontwijken',
      'Zijwaarts ontwijken binnen twee clublengten',
      'De bal spelen zoals hij ligt in de hindernis',
    ],
    correctIndex: 2,
    explanation:
      'Regel 17.1d: bij een gele hindernis heb je alleen slag en afstand of recht naar achteren (elk één strafslag). Zijwaarts ontwijken bestaat alleen bij rode hindernissen. Spelen zoals hij ligt mag altijd, zonder straf.',
    diagram: 'gele-hindernis',
  },
  {
    id: 'r17-03',
    rule: 17,
    question:
      'Mag je in een hindernis de bal spelen zoals hij ligt en daarbij je club grounden?',
    options: [
      'Nee, grounden in een hindernis is verboden',
      'Ja, sinds 2019 gelden in een hindernis de normale regels: grounden en losse natuurlijke voorwerpen verwijderen mag',
      'Alleen in een gele hindernis',
      'Alleen als de bal boven water ligt',
    ],
    correctIndex: 1,
    explanation:
      'Regel 17.1b: een bal in een hindernis mag worden gespeeld volgens dezelfde regels als in het algemene gebied. Je mag dus je club grounden, losse natuurlijke voorwerpen verwijderen en het water raken — zonder straf.',
  },
  {
    id: 'r17-04',
    rule: 17,
    question:
      'Bij "recht naar achteren ontwijken" uit een hindernis: waar moet je referentiepunt liggen?',
    options: [
      'Binnen twee clublengten van de bal',
      'Op de lijn van de hole door het punt waar de bal het laatst de hindernisgrens kruiste, zo ver naar achteren als je wilt',
      'Maximaal 50 meter achter de hindernis',
      'Op de plek van je vorige slag',
    ],
    correctIndex: 1,
    explanation:
      'Regel 17.1d(2): je dropt op een referentielijn van de hole door het punt waar de bal het laatst de grens van de hindernis kruiste. Er is geen afstandslimiet naar achteren; drop binnen één clublengte van het gekozen punt op die lijn.',
    diagram: 'recht-naar-achteren',
  },
  {
    id: 'r17-05',
    rule: 17,
    question:
      'Je bal ligt waarschijnlijk in een rode hindernis, maar je hebt hem niet gevonden. Wat geldt er?',
    options: [
      'Je moet terug naar de vorige plek (slag en afstand)',
      'Als het bekend of praktisch zeker is dat de bal in de hindernis ligt, mag je de hindernis-ontwijkopties gebruiken',
      'Je mag droppen waar je denkt dat hij ligt, zonder straf',
      'De bal is automatisch buiten de baan',
    ],
    correctIndex: 1,
    explanation:
      'Regel 17.1c: is het bekend of praktisch zeker (95%+) dat de bal in de hindernis is, dan mag je de ontwijkopties van Regel 17.1d gebruiken op basis van het geschatte kruisingspunt. Anders is de bal verloren en geldt slag en afstand.',
  },

  // ── Regel 18: Verloren / buiten de baan / provisioneel ────────────
  {
    id: 'r18-01',
    rule: 18,
    question: 'Hoeveel zoektijd heb je voordat je bal verloren is?',
    options: ['2 minuten', '3 minuten', '5 minuten', '10 minuten'],
    correctIndex: 1,
    explanation:
      'Regel 18.2a: een bal is verloren als hij niet binnen drie minuten is gevonden nadat jij of je caddie begonnen is met zoeken.',
  },
  {
    id: 'r18-02',
    rule: 18,
    question: 'Je bal ligt buiten de baan (out of bounds). Wat zijn je opties?',
    options: [
      'Droppen waar de bal de grens kruiste, met één strafslag',
      'Alleen slag en afstand: met één strafslag opnieuw spelen van de vorige plek',
      'Zijwaarts ontwijken met twee strafslagen',
      'Gratis droppen binnen twee clublengten van de grens',
    ],
    correctIndex: 1,
    explanation:
      'Regel 18.2b: voor een bal buiten de baan geldt alleen slag en afstand — met één strafslag spelen van de plek van de vorige slag. (Een plaatselijke regel kan soms een alternatief met twee strafslagen bieden, maar dat is geen standaardregel.)',
    diagram: 'ob-palen',
  },
  {
    id: 'r18-03',
    rule: 18,
    question:
      'Wanneer ligt een bal buiten de baan bij witte palen?',
    options: [
      'Zodra de bal een witte paal raakt',
      'Als een deel van de bal over de grenslijn ligt',
      'Pas als de héle bal buiten de grenslijn ligt',
      'Als meer dan de helft van de bal buiten ligt',
    ],
    correctIndex: 2,
    explanation:
      'Definitie "buiten de baan": de grens loopt langs de binnenkant van de palen op grondniveau. Een bal is pas buiten de baan als hij er hélemaal buiten ligt. Raakt zelfs maar een deel van de bal de baan, dan is hij in het spel.',
    diagram: 'ob-palen',
  },
  {
    id: 'r18-04',
    rule: 18,
    question: 'Wat moet je zeggen vóór je een provisionele bal speelt?',
    options: [
      'Niets, het is duidelijk uit de situatie',
      'Je moet duidelijk aangeven dat het om een provisionele bal gaat, bijvoorbeeld met het woord "provisioneel"',
      '"Ik speel nog een bal"',
      '"Fore!"',
    ],
    correctIndex: 1,
    explanation:
      'Regel 18.3b: je moet vóór de slag kenbaar maken dat je een provisionele bal speelt — het woord "provisioneel" gebruiken of anders duidelijk maken dat je provisioneel speelt. Zeg je alleen "ik speel er nog één", dan is die bal direct de bal in het spel (met slag en afstand).',
    diagram: 'provisionele-bal',
  },
  {
    id: 'r18-05',
    rule: 18,
    question:
      'Je vindt je originele bal binnen 3 minuten in de rough, maar je provisionele bal ligt veel beter. Welke bal moet je spelen?',
    options: [
      'De provisionele bal, die ligt in het spel',
      'Je mag kiezen',
      'De originele bal; de provisionele bal moet worden opgegeven',
      'Beide uitspelen en de beste score nemen',
    ],
    correctIndex: 2,
    explanation:
      'Regel 18.3c: is de originele bal binnen de zoektijd op de baan gevonden (buiten een hindernis), dan moet je daarmee verder. De provisionele bal moet worden opgegeven; alle slagen ermee vervallen.',
    diagram: 'provisionele-bal',
  },
  {
    id: 'r18-06',
    rule: 18,
    question: 'Wanneer mag je géén provisionele bal spelen?',
    options: [
      'Als je bal mogelijk buiten de baan ligt',
      'Als je bal mogelijk verloren is in de rough',
      'Als het vrijwel zeker is dat je bal alleen in een hindernis kan liggen',
      'Op een par-3',
    ],
    correctIndex: 2,
    explanation:
      'Regel 18.3a: een provisionele bal mag alleen als je bal mogelijk verloren is buiten een hindernis of buiten de baan ligt. Is het duidelijk dat de bal alleen in een hindernis kan zijn, dan is een provisionele bal niet toegestaan — speel je er toch één, dan is dat je bal in het spel met slag en afstand.',
  },

  // ── Regel 19: Onspeelbare bal ─────────────────────────────────────
  {
    id: 'r19-01',
    rule: 19,
    question: 'Wie bepaalt of een bal onspeelbaar is?',
    options: [
      'De marker',
      'De speler zelf, overal behalve in een hindernis',
      'De Commissie',
      'De flightgenoten samen',
    ],
    correctIndex: 1,
    explanation:
      'Regel 19.1: alleen de speler beslist of zijn bal onspeelbaar is. Dat mag overal op de baan, behalve in een hindernis — daar gelden alleen de opties van Regel 17.',
  },
  {
    id: 'r19-02',
    rule: 19,
    question:
      'Je verklaart je bal onspeelbaar in het algemene gebied. Welke opties heb je (elk met één strafslag)?',
    options: [
      'Alleen slag en afstand',
      'Slag en afstand, recht naar achteren, of zijwaarts binnen twee clublengten',
      'Alleen zijwaarts binnen één clublengte',
      'Gratis droppen op de fairway',
    ],
    correctIndex: 1,
    explanation:
      'Regel 19.2: drie opties, elk één strafslag: (a) slag en afstand, (b) recht naar achteren op de lijn hole–bal, (c) zijwaarts: droppen binnen twee clublengten van de plek van de bal, niet dichter bij de hole.',
  },
  {
    id: 'r19-03',
    rule: 19,
    question:
      'Je bal ligt onspeelbaar in een bunker. Welke extra optie heb je naast de drie normale opties?',
    options: [
      'Gratis droppen buiten de bunker',
      'Met in totaal twee strafslagen recht naar achteren droppen buíten de bunker',
      'De bal plaatsen op de rand van de bunker met één strafslag',
      'Er is geen extra optie',
    ],
    correctIndex: 1,
    explanation:
      'Regel 19.3b: bij een onspeelbare bal in een bunker mag je, met in totaal twee strafslagen, recht naar achteren ontwijken buíten de bunker. De drie gewone opties (één strafslag) blijven ook beschikbaar, maar bij recht naar achteren en zijwaarts moet de bal dan in de bunker worden gedropt.',
    diagram: 'bunker-onspeelbaar',
  },
  {
    id: 'r19-04',
    rule: 19,
    question:
      'Mag je je bal onspeelbaar verklaren terwijl hij in een rode hindernis ligt?',
    options: [
      'Ja, altijd',
      'Nee, in een hindernis gelden alleen de ontwijkopties van Regel 17',
      'Alleen met toestemming van de marker',
      'Alleen als de bal in het water ligt',
    ],
    correctIndex: 1,
    explanation:
      'Regel 19.1: de onspeelbare-bal-regel geldt overal behalve in een hindernis. Ligt je bal in een hindernis, dan kun je alleen spelen zoals hij ligt of ontwijken volgens Regel 17.1d.',
  },

  // ── Regel 20 ──────────────────────────────────────────────────────
  {
    id: 'r20-01',
    rule: 20,
    question:
      'In strokeplay twijfel je over de juiste procedure en er is geen referee in de buurt. Wat mag je doen?',
    options: [
      'Niets, je moet wachten op een referee',
      'Twee ballen spelen en de kwestie later aan de Commissie voorleggen',
      'Zelf kiezen, de uitkomst is definitief',
      'De hole overslaan',
    ],
    correctIndex: 1,
    explanation:
      'Regel 20.1c(3): bij twijfel in strokeplay mag je de hole met twee ballen uitspelen. Kondig vooraf aan welke bal moet tellen als de Regels het toelaten, en meld de feiten vóór het inleveren van je scorekaart aan de Commissie.',
  },

  // ── Regel 22 & 23: Foursomes & Four-ball ──────────────────────────
  {
    id: 'r22-01',
    rule: 22,
    question: 'Bij foursomes (alternate shot): wie slaat af op de oneven holes?',
    options: [
      'Wie het verst kan slaan',
      'De partner die daarvoor is aangewezen; partners wisselen per hole af (één speelt de oneven, de ander de even holes)',
      'Altijd de laagste handicapper',
      'Dat mogen ze per hole kiezen',
    ],
    correctIndex: 1,
    explanation:
      'Regel 22.3: bij foursomes slaat één partner af op de oneven holes en de ander op de even holes, ongeacht wie de hole ervoor heeft uitgeholed. Daarna spelen ze om de beurt.',
  },
  {
    id: 'r23-01',
    rule: 23,
    question:
      'Bij four-ball: jouw partner heeft al een 4 binnen en jouw putt kan nog een 4 worden. Mag je oefenen door de putt toch te spelen?',
    options: [
      'Ja, maar alleen als het de score van het team niet meer beïnvloedt en je daarmee je partner niet helpt',
      'Nee, dat is altijd verboden',
      'Alleen in matchplay',
      'Alleen als de flight akkoord is',
    ],
    correctIndex: 0,
    explanation:
      'Regel 23.4: in four-ball mag je je eigen bal blijven uitspelen. Let op: doe je dat op een manier die je partner helpt (bijvoorbeeld om hem de lijn te tonen), dan krijgt je pártner de straf (Regel 23.8).',
  },

  // ── Extra praktijkvragen met tekening ─────────────────────────────
  {
    id: 'r17-06',
    rule: 17,
    question:
      'Je bal vliegt over een rode hindernis, landt en rolt terug het water in. Hij kruiste de rode lijn het laatst aan de overkant (greenzijde). Vanaf welk punt bepaal je je zijwaartse ontwijkoptie?',
    options: [
      'Het punt waar de bal de hindernis het éérst binnenvloog',
      'Het punt waar de bal het láátst de grens van de hindernis kruiste (greenzijde)',
      'Het punt waar de bal nu in het water ligt',
      'Het midden van de hindernis',
    ],
    correctIndex: 1,
    explanation:
      'Regel 17.1d: het referentiepunt is altijd het geschatte punt waar de bal het láátst de grens van de hindernis heeft gekruist. Rolt de bal aan de overkant terug het water in, dan mag je dus aan de greenzijde zijwaarts ontwijken (binnen twee clublengten, niet dichter bij de hole).',
    diagram: 'rode-hindernis',
  },
  {
    id: 'r16-07',
    rule: 16,
    question:
      'Rechtshandige speler: je bal ligt rechts naast een verhard pad, maar je staat met je voeten op het pad. Waar ligt het dichtstbijzijnde punt zonder belemmering meestal?',
    options: [
      'Altijd aan de fairwaykant van het pad',
      'Het punt — links of rechts van het pad — dat het dichtst bij de bal ligt en waar bal, stand én swing vrij zijn, niet dichter bij de hole',
      'Altijd twee clublengten van het pad',
      'Op het pad zelf',
    ],
    correctIndex: 1,
    explanation:
      'Regel 16.1: het dichtstbijzijnde punt zonder belemmering is het punt het dichtst bij de oorspronkelijke ligging waar geen belemmering meer bestaat voor ligging, stand én swing — niet dichter bij de hole. Het kan dus ook aan de "slechte" kant van het pad liggen; je mag niet kiezen voor de mooiste kant.',
    diagram: 'pad-ontwijken',
  },
  {
    id: 'r17-07',
    rule: 17,
    question:
      'Bal A ligt in een geel gemarkeerde waterpartij, bal B in een rood gemarkeerde. Wat is het verschil in ontwijkopties?',
    options: [
      'Geen verschil, de kleur is alleen decoratie',
      'Bij rood (B) heb je als extra optie zijwaarts ontwijken binnen twee clublengten; bij geel (A) alleen slag en afstand of recht naar achteren',
      'Bij geel (A) mag je gratis ontwijken, bij rood (B) kost het een strafslag',
      'Bij rood (B) moet je altijd opnieuw afslaan',
    ],
    correctIndex: 1,
    explanation:
      'Regel 17.1d: geel geeft twee opties (slag en afstand, of recht naar achteren), rood geeft dezelfde twee plús zijwaarts ontwijken: droppen binnen twee clublengten van het punt waar de bal het laatst de hindernisgrens kruiste, niet dichter bij de hole. Alle opties kosten één strafslag.',
    diagram: 'rood-vs-geel',
  },
  {
    id: 'r19-05',
    rule: 19,
    question:
      'Je bal ligt onspeelbaar onder een dichte struik. Je kiest de zijwaartse optie (één strafslag). Vanaf welk punt meet je de twee clublengten?',
    options: [
      'Vanaf de rand van de struik',
      'Vanaf de plek waar de bal zelf ligt — ook al is dat midden onder de struik',
      'Vanaf het dichtstbijzijnde punt zonder belemmering',
      'Vanaf de plek waar je het beste kunt staan',
    ],
    correctIndex: 1,
    explanation:
      'Regel 19.2c: het referentiepunt voor zijwaarts ontwijken is de plek van de bal zélf. Je dropt binnen twee clublengten daarvan, niet dichter bij de hole. Let op: ligt de bal diep onder een grote struik, dan kan de hele dropzone nog steeds in de struik liggen — kies dan eventueel een andere optie.',
    diagram: 'onspeelbaar-struik',
  },
  {
    id: 'r19-06',
    rule: 19,
    question:
      'Onspeelbare bal: je kiest "recht naar achteren" (één strafslag). Op welke lijn moet je droppen?',
    options: [
      'De lijn van de hole door de plek van de bal, zo ver naar achteren als je wilt',
      'De lijn van je vorige slag naar de bal',
      'Maximaal twee clublengten recht naar achteren',
      'Een lijn die je zelf mag kiezen, weg van de struik',
    ],
    correctIndex: 0,
    explanation:
      'Regel 19.2b: je houdt de lijn aan van de hole door de plek waar de bal ligt en gaat op die lijn zo ver naar achteren als je wilt. Daar kies je een punt en drop je binnen één clublengte van dat punt, niet dichter bij de hole.',
    diagram: 'onspeelbaar-struik',
  },
  {
    id: 'r19-07',
    rule: 19,
    question: 'Welke van deze is GEEN toegestane optie bij een onspeelbare bal in het algemene gebied?',
    options: [
      'Met één strafslag opnieuw spelen van de plek van je vorige slag',
      'Met één strafslag recht naar achteren droppen op de lijn hole–bal',
      'Met één strafslag droppen binnen twee clublengten van de bal, niet dichter bij de hole',
      'Met één strafslag droppen op de fairway, ter hoogte van waar de bal ligt',
    ],
    correctIndex: 3,
    explanation:
      '"Naar de fairway ter hoogte van de bal" bestaat níét als optie bij een onspeelbare bal (Regel 19.2). Die verwarring komt door de plaatselijke regel voor een verloren bal of bal buiten de baan (Model Local Rule E-5), waarbij je met twéé strafslagen naar de fairwayrand mag — maar die geldt alleen als de club hem heeft ingevoerd.',
  },
  {
    id: 'r16-08',
    rule: 16,
    question:
      'Je ontwijkt een pad gratis en dropt naast het pad, maar bij het innemen van je stand staan je voeten nog óp het pad. Mag je zo spelen?',
    options: [
      'Ja, alleen de bal moet vrij van het pad zijn',
      'Ja, als het pad je swing niet hindert',
      'Nee — je moet vollédig ontwijken: ook je stand en swing moeten vrij zijn. De bal ligt buiten de juiste dropzone, dus opnieuw droppen',
      'Nee, en je krijgt direct twee strafslagen',
    ],
    correctIndex: 2,
    explanation:
      'Regel 16.1: gratis ontwijken betekent volledige ontwijking — ligging, stand én swing moeten vrij zijn van het pad. Het dichtstbijzijnde punt zonder belemmering houdt daar al rekening mee. Sta je na de drop nog op het pad, dan lag de bal niet in de juiste dropzone: zonder straf opnieuw droppen. Speel je tóch, dan is dat spelen van een verkeerde plaats (algemene straf).',
    diagram: 'pad-volledig-ontwijken',
  },
  {
    id: 'r16-09',
    rule: 16,
    question:
      'Je bal ligt midden op een pad. Links van het pad is hoge rough, rechts mooie fairway. Het dichtstbijzijnde punt zonder belemmering ligt nét links, in de rough. Waar moet je droppen?',
    options: [
      'Rechts op de fairway — je mag de kant kiezen',
      'Links in de rough — het dichtstbijzijnde punt bepaalt de kant, ook al is dat de slechtste',
      'Aan de kant van de hole',
      'Om het even waar binnen twee clublengten van het pad',
    ],
    correctIndex: 1,
    explanation:
      'Regel 16.1: gratis ontwijken gebeurt altijd vanaf hét dichtstbijzijnde punt zonder belemmering — niet het gunstigste punt. Ligt dat punt in de rough, dan drop je binnen één clublengte dáárvan (niet dichter bij de hole). Wil je dat niet, dan mag je de bal ook gewoon spelen zoals hij ligt, of hem onspeelbaar verklaren (met strafslag).',
  },
  {
    id: 'r18-07',
    rule: 18,
    question:
      'Je provisionele bal ligt op de plek waar je originele bal vermoedelijk verloren is. Je speelt de provisionele bal van daaruit verder zonder je originele bal te zoeken. Wat is het gevolg?',
    options: [
      'Niets, je mag altijd verder met de provisionele bal',
      'De provisionele bal wordt de bal in het spel (met slag en afstand) zodra je hem speelt vanaf een plek even ver of dichter bij de hole dan waar de originele vermoedelijk ligt',
      'Twee strafslagen extra',
      'Je moet eerst 3 minuten zoeken',
    ],
    correctIndex: 1,
    explanation:
      'Regel 18.3c: speel je de provisionele bal vanaf een plek die even ver of dichter bij de hole is dan de vermoedelijke plek van je originele bal, dan wordt de provisionele bal definitief de bal in het spel, met de straf van slag en afstand.',
    diagram: 'provisionele-bal',
  },
];
