import * as React from 'react';
import { NextPageContext } from 'next';

const RobotsTxt: React.FC = () => {
  return null;
};

export async function getServerSideProps({ res }: NextPageContext) {
  res!.setHeader('content-type', 'text/plain');
  res!.write('User-agent: *\n');
  // res!.write('Disallow: /api/\n');
  res!.write(`Sitemap: ${process.env.SITE_URL}/sitemap.xml\n`);
  res!.end();

  return;
}

export default RobotsTxt;
