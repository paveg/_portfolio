import * as React from 'react';
import * as PropTypes from 'prop-types';
import { HorizontalBar, Radar } from 'react-chartjs-2';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { LanguagesByte, Repo } from '../interfaces/github';
import Color, { GoogleColor } from '../lib/color';

type Props = {
  languagesByteData: LanguagesByte[];
  repos: Repo[];
};

function organizeData(data: LanguagesByte[]): LanguagesByte {
  return data.reduce((acc, value) => {
    Object.keys(value).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        if (acc[key]) {
          acc[key] += value[key];
        } else {
          acc[key] = value[key];
        }
      }
    });
    return acc;
  }, {});
}

const Wrapper = styled.div`
  padding: 20px 0px;
  color: ${Color.black};
  background-color: ${Color.white};
`;

const BarOption = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const RadarOption = {
  responsive: true,
  maintainAspectRatio: false,
  scale: {
    display: true,
    ticks: {
      min: 3,
      max: 5,
    },
  },
};

const radarDataSets = {
  要求分析: 4.0,
  設計: 4.0,
  コーディング: 4.3,
  テスト: 4.6,
  ドキュメンテーション: 4.5,
};

const RepositoryBar: React.FC<Props> = ({ repos, languagesByteData }) => {
  const organized = organizeData(languagesByteData);
  const dataLabels = Object.keys(organized);
  const dataValues = Object.values(organized);
  const data = {
    labels: dataLabels,
    datasets: [
      {
        minBarLength: 10,
        backgroundColor: GoogleColor.blue,
        label: '最近関わったリポジトリの言語分布（byte）',
        data: dataValues,
      },
    ],
  };

  return (
    <Wrapper>
      <Container>
        <h3>My Skills</h3>
        <Grid container justify="space-around" alignItems="baseline">
          <Grid item spacing={1}>
            <HorizontalBar data={data} options={BarOption} />
          </Grid>
          <Grid item spacing={1}>
            <Radar
              data={{
                labels: Object.keys(radarDataSets),
                datasets: [
                  {
                    label: 'スキルマップ',
                    backgroundColor: GoogleColor.yellow,
                    data: Object.values(radarDataSets),
                  },
                ],
              }}
              options={RadarOption}
            />
          </Grid>
        </Grid>
        <h4>Repositories</h4>
        <br />
        {repos.slice(0, 5).map((repo: Repo) => (
          <div key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a> | {repo.description}
          </div>
        ))}
      </Container>
    </Wrapper>
  );
};

RepositoryBar.propTypes = {
  languagesByteData: PropTypes.arrayOf(PropTypes.any).isRequired,
  repos: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default RepositoryBar;
