module.exports = {
  rootDir: '.',
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/test/(.*|\\.|/)(__Test|__Spec))\\.tsx?$',
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: false,
  collectCoverageFrom: ['**/src/**/*.{ts|tsx}'],
};
