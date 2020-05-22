module.exports = (api) => {
  api.cache(true);

  const presets = ['@babel/env', '@babel/preset-react'];

  return {
    presets,
  };
};
