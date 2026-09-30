export interface Metric {
  id: string;
  value: string;
  unit: string;
  label: string;
  description: string;
}

export const metrics: Metric[] = [
  {
    id: 'tolerance',
    value: '0.02',
    unit: 'mm',
    label: 'Structural Tolerance',
    description:
      'Verified deviation per structural node across every fabricated module joint.',
  },
  {
    id: 'assembly',
    value: '72',
    unit: 'hrs',
    label: 'Assembly Window',
    description:
      'Complete on-site erection of a 250m² living pod, from foundation pin to envelope seal.',
  },
  {
    id: 'carbon',
    value: 'Net',
    unit: 'negative',
    label: 'Lifecycle Carbon',
    description:
      'Carbon-capture composite envelope sequesters more CO₂ than fabrication emits.',
  },
  {
    id: 'wind',
    value: 'Cat',
    unit: '5',
    label: 'Wind Resistance',
    description:
      'Dynamic load dampening rated for category-5 cyclonic gust profiles.',
  },
];
