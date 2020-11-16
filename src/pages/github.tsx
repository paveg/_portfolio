import * as React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { GoogleColor } from '../lib/color';

type Repo = {
  id: number;
  name: string;
  description?: string;
  language?: string;
  html_url: string;
  fork: boolean;
};

type Language = {
  [key: string]: number;
};

type Props = {
  repos: Repo[];
  languages: Language[];
};

// switch your props development or production.
async function fetchApiData() {
  const debugMode = Boolean(process.env.NEXT_PUBLIC_PORTFOLIO_DEBUG);
  let repos: Repo[];
  let languages: Language[];

  if (debugMode) {
    repos = [
      {
        id: 1,
        name: 'test',
        description: 'test',
        language: 'TypeScript',
        html_url: 'http://example.com',
        fork: false,
      },
    ];
    languages = [
      { typescript: 100, javascript: 20 },
      { typescript: 100, javascript: 20, Go: 500 },
    ];
  } else {
    const res = await fetch('https://api.github.com/users/paveg/repos?per_page=30&sort=pushed');
    repos = await res.json();

    if (!repos) repos = [];
    const notForkedRepos = repos.filter((repo) => repo.fork === false);

    languages = await Promise.all(
      notForkedRepos.map(async (repo) => {
        const response = await fetch(`https://api.github.com/repos/paveg/${repo.name}/languages`);
        const language = await response.json();
        return language;
      }),
    );
  }
  return {
    props: {
      repos,
      languages,
    },
  };
}

export async function getStaticProps() {
  return fetchApiData();
}

function GitHub({ repos, languages }: Props) {
  const sumLanguages: Language = {};

  languages.forEach((language) => {
    Object.keys(language).forEach((key) => {
      if (sumLanguages[key]) {
        sumLanguages[key] += language[key];
      } else {
        sumLanguages[key] = language[key];
      }
    });
  });

  const data = {
    labels: Object.keys(sumLanguages),
    datasets: [
      {
        backgroundColor: GoogleColor.blue,
        label: 'コードをプッシュしたリポジトリの言語分布',
        data: Object.values(sumLanguages),
      },
    ],
  };
  return (
    <>
      <HorizontalBar data={data} />
      {repos.map((repo: Repo) => (
        <div key={`repo-${repo.id}`}>
          name: <a href={repo.html_url}>{repo.name}</a> | language: {repo.language}
          <br />
        </div>
      ))}
    </>
  );
}

export default GitHub;
