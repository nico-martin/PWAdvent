import app from './app.json';

require('dotenv').config();

import spaServer from '@nico-martin/spa-server';
import fetch from 'node-fetch';

const apiBase = process.env.API_BASE || 'https://api.pwadvent.dev/';
const apiKey = process.env.API_KEY || false;
const dayUrl = day =>
  `${apiBase}wp-json/advent-calendar/v1/days/${day}/${
    apiKey ? `?apiKey=${apiKey}` : ''
  }`;

const pageUrl = slug => `${apiBase}wp-json/advent-calendar/v1/page/${slug}/`;
const imageTwitter =
  'https://api.pwadvent.dev/wp-content/uploads/2020/11/twitter-1.jpg';
const imageOg =
  'https://api.pwadvent.dev/wp-content/uploads/2020/11/facebook-1.jpg';

const usePropery = (name, content) => ({
  tag: 'meta',
  attributes: {
    property: name,
    content,
  },
});

const defaultMetas = {
  title: `${app.title} ❄ ${app.description}`,
  description: app.about,
  'og:image': usePropery('og:image', imageOg),
  'og:title': usePropery('og:title', `${app.title} ❄ ${app.description}`),
  'og:description': usePropery('og:description', app.about),
  'og:locale': usePropery('og:locale', 'en_US'),
  'og:type': usePropery('og:type', 'website'),
  'twitter:title': `${app.title} ❄ ${app.description}`,
  'twitter:description': app.about,
  'twitter:image': imageTwitter,
  'twitter:card': 'summary_large_image',
};

const getMetas = metas => ({
  ...defaultMetas,
  ...metas,
  ...(!('og:title' in metas) && 'title' in metas
    ? { 'og:title': usePropery('og:title', metas.title) }
    : {}),
  ...(!('og:description' in metas) && 'description' in metas
    ? { 'og:description': usePropery('og:description', metas.description) }
    : {}),
  ...(!('twitter:title' in metas) && 'title' in metas
    ? { 'twitter:title': metas.title }
    : {}),
  ...(!('twitter:description' in metas) && 'description' in metas
    ? { 'twitter:description': metas.description }
    : {}),
});

spaServer({
  routes: [
    {
      path: '/',
      response: request => ({
        metas: defaultMetas,
      }),
    },
    {
      path: '/day/:id/',
      response: async request => {
        let metas = {};
        let statusCode = 200;
        try {
          // @ts-ignore
          const resp = await fetch(dayUrl(request.params.id));
          if (!resp.ok) {
            throw new Error('Fetch failed');
          }
          const respJson = await resp.json();

          metas = {
            title: `${respJson.title} ❄ ${app.title}`,
            description: respJson.excerpt,
            ...(respJson.previewImages.facebook
              ? {
                  'og:image': usePropery(
                    'og:image',
                    respJson.previewImages.facebook
                  ),
                }
              : {}),
            ...(respJson.previewImages.twitter
              ? { 'twitter:image': respJson.previewImages.twitter }
              : {}),
          };
          if (respJson.source) {
            metas['canonical'] = {
              tag: 'link',
              attributes: {
                rel: 'canonical',
                href: respJson.source,
              },
            };
          }
        } catch (error) {
          statusCode = 404;
          metas = {
            title: `Error 404 ❄ ${app.title}`,
          };
        }
        return {
          metas: getMetas(metas),
          statusCode,
        };
      },
    },
    {
      path: '/:page/:slug?/',
      response: async request => {
        let metas = {};
        let statusCode = 200;
        // @ts-ignore
        if (request.params.page === 'email-notification') {
          return {
            metas: {
              title: `${app.title} ❄ ${app.description}`,
              description: app.about,
            },
          };
        }

        try {
          // @ts-ignore
          const resp = await fetch(pageUrl(request.params.slug));
          if (!resp.ok) {
            throw new Error('Fetch failed');
          }
          const respJson = await resp.json();
          metas = {
            title: `${respJson.title} ❄ ${app.title}`,
            description: respJson.excerpt,
          };
        } catch (error) {
          statusCode = 404;
          metas = {
            title: `Error 404 ❄ ${app.title}`,
          };
        }
        return {
          metas: getMetas(metas),
          statusCode,
        };
      },
    },
  ],
  port: parseInt(process.env.PORT) || 80,
  indexFile: 'index-serve.html',
  serveDir: 'dist/',
  //logLevel: 'DEBUG',
  logLevel: 'ERROR',
});
