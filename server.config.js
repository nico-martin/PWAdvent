export default {
  routes: [
    {
      path: '/',
      response: request => ({
        metas: {
          title: 'HELLO WORLD',
          hello: 'world',
        },
      }),
    },
    {
      path: '/day/:id/',
      response: request => ({
        metas: {
          title: 'id' in request.params ? request.params.id : '',
          hello: 'world',
        },
      }),
    },
    {
      path: '/:page/:slug?/',
      response: request => ({
        metas: {
          title: 'id' in request.params ? request.params.id : '',
        },
      }),
    },
  ],
  port: 3001, // default 8080
  indexFile: 'index-serve.html',
  serveDir: 'dist/',
  logLevel: 'ERROR',
};
