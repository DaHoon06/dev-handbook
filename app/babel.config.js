module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@src': './src/',
            '@screen': './src/screen/',
            '@lib': './src/libs/',
            '@asset': './src/assets/',
          }
        }
      ]
    ]
  };
};
