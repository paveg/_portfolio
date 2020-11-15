import * as React from 'react';
import fetch from 'node-fetch';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/paveg/repos?per_page=15&sort=pushed');
  const json = await res.json();

  return {
    props: {
      repos: json.repos,
    },
  };
};

function GitHub({ repos }: InferGetStaticPropsType<typeof getStaticProps>) {
  const notForkedRepos = repos.filter((repo) => repo.fork === false);
  return (
    <>
      {notForkedRepos.map((repo: any) => (
        <div key={`repo-${repo.id}`}>
          name: <a href={repo.html_url}>{repo.name}</a> | language: {repo.language}
          <br />
        </div>
      ))}
    </>
  );
}

export default GitHub;
