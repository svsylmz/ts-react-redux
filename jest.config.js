module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/styles/__mocks__/styleMock.js",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/store/(.*)$": "<rootDir>/store/$1",
    "^@/features/(.*)$": "<rootDir>/features/$1",
    "^@/helpers/(.*)$": "<rootDir>/helpers/$1",
    "^@/interfaces/(.*)$": "<rootDir>/interfaces/$1",
  },
};
