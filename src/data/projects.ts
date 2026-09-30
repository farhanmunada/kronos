export interface Project {
  id: string;
  index: string;
  title: string;
  location: string;
  year: string;
  description: string;
  metadata: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 'volcanic-atrium',
    index: 'Project 01',
    title: 'The Volcanic Atrium',
    location: 'Merapi Foothills',
    year: '2024',
    description:
      'A central atrium carved between two pod clusters, sheltering a courtyard garden from volcanic ash fall while harvesting geothermal warmth.',
    metadata: [
      { label: 'Site', value: '1.8 ha' },
      { label: 'Assembly', value: '9 days' },
      { label: 'Energy', value: '96% off-grid' },
    ],
  },
  {
    id: 'fjall-sanctuary',
    index: 'Project 02',
    title: 'Fjäll Sanctuary',
    location: 'Nordic Tundra',
    year: '2023',
    description:
      'A low-profile sanctuary anchored on the permafrost line, its photovoltaic skin angled to the low arctic sun and sealed against perpetual wind.',
    metadata: [
      { label: 'Site', value: '3.2 ha' },
      { label: 'Assembly', value: '11 days' },
      { label: 'Energy', value: '100% off-grid' },
    ],
  },
];
