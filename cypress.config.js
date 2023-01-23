const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dqi3x1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
