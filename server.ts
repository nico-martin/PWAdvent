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

spaServer({
  routes: [
    {
      path: '/',
      response: request => ({
        metas: {
          title: `${app.title} 🎅 ${app.description}`,
          description: app.about,
        },
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
            title: `${respJson.title} 🎅 ${app.title}`,
            description: respJson.excerpt,
          };
        } catch (error) {
          statusCode = 404;
          metas = {
            title: `Error 404 🎅 ${app.title}`,
          };
        }
        return {
          metas,
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
              title: `${app.title} 🎅 ${app.description}`,
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
            title: `${respJson.title} 🎅 ${app.title}`,
            description: respJson.excerpt,
          };
        } catch (error) {
          statusCode = 404;
          metas = {
            title: `Error 404 🎅 ${app.title}`,
          };
        }
        return {
          metas,
          statusCode,
        };
      },
    },
  ],
  port: parseInt(process.env.PORT) || 8080,
  indexFile: 'index-serve.html',
  serveDir: 'dist/',
  logLevel: 'ERROR',
});
