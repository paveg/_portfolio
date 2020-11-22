import * as React from 'react';
import { HorizontalBar, Radar } from 'react-chartjs-2';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ListItemText from '@material-ui/core/ListItemText';
import Color, { GoogleColor } from '../lib/color';
import { LanguagesByte, Repo } from '../interfaces/github';

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

const skills = [
  'Next.js',
  'Ruby On Rails',
  'Docker',
  'Kubernetes',
  'AWS',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'React.js',
  'API',
  'Oauth',
  'Selenium',
  'Swagger',
  'Nginx',
];

const tools = [
  'Git',
  'Slack',
  'JIRA',
  'Trello',
  'Facebook workplace',
  'Mackerel',
  'Datadog',
  'Sendgrid',
  'CircleCI',
  'GitHub Actions',
  'Azure Pipelines',
  'Bugsnag',
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));
const RepositoryBar: React.FC<Props> = ({ repos, languagesByteData }) => {
  const classes = useStyles();
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
        <Typography variant="h4">About me</Typography>
        <Divider />
        <Box m={2}>
          <Typography variant="h5">Skills</Typography>
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
          <Box p={2}>
            <div className={classes.root}>
              {shuffle(skills.concat(tools)).map((skill) => (
                <Chip key={skill} variant="outlined" color="secondary" size="small" label={skill} />
              ))}
            </div>
          </Box>
        </Box>
        <Box m={2}>
          <Typography variant="h5">Career</Typography>
          <Divider />
          <Typography variant="body2" paragraph>
            work in progress...
          </Typography>
        </Box>
        <Box m={2}>
          <Typography variant="h5">GitHub Repositories</Typography>
          <Divider />
          <List component="nav" aria-label="github-repository">
            {repos.slice(0, 5).map((repo: Repo) => (
              <ListItem button component="a" key={repo.id} href={repo.html_url}>
                <ListItemText primary={repo.name} secondary={repo.description} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Wrapper>
  );
};

function shuffle<T>(array: T[]) {
  const out = Array.from(array);
  for (let i = out.length - 1; i > 0; i -= 1) {
    const r = Math.floor(Math.random() * (i + 1));
    const tmp = out[i];
    out[i] = out[r];
    out[r] = tmp;
  }
  return out;
}

export default RepositoryBar;
