import React from 'react';
import { View } from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  Line,
  Path,
  Polygon,
  Rect,
  Text as SvgText,
} from 'react-native-svg';
import { DiagramId } from '../types';

const W = 320;
const H = 220;

const C = {
  fairway: '#7cb342',
  rough: '#558b2f',
  green: '#9ccc65',
  sand: '#e6d690',
  water: '#64b5f6',
  red: '#e53935',
  yellow: '#fdd835',
  white: '#ffffff',
  ball: '#ffffff',
  text: '#1b3a1b',
  arrow: '#1565c0',
};

function Flag({ x, y }: { x: number; y: number }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={6} fill="#33691e" />
      <Circle cx={x} cy={y} r={3.5} fill="#102610" />
      <Line x1={x} y1={y} x2={x} y2={y - 30} stroke="#fafafa" strokeWidth={2} />
      <Polygon points={`${x},${y - 30} ${x + 14},${y - 25} ${x},${y - 20}`} fill={C.red} />
    </G>
  );
}

function Ball({ x, y, label }: { x: number; y: number; label?: string }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={5} fill={C.ball} stroke="#333" strokeWidth={1} />
      {label ? (
        <SvgText x={x + 9} y={y + 4} fontSize={11} fill={C.text} fontWeight="bold">
          {label}
        </SvgText>
      ) : null}
    </G>
  );
}

function Stake({ x, y, color }: { x: number; y: number; color: string }) {
  return <Rect x={x - 2.5} y={y - 9} width={5} height={18} rx={1.5} fill={color} stroke="#444" strokeWidth={0.6} />;
}

function Arrow({ x1, y1, x2, y2, dashed }: { x1: number; y1: number; x2: number; y2: number; dashed?: boolean }) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const ah = 8;
  const p1x = x2 - ah * Math.cos(angle - 0.4);
  const p1y = y2 - ah * Math.sin(angle - 0.4);
  const p2x = x2 - ah * Math.cos(angle + 0.4);
  const p2y = y2 - ah * Math.sin(angle + 0.4);
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.arrow} strokeWidth={2} strokeDasharray={dashed ? '5,4' : undefined} />
      <Polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={C.arrow} />
    </G>
  );
}

function Label({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <SvgText x={x} y={y} fontSize={11} fill={C.text} fontWeight="600">
      {children}
    </SvgText>
  );
}

