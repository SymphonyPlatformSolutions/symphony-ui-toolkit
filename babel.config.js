module.exports = api => {
  api.cache(true);

  const presets = [
    '@babel/preset-typescript',
    '@babel/preset-react',
    '@babel/env'
  ];

  return {
    presets,
    plugins: ['transform-class-properties', '@babel/plugin-transform-runtime']
  };
};
