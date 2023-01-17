const swcConfig = {
  sourceMaps: true,
  module: {
    type: 'commonjs',
  },
  jsc: {
    parser: {
      syntax: 'typescript',
    },
  },
};

module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', swcConfig],
  },
};