function Base({ children }: { children: React.ReactNode }) {
  return (
    <Svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`}>
      <Rect x={0} y={0} width={W} height={H} rx={12} fill={C.rough} />
      {children}
    </Svg>
  );
}

function PenaltyArea({ color }: { color: string }) {
  // Gedeeld decor: fairway links, hindernis (water) in het midden, green rechts.
  return (
    <G>
      <Rect x={0} y={40} width={W} height={140} fill={C.fairway} />
      <Path d={`M 130 30 Q 165 110 130 200 L 200 200 Q 175 110 200 30 Z`} fill={C.water} />
      <Path d={`M 130 30 Q 165 110 130 200`} stroke={color} strokeWidth={3} fill="none" strokeDasharray="7,5" />
      <Path d={`M 200 30 Q 175 110 200 200`} stroke={color} strokeWidth={3} fill="none" strokeDasharray="7,5" />
      <Stake x={133} y={60} color={color} />
      <Stake x={138} y={120} color={color} />
      <Stake x={133} y={175} color={color} />
      <Stake x={197} y={60} color={color} />
      <Stake x={192} y={120} color={color} />
      <Ellipse cx={272} cy={105} rx={42} ry={36} fill={C.green} />
      <Flag x={272} y={105} />
    </G>
  );
}

function diagramContent(id: DiagramId): React.ReactNode {
  switch (id) {
    case 'rode-hindernis':
      return (
        <G>
          <PenaltyArea color={C.red} />
          <Ball x={168} y={110} />
          <Label x={146} y={205}>rode hindernis</Label>
          {/* kruisingspunt en zijwaartse dropzone */}
          <Circle cx={193} cy={95} r={4} fill={C.red} />
          <Label x={203} y={86}>kruisingspunt X</Label>
          <Arrow x1={50} y1={70} x2={150} y2={100} dashed />
          <Ball x={45} y={68} label="vorige slag" />
        </G>
      );
    case 'gele-hindernis':
      return (
        <G>
          <PenaltyArea color={C.yellow} />
          <Ball x={168} y={110} />
          <Label x={146} y={205}>gele hindernis</Label>
          <Circle cx={193} cy={95} r={4} fill="#b29500" />
          <Label x={203} y={86}>kruisingspunt X</Label>
          <Ball x={45} y={150} label="vorige slag" />
        </G>
      );
    case 'ob-palen':
      return (
        <G>
          <Rect x={0} y={0} width={W} height={H} fill={C.fairway} />
          <Rect x={235} y={0} width={W - 235} height={H} fill="#8d6e63" opacity={0.55} />
          <Line x1={235} y1={0} x2={235} y2={H} stroke={C.white} strokeWidth={2.5} strokeDasharray="8,6" />
          <Stake x={235} y={30} color={C.white} />
          <Stake x={235} y={100} color={C.white} />
          <Stake x={235} y={170} color={C.white} />
          <Label x={250} y={20}>buiten de baan</Label>
          <Label x={120} y={20}>baan</Label>
          <Ball x={228} y={70} label="A" />
          <Ball x={247} y={140} label="B" />
          <Label x={20} y={205}>twee ballen bij de grens (witte palen)</Label>
        </G>
      );
    case 'pad-ontwijken':
      return (
        <G>
          <Rect x={0} y={0} width={W} height={H} fill={C.fairway} />
          <Path d="M 120 0 L 165 0 L 185 220 L 140 220 Z" fill="#bdbdbd" stroke="#8d8d8d" strokeWidth={2} />
          <Label x={132} y={115}>pad</Label>
          <Ball x={196} y={120} />
          <Ellipse cx={172} cy={112} rx={5} ry={8} fill="#1565c0" />
          <Ellipse cx={172} cy={132} rx={5} ry={8} fill="#1565c0" />
          <Label x={195} y={150}>stand op het pad</Label>
          <Ellipse cx={60} cy={40} rx={40} ry={30} fill={C.green} />
          <Flag x={60} y={40} />
        </G>
      );
    case 'bunker-onspeelbaar':
      return (
        <G>
          <Rect x={0} y={0} width={W} height={H} fill={C.fairway} />
          <Ellipse cx={150} cy={130} rx={55} ry={35} fill={C.sand} stroke="#c9b873" strokeWidth={2} />
          <Label x={125} y={180}>bunker</Label>
          <Ball x={150} y={130} />
          <Ellipse cx={262} cy={50} rx={42} ry={32} fill={C.green} />
          <Flag x={262} y={50} />
          <Label x={90} y={208}>bal onspeelbaar in de bunker</Label>
        </G>
      );
    case 'provisionele-bal':
      return (
        <G>
          <Rect x={0} y={40} width={W} height={140} fill={C.fairway} />
          <Rect x={200} y={0} width={120} height={H} fill={C.rough} />
          <Label x={228} y={20}>hoge rough</Label>
          <Ball x={250} y={100} label="origineel?" />
          <Ball x={150} y={120} label="provisioneel" />
          <Ball x={30} y={110} label="tee" />
          <Arrow x1={38} y1={106} x2={240} y2={96} dashed />
        </G>
      );
    case 'recht-naar-achteren':
      return (
        <G>
          <PenaltyArea color={C.red} />
          <Circle cx={193} cy={95} r={4} fill={C.red} />
          <Label x={203} y={88}>kruisingspunt</Label>
          <Ball x={168} y={110} />
          <Label x={40} y={205}>je kiest: recht naar achteren ontwijken</Label>
        </G>
      );
    case 'ingebedde-bal':
      return (
        <G>
          <Rect x={0} y={0} width={W} height={H} fill={C.fairway} />
          {/* zijaanzicht inzet */}
          <Rect x={40} y={60} width={240} height={90} rx={8} fill="#5d4037" />
          <Rect x={40} y={60} width={240} height={28} fill={C.fairway} stroke="#33691e" strokeWidth={1} />
          <Path d="M 140 88 Q 160 60 180 88" fill="#5d4037" />
          <Circle cx={160} cy={86} r={11} fill={C.ball} stroke="#333" strokeWidth={1} />
          <Label x={120} y={175}>bal in eigen pitchmark</Label>
          <Label x={60} y={45}>zijaanzicht — fairway (algemene gebied)</Label>
        </G>
      );
    case 'tijdelijk-water-green':
      return (
        <G>
          <Rect x={0} y={0} width={W} height={H} fill={C.fairway} />
          <Ellipse cx={160} cy={110} rx={120} ry={80} fill={C.green} />
          <Flag x={235} y={95} />
          <Ball x={80} y={130} />
          <Ellipse cx={160} cy={115} rx={38} ry={22} fill={C.water} opacity={0.85} />
          <Label x={132} y={118}>plas</Label>
          <Line x1={85} y1={129} x2={228} y2={98} stroke="#666" strokeWidth={1.5} strokeDasharray="4,3" />
          <Label x={60} y={192}>plas op je speellijn, alles op de green</Label>
        </G>
      );
    case 'afslagplaats':
      return (
        <G>
          <Rect x={0} y={0} width={W} height={H} fill={C.fairway} />
          <Rect x={90} y={70} width={140} height={80} rx={4} fill="#8bc34a" stroke={C.white} strokeWidth={2} strokeDasharray="6,4" />
          <Circle cx={100} cy={70} r={7} fill="#fdd835" stroke="#444" strokeWidth={1} />
          <Circle cx={220} cy={70} r={7} fill="#fdd835" stroke="#444" strokeWidth={1} />
          <Label x={104} y={58}>tee-markers</Label>
          <Ball x={150} y={100} label="bal" />
          <Circle cx={150} cy={160} r={8} fill="#1565c0" />
          <Label x={162} y={165}>speler</Label>
        </G>
      );
    case 'vlaggenstok':
      return (
        <G>
          <Rect x={0} y={0} width={W} height={H} fill={C.green} />
          {/* zijaanzicht van de hole */}
          <Rect x={120} y={120} width={80} height={70} fill="#3e2723" />
          <Rect x={0} y={110} width={120} height={10} fill="#33691e" />
          <Rect x={200} y={110} width={120} height={10} fill="#33691e" />
          <Rect x={156} y={20} width={6} height={150} fill="#eceff1" stroke="#90a4ae" strokeWidth={1} />
          <Polygon points="162,20 200,30 162,40" fill={C.red} />
          <Circle cx={147} cy={130} r={13} fill={C.ball} stroke="#333" strokeWidth={1} />
          <Line x1={0} y1={120} x2={320} y2={120} stroke="#1b5e20" strokeWidth={1.5} strokeDasharray="5,4" />
          <Label x={10} y={105}>oppervlak van de green</Label>
          <Label x={60} y={205}>zijaanzicht — bal rust tegen de vlaggenstok</Label>
        </G>
      );
    case 'rood-vs-geel':
      return (
        <G>
          <Rect x={0} y={0} width={W} height={H} fill={C.fairway} />
          <Ellipse cx={160} cy={36} rx={44} ry={28} fill={C.green} />
          <Flag x={160} y={36} />
          {/* gele vijver links */}
          <Ellipse cx={75} cy={140} rx={58} ry={40} fill={C.water} />
          <Ellipse cx={75} cy={140} rx={58} ry={40} fill="none" stroke={C.yellow} strokeWidth={3} strokeDasharray="7,5" />
          <Stake x={28} y={120} color={C.yellow} />
          <Stake x={75} y={98} color={C.yellow} />
          <Stake x={122} y={120} color={C.yellow} />
          <Ball x={75} y={140} label="A" />
          <Label x={55} y={200}>geel</Label>
          {/* rode vijver rechts */}
          <Ellipse cx={245} cy={140} rx={58} ry={40} fill={C.water} />
          <Ellipse cx={245} cy={140} rx={58} ry={40} fill="none" stroke={C.red} strokeWidth={3} strokeDasharray="7,5" />
          <Stake x={198} y={120} color={C.red} />
          <Stake x={245} y={98} color={C.red} />
          <Stake x={292} y={120} color={C.red} />
          <Ball x={245} y={140} label="B" />
          <Label x={228} y={200}>rood</Label>
        </G>
      );
    case 'onspeelbaar-struik':
      return (
        <G>
          <Rect x={0} y={0} width={W} height={H} fill={C.fairway} />
          <Ellipse cx={258} cy={45} rx={46} ry={34} fill={C.green} />
          <Flag x={258} y={45} />
          {/* dichte struik */}
          <Ellipse cx={120} cy={140} rx={52} ry={36} fill="#2e4d1f" />
          <Ellipse cx={88} cy={128} rx={26} ry={20} fill="#3a5f28" />
          <Ellipse cx={150} cy={125} rx={28} ry={20} fill="#3a5f28" />
          <Ellipse cx={120} cy={158} rx={30} ry={18} fill="#33531f" />
          <Ball x={120} y={140} />
          <Label x={78} y={200}>bal onspeelbaar onder de struik</Label>
        </G>
      );
    case 'pad-volledig-ontwijken':
      return (
        <G>
          <Rect x={0} y={0} width={W} height={H} fill={C.fairway} />
          <Path d="M 150 0 L 200 0 L 215 220 L 165 220 Z" fill="#bdbdbd" stroke="#8d8d8d" strokeWidth={2} />
          <Label x={166} y={40}>pad</Label>
          <Ellipse cx={60} cy={50} rx={40} ry={30} fill={C.green} />
          <Flag x={60} y={50} />
          <Ball x={135} y={130} label="gedropte bal" />
          {/* voeten van de speler nog op het pad */}
          <Ellipse cx={180} cy={120} rx={6} ry={9} fill="#1565c0" />
          <Ellipse cx={184} cy={145} rx={6} ry={9} fill="#1565c0" />
          <Label x={196} y={138}>voeten</Label>
          <Label x={50} y={205}>na de drop: stand nog op het pad</Label>
        </G>
      );
    case 'green-bal-raakt-bal':
      return (
        <G>
          <Rect x={0} y={0} width={W} height={H} fill={C.fairway} />
          <Ellipse cx={160} cy={110} rx={125} ry={82} fill={C.green} />
          <Flag x={245} y={90} />
          <Ball x={70} y={140} label="jouw putt" />
          <Ball x={170} y={115} label="bal medespeler" />
          <Arrow x1={78} y1={137} x2={160} y2={118} />
          <Label x={70} y={205}>beide ballen liggen op de green</Label>
        </G>
      );
  }
}

export default function Diagram({ id }: { id: DiagramId }) {
  return (
    <View pointerEvents="none" style={{ borderRadius: 12, overflow: 'hidden', marginVertical: 10 }}>
      <Base>{diagramContent(id)}</Base>
    </View>
  );
}
