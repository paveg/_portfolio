import * as React from 'react';
import * as PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { LanguagesByte, Repo, SampleLanguagesByte, SampleRepos } from '../interfaces/github';

const RepositoryBar = loadable(() => import('../components/repository_bar'));
const MainContainer = loadable(() => import('../layouts/main_container'));
const SideContent = loadable(() => import('../layouts/side_content'));

type Props = {
  repos: Repo[];
  languages: LanguagesByte[];
};

const Index: React.FC<Props> = ({ repos, languages }) => (
  <>
    <MainContainer
      side={<SideContent />}
      main={<RepositoryBar repos={repos} languagesByteData={languages} />}
    />
  </>
);

export async function getStaticProps() {
  const debugMode = Boolean(process.env.NEXT_PUBLIC_PORTFOLIO_DEBUG);
  let repos: Repo[];
  let languages: LanguagesByte[];

  if (debugMode) {
    repos = SampleRepos;
    languages = SampleLanguagesByte;
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

Index.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.any).isRequired,
  languages: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Index;
