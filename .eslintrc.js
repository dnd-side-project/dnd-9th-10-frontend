/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@dnd9-10/eslint-config"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
