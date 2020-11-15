import * as React from 'react';
import useSWR from 'swr';

const Test: React.FC = () => {
  const { data, error } = useSWR('/api/github');

  if (error) return <div>error occurred {data}</div>;
  if (!data) return <div>data lost...</div>;

  const repos = data.repos;
  const notForkedRepos = repos.filter((repo) => repo.fork == false);
  return (
    <>
      {notForkedRepos.map((repo: any, index: number) => {
        return (
          <div key={`repo-${index}`}>
            name: <a href={repo.html_url}>{repo.name}</a> | language: {repo.language}
            <br />
          </div>
        );
      })}
    </>
  );
};

export default Test;
