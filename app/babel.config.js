module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        'module-resolver',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
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
