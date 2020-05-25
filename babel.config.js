module.exports = (api) => {
  api.cache(true);

  const presets = ['@babel/env', '@babel/preset-react', '@babel/preset-typescript'];

  return {
     presets,
  };
};
