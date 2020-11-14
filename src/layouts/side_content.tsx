import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExternalLinks, { openExternal } from '../lib/external_links';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const Wrapper = styled.div`
  padding: 4em 4em 6em;
`;

const SideContent: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Avatar
          className={classes.large}
          alt="profile"
          src="./profile.jpeg"
          style={{
            margin: 'auto',
          }}
        />
        <h2>Ryota Ikezawa</h2>
        <p>Web Developer at freee K.K.</p>
      </Container>
      <Wrapper>
        <IconButton onClick={openExternal(ExternalLinks.twitter)}>
          <TwitterIcon />
        </IconButton>
        <IconButton onClick={openExternal(ExternalLinks.github)}>
          <GitHubIcon />
        </IconButton>
        <IconButton onClick={openExternal(ExternalLinks.facebook)}>
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="Linkedin.com" onClick={openExternal(ExternalLinks.linkedin)}>
          <LinkedInIcon />
        </IconButton>
      </Wrapper>
    </>
  );
};

export default SideContent;
