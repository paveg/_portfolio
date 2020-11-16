import * as React from 'react';
import * as PropTypes from 'prop-types';
import { HorizontalBar } from 'react-chartjs-2';
import styled from 'styled-components';
import { LanguagesByte } from '../interfaces/github';
import Color, { GoogleColor } from '../lib/color';

type Props = {
  languagesByteData: LanguagesByte[];
};

function organizeData(data: LanguagesByte[]): LanguagesByte {
  const organized: LanguagesByte = {};

  data.forEach((languageByte: LanguagesByte) => {
    Object.keys(languageByte).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(languageByte, key)) {
        if (organized[key]) {
          organized[key] += languageByte[key];
        } else {
          organized[key] = languageByte[key];
        }
      }
    });
  });

  return organized;
}

const BarOption = { responsive: true, maintainAspectRatio: false };
const Wrapper = styled.div`
  padding: 20px;
  color: ${Color.black};
  background-color: ${Color.white};
`;

const RepositoryBar: React.FC<Props> = ({ languagesByteData }) => {
  const organized = organizeData(languagesByteData);
  const data = {
    labels: Object.keys(organized),
    datasets: [
      {
        backgroundColor: GoogleColor.blue,
        label: 'コードをプッシュしたリポジトリの言語分布',
        data: Object.values(organized),
      },
    ],
  };

  return (
    <Wrapper>
      <h3>Skills</h3>
      <HorizontalBar data={data} options={BarOption} />
    </Wrapper>
  );
};

RepositoryBar.propTypes = {
  languagesByteData: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default RepositoryBar;
