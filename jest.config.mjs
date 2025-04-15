import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

export default createJestConfig({
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
});
