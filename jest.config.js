module.exports = {
  rootDir: '.',
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/test/unit/(.*|\\.|/)(__Test|__Spec))\\.tsx?$',
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/unit/__mocks__/fileMock.ts',
    '\\.(css|scss)$': '<rootDir>/test/unit/__mocks__/styleMock.ts',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: false,
  collectCoverageFrom: ['**/src/**/*.{ts|tsx}'],
  setupTestFrameworkScriptFile: '<rootDir>/test/unit/setupEnzyme.ts',
};
