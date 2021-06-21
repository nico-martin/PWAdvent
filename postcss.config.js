const path = require('path');

module.exports = {
  plugins: [
    [
      'postcss-mixins',
      {
        mixinsDir: path.join(__dirname, 'styles/mixins'),
      },
    ],
    'autoprefixer',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': true,
          'nesting-rules': true,
        },
      },
    ],
  ],
};
