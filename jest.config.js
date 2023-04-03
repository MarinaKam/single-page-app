module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  testEnvironment: 'jsdom',
  resetMocks: false,
  testTimeout: 30000,
  coverageThreshold: {
    global: {
      branches: 38,
      functions: 40,
      lines: 55,
      statements: 55,
    },
  },
  setupFiles: ['jest-canvas-mock']
};
