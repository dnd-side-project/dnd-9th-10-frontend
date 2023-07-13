module.exports = {
  root: true,
  extends: ["@bbl/eslint-config"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
