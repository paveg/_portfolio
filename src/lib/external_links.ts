const ExternalLinks = {
  twitter: 'https://twitter.com/_pavlog',
  facebook: 'https://www.facebook.com/ryota.ikezawa.5',
  linkedin: 'https://www.linkedin.com/in/xpav/',
  github: 'https://github.com/paveg',
};

export const openExternal = (url) => {
  return () => window.open(url);
};

export default ExternalLinks;
