export interface Phase {
  id: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  points: string[];
}

export const phases: Phase[] = [
  {
    id: 'topo-scanned',
    index: 'Phase 01',
    title: 'Topo-Scanned',
    summary: 'LiDAR terrain capture',
    description:
      'Every contour is captured as a digital twin through airborne and ground LiDAR, producing a millimetre-accurate survey before a single module is cut.',
    points: ['Airborne LiDAR', 'Digital twin', 'Contour fidelity'],
  },
  {
    id: 'fabrication',
    index: 'Phase 02',
    title: 'Off-Site Fabrication',
    summary: 'Aerospace-grade production',
    description:
      'Modules are produced in a climate-controlled facility to aerospace tolerances, eliminating field waste and weather-dependent delays entirely.',
    points: ['Zero field waste', 'Climate controlled', 'Aerospace tolerance'],
  },
  {
    id: 'rigging',
    index: 'Phase 03',
    title: 'Precision Rigging',
    summary: 'Rapid, low-impact assembly',
    description:
      'Crane rigging places finished modules onto pinned foundations in a single sequence, preserving the original vegetation and terrain profile.',
    points: ['Single sequence', 'Vegetation intact', '72-hour envelope'],
  },
];
