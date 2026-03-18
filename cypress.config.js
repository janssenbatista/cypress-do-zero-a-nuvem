const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportHeight: 600,
  viewportWidth: 800,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
