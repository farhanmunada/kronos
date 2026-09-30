export interface Pod {
  id: string;
  index: string;
  name: string;
  typology: string;
  area: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export const pods: Pod[] = [
  {
    id: 'vapour-line',
    index: 'Pod 01',
    name: 'Vapour-Line',
    typology: 'Cliffside Living',
    area: '120 m²',
    description:
      'A cantilevered residence engineered to hang beyond the cliff edge, drawing water and power from the atmosphere itself.',
    features: [
      'Cantilevered carbon deck',
      'Electrochromic glass facade',
      'Off-grid atmospheric water generator',
    ],
    specs: [
      { label: 'Envelope', value: 'Aerograde alloy' },
      { label: 'Deck span', value: '11.4 m' },
      { label: 'Glazing', value: 'Electrochromic' },
      { label: 'Water', value: 'Atmospheric' },
    ],
  },
  {
    id: 'monolith-x',
    index: 'Pod 02',
    name: 'Monolith-X',
    typology: 'High-Altitude Haven',
    area: '280 m²',
    description:
      'A sealed thermal monolith for sub-zero altitudes, wrapped in a photovoltaic skin and decoupled from seismic ground movement.',
    features: [
      'Sub-zero thermal envelope',
      'Integrated photovoltaic skin',
      'Seismic decoupling base',
    ],
    specs: [
      { label: 'Envelope', value: 'Aerograde alloy' },
      { label: 'Thermal', value: '−40°C rated' },
      { label: 'Power', value: 'PV skin' },
      { label: 'Base', value: 'Seismic decoupled' },
    ],
  },
];
