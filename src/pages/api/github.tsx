import fetch from 'isomorphic-unfetch';

const rateLimitMessage = 'rate limit exceeded';
export default async (_, res) => {
  const result = await fetch('https://api.github.com/users/paveg/repos?per_page=15&sort=pushed');

  if (result.status === 403 && result.statusText === rateLimitMessage) {
    res.status(403).send(`GitHub api ${rateLimitMessage}`);
  } else {
    const response = await result.json();
    res.status(200).json({ repos: response });
  }
};
