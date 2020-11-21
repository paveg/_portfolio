import * as React from 'react';
import { NextPageContext } from 'next';
import * as xmljs from 'xml-js';

const DEFAULT_LOCALE = 'ja-JP';
const LOCALES = ['en-US', 'ja-JP'];

const SitemapXml: React.FC = () => {
  return null;
};

export async function getServerSideProps({ res }: NextPageContext) {
  const siteUrl = process.env.SITE_URL;
  const xml = xmljs.js2xml(
    {
      _declaration: {
        _attributes: {
          version: '1.0',
          encoding: 'utf-8',
        },
      },
      urlset: {
        _attributes: {
          xmlns: 'http://www.sitemap.org/schemas/sitemap/0.9',
        },
        url: [
          ...LOCALES.map((locale) => ({
            loc: {
              _text: escape(`${siteUrl}/${locale === DEFAULT_LOCALE ? '' : `?hl=${locale}`}`),
            },
            lastmod: {
              _text: new Date().toISOString(),
            },
            changefreq: {
              _text: 'weekly',
            },
            priority: {
              _text: 0.5,
            },
          })),
        ],
      },
    },
    { compact: true },
  );

  res!.setHeader('content-type', 'application/xml');
  res!.write(xml);
  res!.end();

  return;
}

function escape(text: string): string {
  return text
    .replace('&', '&amp')
    .replace("'", '&apos')
    .replace('"', '&quot')
    .replace('>', '&gt')
    .replace('<', '&lt');
}

export default SitemapXml;
