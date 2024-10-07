// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const swcConfig = JSON.parse(
  fs.readFileSync('.swcrc.test', 'utf-8')
);

module.exports = {
  roots: [ '<rootDir>/tests' ],
  transform: {
    '^.+\\.[tj]sx?$': [ '@swc/jest', swcConfig ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!@novalib)',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/infrastructure/repositories/**/*.repository.{ts,js}',
    '!src/infrastructure/controllers/**/*.controller.{ts,js}',
  ],
  reporters: [ 'default', [ 'jest-junit', { outputDirectory: './coverage' } ] ],
  setupFiles: [ '<rootDir>/tests/test.setup.ts' ],
  snapshotFormat: {
    printBasicPrototype: true,
  },
};
