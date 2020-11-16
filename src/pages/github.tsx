import * as React from 'react';

type Repo = {
  id: number;
  name: string;
  language?: string;
  html_url: string;
  fork: boolean;
};

type Props = {
  repos: Repo[];
};

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/paveg/repos?per_page=15&sort=pushed');
  const json = await res.json();

  return {
    props: {
      repos: json,
    },
  };
}

function GitHub({ repos }: Props) {
  if (!repos) return <>Repository not found</>;
  const notForkedRepos = repos.filter((repo) => repo.fork === false);
  return (
    <>
      {notForkedRepos.map((repo: Repo) => (
        <div key={`repo-${repo.id}`}>
          name: <a href={repo.html_url}>{repo.name}</a> | language: {repo.language}
          <br />
        </div>
      ))}
    </>
  );
}

export default GitHub;
