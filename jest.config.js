const {defaults: tsjPreset} = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transformIgnorePatterns: [],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$'],
  cacheDirectory: '.jest/cache',
};
