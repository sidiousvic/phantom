module.exports = {
  modulePaths: ["<rootDir>"],
  clearMocks: true,
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  // ignore types.test.ts—tsc
  testPathIgnorePatterns: ["/node_modules/", "/utils/", "/spec/types.test.ts"],
  verbose: true,
};
