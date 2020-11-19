import * as React from 'react';
import loadable from '@loadable/component';
import styled from 'styled-components';
// material-ui
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Divider from '@material-ui/core/Divider';
import ExternalLinks, { openExternal } from '../lib/external_links';

const Footer = loadable(() => import('./footer'));

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const PaddingWrapper = styled.div`
  min-width: 200px;
  padding: 3em 2em 0em 2em;
`;

const PaddingContainer = styled(Container)`
  padding: 2em 0em;
`;

const StyledAvatar = styled(Avatar)`
  margin: auto;
`;

const SideContent: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <PaddingContainer>
        <StyledAvatar className={classes.large} alt="profile" src="profile.jpg" />
        <br />
        <h2 style={{ fontWeight: 'bold' }}>Ryota Ikezawa</h2>
        <p>Web Developer at freee K.K.</p>
        <PaddingWrapper>
          <IconButton aria-label="twitter.com" onClick={openExternal(ExternalLinks.twitter)}>
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="github.com" onClick={openExternal(ExternalLinks.github)}>
            <GitHubIcon />
          </IconButton>
          <IconButton aria-label="facebook.com" onClick={openExternal(ExternalLinks.facebook)}>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="linkedin.com" onClick={openExternal(ExternalLinks.linkedin)}>
            <LinkedInIcon />
          </IconButton>
        </PaddingWrapper>
        <Divider />
        <Footer />
      </PaddingContainer>
    </>
  );
};

export default SideContent;
