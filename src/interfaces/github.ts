export type LanguagesByte = {
  [key: string]: number;
};

export type Repo = {
  id: number;
  name: string;
  description?: string;
  language?: string;
  html_url: string;
  fork: boolean;
};

export const SampleRepos = [
  {
    id: 1,
    name: 'test',
    description: 'test',
    language: 'TypeScript',
    html_url: 'http://example.com',
    fork: false,
  },
];

export const SampleLanguagesByte = [
  { typescript: 100, javascript: 20 },
  { typescript: 100, javascript: 20, Go: 500 },
];
